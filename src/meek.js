/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Meek
 *
 * @summary Tabulate RCV / STV per prfound.org's Meek's method.
 */

import {UBF} from "./util_basic.js";
import K from "./constants.js";
import Results from "./results.js";
import {MeekValueError, MeekImplementationError}
      from "./errors.js";
import {Status} from './status.js';
import {Validator} from './validate.js';
import {Progress} from './progress.js';

// with TYPETREE, force override of default ballotTree option:
//   0 = no override,
//   1 = no tree, list of lists,
//   2 = static tree,
//   3 = dynamic tree
const TYPETREE = 0;

/**
 * Tabulate an RCV / STV contest per prfound.org's Meek's method.
 *
 * This is a convenience function for accessing the `Tabulation` class.
 *
 * Create an instance of the `Tabulation` class, using the supplied
 * arguments, then call the instance's `tabulate()` method,
 * returning the results from that method.
 *
 * Arguments
 * ---------
 * The same as the constructor method of the `Tabulation` class.
 *
 * Returns
 * -------
 * The same as the `tabulate()` method of the `Tabulation` class.
 *
 * Throws
 * ------
 * The same as the `tabulate()` method of the `Tabulation` class.
 *
 */
export function tabulate(nbrSeatsToFill, candidates, ballots,
      maxRankingLevels, tieBreaker, excluded, protectedzz, options={},
      progressCallback=null) {
  return new Tabulation(nbrSeatsToFill, candidates, ballots,
      maxRankingLevels, tieBreaker, excluded, protectedzz, options,
      progressCallback
      ).tabulate();
}

/**
 * The nodes of a ballot tree.
 *
 * A node represents a candidate Id for a candidate or a tabulation
 * category for exhausted votes (such as overvotes, abstentions, or
 * other exhausted votes), or a node can be the root of the ballot tree
 * which does not represent any of those other things.
 */
class RankingNode {
  /**
   * @param {string} name - The candidate Id of the candidate that the
   *   node represents, a tabulation category label, or ':root' for the
   *   root node.
   */
  constructor(name) {
    /** The name of the node, as given by the constructor parameter.
     * @type {string} */
    this.name = name;
    /** The number of ballots represented by the node, an integer.
     * @type {number} */
    this.ballotCount = 0;
    /** A data object of the node's children, if any,
     *    keyed by child name
     *    and values being the child nodes.
     * @type {Object} */
    this.children = {};
    /** The number of children for this node.
     * @type {number} */
    this.nbrChildren = 0;
  }
}

/** A collection of statistics for building and using a ballot tree.
 *
 *  Supports accumulating counts and elapsed times from one instance
 *  into another.
 */
class NodeStats {
  /**
   * @param {string} label - A descriptive name for the use of this
   *   instance.
   */
  constructor(label) {
    /** A descriptive name for the use of this instance.
     * @type {string} */
    this.label = label;
    /** The number of nodes in the tree or in a subtree.
     * @type {number} */
    this.nbrNodes = 0;
    /** The number of nodes leaves in the tree or in a subtree.
     * @type {number} */
    this.nbrLeaves = 0;
    /** The number of visits to nodes during a process.
     * @type {number} */
    this.nbrVisited = 0;
    /** The number of rounds tabulated while stats were gathered.
     * @type {number} */
    this.nbrRounds = 0;
    /** The number of iterations tabulated while stats were gathered.
     * @type {number} */
    this.nbrIterations = 0;
    /** The number of nodes added to a tree during a process.
     * @type {number} */
    this.nbrAdded = 0;
    /** The number of nodes deleted from a tree during a process.
     * @type {number} */
    this.nbrDeleted = 0;
    /** The amount of elapsed wall time during a process.
     * @type {number} */
    this.elapsedTime = 0;
    /** The start wall time for a process.
     * @type {number} */
    this.startTime = Date.now();
  }

  /** Converts the stats to a human-readable string that can be printed.
   * @return {string} A human-readable string showing the stats. */
  toString() {
    const result = String(this.label)+': nodes='+this.nbrNodes+
          ' leaves='+this.nbrLeaves+' visited='+this.nbrVisited+
          ' rounds='+this.nbrRounds+' iterations='+this.nbrIterations+
          ' added='+this.nbrAdded+' deleted='+this.nbrDeleted+
          ' elapsed='+this.elapsedTime.toFixed(3);
    return result;
  }

  /** Accumulate the counts, etc. from another NodeStats instance
   * into this one.
   * @param {NodeStats} other - Statistics to add to this. */
  add(other) {
    if (!(other instanceof NodeStats)) {
      return;
    }
    this.nbrNodes += other.nbrNodes;
    this.nbrLeaves += other.nbrLeaves;
    this.nbrVisited += other.nbrVisited;
    this.nbrRounds += other.nbrRounds;
    this.nbrIterations += other.nbrIterations;
    this.nbrAdded += other.nbrAdded;
    this.nbrDeleted += other.nbrDeleted;
    this.elapsedTime += other.elapsedTime;
    return;
  }

  /** Record accumulated elapsed time and allow for tracking another
   *    interval of elapsed time.
   * @return {number} The number of seconds of elapsed time in the
   *   most recently concluded interval.
   */
  setElapsedTime() {
    const now = Date.now();
    const moreTime = (now - this.startTime) / 1000;
    this.elapsedTime += moreTime;
    this.startTime = now;
    return moreTime;
  }
}

/**
 * A class for Meek tabulations per prfound.org's reference rule,
 * plus extensions.
 *
 * Implements the tabulation logic for Meek RCV / STV as described at:
 *
 *   https://prfound.org/resources/reference/reference-meek-rule/
 *
 * Typical use of this class is to instantiate it and then run its
 * tabulate() method to get the results.
 *
 * This tabulation class differs from the reference rule for Meek's
 * method, as described by prfound.org in several ways.
 *
 * This tabulation routine accepts ballots that have anomalous
 * ranking patterns, such as duplicate rankings (ranking the same
 * candidate at more than one ranking level), skipped ranking levels,
 * and overvoted ranking levels (more than one candidate ranked at the
 * same ranking level).
 * The prfound.org algorithm is described in terms that implicitly
 * assume that such duplicate rankings and overvoted ranking levels do
 * not exist in the ballots it processes.
 *
 * For a duplicate ranking, this tabulation will consider only the most
 * preferred ranking of a candidate, rankings at less preferred ranking
 * levels for the same candidate are ignored.
 *
 * An empty ranking level, a ranking level without a ranking, is
 * ignored, whether or not less preferred ranking levels do have
 * rankings.
 *
 * An overvoted ranking level causes that ranking level and all less
 * preferred ranking levels to be ignored.
 *
 *
 * Terminology
 * -----------
 *
 * Several arguments or parts of an argument are or can be an ordered
 * collection of string values.
 *
 * An ordered collection of string values may be represented as one of
 * the following:
 *
 *   + an array of strings
 *   + a delimiter-first string, which is a string in which the first
 *     character is the delimiter, followed by the component string
 *     values separated by the delimiter.
 *     The delimiter character may not be part of any of the component
 *     string values.
 *
 * The following Javascript expressions specify equivalent ordered
 * collections of string values:
 *
 * ```
 *  ['A', 'B', '', 'C', '#', 'D']
 *  ' A B  C # D'
 *  '|A|B||C|#|D'
 * ```
 *
 * As a special case, the empty string is considered a delimiter-first
 * string that repreesents the empty array.
 * Also, a delimiter-first string with just one character represents an
 * array with just one empty string in it.
 *
 * Values that use an ordered collection of string values include those
 * for specifying candidates, a tieBreaker, the rankings for a ballot,
 * and certain values for the sub-option 'alternativeDefeats'.
 *
 * Other values require an unordered collection of string values.
 * They are specified as an ordered collection of string values,
 * either as an array of strings or as a delimiter-first string,
 * but the ordering is not significant.
 * This is used for the excluded and protected values.
 *
 */
export class Tabulation {
  /**
   * Initialize a tabulation for a Meek STV contest per prfound.org
   *
   * @param {number} nbrSeatsToFill -
   *   The number of seats to fill, an integer that is at least one.
   *   This is also sometimes referred to as the maximum allowed number
   *   of winners or the number of candidates to elect.
   *
   * @param {string|array<string>} candidates -
   *   An ordered collection of strings, each of which servers as the
   *   unique candidate identifier for its candidate.
   *   A candidate identifier is sometimes referred to as a
   *   a candidate ID, a candId, a candidate name, or a ranking code.
   *   A candidate identifier may not begin with a colon (':'),
   *   may not be the empty string, and may not be the string '#'.
   *
   * @param {array} ballots - An array of ballot groups.
   *
   * A ballot group represents a number of ballots with the same
   * rankings.
   * A ballot group can be specified as an array of length two with
   * the following values:
   *
   * - multiple
   *   A positive integer indicating how many individual ballots are
   *   summarized into this ballot group.
   *
   * - rankings
   *   An ordered collection of strings,
   *   each of which is a candidate identifier or other
   *   ranking code,
   *   ordered from most preferred first to least preferred last.
   *
   *   Other ranking codes are:
   *
   *   - The empty string, indicating an empty ranking level.
   *   - The string '#', indicating an overvote ranking.
   *
   *   A trailing empty ranking does not have to be specified.
   *
   * A ballot group can also be specified with just its rankings,
   * letting its multiple default to 1.
   * The rankings can be specified
   * either as an array of strings or as a delimiter-first string.
   *
   * So the following are equivalent ways of specifying a ballot group
   * that represents just one ballot:
   * ```
   *  [1, ["A", "B", "C"]]
   *  [1, " A B C"]
   *  [1, ">A>B>C"]
   *  ["A", "B", "C"]
   *  " A B C"
   * ```
   * @param {number|null} maxRankingLevels -
   *   The maximum number of candidates that each voter is allowed to
   *   rank on a ballot, i.e. the maximum length of a ballot's rankings,
   *   when expressed as an array.
   *   The value for maxRankingLevels must be null
   *   or an integer that is at least three.
   *   If it is null,
   *   there is no restriction on the length of a ballot's rankings.
   *
   * @param {array<string>|string} tieBreaker -
   *   An ordered collection of candidate identifiers.
   *   Whenever two or more candidates are tied to be defeated,
   *   the tied candidate that is listed earliest in the tieBreaker
   *   is chosen to be defeated,
   *   provided that all of the tied candidates are listed in the
   *   tieBreaker.
   *
   *   The tieBreaker can represent a random ordering of the candidates,
   *   determined by lot.
   *   This is a sufficient tie breaking procedure
   *   that is compatible with the prfound.org reference rule.
   *
   * @param {array<string>|string} excluded -
   *   An unordered collection of candidate identifiers
   *   for those candidates that are excluded (a.k.a. withdrawn)
   *   from the tabulation.
   *   An excluded candidate is not eligible to be elected
   *   or receive votes,
   *   is never a hopeful candidate during the tabulation,
   *   and is designated as defeated before the first round of
   *   tabulation begins.
   *
   * @param {array<string>|string} protectedzz -
   *   An unordered collection of candidate identifiers
   *   that are protected from being defeated
   *   and so are guaranteed of being elected.
   *
   *   A protected candidated is not allowed to also be an excluded
   *   candidate.
   *   The number of protected candidates may not be more than the
   *   number of seats to fill.
   *
   *   Designating protected candidates can be useful for example
   *   when filling a vacancy by retabulating the ballots of a
   *   previous election.
   *
   *   When there are protected candidates,
   *   there are separate quotas for protected candidates and
   *   unprotected candidates,
   *   in order to assure that an excess of unprotected candidates
   *   are not elected.
   *
   *   Protected candidates are elected subject to a protected quota,
   *   which is equal to what the regular quota would otherwise be
   *   if no candidates were protected.
   *   A protected candidate will be elected at the end
   *   of a tabulation if the candidate was not already elected by
   *   reaching the protected quota.
   *
   *   Unprotected candidates are elected subject to a quota that is
   *   typically higher than the regular quota, and declines as
   *   protected candidates increase their non-surplus votes.
   *   If all protected candidates are elected by reaching the
   *   protected quota,
   *   the quota for unprotected candidates reduces to approximately
   *   (allowing for small differences related to rounding and finite
   *   precision arithmetic)
   *   what the regular quota would be if no candidates were
   *   protected.
   *
   *   More specifically, the quota for unprotected candidates
   *   is based on the number seats
   *   that are available to unprotected candidates
   *   and the number of votes
   *   that are counting for
   *   or could be transferred to unprotected candidates,
   *   given the current protected quota.
   *
   *   The number of seats available to unprotected candidates is
   *   the number of seats to be filled by the contest
   *   minus the number of protected candidates.
   *   The number of seats available to unprotected candidates
   *   plus one
   *   is used in the denominator of the quota calculation.
   *
   *   The number of votes used in the numerator
   *   of the unprotected quota calculation
   *   is equal to the number of votes counting for unprotected
   *   candidates
   *   plus the number of surplus votes counting for protected
   *   candidates
   *   (surplus votes in excess of the protected quota).
   *   Votes counting for each protected candidate,
   *   but only up to the protected quota,
   *   are not included in the calculation of the numerator
   *   of the unprotected quota.
   *
   *
   * @param {Object} options -
   * A data object of tabulation options
   * containing zero or more of the following keys and values.
   * For each key and value, the Javascript identifier is shown and its
   * literal string value is shown in parentheses.
   *
   *  __Default value__: an empty object, such as `{ }`, is expanded to
   *  a data object with each option's default value:
   * ~~~
   * {
   *   "always_count_votes": true,
   *   "alternative_defeats": "N",
   *   "type_of_altdefs": "if_no_new_electeds",
   *   "ballot_tree": "dynamic"
   * }
   * ~~~
   *
   * - `alwaysCountVotes` ('always_count_votes')
   *   A boolean value indicating whether to count votes for the
   *   first round even if the number of hopeful candidates is less
   *   than or equal to the number of seats to fill, i.e. all of the
   *   hopeful candidates can be elected regardless of what the
   *   first-round vote totals are or whether any votes are counted.
   *
   *   Allowed values for this option are:
   *
   *   - `yes` (true) : Always count votes for the first round.
   *
   *   - `no` (false) : Do not count votes for any round if winners can
   *     otherwise be determined.
   *
   *   A value of false specifies tabulation behavior that strictly
   *   follows the reference rule.
   *   A value of true provides for an extension
   *   which does not change which candidates are elected
   *   and produces the same vote totals as the reference rule,
   *   except for always producing first-round vote totals.
   *
   *   __Default value__: `yes` (true)
   *
   * - `alternativeDefeats` ('alternative_defeats')
   *   A value indicating whether or in which rounds the option to
   *   perform alternative defeats should be
   *   exercised if they are otherwise allowed.
   *   Alternative defeats are also known as multiple simultaneous
   *   defeats or batch defeats and can involve deferred distribution
   *   of surplus.
   *   The value may be a string or an ordered collection of string
   *   values.
   *
   *   The value for this option may be one of the following
   *   case-insensitive string values,
   *   indicating when to do alternative defeats, if they are
   *   allowed:
   *
   *   - `yes` ('Y') : yes, every round
   *
   *   - `never` ('N') : no, never
   *
   *   The value for this option may also be
   *   an ordered collection of string values,
   *   each string value equal to
   *   one of the values listed above,
   *   one for each round of the tabulation.
   *   Extra values are allowed and are ignored.
   *
   *   Any sequence of round-by-round choices may be replicated with
   *   this kind of value.
   *
   *   __Default value__: `never` ('N')
   *
   *   The reference rule for when alternative defeats are
   *   allowed is designed with the goal that performing
   *   alternative defeats will not change which candidates are elected
   *   compared to defeating at most one candidate per round.
   *   However since Meek's Method only calculates approximations of
   *   an exact solution to a system of equations, there may be
   *   cases where performing alternative defeats produces
   *   a different set of winners.
   *
   * - `typeOfAltDefs` ('type_of_altdefs')
   *   A string value indicating when during a round or iteration
   *   the tabulation should check for multiple simultaneous
   *   defeats,
   *   provided that they are allowed by the 'alternativeDefeats'
   *   option for that round.
   *   Allowed values for this option are:
   *
   *   - `perReferenceRule` ('per_reference_rule')
   *     Check for alternative defeats according to the
   *     reference rule, at the end of step B.2.e,
   *     i.e. when it is assured that at least one more iteration
   *     will be performed for the round.
   *
   *     This option will not check for
   *     alternative defeats for the last iteration of a round.
   *     Some rounds have only one iteration,
   *     and this option will not check for alternative defeats
   *     in such rounds.
   *     For example, a first round which does not elect any
   *     candidates will have only one iteration.
   *
   *   - `beforeSingleDefeats` ('before_single_defeats')
   *     Check for multiple simultaneous defeats
   *     at the beginning of reference rule step B.3,
   *     the step for checking for a single defeat,
   *     after the last iteration for the round has been completed
   *     and there were no candidates elected in the round.
   *
   *   - `ifNoNewElecteds` ('if_no_new_electeds')
   *     Check for multiple simultaneous defeats
   *     in the middle of step B.2.e,
   *     after checking that there are no candidates elected in
   *     the round,
   *     but before checking any conditions for total surplus.
   *
   *     This option combines the effects of `perReferenceRule` and
   *     `beforeSingleDefeats` and will check for alternative defeats
   *     after votes are counted for every iteration,
   *     provided that no candidates have been elected in the round.
   *
   *   __Default value__: `ifNoNewElecteds` ('if_no_new_electeds')
   *
   * - `ballotTree` ('ballot_tree')
   *
   *   This option specifies whether and how to perform some internal
   *   optimizations in how ballots are stored for vote counting.
   *   Storing ballot rankings in a tree structure can significantly
   *   speed up a larger tabulation.
   *   Using a tree structure promotes summarization of earlier rankings
   *   across ballots and ballot groups,
   *   which means an iteration can have fewer pieces of data to look
   *   at and fewer calculations to perform.
   *
   *   Valid values for this option include:
   *
   *   - `dynamic` ('dynamic')
   *
   *     A dynamic balllot tree is typically the fastest option
   *     for larger tabulations.
   *     A dynamic ballot tree maximally summarizes ballot rankings
   *     across ballots and ballot groups,
   *     and it only contains tree nodes that might be needed
   *     during a round.
   *     The tree is adjusted between rounds to maintain its optimal
   *     content and structure.
   *
   *   - `static` ('static')
   *
   *     A static ballot tree is typically the second fastest option
   *     for larger tabulations
   *     and it is often nearly as fast as
   *     using a dynamic ballot tree.
   *     A full ballot tree is built before any rounds are tabulated
   *     and no adjustments are made between rounds.
   *
   *   - `none` ('none')
   *
   *     A ballot tree is not used.
   *     This is typically the slowest option for larger tabulations,
   *     often much slower.
   *     However it is also the simplest approach and most directly
   *     follows the language of the reference rule.
   *
   *   __Default value__: `dynamic` ('dynamic')
   *
   * @param {Progress|function} progressCallback -
   *   Determines whether and how tabulation progress is reported.
   *
   *   The value can be an instance of Progress or a callback function.
   *
   *   If it is a callback function, a new Progress instance is
   *   created using that callback function.
   *
   *   If no value is provided, no progress reporting is performed.
   *
   * @throws {*} Same as for `Tabulation.tabulate()`.
   *
   */
  constructor(nbrSeatsToFill, candidates, ballots,
        maxRankingLevels, tieBreaker, excluded=[], protectedzz=[],
        options={}, progressCallback) {
    try {
      this._nbrSeatsToFill = nbrSeatsToFill;
      this._candidates = candidates;
      this._ballots = ballots;
      this._maxRankingLevels = maxRankingLevels;
      this._tieBreaker = tieBreaker;
      this._excluded = excluded;
      this._protectedzz = protectedzz;
      this._options = options;
      if (progressCallback instanceof Progress) {
        this._progress = progressCallback;
        if (!this._progress.nbrBallotGroups ||
              this._progress.nbrBallotGroups === 1) {
          this._progress.setNbrBallotGroups(Array.isArray(this._ballots) ?
                this._ballots.length : 10);
        }
      } else {
        this._progress = new Progress(progressCallback);
        this._progress.setNbrBallotGroups(Array.isArray(this._ballots) ?
              this._ballots.length : 10);
      }
      const validator = new Validator();
      this._nbrSeatsToFill = validator.nbrSeatsToFill(
            this._nbrSeatsToFill);
      this._candidates = validator.candidates(this._candidates);
      this._maxRankingLevels = validator.maxRankingLevels(
            this._maxRankingLevels);
      this._tieBreaker = validator.tieBreaker(this._tieBreaker,
            this._candidates);
      this._excluded = validator.excluded(this._excluded, this._candidates);
      this._protectedzz = validator.protectedCandidates(this._protectedzz,
            this._candidates, this._excluded, this._nbrSeatsToFill);
      const optionsValidated = validator.options(this._options);
      this._options = {};
      this._options[K.OPTIONS.alternativeDefeats._value] =
            K.OPTIONS.alternativeDefeats.never;
      this._options[K.OPTIONS.typeOfAltDefs._value] =
            K.OPTIONS.typeOfAltDefs.ifNoNewElecteds;
      this._options[K.OPTIONS.alwaysCountVotes._value] =
            K.OPTIONS.alwaysCountVotes.yes;
      this._options[K.OPTIONS.ballotTree._value] =
            K.OPTIONS.ballotTree.dynamic;
      if ([1, 2, 3].indexOf(TYPETREE) >= 0) {
        this._options[K.OPTIONS.ballotTree._value] = [null,
          K.OPTIONS.ballotTree.none,
          K.OPTIONS.ballotTree.static,
          K.OPTIONS.ballotTree.dynamic,
        ][TYPETREE];
      }
      Object.assign(this._options, optionsValidated);
      if (this._options[K.OPTIONS.ballotTree._value] ===
            K.OPTIONS.ballotTree.static) {
        this._progress.useBallotTree();
      }
      if (this._options[K.OPTIONS.ballotTree._value] ===
            K.OPTIONS.ballotTree.dynamic) {
        this._progress.useBallotTree(true);
      }
      this._progress.setNbrOriginalHopefuls(
            this._candidates.length - this._excluded.size);
      this._ballots = validator.ballots(this._ballots,
            this._candidates, this._maxRankingLevels, this._progress);
    }
    catch (exc) {
      console.debug(UBF.describeError(exc));
      if (exc instanceof MeekValueError ||
            exc instanceof MeekImplementationError) {
        throw exc;
      }
      console.error(UBF.describeError(exc));
      if (exc instanceof RangeError ||
             exc instanceof ReferenceError ||
             exc instanceof SyntaxError ||
             exc instanceof TypeError) {
        throw new MeekImplementationError(
              'Likely Meek implementation error:', [], exc);
      }
      throw exc;
    }
  }

  /**
   * Perform a tabulation of an RCV / STV Meek contest.
   *
   * Normally this method is called with no arguments.
   * However to facilitate unit testing,
   * a data object may be provided as way
   * to artificially stop the tabulation
   * at various points in a given round.
   *
   * @param {Object} [kwargs={}] -
   *
   * A data object with zero or more of the following properties.
   *
   * If a property is missing or has a `null` value,
   * the tabulation is not artificially stopped at that point.
   *
   * - 'stopAtBegin'
   *
   *   The number of a round; stop at the beginning of that round,
   *   after checking whether to proceed with the round,
   *   but before doing any iterations.
   *
   * - 'stopAfterStatusUpdate'
   *
   *   The number of a round; stop after all iterations for the round
   *   have completed
   *   and after updates to the vote tally and status
   *   have been made.
   *
   * - 'stopAtEnd'
   *
   *   The number of a round; stop at the end of that round.
   *
   * @return {Results}
   * An instance of Results, which contains the following three members:
   *
   * - `elected`
   *
   *   A set of candidate identifiers for the candidates
   *   that have been elected by the tabulation
   *
   * - `statuses`
   *
   *   A data object keyed by candidate identifier for every candidate,
   *   and with each value a Status instance,
   *   which has the following properties:
   *
   *   - candidate
   *
   *     The candidate's identifier.
   *
   *   - status
   *
   *     A string indicating the candidate's status: 'elected' or
   *     'defeated'.
   *
   *   - nbrRound
   *
   *     The 1-based number of the round for which votes were
   *     calculated when the candidate was elected or defeated;
   *     zero if the candidate was excluded.
   *
   *   - votes
   *
   *     The number of votes the candidate had when elected or
   *     defeated; null if the candidate was excluded.
   *
   *   - keepFactor
   *
   *     The fraction of a ballot's vote weight that counted for
   *     the candidate when votes were last tallied/distributed.
   *
   *   - destiny
   *
   *     An indication of whether the candidate was excluded or
   *     protected or neither, i.e. normal.  This attribute may be
   *     omitted in some formats, including JSON formats, if the
   *     destiny is normal.
   *
   * - `tally`
   *
   *   A data object, keyed by candidate identifiers
   *   and labels for other tabulation categories.
   *   Values are arrays of round-by-round vote totals
   *   or other statistics.
   *
   *   A vote total for the kth round
   *   is accessed with an index of k-1.
   *   A candidate has a vote total only for those rounds
   *   which started with the candidate
   *   as a hopeful or elected candidate.
   *
   *   In addition to candidates, there are vote totals or counts for
   *   all rounds for each of the following keys / tabulation
   *   categories:
   *
   *   - ':Votes for candidates'
   *   - ':Overvotes'
   *   - ':Abstentions'
   *   - ':Other exhausted'
   *   - ':Total votes'
   *   - ':Protected quota
   *   - ':Quota votes
   *   - ':Quota'
   *   - ':Total surplus'
   *   - ':Iterations'
   *
   *   Numbers of votes are returned as Decimal9 instances,
   *   but are typically converted
   *   to Javascript numbers or JSON numbers in other formats.
   *   Counts are returned as Javascript integers.
   *
   *   ':Protected quota' and ':Quota votes' are present
   *   only if there are some protected candidates.
   *
   *   ':Quota votes' identifies the number of votes
   *   used to calculate the ':Quota' for unprotected candidates.
   *   The quota votes amount is equal to
   *   the number of votes counting for unprotected candidates,
   *   plus any surplus votes for protected candidates
   *   (based on the protected quota).
   *
   *   The array for the ':Iterations' key contains integer values,
   *   indicating the number of iterations that were performed for the
   *   round.
   *
   * @throw {Error}
   * The error that can be one of the following types:
   *
   * - MeekValueError
   *
   *   If any values passed to this function or to the `Tabulation()`
   *   constructor do not pass validation checks.
   *
   * - MeekImplementationError
   *
   *   If an inconsistency is detected during the tabulation
   *   that is not attributable to invalid arguments, resource
   *   constraints, resource availability, or other external
   *   interventions.
   *   If this exception type is raised,
   *   it might be because this Javascript package
   *   contains a logic error.
   *
   * - Other exceptions
   *
   *   Other exceptions defined by Javascript and its standard libraries
   *   can be raised,
   *   for example as a result of unavailable or insufficient resources.
   *
   *   This function does not otherwise impose restrictions on the size
   *   of the tabulation,
   *   including the number of seats to be elected, the number of
   *   candidates, the number of ballots or ballot groups, the number
   *   of rankings per ballot, or the length of candidate identifiers.
   *   The size of a tabulation that can be performed is
   *   primarily dependent on the resources of the hardware and software
   *   configuration on which the tabulation runs and the rate of
   *   convergence of Meek's method.
   *
   * The MeekValueError and MeekImplementationError classes are
   * indirectly subclasses of the Error class and neither is a
   * subclass of the other, directly or indirectly.
   *
   */
  tabulate(kwargs={}) {
    let results;
    try {
      this._testing = {'stopAtBegin': null, 'stopAfterStatusUpdate': null,
            'stopAtEnd': null};
      Object.assign(this._testing, kwargs);
      results = this._tabulateMeeks();
    }
    catch (exc) {
      if (exc instanceof MeekValueError ||
            exc instanceof MeekImplementationError) {
        throw exc;
      }
      console.error(UBF.describeError(exc));
      if (exc instanceof RangeError ||
             exc instanceof ReferenceError ||
             exc instanceof SyntaxError ||
             exc instanceof TypeError) {
        throw new MeekImplementationError(
              'Likely Meek implementation error:', [], exc);
      }
      throw exc;
    }
    return results;
  }

  _otherCategories() {
    const result = {};
    K.OTHER_LABELS_LIST.forEach((otherLabel) => {
      if (this._protectedzz.size === 0 &&
            (otherLabel === K.LABEL.protectedQuota ||
            otherLabel === K.LABEL.quotaVotes)) {
        return;
      }
      result[otherLabel] = [];
    });
    return result;
  }

  _tabulateMeeks() {
    /*
    Tabulate a Meek's STV contest.

    This method is for internal use only.
    */
    this._tabulateSetup();
    while (this._processAMeeksRound()) {
      if (this._testing['stopAtEnd'] === this._nbrRound) {
        break;
      }
    }
    this._progress.setRoundProgress(this._nbrRound, this._nbrIteration,
          this._hopeful().size);
    return new Results(this._elected(), this._statuses, this._tallies);
  }

  /* */
  _tabulateSetup() {
    /*
    Create instance values needed for tabulation
    */
    this._nbrRound = 0;
    this._tallies = {};
    this._candidates.forEach((candidate) => {
      this._tallies[candidate] = [];
    });
    this._tallies = Object.assign(this._tallies, this._otherCategories());
    this._nbrUnprotectedSeats = this._nbrSeatsToFill - this._protectedzz.size;
    // Reference rule step A, Initialize Election
    this._statuses = {};
    this._candidates.forEach((candidate) => {
      this._statuses[candidate] = new Status(candidate, null, this._nbrRound,
            undefined, undefined, this._getCandidateDestiny(candidate));
    });
    for (let cstatus in this._statuses) {
      if (this._excluded.has(cstatus)) {
        this._statuses[cstatus].status = K.STATUS.defeated;
      }
    }
    this._omega = K.ULP.times(1000);
    this._keepFactors = {};
    this._candidates.forEach((candidate) => {
      this._keepFactors[candidate] = K.ONE;
    });
    this._maxWellRanked = this._maxRankingLevels === null ?
          this._candidates.length :
          Math.min(this._candidates.length, this._maxRankingLevels);
    this._totalNodeStats = new NodeStats('total')
    this._currentNodeStats = new NodeStats('build ballot tree')
    if (this._options[K.OPTIONS.ballotTree._value] ===
          K.OPTIONS.ballotTree.static) {
      this._buildBallotTree();
    } else if (this._options[K.OPTIONS.ballotTree._value] ===
          K.OPTIONS.ballotTree.dynamic) {
      this._buildDynamicBallotTree();
    }
    this._currentNodeStats.setElapsedTime();
    this._totalNodeStats.add(this._currentNodeStats);
  }

  _subTreeToString(node, prefix='', isLastChild=false) {
    let lines = prefix + '"'+node.name+'" '+node.ballotCount+'\n';
    const childKeys = [];
    for (let childKey in node.children) {
      childKeys.push(childKey);
    }
    childKeys.sort();
    childKeys.forEach((child, ix) => {
      const newPrefix = prefix === '' ?
            ' + ' :
            prefix.slice(0,-2) + (isLastChild ? ' ' : '|') + '  + ';
      lines += this._subTreeToString(node.children[child], newPrefix,
            ix === childKeys.length - 1);
    });
    return lines;
  }

  _printBallotTree(label) {
    let lines = String(label)+': '+this._currentNodeStats.toString() + '\n';
    lines += this._subTreeToString(this._ballotTree);
    console.debug(lines.join('\n'));
  }

  _buildDynamicBallotTree() {
    this._ballotTree = new RankingNode(':root');
    this._ballotTree.ballotGroups = this._ballots;
    this._currentNodeStats.nbrNodes = 1;
    this._currentNodeStats.nbrLeaves = 1;
    this._currentNodeStats.nbrAdded = 1;
    this._currentNodeStats.nbrVisited = 1;
    this._ballotTree.ballotGroups.forEach((ballotGroup, ix) => {
      ballotGroup.wellRanked = new Set();
      ballotGroup.lastUsedIndex = -1;
      this._ballotTree.ballotCount += ballotGroup.getMultiple();
      if ((ix + 1) % this._progress.treeInitPeriod === 0) {
        this._progress.setDynamicTreeInitProgress(ix + 1);
      }
    });
    this._progress.setDynamicTreeInitProgress(this._progress.completedLabel);
    this._hopefulParents = Array.from(this._hopeful()).reduce(
          (result, hopeful) => {
      result[hopeful] = new Set();
      return result;
    }, {});
    this._expandBallotTreeFromParent(this._ballotTree, this._progress);
    this._currentNodeStats.setElapsedTime();
  }

  _expandBallotTreeFromParent(parentNode, progress=null) {
    parentNode.ballotGroups.forEach((ballotGroup, ix) => {
      this._distributeBallotGroup(ballotGroup, parentNode);
      if(progress && (ix + 1) % progress.treeBuildPeriod === 0) {
        progress.setTreeBuildProgress(ix + 1);
      }
    });
    if(progress) {
      progress.setTreeBuildProgress(progress.completedLabel);
    }
    parentNode.ballotGroups = [];
  }

  _distributeBallotGroup(ballotGroup, parentNode) {
    const multiple = ballotGroup.getMultiple();
    const rankings = ballotGroup.getRankings();
    for(ballotGroup.lastUsedIndex++;
          ballotGroup.lastUsedIndex < rankings.length;
          ballotGroup.lastUsedIndex++
          ) {
      const rankingCode = rankings[ballotGroup.lastUsedIndex];
      if (rankingCode === K.RANKING_CODE.undervote ||
            ballotGroup.wellRanked.has(rankingCode)) {
        continue;
      }
      ballotGroup.wellRanked.add(rankingCode);
      if  (this._excluded.has(rankingCode)) {
        continue;
      }
      if (this._statuses[rankingCode] &&
            this._statuses[rankingCode].status === K.STATUS.defeated) {
        continue;
      }
      const tabCat = rankingCode === K.RANKING_CODE.overvote ?
            K.LABEL.overvotes : rankingCode;
      const childNode = this._getOrMakeChild(tabCat, parentNode);
      childNode.ballotCount += multiple;
      if (tabCat === K.LABEL.overvotes) {
        ballotGroup.lastUsedIndex = rankings.length + 1;
        break;
      }
      if (this._statuses[rankingCode].status === K.STATUS.hopeful) {
        childNode.ballotGroups.push(ballotGroup);
        break;
      }
      parentNode = childNode;
    }

    if (ballotGroup.lastUsedIndex === rankings.length) {
      const exhaustedLabel =
            ballotGroup.wellRanked.size < this._maxWellRanked ?
            K.LABEL.abstentions : K.LABEL.otherExhausted;
      const childNode = this._getOrMakeChild(exhaustedLabel, parentNode);
      childNode.ballotCount += multiple;
    }
  }

  _getOrMakeChild(name, parentNode) {
    let childNode = parentNode.children[name];
    if (!childNode) {
      childNode = parentNode.children[name] =
            new RankingNode(name);
      if ('ballotGroups' in parentNode) {
        childNode.ballotGroups = [];
        if (name in this._statuses &&
              this._statuses[name].status === K.STATUS.hopeful) {
          this._hopefulParents[name].add(parentNode);
        }
      }
      this.nodeCount++;
      parentNode.nbrChildren++;
      this._currentNodeStats.nbrNodes++;
      this._currentNodeStats.nbrAdded++;
      if (parentNode.nbrChildren > 1) {
        this._currentNodeStats.nbrLeaves++;
      }
    }
    this._currentNodeStats.nbrVisited++;
    return childNode;
  }

  _transformBallotTree(newElecteds, newDefeateds) {
    if (this._ballotTree && this._ballotTree.ballotGroups) {
      this._currentNodeStats = new NodeStats('transform round '+
            this._nbrRound);
      if (newElecteds.size) {
        this._expandBallotTreeFromNewElecteds(newElecteds);
      } else {
        this._transferNodesOfNewDefeateds(newDefeateds);
      }
      this._currentNodeStats.setElapsedTime();
      this._totalNodeStats.add(this._currentNodeStats);
    }
  }

  _expandBallotTreeFromNewElecteds(newElecteds) {
    newElecteds.forEach(newElected => {
      this._hopefulParents[newElected].forEach(newElectedParent => {
        const parentNode = newElectedParent.children[newElected];
        this._currentNodeStats.nbrVisited++;
        this._expandBallotTreeFromParent(parentNode);
      });
      delete this._hopefulParents[newElected];
    });
  }

  _transferNodesOfNewDefeateds(newDefeateds) {
    newDefeateds.forEach(newDefeated => {
      this._hopefulParents[newDefeated].forEach(parentNode => {
        const defeatedNode = parentNode.children[newDefeated];
        parentNode.ballotGroups = defeatedNode.ballotGroups;
        this._currentNodeStats.nbrVisited += 2;
        delete parentNode.children[newDefeated];
        this._currentNodeStats.nbrDeleted++;
        this._currentNodeStats.nbrNodes--;
        this._currentNodeStats.nbrLeaves--;
        this._expandBallotTreeFromParent(parentNode);
      });
      delete this._hopefulParents[newDefeated];
    });
  }

  _buildBallotTree() {
    this._ballotTree = new RankingNode(':root');
    this._currentNodeStats.nbrNodes = 1;
    this._currentNodeStats.nbrLeaves = 1;
    this._currentNodeStats.nbrAdded = 1;
    this._currentNodeStats.nbrVisited = 1;
    const nbrHopeful = this._hopeful().size;
    this._ballots.forEach((ballot, ix) => {
      const multiple = ballot.getMultiple();
      const rankings = ballot.getRankings();
      let currentNode = this._ballotTree;
      const wellRanked = new Set();
      let depth = 0;
      let nbrWellRanked = 0;
      currentNode.ballotCount += multiple;
      const hadNoOvervote = rankings.every((rankingCode, ix) => {
        if (rankingCode === K.RANKING_CODE.undervote ||
              wellRanked.has(rankingCode)) {
          return true;
        }
        if (rankingCode !== K.RANKING_CODE.overvote) {
          nbrWellRanked++;
        }
        wellRanked.add(rankingCode);
        if  (this._excluded.has(rankingCode)) {
          return true;
        }
        const tabCat = rankingCode === K.RANKING_CODE.overvote ?
              K.LABEL.overvotes : rankingCode;
        const childNode = this._getOrMakeChild(tabCat, currentNode);
        /*
        if (!(rankingCode in currentNode.children)) {

          currentNode.children[rankingCode] = new RankingNode(rankingCode);
          this.nodeCount++;
          currentNode.nbrChildren++;
          if (currentNode.nbrChildren > 1) {
            this.nodeLeafCount++;
          }
        }
        */
        depth++;
        childNode.ballotCount += multiple;
        currentNode = childNode;
        if (rankingCode === K.RANKING_CODE.overvote) {
          return false;
        }
        return true;
      });
      if (hadNoOvervote &&
            (depth < nbrHopeful - 1 || nbrHopeful === 0)) {
        const exhaustedLabel =
              nbrWellRanked < this._maxWellRanked ?
              K.LABEL.abstentions : K.LABEL.otherExhausted;
        const childNode = this._getOrMakeChild(exhaustedLabel, currentNode);
        /*
        if (!(exhaustedLabel in currentNode.children)) {
          currentNode.children[exhaustedLabel] =
                new RankingNode(exhaustedLabel);
          this.nodeCount++;
          currentNode.nbrChildren++;
          if (currentNode.nbrChildren > 1) {
            this.nodeLeafCount++;
          }
        }
        */
        childNode.ballotCount += multiple;
        currentNode = childNode; // is needed ?
      }
      if((ix + 1) % this._progress.treeBuildPeriod === 0) {
        this._progress.setTreeBuildProgress(ix + 1);
      }
    });
    this._progress.setTreeBuildProgress(this._progress.completedLabel);
  }

  _processAMeeksRound() {
    /*
    Process vote counting for a Meek round

    Return a boolean indicating whether to continue with another round.
    */
    if (this._nbrRound > 0 ||
          (this._nbrRound === 0 &&
          this._options[K.OPTIONS.alwaysCountVotes._value] ===
            K.OPTIONS.alwaysCountVotes.no)) {
      // Reference rule step B.1, Test count complete
      const nbrElectedOrProtected = UBF.setUnion(
            this._elected(), this._protectedzz).size;
      if (nbrElectedOrProtected === this._nbrSeatsToFill ||
            this._hopeful().size + this._elected().size
            <= this._nbrSeatsToFill) {
        // Reference rule step C.1, Elect remaining
        if (nbrElectedOrProtected < this._nbrSeatsToFill) {
          this._electCandidates(this._hopeful());
        // Reference rule step C.2, Defeat remaining
        } else {
          this._electCandidates(UBF.setDifference(this._protectedzz,
                this._elected()));
          this._defeatCandidates(this._hopeful());
        }
        return false;
      }
    }
    this._nbrRound += 1;
    this._totalNodeStats.nbrRounds++
    if (this._nbrRound > this._candidates.length + 2) {
      throw new MeekImplementationError(
            'Error: Tabulation requires too many rounds', [
            ['starting round #', this._nbrRound],
            ['nbr of candidates', this._candidates.length],
      ]);
      return false;
    }
    if (this._nbrRound > 1) {
      this._transformBallotTree(this._newElecteds, this._defeatThisRound);
    }
    if (this._testing['stopAtBegin'] === this._nbrRound) {
      return false;
    }
    this._prevTotalSurplus = null;
    this._nbrIteration = 0;
    this._defeatThisRound = new Set();
    this._nbrHopefuls = this._hopeful().size;
    // Reference rule step B.2, Iterate
    while (this._processAMeeksIteration()) {
      this._prevTotalSurplus = this._totalSurplus;
    }
    for (let label in this._iterTally) {
      const votes = this._iterTally[label];
      if (this._statuses[label] === undefined ||
            this._statuses[label].status !== K.STATUS.defeated) {
        this._tallies[label].push(votes);
      }
    }
    if (this._testing['stopAfterStatusUpdate'] === this._nbrRound) {
      return false;
    }
    if (!this._newElecteds.size) {
      // Check for alternative / multiple / batch / simultaneous defeats
      // before single defeats
      if (this._getAltDefeatsOption() === K.OPTIONS.alternativeDefeats.yes &&
            this._options[K.OPTIONS.typeOfAltDefs._value] ===
            K.OPTIONS.typeOfAltDefs.beforeSingleDefeats) {
        this._defeatThisRound = this._getStvAlternativeDefeats();
      }
      // Reference rule step B.3, Defeat low candidate
      if (!this._defeatThisRound.size && this._hopeful().size) {
        this._defeatThisRound = this._getSingleDefeatCandidate();
      }
      this._defeatCandidates(this._defeatThisRound);
    }
    if (this._testing['stopAtEnd'] === this._nbrRound) {
      return false;
    }
    this._progress.setRoundProgress(this._nbrRound, this._nbrIteration,
          this._hopeful().size);
    return true;
  }

  _processAMeeksIteration() {
    this._nbrIteration += 1;
    this.totalNbrIterations++;
    this._initIterTally();
    // Reference rule step B.2.a, Distribute votes
    this._currentNodeStats = new NodeStats('distribute round '+this._nbrRound+
          ' iteration '+this._nbrIteration);
    this._currentNodeStats.nbrIterations = 1;
    if (this._ballotTree) {
      this._distributeVotesByTree();
    } else {
      this._distributeVotes();
    }
    this._currentNodeStats.setElapsedTime();
    this._totalNodeStats.add(this._currentNodeStats);
    this._totalCandidateVotes = this._getTotalCandidateVotes();
    this._iterTally[K.LABEL.totalCandidateVotes] = (
          this._totalCandidateVotes);
    this._iterTally[K.LABEL.totalVotes] = (
          this._iterTally[K.LABEL.totalCandidateVotes]
          .plus(this._iterTally[K.LABEL.overvotes])
          .plus(this._iterTally[K.LABEL.abstentions])
          .plus(this._iterTally[K.LABEL.otherExhausted]));
    //# Reference rule step B.2.b, Update quota
    this._setQuota();
    this._updateCandidateStatusTally();

    if (this._testing['stopAfterStatusUpdate'] === this._nbrRound) {
      return false;
    }

    // Reference rule step B.2.c, Find winners
    // candidates with more than a quota of votes are elected
    this._newElecteds = this._getNewElecteds();
    if (this._newElecteds.size) {
      this._electCandidates(this._newElecteds);
    }
    // Reference rule step B.2.d, Calculate the total surplus
    this._totalSurplus = this._getTotalSurplus();
    this._iterTally[K.LABEL.totalSurplus] = this._totalSurplus;
    // Reference rule step B.2.e, Test for iteration finished
    // Test whether this is the final iteration for the round
    if (this._newElecteds.size) {
      return false;
    }
    // Check for alternative / multiple / batch / simultaneous defeats
    // if no new electeds
    if (this._getAltDefeatsOption() === K.OPTIONS.alternativeDefeats.yes &&
          this._options[K.OPTIONS.typeOfAltDefs._value] ===
          K.OPTIONS.typeOfAltDefs.ifNoNewElecteds) {
      this._defeatThisRound = this._getStvAlternativeDefeats();
      if (this._defeatThisRound.size) {
        return false;
      }
    }
    if (this._totalSurplus.isLess(this._omega)) {
      return false;
    }
    if (this._prevTotalSurplus !== null &&
          this._totalSurplus.isGreaterEqual(this._prevTotalSurplus)) {
      return false;
    }
    // Check for alternative / multiple / batch / simultaneous defeats
    // per reference rule, possibly with deferred surplus distribution
    if (this._getAltDefeatsOption() === K.OPTIONS.alternativeDefeats.yes &&
          this._options[K.OPTIONS.typeOfAltDefs._value] ===
          K.OPTIONS.typeOfAltDefs.perRefRule) {
      this._defeatThisRound = this._getStvAlternativeDefeats();
      if (this._defeatThisRound.size) {
        return false;
      }
    }
    // Reference rule step B.2.f, Update keep factors
    this._updateKeepFactors();
    this._progress.setIterationProgress(this._nbrRound, this._nbrIteration,
          this._nbrHopefuls);
    return true;
  }

  _initIterTally() {
    this._iterTally = {};
    for (let tabCode in this._tallies) {
      if (this._statuses[tabCode] !== undefined &&
            this._statuses[tabCode].status === K.STATUS.defeated) {
        this._iterTally[tabCode] = null;
      } else {
        this._iterTally[tabCode] = K.ZERO;
      }
    }
    this._iterTally[K.LABEL.nbrIterations] = this._nbrIteration;
  }

  _distributeVotesByTree() {
    /*
    Distribute votes from ballots to candidates using the ballot tree
    */
    this._distributeFromNode(this._ballotTree, K.ONE, 0);
  }

  _distributeFromNode(node, ballotWeight, depth) {
    depth++;
    this._currentNodeStats.nbrVisited++;
    const parentMultiple = node.ballotCount;
    const rankingCode = node.name;
    if (node.name !== ':root' &&
          (!this._statuses[rankingCode] ||
          this._statuses[rankingCode].status !== K.STATUS.defeated)) {
      let rankingKeep = ballotWeight;
      if (this._statuses[rankingCode] !== undefined) {
        if ((this._statuses[rankingCode].status === K.STATUS.hopeful ||
              this._statuses[rankingCode].status === K.STATUS.elected)
              ) {
          rankingKeep = ballotWeight.times(
                this._keepFactors[rankingCode], K.ROUND.away);
        }
      }
      try {
      this._iterTally[rankingCode] = (
            this._iterTally[rankingCode].plus(
            rankingKeep.times(parentMultiple)));
      }
      catch (exc) {
        throw new MeekImplementationError(
              'Error: Failure to accumulate votes to iteration tally.', [
              ['node name', node.name],
              ['node ballotCount', node.ballotCount],
              ['rankingCode', rankingCode],
              ['iterTally[rankingCode]',
                JSON.stringify(this._iterTally[rankingCode])],
        ], exc);
      }
      ballotWeight = ballotWeight.minus(rankingKeep);
    }
    if (ballotWeight.isEqual(K.ZERO)) {
      return;
    }
    for (let childName in node.children) {
      const child = node.children[childName];
      this._distributeFromNode(child, ballotWeight, depth);
    }
  }

  _distributeVotes() {
    /*
    Distribute votes from ballots to candidates without using the ballot tree
    */
    this._ballots.forEach((ballot) => {
      let ballotWeight = K.ONE;
      const wellRanked = new Set();
      const multiple = ballot.getMultiple();
      ballot.getRankings().every((rankingCode, rankingIndex) => {
        if (rankingCode === K.RANKING_CODE.overvote) {
          this._iterTally[K.LABEL.overvotes] = (
                this._iterTally[K.LABEL.overvotes].plus(
                ballotWeight.times(multiple)));
          ballotWeight = K.ZERO;
          this._currentNodeStats.nbrVisited++;
          return false;
        }
        if (this._statuses[rankingCode] !== undefined) {
          if ((this._statuses[rankingCode].status === K.STATUS.hopeful ||
                this._statuses[rankingCode].status === K.STATUS.elected) &&
                !wellRanked.has(rankingCode)) {
            const rankingKeep = ballotWeight.times(
                  this._keepFactors[rankingCode], K.ROUND.away);
            this._iterTally[rankingCode] = (
                  this._iterTally[rankingCode].plus(
                  rankingKeep.times(multiple)));
            ballotWeight = ballotWeight.minus(rankingKeep);
            this._currentNodeStats.nbrVisited++;
            if (ballotWeight.isEqual(K.ZERO)) {
              return false;
            }
          }
          wellRanked.add(rankingCode);
        }
        return true;
      });

      if (ballotWeight.isGreater(K.ZERO)) {
        this._currentNodeStats.nbrVisited++;
        const exhaustedVotes = ballotWeight.times(multiple);
        if (wellRanked.size < this._maxWellRanked) {
          this._iterTally[K.LABEL.abstentions] = (
                this._iterTally[K.LABEL.abstentions].plus(exhaustedVotes));
        } else {
          this._iterTally[K.LABEL.otherExhausted] = (
                this._iterTally[K.LABEL.otherExhausted].plus(exhaustedVotes));
        }
      }
    });
  }

  _getCandidateDestiny(candidate) {
    let result = K.DESTINY.normal;
    if (this._excluded.has(candidate)) {
      result = K.DESTINY.excluded;
    } else if (this._protectedzz.has(candidate)) {
      result = K.DESTINY.protected;
    }
    return result;
  }

  _getTotalCandidateVotes() {
    let result = K.ZERO;
    for (let candidate in this._statuses) {
      if (this._iterTally[candidate] !== null) {
        result = result.plus(this._iterTally[candidate]);
      }
    }
    return result;
  }

  _setQuota() {
    let quota = this._totalCandidateVotes.divideBy(this._nbrSeatsToFill + 1);
    quota = quota.plus(K.ULP);
    this._quota = quota;
    if (this._protectedzz.size) {
      this._protectedQuota = quota;
      this._iterTally[K.LABEL.protectedQuota] = this._protectedQuota;
      this._protectedVotes = K.ZERO;
      this._protectedzz.forEach((candidate) => {
        this._protectedVotes = this._protectedVotes.plus(
              this._iterTally[candidate].isLess(this._protectedQuota) ?
              this._iterTally[candidate] : this._protectedQuota);
      });
      this._quotaVotes = this._totalCandidateVotes.minus(this._protectedVotes);
      this._iterTally[K.LABEL.quotaVotes] = this._quotaVotes;
      quota = this._quotaVotes.divideBy(this._nbrUnprotectedSeats + 1);
      this._quota = quota.plus(K.ULP);
    }
    this._iterTally[K.LABEL.quota] = this._quota;
  }

  _getQuota(candidate) {
    const result = (this._protectedzz.has(candidate) ?
          this._protectedQuota : this._quota);
    return result;
  }

  _updateCandidateStatusTally() {
    for (let candidate in this._statuses) {
      const candidateStatus = this._statuses[candidate];
      if (candidateStatus.status === K.STATUS.hopeful) {
        candidateStatus.nbrRound = this._nbrRound;
        candidateStatus.votes = this._iterTally[candidate];
      }
      candidateStatus.keepFactor = this._keepFactors[candidate];
    }
  }

  _getTotalSurplus() {
    let result = K.ZERO;
    for (let candidate in this._statuses) {
      if (this._statuses[candidate].status === K.STATUS.elected) {
        result = result.plus(this._iterTally[candidate]
              .minus(this._getQuota(candidate)));
      }
    }
    return result;
  }

  _updateKeepFactors() {
    for (let candidate in this._keepFactors) {
      const keepFactor = this._keepFactors[candidate];
      if (this._statuses[candidate].status === K.STATUS.elected) {
        const quota = this._getQuota(candidate);
        const product = keepFactor.times(quota, K.ROUND.away);
        const newKeepFactor = product.divideBy(this._iterTally[candidate],
              K.ROUND.away);
        this._keepFactors[candidate] = newKeepFactor;
      }
    }
  }

  _elected() {
    /*
    Provide a set of the elected candidates
    */
    const electedCandidates = new Set();
    for (let candidate in this._statuses) {
      if (this._statuses[candidate].status === K.STATUS.elected) {
        electedCandidates.add(candidate);
      }
    }
    return electedCandidates;
  }

  _hopeful() {
    /*
    Provide a set of the hopeful candidates
    */
    const hopefulCandidates = new Set();
    for (let candidate in this._statuses) {
      if (this._statuses[candidate].status === K.STATUS.hopeful) {
        hopefulCandidates.add(candidate);
      }
    }
    return hopefulCandidates;
  }

  _hopefulVotes() {
    /*
    Get a dict of hopeful candidates and their vote totals
    */
    const hopefulVotes = {};
    this._hopeful().forEach((candidate) => {
      hopefulVotes[candidate] = this._statuses[candidate].votes;
    });
    return hopefulVotes;
  }

  _getNewElecteds() {
    /*
    Get a dict of hopeful candidates that have reached the quota
    */
    const newElecteds = new Set();
    this._hopeful().forEach((candidate) => {
      if (this._iterTally[candidate].isGreaterEqual(
            this._getQuota(candidate))) {
        newElecteds.add(candidate);
      }
    });
    return newElecteds;
  }

  _electCandidates(candidates) {
    /*
    Update the status of each candidate in the list
    */
    candidates.forEach((candidate) => {
      if (this._statuses[candidate] instanceof Status &&
            this._statuses[candidate].status === K.STATUS.hopeful) {
            this._statuses[candidate].status = K.STATUS.elected;
      } else {
        throw new MeekImplementationError(
          'Attempting to elect a candidate that is not hopeful.', [
          ['candidate', candidate],
          ['status', this._statuses[candidate].status],
          ['round', this._nbrRound]
        ]);
      }
    });
  }

  _defeatable() {
    /*
    Provide a set of the hopeful candidates that are not protectedzz
    */
    const result = new Set();
    this._hopeful().forEach((candidate) => {
      if (!this._protectedzz.has(candidate)) {
        result.add(candidate);
      }
    });
    return result;
  }

  _defeatableVotes() {
    /*
    Get a dict of defeatable candidates and their vote totals
    */
    const defeatableVotes = {};
    this._defeatable().forEach((candidate) => {
      defeatableVotes[candidate] = this._statuses[candidate].votes;
    });
    return defeatableVotes;
  }

  _defeatCandidates(candidates) {
    /*
    Defeat the collection of candidates
    */
    candidates.forEach((candidate) => {
      if (this._statuses[candidate] instanceof Status &&
            this._statuses[candidate].status === K.STATUS.hopeful &&
            !this._protectedzz.has(candidate)) {
        this._statuses[candidate].status = K.STATUS.defeated;
        this._keepFactors[candidate] = K.ZERO;
      } else {
        throw MeekImplementationError(
          'Attempting to defeat a candidate that is not defeatable.', [
          ['candidate', candidate],
          ['status', this._statuses[candidate].status],
          ['round', this._nbrRound]
        ]);
      }
    });
  }

  _getSingleDefeatCandidate() {
    /*
    Get the candidate with the fewest votes, after resolving any tie

    Returns
    -------
    A singleton set of the unprotected, hopeful candidate with the
    fewest votes, after resolving any tie.

    Raises
    ------
    MeekValueError
      If there is a tied candidate not in this._tieBreaker.

    */
    const defeatableVotes = this._defeatableVotes();
    let minVotes = K.ONE.times(K.Decimal.MAX_SAFE_VALUE + 1);
    for (let candidate in defeatableVotes) {
      const candidateVotes = defeatableVotes[candidate];
      if (candidateVotes.isLess(minVotes)) {
        minVotes = candidateVotes;
      }
    }
    const defeatThreshold = minVotes.plus(this._totalSurplus);
    const trailingCandidates = new Set()
    for (let candidate in defeatableVotes) {
      const votes = defeatableVotes[candidate];
      if (votes.isLessEqual(defeatThreshold)) {
        trailingCandidates.add(candidate);
      }
    }
    const defeatCandidate = this._resolveTie(trailingCandidates);
    return new Set([defeatCandidate]);
  }

  _resolveTie(tiedCandidates) {
    /*
    Select the tied candidate that is earliest in the tieBreaker.

    Arguments
    ---------
    tiedCandidates
      A set of one or more candidates that are tied.

    Returns
    -------
    The candidate name with the lowest tieBreaker index.

    Raises
    ------
    MeekValueError
      If there is a tied candidate not in this._tieBreaker.

    */
    if (tiedCandidates.size <= 1) {
      return Array.from(tiedCandidates)[0];
    }
    const notInTieBreaker = UBF.setDifference(tiedCandidates,
          UBF.getKeys(this._tieBreaker));
    if (notInTieBreaker.size) {
      throw new MeekValueError('Tied candidate is not in tieBreaker:', [
            ['candidate', Array.from(notInTieBreaker)[0]],
            ['round', this._nbrRound],
            ['tiedCandidates', tiedCandidates],
            ['tieBreaker', this._tieBreaker],
      ]);
    }
    const tiedCandidatesByIndex = {};
    tiedCandidates.forEach((candidate) => {
      tiedCandidatesByIndex[this._tieBreaker[candidate]] = candidate;
    });
    let minIndex = Infinity;
    tiedCandidates.forEach((candidate) => {
      const index = this._tieBreaker[candidate];
      if (index < minIndex) {
        minIndex = index;
      }
    });

    const selectedCandidate = tiedCandidatesByIndex[minIndex];
    return selectedCandidate;
  }

  _getAltDefeatsOption() {
    /*
    Get the value for alternative defeats for the current round

    Returns
    -------
    A string that is the option for alternative defeats in the round

    Raises
    ------
    MeekValueError
      If the option is stored as a tuple of strings, one per round, but
      the tuple is too short.

    */
    const optionsValue = this._options[K.OPTIONS.alternativeDefeats._value];
    let altDefeatsOption;
    if (typeof optionsValue === 'string') {
      altDefeatsOption = optionsValue;
    } else {
      if (optionsValue instanceof Array &&
            this._nbrRound <= optionsValue.length) {
        altDefeatsOption = optionsValue[this._nbrRound - 1];
      } else {
        throw new MeekValueError(
              'Round by round value for alternative defeats option'+
              ' is too short:', [
              ['nbrRound', this._nbrRound],
              ['optionsValue.length', optionsValue.length],
              ['optionsValue', optionsValue],
        ]);
      }
    }
    return altDefeatsOption;
  }

  _getStvAlternativeDefeats() {
    /*
    Get largest set of STV candidates that can be alternatively defeated

    Returns
    -------
    A set of candidates that can be alternatively defeated per the
    conditions of the reference rule, but allowing for protectedzz,
    hopeful candidates.  In particular, only defeatable candidates, i.e.
    unprotectedzz hopeful candidates, are treated as eligible for defeat,
    either now or at a later point in the tabulation.

    */
    const totalSurplusVotes = this._totalSurplus;
    const defeatableVotes = this._defeatableVotes();
    let totalVotesToDefeat = UBF.getOwnItems(defeatableVotes).reduce(
          (sum, item) => { return sum.plus(item.value); }, K.ZERO);
    const byVotes = UBF.getOwnItems(defeatableVotes).sort((a,b) => {
          return a.value.isLess(b.value) ? 1 :
                a.value.isEqual(b.value) ? 0 : -1;
    });
    let candidatesToDefeat = new Set(UBF.getKeys(defeatableVotes));
    const nbrElected = this._elected().size;
    // Breaking out of this loop produces a set of candidates to defeat,
    //     possibly an empty set.
    // Not breaking out of this loop will produce an empty set.
    //let nbrDefeated = byVotes.length;
    byVotes.some((item, ix) => {
      const candidate = item.name;
      const lowestRemainingVotes = item.value;
      totalVotesToDefeat = totalVotesToDefeat.minus(lowestRemainingVotes);
      candidatesToDefeat.delete(candidate);
      const nbrRemaining = ix + 1
      //nbrDefeated -= 1
      //let mostVotesToDefeat = (nbrRemaining < byVotes.length ?
      //      byVotes[ix+1].value : K.ZERO);
      // Reference rule terminology:
      //   candidate c is byVotes[ix + 1].name if ix + 1 is a valid index
      //   votes v is mostVotesToDefeat
      //   votes v'' is lowestRemainingVotes
      const cond_2 = (totalVotesToDefeat.plus(totalSurplusVotes).isLess(
              lowestRemainingVotes));
      const cond_1 = (nbrRemaining + nbrElected >= this._nbrSeatsToFill);
      const condAltDef = cond_1 && cond_2;
      // Test top-level conditions
      if (condAltDef) {
        return true;
      }
      return false;
    });
    return candidatesToDefeat;
  }

}


