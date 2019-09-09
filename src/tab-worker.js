/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 * Background tabulation worker
 */

import {Tabulation} from './meek.js';
import {Progress} from './progress.js';
import {UBF} from './util_basic.js';

import Debug from './debug.js';
var DBG = Debug.setDBG(0); // level of debug traces; see ./debug.js for usage 
const PDBG = Debug.PDBG;

let workerArgs = {};
let nbrProgressMessages = 0;

if (typeof STOP_TAB_WORKER === 'boolean' && STOP_TAB_WORKER) {
  if(DBG>=2)PDBG('Stopping further tab worker setup.');
} else {
  tabulateInBackground();
}

function tabulateInBackground() {
  try {
    onmessage = evt => {
      try {
        const message = evt.data;
        if (typeof message != 'object') {
          throw TypeError('Error: message received by tabulation worker is'+
                ' not an object.');
        }
        if (message.type === 'init') {
          nbrProgressMessages = 0;
          workerArgs = message.data;
        } else if (message.type === 'tabulate') {
          //throw Error('Forced error in worker for testing.');
          //postProgressMessage({progressFraction: 1.000, description: 'Show this test progress message.'});
          //return;
          const progress = new Progress(postProgressMessage);
          /** /
          progress.firstDelay = 0;
          //progress.updateDelay = 0;
          progress.updateTimers();
          /**/
          progress.nbrBallotGroups = null;
          const tabulation = new Tabulation(
            workerArgs.nbrSeatsToFill,
            workerArgs.candidates,
            workerArgs.ballots,
            workerArgs.maxRankingLevels,
            workerArgs.tieBreaker,
            workerArgs.excluded,
            workerArgs.protected,
            workerArgs.options,
            progress
          );
          let results = tabulation.tabulate();
          results = prepForTransfer(results);
          postResultsMessage(results);
        }
      } catch (exc) {
        postErrorMessage(exc);
        throw exc;
      }
    };
  } catch (exc) {
    postErrorMessage(exc);
  }

}

function postProgressMessage(progress) {
  postMessage({type: 'progress', data: progress});
  nbrProgressMessages++;
}

function postResultsMessage(results) {
  postMessage({type: 'results', data: results});
}

function prepForTransfer(results) {
  if (!Array.isArray(results) || results.length < 3) {
    return results;
  }
  if (results[0] instanceof Set) {
    results[0] = Array.from(results[0]);
    results[0].sort();
  }
  for (let candidate in results[1]) {
    const status = results[1][candidate];
    if (status.votes === null) {
      PDBG('in prepForTransfer(), status='+JSON.stringify(status));
      PDBG('  typeof status.votes='+(typeof status.votes));
    }
    try {
    if ((typeof status.votes == 'object') &&
          status.votes !== null &&
          ('_valueAsInteger' in status.votes)) { 
      status.votes = {_valueAsInteger: status.votes._valueAsInteger};
    }
    if ((typeof status.keepFactor == 'object') && status.keepFactor !== null &&
          ('_valueAsInteger' in status.keepFactor)) { 
      status.keepFactor = {_valueAsInteger: status.keepFactor._valueAsInteger};
    }
    } catch (exc) {
      PDBG('in prefForTransfer() catch, status='+JSON.stringify(status));
      PDBG('  typeof status.votes='+(typeof status.votes));
      PDBG('exc='+UBF.describeError(exc));
      throw exc;
    }
  }
  for (let category in results[2]) {
    if (category === ':Iterations') {
      continue;
    }
    const votesArray = results[2][category];
    votesArray.forEach((voteCount, ix) => {
      if ('_valueAsInteger' in voteCount) { 
        votesArray[ix] = {_valueAsInteger: voteCount._valueAsInteger};
      }
    });
  }
  return results;
}

function postErrorMessage(exc) {
  const message = {
    type: 'error',
    message: String(exc),
    description: UBF.describeError(exc),
  }
  postMessage(message);
}

