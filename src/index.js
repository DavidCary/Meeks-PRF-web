/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 */

import {Tabulation} from './meek.js';
import {Progress} from './progress.js';
import {Decimal9} from './decimal9.js';
import Results from './results.js';
import {Status} from './status.js';
import {UBF} from './util_basic.js';
import Validator from './validate.js';
import {getId, listen, hasClass, addClass, removeClass} from './dom-utils.js';
import {createElement, createElementIn} from './dom-utils.js';
import ConvertEb from './convertEB.js';
import Worker from './tab-worker.js';
const tabWorkerFileName = 'tab-worker.js';
import JsSha from 'jssha';
import UAParser from 'ua-parser-js';

import Debug from './debug.js';
var DBG = Debug.setDBG(0); // level of debug traces; see ./debug.js for usage 
const PDBG = Debug.PDBG;

const version = [1, 0, 0];
const versionStr = 'v1.0.0';

let tabWorker = null;
let nbrProgressMessages = 0;
let tabulatingInBackground = false;
let convertEb = null;
const convertEbElementIds = {
  inputTextarea: 'input-textarea',
  candidateIdsPanel: 'candidate-ids-panel',
  candidateIdsTable: 'candId-table',
  candidateIdsTbody: 'candId-table-body',
};
let inputDataWip = null;
let recentResults = null;
let recentResultsNames = null;
let votesDecimalPlaces = 2;

const USE_WORKER = true;

let isSetupRun = false;
document.addEventListener('DOMContentLoaded', setup);
if (document.readyState === 'complete') {
  setup()
}

function setup() {
  if (isSetupRun) {
    return;
  }
  isSetupRun = true;

  try {
    fillSampleInput();
    setOtherListeners();
    const browser = new UAParser().getBrowser();
    if (window.location.protocol === 'file:' || browser.name === 'IE') {
      getId('tabulate-in-background-input').checked = false;
      addClass(getId('tabulate-in-background-option'), 'hidden');
    }
    getId('version').innerText = 'Version '+version.join('.');

    listen(getId('tabulate-button'), 'click', evt => {
      try {
        if (tabulatingInBackground) {
          cancelTabulatingInBackground();
          resetResults('Tabulation canceled.');
          return;
        }
        resetResults('Tabulation starting');
        addClass(getId('result-message-holder'), 'tabulation-in-progress');
        const inputData = JSON.parse(getId('input-textarea').value); 
        if (getId('tabulate-in-background-input').checked) {
          tabulateWithWorker(inputData);
        } else {
          tabulateScheduled(inputData);
        }
      } catch (exc) {
        if (tabulatingInBackground) {
          cancelTabulatingInBackground();
          resetResults('Tabulation canceled.');
        }
        recoverFromError(exc);
      }
      return;
    });
    enableBase();
    enableCandidateIdsPanel();
  }
  catch (exc) {
    recoverFromError(exc);
  }
}

function setOtherListeners() {
  resetResults('--');

  listen(getId('read-file-button'), 'click', evt => {
    try {
      selectInputFile();
    }
    catch (exc) { recoverFromError(exc); }
  });
  

  listen(getId('file-to-read-input'), 'change', evt => {
    try {
      readInputFile();
    }
    catch (exc) { recoverFromError(exc); }
  });

  listen(getId('candId-ok-button'), 'click', evt => {
    try {
      const errorStats = convertEb.checkForErrors();
      if (errorStats) {
        askToGenerate(errorStats);
        return;
      }
      const [message, kind] = buildInputTextWithCandidateIds();
      resetResults(message, kind);
      enableBase();
      addClass(getId('candidate-ids-panel'), 'hidden');
    }
    catch (exc) { recoverFromError(exc); }

  });
  
  listen(getId('candId-cancel-button'), 'click', evt => {
    try {
      cancelCandidateIds();
      resetResults('Canceled input change from file read.');
      enableBase();
      addClass(getId('candidate-ids-panel'), 'hidden');
    }
    catch (exc) { recoverFromError(exc); }
  });
  
  listen(getId('candId-help-button'), 'click', evt => {
    try {
      disableCandidateIdsPanel();
      removeClass(getId('input-help'), 'hidden');
    }
    catch (exc) { recoverFromError(exc); }
  });

  listen(getId('ask-generate-button'), 'click', evt => {
    try {
      const [message, kind] = buildInputTextWithCandidateIds();
      resetResults(message, kind);
      enableCandidateIdsPanel();
      addClass(getId('ask-to-generate-panel'), 'hidden');
      enableBase();
      addClass(getId('candidate-ids-panel'), 'hidden');
    }
    catch (exc) { recoverFromError(exc); }
  });
  
  listen(getId('ask-change-button'), 'click', evt => {
    try {
      enableCandidateIdsPanel();
      getId('ask-error-stats').innerText = '';
      addClass(getId('ask-to-generate-panel'), 'hidden');
    }
    catch (exc) { recoverFromError(exc); }
  });
  
  listen(getId('sample-input-button'), 'click', evt => {
    try {
      resetResults('--');
      fillSampleInput();
    }
    catch (exc) { recoverFromError(exc); }
  });
  
  listen(getId('input-help-button'), 'click', evt => {
    try {
      disableBase();
      removeClass(getId('input-help'), 'hidden');
    }
    catch (exc) { recoverFromError(exc); }
  });

  listen(getId('close-input-help-button'), 'click', evt => {
    try {
      if(hasClass(getId('candidate-ids-panel'), 'hidden')) {
        enableBase();
      }
      enableCandidateIdsPanel();
      addClass(getId('input-help'), 'hidden');
    }
    catch (exc) { recoverFromError(exc); }
  });

  listen(getId('votes-nbr-decimal-places'), 'change', evt => {
    try {
/*      if(hasClass(getId('candidate-ids-panel'), 'hidden')) {
        enableBase();
      }
      enableCandidateIdsPanel();
      addClass(getId('input-help'), 'hidden');
*/
      buildStatusesTable(recentResults, recentResultsNames);
      buildTallyTable(recentResults, recentResultsNames);
    }
    catch (exc) { recoverFromError(exc); }
  });
}

function askToGenerate(errorStats) {
  let errorStatsMessage = '<ul class="no-markers">\n';
  if (errorStats.nbrDuplicates) {
    errorStatsMessage += '<li>' + errorStats.nbrDuplicates +
          ' candidate IDs are not unique</li>\n';
  }
  if (errorStats.nbrOwnErrors) {
    errorStatsMessage += '<li>' + errorStats.nbrOwnErrors +
          ' candidate ID'+(errorStats.nbrOwnErrors > 1 ? 
          's have invalid values, possibly because they\n'+
          ' contain invalid or problematic characters' :
          ' has an invalid value, possibly because it\n'+
          ' contains an invalid or problematic character.')+
          '</li>\n';
  }
  if (errorStats.nbrOwnErrors && errorStats.nbrDuplicates) {
    errorStatsMessage += '<li>'+errorStats.nbrInError +
          ' ranking codes are in error for one of the above reasons.</li>\n';
  }
  errorStatsMessage += '</ul>\n';
  getId('ask-error-stats').innerHTML = errorStatsMessage;
  disableCandidateIdsPanel();
  removeClass(getId('ask-to-generate-panel'), 'hidden');
}

function disableBase() {
  getId('input-textarea').setAttribute('disabled', '');
  getId('tabulate-button').setAttribute('disabled', '');
  getId('read-file-button').setAttribute('disabled', '');
  getId('sample-input-button').setAttribute('disabled', '');
  getId('input-help-button').setAttribute('disabled', '');
  getId('tabulate-in-background-input').setAttribute('disabled', '');
  getId('tabulate-in-background-label').setAttribute('disabled', '');
}

function enableBase() {
  getId('input-textarea').removeAttribute('disabled');
  getId('tabulate-button').removeAttribute('disabled');
  getId('read-file-button').removeAttribute('disabled');
  getId('sample-input-button').removeAttribute('disabled');
  getId('input-help-button').removeAttribute('disabled');
  getId('tabulate-in-background-input').removeAttribute('disabled');
  getId('tabulate-in-background-label').removeAttribute('disabled');
}

function disableCandidateIdsPanel() {
  getId('candId-ok-button').setAttribute('disabled', '');
  getId('candId-cancel-button').setAttribute('disabled', '');
  getId('candId-help-button').setAttribute('disabled', '');
  getId('candId-table-body').querySelectorAll('input').forEach(element => {
    element.setAttribute('disabled', '');
  });
}

function enableCandidateIdsPanel() {
  getId('candId-ok-button').removeAttribute('disabled');
  getId('candId-cancel-button').removeAttribute('disabled');
  getId('candId-help-button').removeAttribute('disabled');
  getId('candId-table-body').querySelectorAll('input').forEach(element => {
    element.removeAttribute('disabled');
  });
}

function resetResults(messageText, kind='') {
  getId('result-message').innerHTML = String(messageText);
  getId('elected').innerHTML = 'tbd';
  getId('json').innerHTML = 'tbd';
  getId('statuses-table-div').innerHTML = 'tbd';
  getId('tally-table-div').innerHTML = 'tbd';
  recentResults = null;
  recentResultsNames = null;
  getId('result-progress').style.height = 0;
  getId('result-progress').style.width = 0;
  const messageHolder = getId('result-message-holder');
  removeClass(messageHolder, 'tabulation-in-progress');
  if (kind === 'ok') {
    addClass(messageHolder, 'ok');
  } else {
    removeClass(messageHolder, 'ok');
  }
  if (kind === 'error') {
      addClass(messageHolder, 'error');
      addClass(messageHolder, 'mono');
  } else {
      removeClass(messageHolder, 'error');
      removeClass(messageHolder, 'mono');
  }
}

function selectInputFile() {
  const fileToReadInput = getId('file-to-read-input');
  fileToReadInput.click();
}

function readInputFile() {
  try {
    const fileToReadInput = getId('file-to-read-input');
    const fileToRead = fileToReadInput.files[0];
    if (!fileToRead) {
      resetResults('No input file was selected to read.');
      return;
    }
    resetResults('Reading file ...');
    const fileReader = new FileReader();
    fileReader.addEventListener('error', evt => {
      try {
        throw 'Error: failure to read input file.';
      } catch (exc) {
        console.error(String(exc));
        console.error(evt);
        recoverFromError(exc);
      }
    });
    fileReader.addEventListener('load', evt => {
      try {
        convertEb = new ConvertEb(fileToReadInput.value,
              fileReader.result, convertEbElementIds);
        const isEb = convertEb.isEbBallotFile();
        if (!isEb) {
          getId('input-textarea').value = fileReader.result;
          const message = 'Completed reading input from "'+
                convertEb.safeFileName+'"';
          resetResults(message, 'ok');
          convertEb = null;
          return;
        }
        resetResults('Converting an EB ballot file ...');
        setTimeout(() => {
          try {
            let message = convertEb.createCandidateIdsForReview();
            if (message) {
              convertEb = null;
              resetResults(message, 'error');
              return;
            }
            message = 'EB ballot file "'+convertEb.safeFileName+'": '+
              convertEb.indexedBallots.length+' ballots, '+
              convertEb.candidateNames.length+' candidates: '+
              convertEb.nbrListedCandidates+' listed, '+
              convertEb.nbrWriteinCandidates+ ' write-in';
            activateCandidateIdsPanel(message);
          } catch (exc) { recoverFromError(exc); }
        }, 1);
      } catch (exc) { recoverFromError(exc); }
    });
    fileReader.readAsText(fileToRead);
  } catch (exc) { recoverFromError(exc); }
}

function activateCandidateIdsPanel(message) {
  resetCandidateIdsMessage(message);
  disableBase();
  removeClass(getId('candidate-ids-panel'), 'hidden');
}

function resetCandidateIdsMessage(message, isError=false) {
  const rcMessage = getId('candId-message');
  rcMessage.innerHTML = String(message);
  if (isError) {
      addClass(rcMessage, 'error');
  } else {
      removeClass(rcMessage, 'error');
  }
}

function buildInputTextWithCandidateIds() {
  convertEb.replaceInputText();
  const message = 'Input successfully converted from EB ballot file "'+
        convertEb.safeFileName+'"<br/>'+
        '&nbsp;&nbsp;with '+
        convertEb.indexedBallots.length+' ballots, '+
        convertEb.candidateNames.length+' candidates: '+
        convertEb.nbrListedCandidates+' listed, '+
        convertEb.nbrWriteinCandidates+ ' write-in';
  convertEb = null;
  return [message, 'ok'];
}


function cancelCandidateIds() {
}

function fillSampleInput() {

  var shaHasher = new JsSha('SHA-256', 'TEXT');
  shaHasher.update('abc');

  getId('input-textarea').value = 

`{
  "nbrSeatsToFill": 3
  ,"maxRankingLevels": 6
  ,"options": { }
  ,"excluded": ""
  ,"protected": ""
  ,"tieBreaker": " F A E B D C"
  ,"candidates": " A B C D E F"
  ,"names": {
  }
  ,"randomSeed": "xyz"
  ,"ballots": [
    [7,  " A B C D E F"],
    [19, " B A C F E D"],
    [14, " C A B E F D"],
    [2,  " D"],
    [11, " D E F A B C"],
    [30, " E F D C A B"],
    [17, " F D E B A C"]
  ]
}`
    ;
    return;
}

function tabulateWithWorker(inputData) {
  if (tabWorker) {
    tabWorker.terminate();
    tabWorker = null;
  }
  nbrProgressMessages = 0;
  tabWorker = new Worker();

  tabWorker.onmessage = evt => {
    const message = evt.data;
    if (typeof message != 'object') {
      throw TypeError('Error: Message from tabulation worker' +
            ' is not an object.');
    }
    if (message.type === 'progress') {
      nbrProgressMessages++;
      const progressBar = getId('result-progress');
      progressBar.style.height = 0;
      getId('result-message').innerHTML = String(message.data.description);
      progressBar.style.height =  getId('result-message-box')
            .offsetHeight + 'px';
      progressBar.style.width = message.data.progressFraction * 100 + '%';
    } else if (message.type === 'results') {
      restoreFromTransfer(message);
      cancelTabulatingInBackground();
      showTabulationResults(message.data, inputData);
    } else if (message.type === 'error') {
      cancelTabulatingInBackground();
      resetResults('', 'error');
      getId('result-message').innerHTML = message.message
            .replace(/</g, '&lt;')
            .replace(/\n/g, '<br/>');
    }
  }
  addClass(getId('tabulate-button'), 'cancel-action');
  getId('tabulate-button').innerHTML = '&nbsp;Cancel&nbsp;';
  tabulatingInBackground = true;
  tabWorker.postMessage({type: 'init', data: inputData});
  tabWorker.postMessage({type: 'tabulate'});
}

function cancelTabulatingInBackground() {
  if (tabWorker) {
    tabWorker.terminate();
    tabWorker = null;
  }
  removeClass(getId('tabulate-button'), 'cancel-action');
  getId('tabulate-button').innerHTML = 'Count Votes';
  tabulatingInBackground = false;
}

function restoreFromTransfer(message) {
  const results = message.data;
  if (!(typeof results == 'object' &&
        results.elected instanceof Set &&
        typeof results == 'object' &&
        typeof results.tally == 'object')) {
    return;
  }
  for (let candidate in results.statuses) {
    const status = results.statuses[candidate];
    if (typeof status.votes == 'object' &&
          status.votes !== null &&
          '_valueAsInteger' in status.votes) { 
      status.votes = new Decimal9(status.votes._valueAsInteger, -9);
    }
    if (typeof status.keepFactor == 'object' &&
          status.keepFactor !== null &&
          '_valueAsInteger' in status.keepFactor) { 
      status.keepFactor = new Decimal9(status.keepFactor._valueAsInteger, -9);
    }
    results.statuses[candidate] = new Status(candidate, status.votes,
          status.nbrRound, status.status, status.keepFactor, status.destiny);
  }
  for (let category in results.tally) {
    if (category === ':Iterations') {
      continue;
    }
    const votesArray = results.tally[category];
    votesArray.forEach((voteCount, ix) => {
      if ('_valueAsInteger' in voteCount) { 
        votesArray[ix] = new Decimal9(voteCount._valueAsInteger, -9);
      }
    });
  }
  message.data = new Results(results.elected, results.statuses, results.tally);
  return;
}

function recoverFromError(exc) {
  resetResults('', 'error');
  getId('result-message').innerHTML = String(exc)
        .replace(/</g, '&lt;')
        .replace(/\n/g, '<br/>');
}

function tabulateScheduled(inputData) {
  setTimeout(() => {
    try {
      const results = new Tabulation(
        inputData.nbrSeatsToFill,
        inputData.candidates,
        inputData.ballots,
        inputData.maxRankingLevels,
        inputData.tieBreaker,
        inputData.excluded,
        inputData.protected,
        inputData.options
      ).tabulate();
      showTabulationResults(results, inputData);
    }
    catch (exc) {
      recoverFromError(exc);
    }
  }, 1);
}

function showTabulationResults(results, inputData) {
  const {elected, statuszz, tally} = results;
  resetResults('Tabulation complete.', 'ok');
  let electedAsString = UBF.show(Array.from(elected));
  if (inputData.names && typeof inputData.names == 'object') {
    const electedNames = Array.from(elected).map(
      elected => inputData.names[elected] ?
            String(inputData.names[elected]).slice(0,60) :
            elected
    );
    electedNames.sort();
    electedAsString += '\n'+ electedNames.join('\n');
  }
  getId('elected').innerHTML = electedAsString
        .replace(/</g, '&lt;')
        .replace(/\n/g, '<br/>');
  let jsonStr = '{\n'
  jsonStr += results.getElectedAsString() + '\n';
  jsonStr += results.getStatusesAsString(',')+ '\n';
  jsonStr += results.getTallyAsString(',') + '\n';
  if ('names' in inputData && typeof inputData.names === 'object') {
    const namesItems = UBF.getItems(inputData.names);
    if (namesItems.length) {
      const namesLines = namesItems.map(
            item => '    "'+item.name+'": "'+item.value+'"');
      jsonStr += '  ,"names": {\n' + namesLines.join(',\n') + '\n  }\n';
    }
  }
  jsonStr += '}';
  jsonStr = jsonStr
        .replace(/</g, '&lt;')
        .replace(/\n/g, '<br/>');
  getId('json').innerHTML = jsonStr;
  recentResults = results;
  recentResultsNames = inputData.names;
  buildStatusesTable(recentResults, recentResultsNames);
  buildTallyTable(recentResults, recentResultsNames);
}

function buildStatusesTable(results, names) {
  if (recentResults === null) {
    return;
  }
  const haveNames = names && typeof names === 'object';
  const selectNbrDecimals = getId('votes-nbr-decimal-places');
  let nbrDecimals = selectNbrDecimals.options[selectNbrDecimals.selectedIndex]
        .value;
  if (!Number.isInteger(Number(nbrDecimals))) {
    nbrDecimals = 2;
  }
  const statuses = results.statuses;
  const rowOrder = Results.getTallyOrderAsArray(
        results.tally, results.statuses);
  const anyDestinyNotNormal = rowOrder.some(rowId => {
    const status = statuses[rowId];
    return status && status.destiny !== 'normal';
  });
    
  const table = createElement('table', 'statuses-table', 'simple-border');
  const tableContainer = getId('statuses-table-div')
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
  const thead = createElementIn(table, 'thead');
  const thRow = createElementIn(thead, 'tr', 'statuses-thead-row');
  let th;
  if (haveNames) {
    th = createElementIn(thRow, 'th', 'statuses-thead-name', 'statuses-name');
    th.innerHTML = 'Candidate<br/>Name';
  }
  th = createElementIn(thRow, 'th', 'statuses-thead-candId', 'statuses-candId');
  th.innerHTML = 'ID';
  th = createElementIn(thRow, 'th', 'statuses-thead-status', 'statuses-status');
  th.innerHTML = 'Status';
  th = createElementIn(thRow, 'th', 'statuses-thead-round', 'statuses-round');
  th.innerHTML = 'Round';
  th = createElementIn(thRow, 'th', 'statuses-thead-votes', 'statuses-votes');
  th.innerHTML = 'Votes';
  th = createElementIn(thRow, 'th', 'statuses-thead-keep', 'statuses-keep');
  th.innerHTML = 'Keep<br/>Factor';
  if (anyDestinyNotNormal) {
    th = createElementIn(thRow, 'th', 'statuses-thead-destiny',
          'statuses-destiny');
    th.innerHTML = 'Destiny';
  }
  const tbody = createElementIn(table, 'tbody');
  rowOrder.forEach((rowId, rix) => {
    const status = statuses[rowId];
    if (!status) {
      return;
    }
    const row = createElementIn(tbody, 'tr');
    if (status.status === 'elected') {
      addClass(row, 'statuses-row-elected');
    }
    if (status.status === 'defeated') {
      addClass(row, 'statuses-row-defeated');
    }
    if (status.destiny === 'protected') {
      addClass(row, 'statuses-row-protected');
    }
    if (status.destiny === 'excluded') {
      addClass(row, 'statuses-row-excluded');
    }
    
    let td;
    if (haveNames) {
      td = createElementIn(row, 'td', null, 'statuses-name');
      td.innerText = names[rowId] || rowId;
    }
    td = createElementIn(row, 'td', null, 'statuses-candId');
    td.innerText = rowId;
    td = createElementIn(row, 'td', null, 'statuses-status');
    td.innerText = status.status;
    td = createElementIn(row, 'td', null, 'statuses-round');
    td.innerText = status.nbrRound;
    td = createElementIn(row, 'td', null, 'statuses-votes');
    td.innerText = status.votes instanceof Decimal9 ?
          status.votes.toNumber().toFixed(nbrDecimals) :
          String(status.votes);
    td = createElementIn(row, 'td', null, 'statuses-keep');
    td.innerText = status.keepFactor instanceof Decimal9 ?
          status.keepFactor.toNumber().toFixed(nbrDecimals) :
          String(status.votes);
    if (anyDestinyNotNormal) {
      td = createElementIn(row, 'td', null, 'statuses-destiny');
      td.innerText = status.destiny === 'normal' ? '' : status.destiny;
    }
  });
}


function buildTallyTable(results, names) {
  if (recentResults === null) {
    return;
  }
  const selectNbrDecimals = getId('votes-nbr-decimal-places');
  let nbrDecimals = selectNbrDecimals.options[selectNbrDecimals.selectedIndex]
        .value;
  if (!Number.isInteger(Number(nbrDecimals))) {
    nbrDecimals = 2;
  }
  const statuses = results.statuses;
  const nbrRounds = Object.values(results.statuses)
    .reduce(((nbrRounds, candStatus) =>
        Math.max(nbrRounds, candStatus.nbrRound || 0)),
        0);

    
  const table = createElement('table', 'tally-table', 'simple-border');
  const tableContainer = getId('tally-table-div')
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
  const thead = createElementIn(table, 'thead');
  const thRow = createElementIn(thead, 'tr', 'tally-thead-row');
  const th = createElementIn(thRow, 'th', 'tally-thead-name', 'tally-name');
  th.innerHTML = 'Candidate<br/>Name';
  for (let rndNbr = 1; rndNbr <= nbrRounds; rndNbr++) {
    const th = createElementIn(thRow, 'th', 'tally-thead-round-'+rndNbr,
          'tally-round');
    th.innerHTML = 'Round<br\>'+rndNbr;
  }
  const tbody = createElementIn(table, 'tbody');
  const rowOrder = Results.getTallyOrderAsArray(
        results.tally, results.statuses);
  let isFirstOther = true;
  rowOrder.forEach((rowId, rix) => {
    const row = createElementIn(tbody, 'tr', null, 
          rowId === ':Iterations' ?
            'tally-row-iterations tally-row-other' :
          (rowId[0] === ':' ?
            'tally-row-other' +
                  (isFirstOther ? ' tally-row-first-other' : '') :
            ('tally-row-candidate' + (
                  Math.trunc(rix / 4) % 2 === 0 ?
                    ' tally-row-even' : ' tally-row-odd')
            )
          )
    );
    if (rowId[0] === ':' && isFirstOther) {
      isFirstOther = false;
    }
    const candStatus = statuses[rowId];
    
    const tdName = createElementIn(row, 'td',null,
        'tally-name' +
          (candStatus ?
            (candStatus.status === 'elected' ?
              ' tally-name-elected' :
              (candStatus.status === 'defeated' ?
                ' tally-name-defeated' :
                ''
              )
            ) :
            ''
          )  
        );
    tdName.innerText = names ? names[rowId] || rowId : rowId;
    results.tally[rowId].forEach((amount, roundIx) => {
      const tdClass = candStatus ?
          (
            candStatus.status === 'elected' ?
            ( roundIx + 1 === candStatus.nbrRound ?
                'tally-votes tally-now-elected' :
              roundIx + 1 > candStatus.nbrRound ?
                'tally-votes tally-was-elected' :
                'tally-votes'
            ) :
            (candStatus.status === 'defeated' &&
                  roundIx + 1 === candStatus.nbrRound ?
              'tally-votes tally-now-defeated' :
              'tally-votes'
            )
          ) :
          (
            rowId === ':Iterations' ?
              'tally-integer' :
              'tally-votes'
          );
      const td = createElementIn(row, 'td', null, tdClass);
      td.innerText = amount instanceof Decimal9 ?
            amount.toNumber().toFixed(nbrDecimals) :
            amount;
    });
  });

  

}


