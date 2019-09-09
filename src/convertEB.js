/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 * Convert from EB-format ballot (vote_by_vote.csv) file.
 */

import {getId, createElement, createElementIn, listen, addClass, removeClass}
      from './dom-utils.js';
import {MeekImplementationError} from './errors.js';
import {UBF} from './util_basic.js';
import JsSha from 'jssha';

import Debug from './debug.js';
var DBG = Debug.setDBG(0); // level of debug traces; see ./debug.js for usage 
const PDBG = Debug.PDBG;


export default class ConvertEb {
  constructor(fileName, fileText, elementIds) {

    this.fileName = fileName
      .replace('C:\\fakepath\\', '');
    this.safeFileName = this.fileName
      .replace(/</, '&lt;');
    this.fileText = fileText;
    this.elementIds = elementIds;
    this.messageUnknown = '??';
    this.message = this.messageUnknown;
  }

  isEbBallotFile() {
    try {
      const result = this._checkIsEbBallotFormat(this.fileText);
      return result;
    }
    catch (exc) {
      throw new MeekImplementationError(
            'Error: While checking whether read file is in EB format.',
            [], exc);
    }
  }

  _checkIsEbBallotFormat(fileText) {
    let result = false;
    const valuesByLine = this._splitText(fileText.slice(0, 100 * 1024));
    if (valuesByLine.length >= 5)
      if (valuesByLine[0].length === 1)
        if (valuesByLine[1].length === 0 ||
              (valuesByLine[1].length === 1 &&
              valuesByLine[1][0].length === 0))
          if (valuesByLine[2].length === 1)
            if (valuesByLine[2][0] === 'The highest ranked candidate'+
              ' gets the highest score; thus a score of 1 indicates'+
              ' the candidate was least preferred.')
              if (valuesByLine[4].length >= 1)
                if (valuesByLine[4][0] === 'Ballot') 
                  return true;
    return false;
  }

  _splitText(text) {
    let lines = text.split('\n');
    if (text.length && text[text.length - 1] === '\n' &&
          lines[lines.length - 1] === []) {
      lines.pop();
    }
    let valuesByLine = [];
    lines.forEach((line, ix) => {
      const values = line.split('\t');
      valuesByLine.push(values);
    });
    return valuesByLine;
  }

  createCandidateIdsForReview() {
    try {
      let message = '';
      [message, this.inputData] = this._isValidJson(
            getId(this.elementIds.inputTextarea).value);
      if (message) {
        return message;
      }
      message = this._extractData();
      if (message) {
        return message;
      }
      this.inputData.names = this.candidateNames;
      this.candidateIds = this._buildSuggestedCandidateIds(
            this.candidateNames, this.candidateIds);
      /** /
      if (this.candidateIds.length >= 6) {
        this.candidateIds[1] = 'ju nk';
        this.candidateIds[3] = 'dup1';
        this.candidateIds[5] = 'dup1';
      }
      /**/
      this.newTbody = this._buildCandidateIdsTbody(
            this.candidateNames, this.candidateIds);
      [this.itemList, this.itemsById, this.errorList] =
            this._validateAll(this.candidateIds);
      this._installNewTbody(this.newTbody);
      this._setAllErrors(this.errorList);
      return message;
    }
    catch (exc) { 
      throw new MeekImplementationError(
            "ERROR: While creating candidate Id's from read file for review.",
            [], exc);
    }
  }

  _isValidJson(text) {
    let message = '';
    const inputTextarea = getId(this.elementIds.inputTextarea);
    let inputData = {};
    try {
      if (inputTextarea.value !== '') {
        inputData = JSON.parse(inputTextarea.value);
        if (!(inputData && typeof inputData == 'object')) {
          inputData = {};
        }
      }
    } catch (exc) {
      message = 'Error: Existing input text'
            ' is not in a valid JSON format.'+
            '<br/>Fix it or delete all of it, then try again.'+
            '<br/>'+String(exc);
      return [message, {}];
    }
    this._discardInputDataParts(inputData);
    return [message, inputData];
  }

  _discardInputDataParts(inputData) {
    delete inputData.ballots;
    delete inputData.names;
    delete inputData.candidates;
    delete inputData.tieBreaker;
    delete inputData.included;
    delete inputData.protected;
  }

  _extractData() {
    let message = '';
    const valuesByLine = this._splitText(this.fileText);
    this.fileText = null;
    [message, this.nbrBallots] = this._validateBallotNumbering(valuesByLine);
    if (message) {
      return message;
    }
    let parms;
    [parms, this.candidateNames, this.candidateIndexes, this.candidateIds] =
          this._extractCandidates(valuesByLine);
    this.nbrListedCandidates = this.candidateNames.length;
    [message, this.maxRatingNbr] =
          this._extractRatingNumbersAndWriteins(valuesByLine, parms,
          this.candidateNames, this.candidateIndexes);
    this.nbrWriteinCandidates =
          this.candidateNames.length - this.nbrListedCandidates;
    if (message) {
      return message;
    }
    [message, this.indexedBallots] = this._extractBallots(
          valuesByLine, parms, this.maxRatingNbr, this.candidateIndexes);
    if (message) {
      return message;
    }
    return '';
  }

  _validateBallotNumbering(valuesByLine) {
    let message = '';
    let haveEmptyBallotLines = false;
    let nbrBallots = 0;
    valuesByLine.every((line, ix) => {
      if (ix <= 4) {
        return true;
      }
      if (line.length == 0 ||
            (line.length == 1 && line[0] === '')) {
        haveEmptyBallotLines = true;
        return true;
      } else if (haveEmptyBallotLines) {
        message = 'Error: Non-empty ballot lines'+
              ' follow empty ballot lines'+
              '<br/>&nbsp;&nbsp;in an Election Buddy'+
              ' vote_by_vote ballot file:'+
              '<br/>starting at line number '+(ix + 1);
        nbrBallots = NaN;
        return false;
      }
      const ballotNbr = Number(line[0]);
      const ballotNbrInt = parseInt(line[0], 10);
      if (Number.isInteger(ballotNbr) && Number.isInteger(ballotNbrInt) &&
            ballotNbr === ballotNbrInt && ballotNbr > 0 && 
            ballotNbr === nbrBallots + 1) {
        nbrBallots++;
        return true;
      }
      message = 'Error: Ballot lines are not consecutively numbered'+
            '<br/>&nbsp;&nbsp;in an Election Buddy'+
            ' vote_by_vote ballot file:'+
            '<br/>starting at line number '+(ix + 1)
            '<br/>after '+nbrBallots+' consecutively numbered ballot lines';
      nbrBallots = NaN;
      return false;
    });
    return [message, nbrBallots];
  }

  _cleanName(name) {
    const cleanedName = name.replace(/[\t\n\r]/g, ' ')
          .replace(/  +/g, ' ');
    return cleanedName;
  }

  _extractCandidates(valuesByLine) {
    const parms = {}
    parms.listedFirstColumnIx = 1;
    if (valuesByLine[4].length >=2 &&
          valuesByLine[4][1].startsWith('Voter')) {
      parms.listedFirstColumnIx = 2;
    }
    parms.writeinFirstColumnIx = valuesByLine[4].indexOf('Write-in 1');
    parms.abstainColumnIx = valuesByLine[4].indexOf('Abstain');
    parms.writeinLastColumnIx = parms.writinFirstColumn === -1 ?
          -1 :
          (parms.abstainColumnIx === -1 ?
          valuesByLine[4].length - 1 :
          parms.abstainColumnIx - 1);
    parms.listedLastColumnIx = parms.writeinFirstColumnIx === -1 ?
          (parms.abstainColumnIx === -1 ?
          valuesByLine[4].length - 1 :
          parms.abstainColumnIx - 1 ) :
          parms.writeinFirstColumnIx - 1;
    const candidateIds = valuesByLine[3].slice(parms.listedFirstColumnIx)
          .map(code => this._cleanName(code));
    const candidateNames = valuesByLine[4].slice(
          parms.listedFirstColumnIx,
          parms.listedLastColumnIx + 1
          ).map(name => this._cleanName(name));
    const candidateIndexes = {};
    candidateNames.forEach((name, ix) => {
      candidateIndexes[name] = ix;
    });
    return [parms, candidateNames, candidateIndexes, candidateIds];
  }

  _makeRatingNbr(rating, maxRatingNbr) {
    const ratingNbr = Number(rating);
    const ratingInt = parseInt(rating, 10);
    if (Number.isInteger(ratingNbr) && Number.isInteger(ratingInt) &&
          ratingNbr === ratingInt && ratingNbr >= 0) {
      return ratingNbr;
    }
    return NaN;
  }

  _extractRatingNumbersAndWriteins(valuesByLine, parms,
        candidateNames, candidateIndexes) {
    let message = '';
    let maxRatingNbr = 0;
    let isGood = valuesByLine.every((line, lineIx) => {
      if (lineIx <= 4) {
        return true;
      }
      const isLineGood = line.every((rating, rix) => {
        if (rix < parms.listedFirstColumnIx) {
          return true;
        }
        if (rix <= parms.listedLastColumnIx) {
          if (rating.trim() === '') {
            return true;
          }
          let ratingNbr = 0;
          ratingNbr = this._makeRatingNbr(rating);
          if (!Number.isNaN(ratingNbr)) {
            if (ratingNbr > maxRatingNbr) {
              maxRatingNbr = ratingNbr;
            }
            valuesByLine[lineIx][rix] = ratingNbr;
            return true;
          }
          message = 'Error: Invalid / unexpected rating number'+
                ' for a listed candidate'+
                '<br/>&nbsp;&nbsp;in an Election Buddy'+
                ' vote_by_vote ballot file:'+
                '<br/>value = "'+rating.replace(/</g, '&lt;')+'"'+
                '<br/>ballot number = '+ line[0] +
                ' on line '+(lineIx + 1)+
                '<br/>in (tab separated) value column '+(rix + 1);
          return false;
        }
        if (rating.trim() === '') {
          return true;
        }
        if (rix > parms.writeinLastColumnIx) {
          return true;
        }
        const matches = rating.match(/^(.*) \((\d+)\)$/);
        if (matches === null) {
          message = 'Error: Invalid / unexpected format'+
                ' for a write-in candidate'+
                '<br/>&nbsp;&nbsp;in an Election Buddy'+
                ' vote_by_vote ballot file:'+
                '<br/>value = "'+rating.replace(/</g, '&lt;')+'"'+
                '<br/>ballot number = '+ line[0] +
                ' on line '+(lineIx + 1)+
                '<br/>in (tab separated) value column '+(rix + 1);
          return false;
        }
        const name = this._cleanName(matches[1]);
        if (!(name in candidateIndexes)) {
          candidateIndexes[name] = candidateNames.length;
          candidateNames.push(name);
        }
        const ratingNbr = this._makeRatingNbr(matches[2]);
        if (!Number.isNaN(ratingNbr)) {
          if (ratingNbr > maxRatingNbr) {
            maxRatingNbr = ratingNbr;
          }
          valuesByLine[lineIx][rix] = {name: name, ratingNbr: ratingNbr};
          return true;
        }
        message = 'Error: Invalid / unexpected rating number'+
              ' for a write-in candidate'+
              '<br/>&nbsp;&nbsp;in an Election Buddy vote_by_vote ballot file:'+
              '<br/>column value = "'+rating.replace(/</g, '&lt;')+'"'+
              '<br/>rating number = "'+matches[2].replace(/</g, '&lt;')+'"'+
              '<br/>ballot number = '+ line[0] +
              ' on line '+(lineIx + 1)+
              '<br/>in (tab separated) value column '+(rix + 1);
        return false;
      });
      return isLineGood;
    });
    return [message, maxRatingNbr];
  }

  _extractBallots(valuesByLine, parms, maxRatingNbr, candidateIndexes) {
    let message = '';
    const ballots = [];
    const isGood = valuesByLine.every((line, lineIx) => {
      if (lineIx <= 4) {
        return true;
      }
      if(line.length == 0 || (line.length == 1 && line[0] === '')) {
        return true;
      }
      const ballotRankings = [];
      const isLineGood = line.every((rating, rix) => {
        if (rix < parms.listedFirstColumnIx) {
          return true;
        }
        if (rix <= parms.listedLastColumnIx) {
          if (typeof rating == 'number') {
            const ranking = maxRatingNbr - rating;
            if (ranking in ballotRankings) {
              ballotRankings[ranking] = '#';
            } else {
              ballotRankings[ranking] = rix - parms.listedFirstColumnIx;
            }
          }
          return true;
        }
        if (rix > parms.writeinLastColumnIx) {
          return true;
        }
        if (rating === '') {
          return true;
        }
        const ranking = maxRatingNbr - rating.ratingNbr;
        const writeinIndex = candidateIndexes[rating.name];
        if (ranking in ballotRankings &&
              ballotRankings[ranking] !== writeinIndex) {
          ballotRankings[ranking] = '#';
        } else {
          ballotRankings[ranking] = writeinIndex;
        }
        return true;
      });
      if (isLineGood) {
        ballots.push(ballotRankings);
      }
      return isLineGood;
    });
    if (!isGood) {
      return 'Error: failure building ballots.';
    }
    return [message, ballots];
  }

  _buildSuggestedCandidateIds(names, candidateIds) {
    names.every((name, ix) => {
      let candidateId = '';
      if (!candidateIds[ix]) {
        candidateId = this._suggestCandidateId(name, ix);
        candidateIds[ix] = candidateId;
      }
      return true;
    });
    candidateIds = candidateIds.slice(0, names.length);
    return candidateIds;
  }

  _suggestCandidateId(name, ix) {
    const simpleName = (' ' + name + ' ')
          .replace(/-/g, ' ')
          .replace(/  +/g, ' ')
          .replace(/[.,_'"~`!@#$%^&+=:;?|<>(){}[\]\/\t\n\r\\]/g, '')
          .replace(/ dr | rev | jr | sr | ii | iii /gi, ' ')
          .slice(1, -1);
    const nameParts = simpleName.split(' ');
    const targetLength = 6;
    const lastTargetLength = 3;
    let candidateId = 'C' + String(ix + 1).padStart(3, '0');
    if (nameParts.length == 1) {
      candidateId = nameParts[0].slice(0, targetLength);
    } else if (nameParts.length == 2) {
      const lastPart = nameParts[1].slice(0, lastTargetLength);
      candidateId = nameParts[0]
        .slice(0, targetLength - lastPart.length);
      candidateId += nameParts[1]
        .slice(0, targetLength - candidateId.length);
    } else if (nameParts.length > 2) {
      const secondPart = nameParts[1].slice(0,1);
      const lastPart = nameParts[nameParts.length - 1];
      candidateId = nameParts[0]
        .slice(0, targetLength - secondPart.length -
              lastPart.slice(0, lastTargetLength).length);
      candidateId += secondPart;
      candidateId += lastPart
        .slice(0, targetLength - candidateId.length);
    }
    candidateId = candidateId.padEnd(targetLength, '_');
    return candidateId;
  }

  _buildCandidateIdsTbody(names, candidateIds) {
    const newTbody = createElement(
          'tbody', this.elementIds.candidateIdsTbody);
    const this2 = this;
    listen(newTbody, 'input', evt => this._handleInputOnCandidateId(evt));
    names.every((name, ix) => {
      const candidateId = candidateIds[ix];
      const rowId = 'row-' + String(ix+1).padStart(2, '0');
      const rowElement = createElementIn(newTbody, 'tr', 'candId-'+rowId);
      let tdElement = createElementIn(rowElement, 'td', 'candId-seq-'+rowId,
            'candId-seq');
      tdElement.innerText = String(ix + 1);
      tdElement = createElementIn(rowElement, 'td', 'candId-code-'+rowId,
            'candId-code');
      let inputElement = createElementIn(tdElement, 'input',
            'candId-code-input-'+rowId, '', 
            {type: 'text', value: candidateId});
      let this2 = this;
      //let handler = function(a, b) {
      //  this._handleChangedCandidateId(a, b);
      //}
      //inputElement.addEventListener('input', handler);
      tdElement = createElementIn(rowElement, 'td', 'candId-name-'+rowId,
            'candId-name');
      tdElement.innerText = name;
      return true;
    });
    return newTbody;
  }

  _validateAll(candidateIds) {
    const itemList = [];
    const values = {};
    const itemsById = {};
    candidateIds.forEach((code, ix) => {
      const item = {
        ix: ix,
        id: 'candId-code-input-row-' + (String(ix + 1).padStart(2, '0')),
        value: code,
        hasDuplicate: false,
        isOwnError: !this._validateOnOwn(code),
      };
      itemList.push(item);
      itemsById[item.id] = item;
      if (code in values) {
        item.hasDuplicate = true;
        values[code].hasDuplicate = true;
      } else {
        values[code] = item;
      }
    });
    const errorList = [];
    itemList.forEach((item) => {
      if (item.hasDuplicate || item.isOwnError) {
        errorList.push(item);
      }
    });
    return [itemList, itemsById, errorList];
  }

  _validateOnOwn(candidateId) {
    if (candidateId !== '')
      if (candidateId !== '*')
        if (candidateId[0] !== ':')
          if (candidateId.indexOf(' ') == -1)
          if (candidateId.indexOf('"') == -1)
          if (candidateId.indexOf(':') == -1)
          if (candidateId.indexOf('[') == -1)
          if (candidateId.indexOf(']') == -1)
            if (candidateId.length <= 8)
              if (candidateId.split('').every(ch => {
                const codeNbr = ch.charCodeAt(0);
                if (codeNbr > 0x20 && codeNbr < 0x7f)
                   return true;
                if (codeNbr >= 0xa0)
                  if (!(codeNbr >= 0xd800 && codeNbr < 0xe000))
                    if (!(codeNbr === 0xfffe || codeNbr === 0xfeff))
                      return true;
                return false;
              }))
                return true;
    return false;
  }

  _installNewTbody(newTbody) {
    const tableElement = getId(this.elementIds.candidateIdsTable);
    tableElement.removeChild(getId(this.elementIds.candidateIdsTbody));
    tableElement.appendChild(newTbody);
  }

  _handleInputOnCandidateId(evt) {
    const startTime = Date.now();
    const [errorList, clearList] = this._validateOne(
          evt.target.id, evt.target.value, this.itemList,
          this.itemsById[evt.target.id]);
    this._setIncrementalErrors(errorList, clearList);
    const endTime = Date.now();
  }

  _setIncrementalErrors(errorList, clearList) {
    errorList.forEach(item => {
      const element = getId(item.id);
      addClass(element, 'isNotValid');
    });
    clearList.forEach(item => {
      const element = getId(item.id);
      removeClass(element, 'isNotValid');
    });
  }

  _validateOne(id, newValue, itemList, item) {
    const oldIsError = itemList.map(
          item2 => item2.hasDuplicate || item2.isOwnError);
    const oldValue = item.value;
    item.value = newValue;
    item.hasDuplicate = false;
    item.isOwnError = !this._validateOnOwn(item.value);
    let oldValueDupCount = 0;
    let oldValueDupItem = null;
    itemList.forEach((item2, ix) => {
      if (ix === item.ix) {
        return;
      }
      if (newValue === item2.value) {
        item2.hasDuplicate = true;
        item.hasDuplicate = true;
      }
      if (oldValue === item2.value) {
        oldValueDupCount++;
        oldValueDupItem = item2;
      }
    });
    if (oldValueDupCount === 1) {
      oldValueDupItem.hasDuplicate = false;
    }
    const newErrorList = [];
    const newClearList = [];
    itemList.forEach((item, ix) => {
      const itemIsError = item.hasDuplicate || item.isOwnError;
      if (itemIsError && !oldIsError[ix]) {
        newErrorList.push(item);
      }
      if (!itemIsError && oldIsError[ix]) {
        newClearList.push(item);
      }
    });
    return [newErrorList, newClearList];
  }

  _setAllErrors(errorList) {
    const tbody = getId(this.elementIds.candidateIdsTbody);
    const inputElements = tbody.querySelectorAll('input');
    let nextErrorIx = 0;
    let nextError = errorList[nextErrorIx];
    inputElements.forEach((element, ix) => {
      if (nextError && nextError.ix === ix) {
        addClass(element, 'isNotValid');
        nextError = errorList[++nextErrorIx];
      } else {
        removeClass(element, 'isNotValid');
      }
    });
  }

  checkForErrors() {
    try {
      const candidates = this._getReviewedCandidateIds();
      [this.itemList, this.itemsById, this.errorList] =
            this._validateAll(candidates);
      this._setAllErrors(this.errorList);
      if (this.errorList.length === 0) {
        return null;
      }
      const errorStats = {
        nbrInError: 0,
        nbrOwnErrors: 0,
        nbrDuplicates: 0,
      }
      this.itemList.forEach(item => {
        if (item.hasDuplicate || item.isOwnError) {
          errorStats.nbrInError++;
          if (item.isOwnError) {
            errorStats.nbrOwnErrors++;
          }
          if (item.hasDuplicate) {
            errorStats.nbrDuplicates++;
          }
        }
      });
      return errorStats;
    }
    catch (exc) {
      throw new MeekImplementationError(
            'Error: While checking if reviewed candidate Id\'s are valid.',
            [], exc);
    }
  }

  replaceInputText() {
    try {
      this.candidates = this._getReviewedCandidateIds();
      this.ballots = this._buildBallotsWithCandidateIds(
            this.indexedBallots, this.candidates);
      this.inputData.candidates = this.candidates;
      this.inputData.ballots = this.ballots;
      this.tieBreaker = this._buildTieBreakerList(
        this.candidates, this.nbrListedCandidates, this.candidateNames,
        this.inputData.randomSeed);
      this.inputData.tieBreaker = this.tieBreaker;
      const inputText = this._buildInputText(this.inputData);
      getId(this.elementIds.inputTextarea).value = inputText;
    }
    catch (exc) {
      throw new MeekImplementationError(
            'Error: While building and replacing input text.',
            [], exc);
    }
  }

  _getReviewedCandidateIds() {
    const tableBody = getId(this.elementIds.candidateIdsTbody);
    const inputElements = tableBody.querySelectorAll('input');
    const candidates = [];
    for (let iix = 0; iix < inputElements.length; iix++) {
      candidates.push(String(inputElements[iix].value));
    }
    return candidates;
  }

  _buildBallotsWithCandidateIds(indexedBallots, candidates) {
    const ballots = [];
    indexedBallots.forEach((ballot, bix) => {
      const newBallot = ballot.map((ranking, rix) => {
        const result = Number.isInteger(ranking) ?
          candidates[ranking] :
          ranking;
        return result;
      });
      ballots.push([1, ' ' + newBallot.join(' ')]);
    });
    return ballots;
  }

  _buildTieBreakerList(candidates, nbrListedCandidates, candidateNames,
        randomSeed) {
    const listedNames = candidateNames.slice(0, nbrListedCandidates).sort();
    let baseHashInput = '';
    if (typeof randomSeed == 'number' || typeof randomSeed == 'string') {
      baseHashInput += String(randomSeed);
    }
    baseHashInput += listedNames.join('');
    const baseHasher = new JsSha('SHA-256', 'TEXT');
    baseHasher.update(baseHashInput);
    const baseHash = baseHasher.getHash('HEX');
    const nameHashes = [];
    candidates.forEach((candidate, ix) => {
      const nameHasher = new JsSha('SHA-256', 'TEXT');
      const nameHashInput = baseHash + String(candidateNames[ix]);
      nameHasher.update(nameHashInput);
      const nameHash = [nameHasher.getHash('HEX'), candidate];
      nameHashes.push(nameHash);
    });
    nameHashes.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
    const tieBreaker = nameHashes.map(item => item[1]);
    return tieBreaker;
  }

  _buildInputText(inputData) {
    const textParts = [];
    let textPart = '';
    let inputKey = 'description';
    if (inputKey in inputData) {
      textPart = '"' + inputKey + '": ' +
            JSON.stringify(inputData[inputKey]);
      textParts.push(textPart);
    }
    inputKey = 'nbrSeatsToFill';
    if (inputKey in inputData) {
      textPart = '"' + inputKey + '": ' +
            JSON.stringify(inputData[inputKey]);
      textParts.push(textPart);
    }
    inputKey = 'maxRankingLevels';
    if (inputKey in inputData) {
      textPart = '"' + inputKey + '": ' +
            JSON.stringify(inputData[inputKey]);
      textParts.push(textPart);
    }
    inputKey = 'options';
    if (inputKey in inputData) {
      const options = inputData.options;
      if (options && typeof options == 'object') {
        textPart = '';
        for (let optionsKey in options) {
          textPart += '    ,"' + optionsKey + '": '+
                JSON.stringify(options[optionsKey]) + '\n';
        }
        textPart = textPart.replace(/^    ,/, '    ');
        if (textPart) {
          textPart = '"options": {\n' + textPart + '  }';
        } else {
          textPart = '"options": { }';
        }
      } else {
        textPart = '"options": '+JSON.stringify(options);
      }
      textParts.push(textPart);
    }
    for (let inputKey in inputData) {
      if (['description', 'nbrSeatsToFill', 'maxRankingLevels', 'options',
            'excluded', 'protected', 'tieBreaker', 'candidates', 'ballots',
            'names']
            .indexOf(inputKey) === -1) {
        textPart = '"' + inputKey + '": ' +
              JSON.stringify(inputData[inputKey]);
        textParts.push(textPart);
      }
    }
    
    textParts.push('"excluded": ""');
    textParts.push('"protected": ""');

    textPart = '"tieBreaker": " ' + inputData.tieBreaker.join(' ') + '"';
    textParts.push(textPart);

    textPart = '"candidates": " ' + inputData.candidates.join(' ') + '"';
    textParts.push(textPart);

    const namesParts = inputData.names.map((name, ix) =>
          JSON.stringify(String(inputData.candidates[ix])) + ': ' +
          JSON.stringify(name)
    ).sort();
    textPart = '"names": {\n    ' +
          namesParts.join(',\n    ') +
          '\n  }';
    textParts.push(textPart);
    
    const newBallots = [];
    inputData.ballots.forEach((ballot, ix) => {
      let newBallot = '"'+ ballot[1] + '"';
      newBallots.push(newBallot);
    });
    textPart = '"ballots": [\n    '+newBallots.join(',\n    ')+'\n  ]';
    textParts.push(textPart);
    const newText = '{\n  ' + textParts.join('\n  ,') + '\n}';
    return newText;
  }
}

