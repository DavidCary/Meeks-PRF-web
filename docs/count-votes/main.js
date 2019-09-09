/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _meek_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(130);
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(170);
/* harmony import */ var _decimal9_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(158);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(165);
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(167);
/* harmony import */ var _util_basic_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(136);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(168);
/* harmony import */ var _dom_utils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(172);
/* harmony import */ var _convertEB_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(175);
/* harmony import */ var _tab_worker_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(182);
/* harmony import */ var _tab_worker_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_tab_worker_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(181);
/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(jssha__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(183);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(174);




























function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 */











var tabWorkerFileName = 'tab-worker.js';



var DBG = _debug_js__WEBPACK_IMPORTED_MODULE_39__["default"].setDBG(0); // level of debug traces; see ./debug.js for usage 

var PDBG = _debug_js__WEBPACK_IMPORTED_MODULE_39__["default"].PDBG;
var version = [1, 0, 0];
var versionStr = 'v1.0.0';
var tabWorker = null;
var nbrProgressMessages = 0;
var tabulatingInBackground = false;
var convertEb = null;
var convertEbElementIds = {
  inputTextarea: 'input-textarea',
  candidateIdsPanel: 'candidate-ids-panel',
  candidateIdsTable: 'candId-table',
  candidateIdsTbody: 'candId-table-body'
};
var inputDataWip = null;
var recentResults = null;
var recentResultsNames = null;
var votesDecimalPlaces = 2;
var USE_WORKER = true;
var isSetupRun = false;
document.addEventListener('DOMContentLoaded', setup);

if (document.readyState === 'complete') {
  setup();
}

function setup() {
  if (isSetupRun) {
    return;
  }

  isSetupRun = true;

  try {
    fillSampleInput();
    setOtherListeners();
    var browser = new ua_parser_js__WEBPACK_IMPORTED_MODULE_38___default.a().getBrowser();

    if (window.location.protocol === 'file:' || browser.name === 'IE') {
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-in-background-input').checked = false;
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-in-background-option'), 'hidden');
    }

    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('version').innerText = 'Version ' + version.join('.');
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-button'), 'click', function (evt) {
      try {
        if (tabulatingInBackground) {
          cancelTabulatingInBackground();
          resetResults('Tabulation canceled.');
          return;
        }

        resetResults('Tabulation starting');
        Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-message-holder'), 'tabulation-in-progress');
        var inputData = JSON.parse(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-textarea').value);

        if (Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-in-background-input').checked) {
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
  } catch (exc) {
    recoverFromError(exc);
  }
}

function setOtherListeners() {
  resetResults('--');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('read-file-button'), 'click', function (evt) {
    try {
      selectInputFile();
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('file-to-read-input'), 'change', function (evt) {
    try {
      readInputFile();
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-ok-button'), 'click', function (evt) {
    try {
      var errorStats = convertEb.checkForErrors();

      if (errorStats) {
        askToGenerate(errorStats);
        return;
      }

      var _buildInputTextWithCa = buildInputTextWithCandidateIds(),
          _buildInputTextWithCa2 = _slicedToArray(_buildInputTextWithCa, 2),
          message = _buildInputTextWithCa2[0],
          kind = _buildInputTextWithCa2[1];

      resetResults(message, kind);
      enableBase();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candidate-ids-panel'), 'hidden');
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-cancel-button'), 'click', function (evt) {
    try {
      cancelCandidateIds();
      resetResults('Canceled input change from file read.');
      enableBase();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candidate-ids-panel'), 'hidden');
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-help-button'), 'click', function (evt) {
    try {
      disableCandidateIdsPanel();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-help'), 'hidden');
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('ask-generate-button'), 'click', function (evt) {
    try {
      var _buildInputTextWithCa3 = buildInputTextWithCandidateIds(),
          _buildInputTextWithCa4 = _slicedToArray(_buildInputTextWithCa3, 2),
          message = _buildInputTextWithCa4[0],
          kind = _buildInputTextWithCa4[1];

      resetResults(message, kind);
      enableCandidateIdsPanel();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('ask-to-generate-panel'), 'hidden');
      enableBase();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candidate-ids-panel'), 'hidden');
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('ask-change-button'), 'click', function (evt) {
    try {
      enableCandidateIdsPanel();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('ask-error-stats').innerText = '';
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('ask-to-generate-panel'), 'hidden');
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('sample-input-button'), 'click', function (evt) {
    try {
      resetResults('--');
      fillSampleInput();
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-help-button'), 'click', function (evt) {
    try {
      disableBase();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-help'), 'hidden');
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('close-input-help-button'), 'click', function (evt) {
    try {
      if (Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["hasClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candidate-ids-panel'), 'hidden')) {
        enableBase();
      }

      enableCandidateIdsPanel();
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-help'), 'hidden');
    } catch (exc) {
      recoverFromError(exc);
    }
  });
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["listen"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('votes-nbr-decimal-places'), 'change', function (evt) {
    try {
      /*      if(hasClass(getId('candidate-ids-panel'), 'hidden')) {
              enableBase();
            }
            enableCandidateIdsPanel();
            addClass(getId('input-help'), 'hidden');
      */
      buildStatusesTable(recentResults, recentResultsNames);
      buildTallyTable(recentResults, recentResultsNames);
    } catch (exc) {
      recoverFromError(exc);
    }
  });
}

function askToGenerate(errorStats) {
  var errorStatsMessage = '<ul class="no-markers">\n';

  if (errorStats.nbrDuplicates) {
    errorStatsMessage += '<li>' + errorStats.nbrDuplicates + ' candidate IDs are not unique</li>\n';
  }

  if (errorStats.nbrOwnErrors) {
    errorStatsMessage += '<li>' + errorStats.nbrOwnErrors + ' candidate ID' + (errorStats.nbrOwnErrors > 1 ? 's have invalid values, possibly because they\n' + ' contain invalid or problematic characters' : ' has an invalid value, possibly because it\n' + ' contains an invalid or problematic character.') + '</li>\n';
  }

  if (errorStats.nbrOwnErrors && errorStats.nbrDuplicates) {
    errorStatsMessage += '<li>' + errorStats.nbrInError + ' ranking codes are in error for one of the above reasons.</li>\n';
  }

  errorStatsMessage += '</ul>\n';
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('ask-error-stats').innerHTML = errorStatsMessage;
  disableCandidateIdsPanel();
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('ask-to-generate-panel'), 'hidden');
}

function disableBase() {
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-textarea').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-button').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('read-file-button').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('sample-input-button').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-help-button').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-in-background-input').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-in-background-label').setAttribute('disabled', '');
}

function enableBase() {
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-textarea').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-button').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('read-file-button').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('sample-input-button').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-help-button').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-in-background-input').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-in-background-label').removeAttribute('disabled');
}

function disableCandidateIdsPanel() {
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-ok-button').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-cancel-button').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-help-button').setAttribute('disabled', '');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-table-body').querySelectorAll('input').forEach(function (element) {
    element.setAttribute('disabled', '');
  });
}

function enableCandidateIdsPanel() {
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-ok-button').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-cancel-button').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-help-button').removeAttribute('disabled');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-table-body').querySelectorAll('input').forEach(function (element) {
    element.removeAttribute('disabled');
  });
}

function resetResults(messageText) {
  var kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-message').innerHTML = String(messageText);
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('elected').innerHTML = 'tbd';
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('json').innerHTML = 'tbd';
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('statuses-table-div').innerHTML = 'tbd';
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tally-table-div').innerHTML = 'tbd';
  recentResults = null;
  recentResultsNames = null;
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-progress').style.height = 0;
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-progress').style.width = 0;
  var messageHolder = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-message-holder');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(messageHolder, 'tabulation-in-progress');

  if (kind === 'ok') {
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(messageHolder, 'ok');
  } else {
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(messageHolder, 'ok');
  }

  if (kind === 'error') {
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(messageHolder, 'error');
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(messageHolder, 'mono');
  } else {
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(messageHolder, 'error');
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(messageHolder, 'mono');
  }
}

function selectInputFile() {
  var fileToReadInput = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('file-to-read-input');
  fileToReadInput.click();
}

function readInputFile() {
  try {
    var fileToReadInput = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('file-to-read-input');
    var fileToRead = fileToReadInput.files[0];

    if (!fileToRead) {
      resetResults('No input file was selected to read.');
      return;
    }

    resetResults('Reading file ...');
    var fileReader = new FileReader();
    fileReader.addEventListener('error', function (evt) {
      try {
        throw 'Error: failure to read input file.';
      } catch (exc) {
        console.error(String(exc));
        console.error(evt);
        recoverFromError(exc);
      }
    });
    fileReader.addEventListener('load', function (evt) {
      try {
        convertEb = new _convertEB_js__WEBPACK_IMPORTED_MODULE_35__["default"](fileToReadInput.value, fileReader.result, convertEbElementIds);
        var isEb = convertEb.isEbBallotFile();

        if (!isEb) {
          Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-textarea').value = fileReader.result;
          var message = 'Completed reading input from "' + convertEb.safeFileName + '"';
          resetResults(message, 'ok');
          convertEb = null;
          return;
        }

        resetResults('Converting an EB ballot file ...');
        setTimeout(function () {
          try {
            var _message = convertEb.createCandidateIdsForReview();

            if (_message) {
              convertEb = null;
              resetResults(_message, 'error');
              return;
            }

            _message = 'EB ballot file "' + convertEb.safeFileName + '": ' + convertEb.indexedBallots.length + ' ballots, ' + convertEb.candidateNames.length + ' candidates: ' + convertEb.nbrListedCandidates + ' listed, ' + convertEb.nbrWriteinCandidates + ' write-in';
            activateCandidateIdsPanel(_message);
          } catch (exc) {
            recoverFromError(exc);
          }
        }, 1);
      } catch (exc) {
        recoverFromError(exc);
      }
    });
    fileReader.readAsText(fileToRead);
  } catch (exc) {
    recoverFromError(exc);
  }
}

function activateCandidateIdsPanel(message) {
  resetCandidateIdsMessage(message);
  disableBase();
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candidate-ids-panel'), 'hidden');
}

function resetCandidateIdsMessage(message) {
  var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var rcMessage = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('candId-message');
  rcMessage.innerHTML = String(message);

  if (isError) {
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(rcMessage, 'error');
  } else {
    Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(rcMessage, 'error');
  }
}

function buildInputTextWithCandidateIds() {
  convertEb.replaceInputText();
  var message = 'Input successfully converted from EB ballot file "' + convertEb.safeFileName + '"<br/>' + '&nbsp;&nbsp;with ' + convertEb.indexedBallots.length + ' ballots, ' + convertEb.candidateNames.length + ' candidates: ' + convertEb.nbrListedCandidates + ' listed, ' + convertEb.nbrWriteinCandidates + ' write-in';
  convertEb = null;
  return [message, 'ok'];
}

function cancelCandidateIds() {}

function fillSampleInput() {
  var shaHasher = new jssha__WEBPACK_IMPORTED_MODULE_37___default.a('SHA-256', 'TEXT');
  shaHasher.update('abc');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('input-textarea').value = "{\n  \"nbrSeatsToFill\": 3\n  ,\"maxRankingLevels\": 6\n  ,\"options\": { }\n  ,\"excluded\": \"\"\n  ,\"protected\": \"\"\n  ,\"tieBreaker\": \" F A E B D C\"\n  ,\"candidates\": \" A B C D E F\"\n  ,\"names\": {\n  }\n  ,\"randomSeed\": \"xyz\"\n  ,\"ballots\": [\n    [7,  \" A B C D E F\"],\n    [19, \" B A C F E D\"],\n    [14, \" C A B E F D\"],\n    [2,  \" D\"],\n    [11, \" D E F A B C\"],\n    [30, \" E F D C A B\"],\n    [17, \" F D E B A C\"]\n  ]\n}";
  return;
}

function tabulateWithWorker(inputData) {
  if (tabWorker) {
    tabWorker.terminate();
    tabWorker = null;
  }

  nbrProgressMessages = 0;
  tabWorker = new _tab_worker_js__WEBPACK_IMPORTED_MODULE_36___default.a();

  tabWorker.onmessage = function (evt) {
    var message = evt.data;

    if (_typeof(message) != 'object') {
      throw TypeError('Error: Message from tabulation worker' + ' is not an object.');
    }

    if (message.type === 'progress') {
      nbrProgressMessages++;
      var progressBar = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-progress');
      progressBar.style.height = 0;
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-message').innerHTML = String(message.data.description);
      progressBar.style.height = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-message-box').offsetHeight + 'px';
      progressBar.style.width = message.data.progressFraction * 100 + '%';
    } else if (message.type === 'results') {
      restoreFromTransfer(message);
      cancelTabulatingInBackground();
      showTabulationResults(message.data, inputData);
    } else if (message.type === 'error') {
      cancelTabulatingInBackground();
      resetResults('', 'error');
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-message').innerHTML = message.message.replace(/</g, '&lt;').replace(/\n/g, '<br/>');
    }
  };

  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-button'), 'cancel-action');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-button').innerHTML = '&nbsp;Cancel&nbsp;';
  tabulatingInBackground = true;
  tabWorker.postMessage({
    type: 'init',
    data: inputData
  });
  tabWorker.postMessage({
    type: 'tabulate'
  });
}

function cancelTabulatingInBackground() {
  if (tabWorker) {
    tabWorker.terminate();
    tabWorker = null;
  }

  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["removeClass"])(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-button'), 'cancel-action');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tabulate-button').innerHTML = 'Count Votes';
  tabulatingInBackground = false;
}

function restoreFromTransfer(message) {
  var results = message.data;

  if (!(_typeof(results) == 'object' && results.elected instanceof Set && _typeof(results) == 'object' && _typeof(results.tally) == 'object')) {
    return;
  }

  for (var candidate in results.statuses) {
    var status = results.statuses[candidate];

    if (_typeof(status.votes) == 'object' && status.votes !== null && '_valueAsInteger' in status.votes) {
      status.votes = new _decimal9_js__WEBPACK_IMPORTED_MODULE_29__["Decimal9"](status.votes._valueAsInteger, -9);
    }

    if (_typeof(status.keepFactor) == 'object' && status.keepFactor !== null && '_valueAsInteger' in status.keepFactor) {
      status.keepFactor = new _decimal9_js__WEBPACK_IMPORTED_MODULE_29__["Decimal9"](status.keepFactor._valueAsInteger, -9);
    }

    results.statuses[candidate] = new _status_js__WEBPACK_IMPORTED_MODULE_31__["Status"](candidate, status.votes, status.nbrRound, status.status, status.keepFactor, status.destiny);
  }

  var _loop = function _loop(category) {
    if (category === ':Iterations') {
      return "continue";
    }

    var votesArray = results.tally[category];
    votesArray.forEach(function (voteCount, ix) {
      if ('_valueAsInteger' in voteCount) {
        votesArray[ix] = new _decimal9_js__WEBPACK_IMPORTED_MODULE_29__["Decimal9"](voteCount._valueAsInteger, -9);
      }
    });
  };

  for (var category in results.tally) {
    var _ret = _loop(category);

    if (_ret === "continue") continue;
  }

  message.data = new _results_js__WEBPACK_IMPORTED_MODULE_30__["default"](results.elected, results.statuses, results.tally);
  return;
}

function recoverFromError(exc) {
  resetResults('', 'error');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('result-message').innerHTML = String(exc).replace(/</g, '&lt;').replace(/\n/g, '<br/>');
}

function tabulateScheduled(inputData) {
  setTimeout(function () {
    try {
      var results = new _meek_js__WEBPACK_IMPORTED_MODULE_27__["Tabulation"](inputData.nbrSeatsToFill, inputData.candidates, inputData.ballots, inputData.maxRankingLevels, inputData.tieBreaker, inputData.excluded, inputData.protected, inputData.options).tabulate();
      showTabulationResults(results, inputData);
    } catch (exc) {
      recoverFromError(exc);
    }
  }, 1);
}

function showTabulationResults(results, inputData) {
  var elected = results.elected,
      statuszz = results.statuszz,
      tally = results.tally;
  resetResults('Tabulation complete.', 'ok');
  var electedAsString = _util_basic_js__WEBPACK_IMPORTED_MODULE_32__["UBF"].show(Array.from(elected));

  if (inputData.names && _typeof(inputData.names) == 'object') {
    var electedNames = Array.from(elected).map(function (elected) {
      return inputData.names[elected] ? String(inputData.names[elected]).slice(0, 60) : elected;
    });
    electedNames.sort();
    electedAsString += '\n' + electedNames.join('\n');
  }

  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('elected').innerHTML = electedAsString.replace(/</g, '&lt;').replace(/\n/g, '<br/>');
  var jsonStr = '{\n';
  jsonStr += results.getElectedAsString() + '\n';
  jsonStr += results.getStatusesAsString(',') + '\n';
  jsonStr += results.getTallyAsString(',') + '\n';

  if ('names' in inputData && _typeof(inputData.names) === 'object') {
    var namesItems = _util_basic_js__WEBPACK_IMPORTED_MODULE_32__["UBF"].getItems(inputData.names);

    if (namesItems.length) {
      var namesLines = namesItems.map(function (item) {
        return '    "' + item.name + '": "' + item.value + '"';
      });
      jsonStr += '  ,"names": {\n' + namesLines.join(',\n') + '\n  }\n';
    }
  }

  jsonStr += '}';
  jsonStr = jsonStr.replace(/</g, '&lt;').replace(/\n/g, '<br/>');
  Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('json').innerHTML = jsonStr;
  recentResults = results;
  recentResultsNames = inputData.names;
  buildStatusesTable(recentResults, recentResultsNames);
  buildTallyTable(recentResults, recentResultsNames);
}

function buildStatusesTable(results, names) {
  if (recentResults === null) {
    return;
  }

  var haveNames = names && _typeof(names) === 'object';
  var selectNbrDecimals = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('votes-nbr-decimal-places');
  var nbrDecimals = selectNbrDecimals.options[selectNbrDecimals.selectedIndex].value;

  if (!Number.isInteger(Number(nbrDecimals))) {
    nbrDecimals = 2;
  }

  var statuses = results.statuses;
  var rowOrder = _results_js__WEBPACK_IMPORTED_MODULE_30__["default"].getTallyOrderAsArray(results.tally, results.statuses);
  var anyDestinyNotNormal = rowOrder.some(function (rowId) {
    var status = statuses[rowId];
    return status && status.destiny !== 'normal';
  });
  var table = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElement"])('table', 'statuses-table', 'simple-border');
  var tableContainer = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('statuses-table-div');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
  var thead = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(table, 'thead');
  var thRow = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thead, 'tr', 'statuses-thead-row');
  var th;

  if (haveNames) {
    th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'statuses-thead-name', 'statuses-name');
    th.innerHTML = 'Candidate<br/>Name';
  }

  th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'statuses-thead-candId', 'statuses-candId');
  th.innerHTML = 'ID';
  th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'statuses-thead-status', 'statuses-status');
  th.innerHTML = 'Status';
  th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'statuses-thead-round', 'statuses-round');
  th.innerHTML = 'Round';
  th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'statuses-thead-votes', 'statuses-votes');
  th.innerHTML = 'Votes';
  th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'statuses-thead-keep', 'statuses-keep');
  th.innerHTML = 'Keep<br/>Factor';

  if (anyDestinyNotNormal) {
    th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'statuses-thead-destiny', 'statuses-destiny');
    th.innerHTML = 'Destiny';
  }

  var tbody = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(table, 'tbody');
  rowOrder.forEach(function (rowId, rix) {
    var status = statuses[rowId];

    if (!status) {
      return;
    }

    var row = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(tbody, 'tr');

    if (status.status === 'elected') {
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(row, 'statuses-row-elected');
    }

    if (status.status === 'defeated') {
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(row, 'statuses-row-defeated');
    }

    if (status.destiny === 'protected') {
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(row, 'statuses-row-protected');
    }

    if (status.destiny === 'excluded') {
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["addClass"])(row, 'statuses-row-excluded');
    }

    var td;

    if (haveNames) {
      td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'statuses-name');
      td.innerText = names[rowId] || rowId;
    }

    td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'statuses-candId');
    td.innerText = rowId;
    td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'statuses-status');
    td.innerText = status.status;
    td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'statuses-round');
    td.innerText = status.nbrRound;
    td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'statuses-votes');
    td.innerText = status.votes instanceof _decimal9_js__WEBPACK_IMPORTED_MODULE_29__["Decimal9"] ? status.votes.toNumber().toFixed(nbrDecimals) : String(status.votes);
    td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'statuses-keep');
    td.innerText = status.keepFactor instanceof _decimal9_js__WEBPACK_IMPORTED_MODULE_29__["Decimal9"] ? status.keepFactor.toNumber().toFixed(nbrDecimals) : String(status.votes);

    if (anyDestinyNotNormal) {
      td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'statuses-destiny');
      td.innerText = status.destiny === 'normal' ? '' : status.destiny;
    }
  });
}

function buildTallyTable(results, names) {
  if (recentResults === null) {
    return;
  }

  var selectNbrDecimals = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('votes-nbr-decimal-places');
  var nbrDecimals = selectNbrDecimals.options[selectNbrDecimals.selectedIndex].value;

  if (!Number.isInteger(Number(nbrDecimals))) {
    nbrDecimals = 2;
  }

  var statuses = results.statuses;
  var nbrRounds = Object.values(results.statuses).reduce(function (nbrRounds, candStatus) {
    return Math.max(nbrRounds, candStatus.nbrRound || 0);
  }, 0);
  var table = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElement"])('table', 'tally-table', 'simple-border');
  var tableContainer = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["getId"])('tally-table-div');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
  var thead = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(table, 'thead');
  var thRow = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thead, 'tr', 'tally-thead-row');
  var th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'tally-thead-name', 'tally-name');
  th.innerHTML = 'Candidate<br/>Name';

  for (var rndNbr = 1; rndNbr <= nbrRounds; rndNbr++) {
    var _th = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(thRow, 'th', 'tally-thead-round-' + rndNbr, 'tally-round');

    _th.innerHTML = 'Round<br\>' + rndNbr;
  }

  var tbody = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(table, 'tbody');
  var rowOrder = _results_js__WEBPACK_IMPORTED_MODULE_30__["default"].getTallyOrderAsArray(results.tally, results.statuses);
  var isFirstOther = true;
  rowOrder.forEach(function (rowId, rix) {
    var row = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(tbody, 'tr', null, rowId === ':Iterations' ? 'tally-row-iterations tally-row-other' : rowId[0] === ':' ? 'tally-row-other' + (isFirstOther ? ' tally-row-first-other' : '') : 'tally-row-candidate' + (Math.trunc(rix / 4) % 2 === 0 ? ' tally-row-even' : ' tally-row-odd'));

    if (rowId[0] === ':' && isFirstOther) {
      isFirstOther = false;
    }

    var candStatus = statuses[rowId];
    var tdName = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, 'tally-name' + (candStatus ? candStatus.status === 'elected' ? ' tally-name-elected' : candStatus.status === 'defeated' ? ' tally-name-defeated' : '' : ''));
    tdName.innerText = names ? names[rowId] || rowId : rowId;
    results.tally[rowId].forEach(function (amount, roundIx) {
      var tdClass = candStatus ? candStatus.status === 'elected' ? roundIx + 1 === candStatus.nbrRound ? 'tally-votes tally-now-elected' : roundIx + 1 > candStatus.nbrRound ? 'tally-votes tally-was-elected' : 'tally-votes' : candStatus.status === 'defeated' && roundIx + 1 === candStatus.nbrRound ? 'tally-votes tally-now-defeated' : 'tally-votes' : rowId === ':Iterations' ? 'tally-integer' : 'tally-votes';
      var td = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_34__["createElementIn"])(row, 'td', null, tdClass);
      td.innerText = amount instanceof _decimal9_js__WEBPACK_IMPORTED_MODULE_29__["Decimal9"] ? amount.toNumber().toFixed(nbrDecimals) : amount;
    });
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var global = __webpack_require__(3);
var IS_PURE = __webpack_require__(25);
var DESCRIPTORS = __webpack_require__(6);
var NATIVE_SYMBOL = __webpack_require__(45);
var fails = __webpack_require__(7);
var has = __webpack_require__(16);
var isArray = __webpack_require__(46);
var isObject = __webpack_require__(15);
var anObject = __webpack_require__(21);
var toObject = __webpack_require__(47);
var toIndexedObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(14);
var createPropertyDescriptor = __webpack_require__(9);
var nativeObjectCreate = __webpack_require__(48);
var objectKeys = __webpack_require__(50);
var getOwnPropertyNamesModule = __webpack_require__(36);
var getOwnPropertyNamesExternal = __webpack_require__(52);
var getOwnPropertySymbolsModule = __webpack_require__(43);
var getOwnPropertyDescriptorModule = __webpack_require__(5);
var definePropertyModule = __webpack_require__(20);
var propertyIsEnumerableModule = __webpack_require__(8);
var hide = __webpack_require__(19);
var redefine = __webpack_require__(22);
var shared = __webpack_require__(23);
var sharedKey = __webpack_require__(29);
var hiddenKeys = __webpack_require__(31);
var uid = __webpack_require__(30);
var wellKnownSymbol = __webpack_require__(53);
var wrappedWellKnownSymbolModule = __webpack_require__(54);
var defineWellKnownSymbol = __webpack_require__(55);
var setToStringTag = __webpack_require__(56);
var InternalStateModule = __webpack_require__(27);
var $forEach = __webpack_require__(57).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var JSON = global.JSON;
var nativeJSONStringify = JSON && JSON.stringify;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON && $({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var index = 1;
    var replacer, $replacer;
    while (arguments.length > index) args.push(arguments[index++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(5).f;
var hide = __webpack_require__(19);
var redefine = __webpack_require__(22);
var setGlobal = __webpack_require__(24);
var copyConstructorProperties = __webpack_require__(32);
var isForced = __webpack_require__(44);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(9);
var toIndexedObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(14);
var has = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(17);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(11);
var requireObjectCoercible = __webpack_require__(13);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);
var classof = __webpack_require__(12);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(7);
var createElement = __webpack_require__(18);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(15);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(20);
var createPropertyDescriptor = __webpack_require__(9);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(17);
var anObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(14);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var shared = __webpack_require__(23);
var hide = __webpack_require__(19);
var has = __webpack_require__(16);
var setGlobal = __webpack_require__(24);
var nativeFunctionToString = __webpack_require__(26);
var InternalStateModule = __webpack_require__(27);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var setGlobal = __webpack_require__(24);
var IS_PURE = __webpack_require__(25);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.2.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(19);

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23);

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(28);
var global = __webpack_require__(3);
var isObject = __webpack_require__(15);
var hide = __webpack_require__(19);
var objectHas = __webpack_require__(16);
var sharedKey = __webpack_require__(29);
var hiddenKeys = __webpack_require__(31);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var nativeFunctionToString = __webpack_require__(26);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23);
var uid = __webpack_require__(30);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(16);
var ownKeys = __webpack_require__(33);
var getOwnPropertyDescriptorModule = __webpack_require__(5);
var definePropertyModule = __webpack_require__(20);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(34);
var getOwnPropertyNamesModule = __webpack_require__(36);
var getOwnPropertySymbolsModule = __webpack_require__(43);
var anObject = __webpack_require__(21);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(35);
var global = __webpack_require__(3);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(42);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(16);
var toIndexedObject = __webpack_require__(10);
var indexOf = __webpack_require__(38).indexOf;
var hiddenKeys = __webpack_require__(31);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var toLength = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(41);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(12);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(13);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var defineProperties = __webpack_require__(49);
var enumBugKeys = __webpack_require__(42);
var hiddenKeys = __webpack_require__(31);
var html = __webpack_require__(51);
var documentCreateElement = __webpack_require__(18);
var sharedKey = __webpack_require__(29);
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(20);
var anObject = __webpack_require__(21);
var objectKeys = __webpack_require__(50);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(42);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(34);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var nativeGetOwnPropertyNames = __webpack_require__(36).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var shared = __webpack_require__(23);
var uid = __webpack_require__(30);
var NATIVE_SYMBOL = __webpack_require__(45);

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(53);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(35);
var has = __webpack_require__(16);
var wrappedWellKnownSymbolModule = __webpack_require__(54);
var defineProperty = __webpack_require__(20).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(20).f;
var has = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(53);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(58);
var IndexedObject = __webpack_require__(11);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var arraySpeciesCreate = __webpack_require__(60);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(59);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var isArray = __webpack_require__(46);
var wellKnownSymbol = __webpack_require__(53);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(3);
var has = __webpack_require__(16);
var isObject = __webpack_require__(15);
var defineProperty = __webpack_require__(20).f;
var copyConstructorProperties = __webpack_require__(32);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(55);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var forEach = __webpack_require__(64);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(57).forEach;
var sloppyArrayMethod = __webpack_require__(65);

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var from = __webpack_require__(67);
var checkCorrectnessOfIteration = __webpack_require__(74);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(58);
var toObject = __webpack_require__(47);
var callWithSafeIterationClosing = __webpack_require__(68);
var isArrayIteratorMethod = __webpack_require__(69);
var toLength = __webpack_require__(39);
var createProperty = __webpack_require__(71);
var getIteratorMethod = __webpack_require__(72);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(53);
var Iterators = __webpack_require__(70);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(14);
var definePropertyModule = __webpack_require__(20);
var createPropertyDescriptor = __webpack_require__(9);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(73);
var Iterators = __webpack_require__(70);
var wellKnownSymbol = __webpack_require__(53);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(53);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(53);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(10);
var addToUnscopables = __webpack_require__(76);
var Iterators = __webpack_require__(70);
var InternalStateModule = __webpack_require__(27);
var defineIterator = __webpack_require__(77);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(53);
var create = __webpack_require__(48);
var hide = __webpack_require__(19);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var createIteratorConstructor = __webpack_require__(78);
var getPrototypeOf = __webpack_require__(80);
var setPrototypeOf = __webpack_require__(82);
var setToStringTag = __webpack_require__(56);
var hide = __webpack_require__(19);
var redefine = __webpack_require__(22);
var wellKnownSymbol = __webpack_require__(53);
var IS_PURE = __webpack_require__(25);
var Iterators = __webpack_require__(70);
var IteratorsCore = __webpack_require__(79);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(79).IteratorPrototype;
var create = __webpack_require__(48);
var createPropertyDescriptor = __webpack_require__(9);
var setToStringTag = __webpack_require__(56);
var Iterators = __webpack_require__(70);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(80);
var hide = __webpack_require__(19);
var has = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(53);
var IS_PURE = __webpack_require__(25);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(16);
var toObject = __webpack_require__(47);
var sharedKey = __webpack_require__(29);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(81);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var aPossiblePrototype = __webpack_require__(83);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var IndexedObject = __webpack_require__(11);
var toIndexedObject = __webpack_require__(10);
var sloppyArrayMethod = __webpack_require__(65);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $map = __webpack_require__(57).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(86);

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);
var wellKnownSymbol = __webpack_require__(53);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $reduce = __webpack_require__(88).left;
var sloppyArrayMethod = __webpack_require__(65);

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(59);
var toObject = __webpack_require__(47);
var IndexedObject = __webpack_require__(11);
var toLength = __webpack_require__(39);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var isObject = __webpack_require__(15);
var isArray = __webpack_require__(46);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);
var toIndexedObject = __webpack_require__(10);
var createProperty = __webpack_require__(71);
var arrayMethodHasSpeciesSupport = __webpack_require__(86);
var wellKnownSymbol = __webpack_require__(53);

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $some = __webpack_require__(57).some;
var sloppyArrayMethod = __webpack_require__(65);

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('some') }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var aFunction = __webpack_require__(59);
var toObject = __webpack_require__(47);
var fails = __webpack_require__(7);
var sloppyArrayMethod = __webpack_require__(65);

var nativeSort = [].sort;
var test = [1, 2, 3];

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(22);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var defineProperty = __webpack_require__(20).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.github.io/ecma262/#sec-math.trunc
$({ target: 'Math', stat: true }, {
  trunc: function trunc(it) {
    return (it > 0 ? floor : ceil)(it);
  }
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(3);
var isForced = __webpack_require__(44);
var redefine = __webpack_require__(22);
var has = __webpack_require__(16);
var classof = __webpack_require__(12);
var inheritIfRequired = __webpack_require__(96);
var toPrimitive = __webpack_require__(14);
var fails = __webpack_require__(7);
var create = __webpack_require__(48);
var getOwnPropertyNames = __webpack_require__(36).f;
var getOwnPropertyDescriptor = __webpack_require__(5).f;
var defineProperty = __webpack_require__(20).f;
var trim = __webpack_require__(97).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var setPrototypeOf = __webpack_require__(82);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(13);
var whitespaces = __webpack_require__(98);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var isInteger = __webpack_require__(100);

// `Number.isInteger` method
// https://tc39.github.io/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.github.io/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var toInteger = __webpack_require__(40);
var thisNumberValue = __webpack_require__(102);
var repeat = __webpack_require__(103);
var fails = __webpack_require__(7);

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(12);

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(40);
var requireObjectCoercible = __webpack_require__(13);

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(22);
var toString = __webpack_require__(105);

var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(73);
var wellKnownSymbol = __webpack_require__(53);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var $values = __webpack_require__(107).values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var objectKeys = __webpack_require__(50);
var toIndexedObject = __webpack_require__(10);
var propertyIsEnumerable = __webpack_require__(8).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var exec = __webpack_require__(109);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(110);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(21);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(22);
var anObject = __webpack_require__(21);
var fails = __webpack_require__(7);
var flags = __webpack_require__(110);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(113);
var collectionStrong = __webpack_require__(118);

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (get) {
  return function Set() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var global = __webpack_require__(3);
var isForced = __webpack_require__(44);
var redefine = __webpack_require__(22);
var InternalMetadataModule = __webpack_require__(114);
var iterate = __webpack_require__(116);
var anInstance = __webpack_require__(117);
var isObject = __webpack_require__(15);
var fails = __webpack_require__(7);
var checkCorrectnessOfIteration = __webpack_require__(74);
var setToStringTag = __webpack_require__(56);
var inheritIfRequired = __webpack_require__(96);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var ADDER = IS_MAP ? 'set' : 'add';
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(31);
var isObject = __webpack_require__(15);
var has = __webpack_require__(16);
var defineProperty = __webpack_require__(20).f;
var uid = __webpack_require__(30);
var FREEZING = __webpack_require__(115);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var isArrayIteratorMethod = __webpack_require__(69);
var toLength = __webpack_require__(39);
var bind = __webpack_require__(58);
var getIteratorMethod = __webpack_require__(72);
var callWithSafeIterationClosing = __webpack_require__(68);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(20).f;
var create = __webpack_require__(48);
var redefineAll = __webpack_require__(119);
var bind = __webpack_require__(58);
var anInstance = __webpack_require__(117);
var iterate = __webpack_require__(116);
var defineIterator = __webpack_require__(77);
var setSpecies = __webpack_require__(120);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(114).fastKey;
var InternalStateModule = __webpack_require__(27);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(22);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(34);
var definePropertyModule = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(53);
var DESCRIPTORS = __webpack_require__(6);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(122).charAt;
var InternalStateModule = __webpack_require__(27);
var defineIterator = __webpack_require__(77);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);
var requireObjectCoercible = __webpack_require__(13);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(124);
var anObject = __webpack_require__(21);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var toInteger = __webpack_require__(40);
var requireObjectCoercible = __webpack_require__(13);
var advanceStringIndex = __webpack_require__(125);
var regExpExec = __webpack_require__(126);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(19);
var redefine = __webpack_require__(22);
var fails = __webpack_require__(7);
var wellKnownSymbol = __webpack_require__(53);
var regexpExec = __webpack_require__(109);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(122).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(12);
var regexpExec = __webpack_require__(109);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(128);
var forEach = __webpack_require__(64);
var hide = __webpack_require__(19);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    hide(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(128);
var ArrayIteratorMethods = __webpack_require__(75);
var hide = __webpack_require__(19);
var wellKnownSymbol = __webpack_require__(53);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      hide(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabulate", function() { return tabulate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabulation", function() { return Tabulation; });
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(133);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _util_basic_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(136);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(157);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(165);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(166);
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(167);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(168);
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(170);






















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Meek
 *
 * @summary Tabulate RCV / STV per prfound.org's Meek's method.
 */






 // with TYPETREE, force override of default ballotTree option:
//   0 = no override,
//   1 = no tree, list of lists,
//   2 = static tree,
//   3 = dynamic tree

var TYPETREE = 0;
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

function tabulate(nbrSeatsToFill, candidates, ballots, maxRankingLevels, tieBreaker, excluded, protectedzz) {
  var options = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
  var progressCallback = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
  return new Tabulation(nbrSeatsToFill, candidates, ballots, maxRankingLevels, tieBreaker, excluded, protectedzz, options, progressCallback).tabulate();
}
/**
 * The nodes of a ballot tree.
 *
 * A node represents a candidate Id for a candidate or a tabulation
 * category for exhausted votes (such as overvotes, abstentions, or
 * other exhausted votes), or a node can be the root of the ballot tree
 * which does not represent any of those other things.
 */

var RankingNode =
/**
 * @param {string} name - The candidate Id of the candidate that the
 *   node represents, a tabulation category label, or ':root' for the
 *   root node.
 */
function RankingNode(name) {
  _classCallCheck(this, RankingNode);

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
};
/** A collection of statistics for building and using a ballot tree.
 *
 *  Supports accumulating counts and elapsed times from one instance
 *  into another.
 */


var NodeStats =
/*#__PURE__*/
function () {
  /**
   * @param {string} label - A descriptive name for the use of this
   *   instance.
   */
  function NodeStats(label) {
    _classCallCheck(this, NodeStats);

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


  _createClass(NodeStats, [{
    key: "toString",
    value: function toString() {
      var result = String(this.label) + ': nodes=' + this.nbrNodes + ' leaves=' + this.nbrLeaves + ' visited=' + this.nbrVisited + ' rounds=' + this.nbrRounds + ' iterations=' + this.nbrIterations + ' added=' + this.nbrAdded + ' deleted=' + this.nbrDeleted + ' elapsed=' + this.elapsedTime.toFixed(3);
      return result;
    }
    /** Accumulate the counts, etc. from another NodeStats instance
     * into this one.
     * @param {NodeStats} other - Statistics to add to this. */

  }, {
    key: "add",
    value: function add(other) {
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

  }, {
    key: "setElapsedTime",
    value: function setElapsedTime() {
      var now = Date.now();
      var moreTime = (now - this.startTime) / 1000;
      this.elapsedTime += moreTime;
      this.startTime = now;
      return moreTime;
    }
  }]);

  return NodeStats;
}();
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


var Tabulation =
/*#__PURE__*/
function () {
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
  function Tabulation(nbrSeatsToFill, candidates, ballots, maxRankingLevels, tieBreaker) {
    var excluded = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    var protectedzz = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
    var options = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
    var progressCallback = arguments.length > 8 ? arguments[8] : undefined;

    _classCallCheck(this, Tabulation);

    try {
      this._nbrSeatsToFill = nbrSeatsToFill;
      this._candidates = candidates;
      this._ballots = ballots;
      this._maxRankingLevels = maxRankingLevels;
      this._tieBreaker = tieBreaker;
      this._excluded = excluded;
      this._protectedzz = protectedzz;
      this._options = options;

      if (progressCallback instanceof _progress_js__WEBPACK_IMPORTED_MODULE_27__["Progress"]) {
        this._progress = progressCallback;

        if (!this._progress.nbrBallotGroups || this._progress.nbrBallotGroups === 1) {
          this._progress.setNbrBallotGroups(Array.isArray(this._ballots) ? this._ballots.length : 10);
        }
      } else {
        this._progress = new _progress_js__WEBPACK_IMPORTED_MODULE_27__["Progress"](progressCallback);

        this._progress.setNbrBallotGroups(Array.isArray(this._ballots) ? this._ballots.length : 10);
      }

      var validator = new _validate_js__WEBPACK_IMPORTED_MODULE_26__["Validator"]();
      this._nbrSeatsToFill = validator.nbrSeatsToFill(this._nbrSeatsToFill);
      this._candidates = validator.candidates(this._candidates);
      this._maxRankingLevels = validator.maxRankingLevels(this._maxRankingLevels);
      this._tieBreaker = validator.tieBreaker(this._tieBreaker, this._candidates);
      this._excluded = validator.excluded(this._excluded, this._candidates);
      this._protectedzz = validator.protectedCandidates(this._protectedzz, this._candidates, this._excluded, this._nbrSeatsToFill);
      var optionsValidated = validator.options(this._options);
      this._options = {};
      this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alternativeDefeats._value] = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alternativeDefeats.never;
      this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs._value] = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs.ifNoNewElecteds;
      this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alwaysCountVotes._value] = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alwaysCountVotes.yes;
      this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree._value] = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.dynamic;

      if ([1, 2, 3].indexOf(TYPETREE) >= 0) {
        this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree._value] = [null, _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.none, _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.static, _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.dynamic][TYPETREE];
      }

      Object.assign(this._options, optionsValidated);

      if (this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.static) {
        this._progress.useBallotTree();
      }

      if (this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.dynamic) {
        this._progress.useBallotTree(true);
      }

      this._progress.setNbrOriginalHopefuls(this._candidates.length - this._excluded.size);

      this._ballots = validator.ballots(this._ballots, this._candidates, this._maxRankingLevels, this._progress);
    } catch (exc) {
      console.debug(_util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].describeError(exc));

      if (exc instanceof _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekValueError"] || exc instanceof _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"]) {
        throw exc;
      }

      console.error(_util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].describeError(exc));

      if (exc instanceof RangeError || exc instanceof ReferenceError || exc instanceof SyntaxError || exc instanceof TypeError) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"]('Likely Meek implementation error:', [], exc);
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


  _createClass(Tabulation, [{
    key: "tabulate",
    value: function tabulate() {
      var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var results;

      try {
        this._testing = {
          'stopAtBegin': null,
          'stopAfterStatusUpdate': null,
          'stopAtEnd': null
        };
        Object.assign(this._testing, kwargs);
        results = this._tabulateMeeks();
      } catch (exc) {
        if (exc instanceof _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekValueError"] || exc instanceof _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"]) {
          throw exc;
        }

        console.error(_util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].describeError(exc));

        if (exc instanceof RangeError || exc instanceof ReferenceError || exc instanceof SyntaxError || exc instanceof TypeError) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"]('Likely Meek implementation error:', [], exc);
        }

        throw exc;
      }

      return results;
    }
  }, {
    key: "_otherCategories",
    value: function _otherCategories() {
      var _this = this;

      var result = {};
      _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OTHER_LABELS_LIST.forEach(function (otherLabel) {
        if (_this._protectedzz.size === 0 && (otherLabel === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.protectedQuota || otherLabel === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.quotaVotes)) {
          return;
        }

        result[otherLabel] = [];
      });
      return result;
    }
  }, {
    key: "_tabulateMeeks",
    value: function _tabulateMeeks() {
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

      this._progress.setRoundProgress(this._nbrRound, this._nbrIteration, this._hopeful().size);

      return new _results_js__WEBPACK_IMPORTED_MODULE_23__["default"](this._elected(), this._statuses, this._tallies);
    }
    /* */

  }, {
    key: "_tabulateSetup",
    value: function _tabulateSetup() {
      var _this2 = this;

      /*
      Create instance values needed for tabulation
      */
      this._nbrRound = 0;
      this._tallies = {};

      this._candidates.forEach(function (candidate) {
        _this2._tallies[candidate] = [];
      });

      this._tallies = Object.assign(this._tallies, this._otherCategories());
      this._nbrUnprotectedSeats = this._nbrSeatsToFill - this._protectedzz.size; // Reference rule step A, Initialize Election

      this._statuses = {};

      this._candidates.forEach(function (candidate) {
        _this2._statuses[candidate] = new _status_js__WEBPACK_IMPORTED_MODULE_25__["Status"](candidate, null, _this2._nbrRound, undefined, undefined, _this2._getCandidateDestiny(candidate));
      });

      for (var cstatus in this._statuses) {
        if (this._excluded.has(cstatus)) {
          this._statuses[cstatus].status = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.defeated;
        }
      }

      this._omega = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ULP.times(1000);
      this._keepFactors = {};

      this._candidates.forEach(function (candidate) {
        _this2._keepFactors[candidate] = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ONE;
      });

      this._maxWellRanked = this._maxRankingLevels === null ? this._candidates.length : Math.min(this._candidates.length, this._maxRankingLevels);
      this._totalNodeStats = new NodeStats('total');
      this._currentNodeStats = new NodeStats('build ballot tree');

      if (this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.static) {
        this._buildBallotTree();
      } else if (this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.ballotTree.dynamic) {
        this._buildDynamicBallotTree();
      }

      this._currentNodeStats.setElapsedTime();

      this._totalNodeStats.add(this._currentNodeStats);
    }
  }, {
    key: "_subTreeToString",
    value: function _subTreeToString(node) {
      var _this3 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var isLastChild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var lines = prefix + '"' + node.name + '" ' + node.ballotCount + '\n';
      var childKeys = [];

      for (var childKey in node.children) {
        childKeys.push(childKey);
      }

      childKeys.sort();
      childKeys.forEach(function (child, ix) {
        var newPrefix = prefix === '' ? ' + ' : prefix.slice(0, -2) + (isLastChild ? ' ' : '|') + '  + ';
        lines += _this3._subTreeToString(node.children[child], newPrefix, ix === childKeys.length - 1);
      });
      return lines;
    }
  }, {
    key: "_printBallotTree",
    value: function _printBallotTree(label) {
      var lines = String(label) + ': ' + this._currentNodeStats.toString() + '\n';
      lines += this._subTreeToString(this._ballotTree);
      console.debug(lines.join('\n'));
    }
  }, {
    key: "_buildDynamicBallotTree",
    value: function _buildDynamicBallotTree() {
      var _this4 = this;

      this._ballotTree = new RankingNode(':root');
      this._ballotTree.ballotGroups = this._ballots;
      this._currentNodeStats.nbrNodes = 1;
      this._currentNodeStats.nbrLeaves = 1;
      this._currentNodeStats.nbrAdded = 1;
      this._currentNodeStats.nbrVisited = 1;

      this._ballotTree.ballotGroups.forEach(function (ballotGroup, ix) {
        ballotGroup.wellRanked = new Set();
        ballotGroup.lastUsedIndex = -1;
        _this4._ballotTree.ballotCount += ballotGroup.getMultiple();

        if ((ix + 1) % _this4._progress.treeInitPeriod === 0) {
          _this4._progress.setDynamicTreeInitProgress(ix + 1);
        }
      });

      this._progress.setDynamicTreeInitProgress(this._progress.completedLabel);

      this._hopefulParents = Array.from(this._hopeful()).reduce(function (result, hopeful) {
        result[hopeful] = new Set();
        return result;
      }, {});

      this._expandBallotTreeFromParent(this._ballotTree, this._progress);

      this._currentNodeStats.setElapsedTime();
    }
  }, {
    key: "_expandBallotTreeFromParent",
    value: function _expandBallotTreeFromParent(parentNode) {
      var _this5 = this;

      var progress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      parentNode.ballotGroups.forEach(function (ballotGroup, ix) {
        _this5._distributeBallotGroup(ballotGroup, parentNode);

        if (progress && (ix + 1) % progress.treeBuildPeriod === 0) {
          progress.setTreeBuildProgress(ix + 1);
        }
      });

      if (progress) {
        progress.setTreeBuildProgress(progress.completedLabel);
      }

      parentNode.ballotGroups = [];
    }
  }, {
    key: "_distributeBallotGroup",
    value: function _distributeBallotGroup(ballotGroup, parentNode) {
      var multiple = ballotGroup.getMultiple();
      var rankings = ballotGroup.getRankings();

      for (ballotGroup.lastUsedIndex++; ballotGroup.lastUsedIndex < rankings.length; ballotGroup.lastUsedIndex++) {
        var rankingCode = rankings[ballotGroup.lastUsedIndex];

        if (rankingCode === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].RANKING_CODE.undervote || ballotGroup.wellRanked.has(rankingCode)) {
          continue;
        }

        ballotGroup.wellRanked.add(rankingCode);

        if (this._excluded.has(rankingCode)) {
          continue;
        }

        if (this._statuses[rankingCode] && this._statuses[rankingCode].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.defeated) {
          continue;
        }

        var tabCat = rankingCode === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].RANKING_CODE.overvote ? _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.overvotes : rankingCode;

        var childNode = this._getOrMakeChild(tabCat, parentNode);

        childNode.ballotCount += multiple;

        if (tabCat === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.overvotes) {
          ballotGroup.lastUsedIndex = rankings.length + 1;
          break;
        }

        if (this._statuses[rankingCode].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful) {
          childNode.ballotGroups.push(ballotGroup);
          break;
        }

        parentNode = childNode;
      }

      if (ballotGroup.lastUsedIndex === rankings.length) {
        var exhaustedLabel = ballotGroup.wellRanked.size < this._maxWellRanked ? _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.abstentions : _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.otherExhausted;

        var _childNode = this._getOrMakeChild(exhaustedLabel, parentNode);

        _childNode.ballotCount += multiple;
      }
    }
  }, {
    key: "_getOrMakeChild",
    value: function _getOrMakeChild(name, parentNode) {
      var childNode = parentNode.children[name];

      if (!childNode) {
        childNode = parentNode.children[name] = new RankingNode(name);

        if ('ballotGroups' in parentNode) {
          childNode.ballotGroups = [];

          if (name in this._statuses && this._statuses[name].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful) {
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
  }, {
    key: "_transformBallotTree",
    value: function _transformBallotTree(newElecteds, newDefeateds) {
      if (this._ballotTree && this._ballotTree.ballotGroups) {
        this._currentNodeStats = new NodeStats('transform round ' + this._nbrRound);

        if (newElecteds.size) {
          this._expandBallotTreeFromNewElecteds(newElecteds);
        } else {
          this._transferNodesOfNewDefeateds(newDefeateds);
        }

        this._currentNodeStats.setElapsedTime();

        this._totalNodeStats.add(this._currentNodeStats);
      }
    }
  }, {
    key: "_expandBallotTreeFromNewElecteds",
    value: function _expandBallotTreeFromNewElecteds(newElecteds) {
      var _this6 = this;

      newElecteds.forEach(function (newElected) {
        _this6._hopefulParents[newElected].forEach(function (newElectedParent) {
          var parentNode = newElectedParent.children[newElected];
          _this6._currentNodeStats.nbrVisited++;

          _this6._expandBallotTreeFromParent(parentNode);
        });

        delete _this6._hopefulParents[newElected];
      });
    }
  }, {
    key: "_transferNodesOfNewDefeateds",
    value: function _transferNodesOfNewDefeateds(newDefeateds) {
      var _this7 = this;

      newDefeateds.forEach(function (newDefeated) {
        _this7._hopefulParents[newDefeated].forEach(function (parentNode) {
          var defeatedNode = parentNode.children[newDefeated];
          parentNode.ballotGroups = defeatedNode.ballotGroups;
          _this7._currentNodeStats.nbrVisited += 2;
          delete parentNode.children[newDefeated];
          _this7._currentNodeStats.nbrDeleted++;
          _this7._currentNodeStats.nbrNodes--;
          _this7._currentNodeStats.nbrLeaves--;

          _this7._expandBallotTreeFromParent(parentNode);
        });

        delete _this7._hopefulParents[newDefeated];
      });
    }
  }, {
    key: "_buildBallotTree",
    value: function _buildBallotTree() {
      var _this8 = this;

      this._ballotTree = new RankingNode(':root');
      this._currentNodeStats.nbrNodes = 1;
      this._currentNodeStats.nbrLeaves = 1;
      this._currentNodeStats.nbrAdded = 1;
      this._currentNodeStats.nbrVisited = 1;

      var nbrHopeful = this._hopeful().size;

      this._ballots.forEach(function (ballot, ix) {
        var multiple = ballot.getMultiple();
        var rankings = ballot.getRankings();
        var currentNode = _this8._ballotTree;
        var wellRanked = new Set();
        var depth = 0;
        var nbrWellRanked = 0;
        currentNode.ballotCount += multiple;
        var hadNoOvervote = rankings.every(function (rankingCode, ix) {
          if (rankingCode === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].RANKING_CODE.undervote || wellRanked.has(rankingCode)) {
            return true;
          }

          if (rankingCode !== _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].RANKING_CODE.overvote) {
            nbrWellRanked++;
          }

          wellRanked.add(rankingCode);

          if (_this8._excluded.has(rankingCode)) {
            return true;
          }

          var tabCat = rankingCode === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].RANKING_CODE.overvote ? _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.overvotes : rankingCode;

          var childNode = _this8._getOrMakeChild(tabCat, currentNode);
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

          if (rankingCode === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].RANKING_CODE.overvote) {
            return false;
          }

          return true;
        });

        if (hadNoOvervote && (depth < nbrHopeful - 1 || nbrHopeful === 0)) {
          var exhaustedLabel = nbrWellRanked < _this8._maxWellRanked ? _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.abstentions : _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.otherExhausted;

          var childNode = _this8._getOrMakeChild(exhaustedLabel, currentNode);
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

        if ((ix + 1) % _this8._progress.treeBuildPeriod === 0) {
          _this8._progress.setTreeBuildProgress(ix + 1);
        }
      });

      this._progress.setTreeBuildProgress(this._progress.completedLabel);
    }
  }, {
    key: "_processAMeeksRound",
    value: function _processAMeeksRound() {
      /*
      Process vote counting for a Meek round
       Return a boolean indicating whether to continue with another round.
      */
      if (this._nbrRound > 0 || this._nbrRound === 0 && this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alwaysCountVotes._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alwaysCountVotes.no) {
        // Reference rule step B.1, Test count complete
        var nbrElectedOrProtected = _util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].setUnion(this._elected(), this._protectedzz).size;

        if (nbrElectedOrProtected === this._nbrSeatsToFill || this._hopeful().size + this._elected().size <= this._nbrSeatsToFill) {
          // Reference rule step C.1, Elect remaining
          if (nbrElectedOrProtected < this._nbrSeatsToFill) {
            this._electCandidates(this._hopeful()); // Reference rule step C.2, Defeat remaining

          } else {
            this._electCandidates(_util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].setDifference(this._protectedzz, this._elected()));

            this._defeatCandidates(this._hopeful());
          }

          return false;
        }
      }

      this._nbrRound += 1;
      this._totalNodeStats.nbrRounds++;

      if (this._nbrRound > this._candidates.length + 2) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"]('Error: Tabulation requires too many rounds', [['starting round #', this._nbrRound], ['nbr of candidates', this._candidates.length]]);
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
      this._nbrHopefuls = this._hopeful().size; // Reference rule step B.2, Iterate

      while (this._processAMeeksIteration()) {
        this._prevTotalSurplus = this._totalSurplus;
      }

      for (var label in this._iterTally) {
        var votes = this._iterTally[label];

        if (this._statuses[label] === undefined || this._statuses[label].status !== _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.defeated) {
          this._tallies[label].push(votes);
        }
      }

      if (this._testing['stopAfterStatusUpdate'] === this._nbrRound) {
        return false;
      }

      if (!this._newElecteds.size) {
        // Check for alternative / multiple / batch / simultaneous defeats
        // before single defeats
        if (this._getAltDefeatsOption() === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alternativeDefeats.yes && this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs.beforeSingleDefeats) {
          this._defeatThisRound = this._getStvAlternativeDefeats();
        } // Reference rule step B.3, Defeat low candidate


        if (!this._defeatThisRound.size && this._hopeful().size) {
          this._defeatThisRound = this._getSingleDefeatCandidate();
        }

        this._defeatCandidates(this._defeatThisRound);
      }

      if (this._testing['stopAtEnd'] === this._nbrRound) {
        return false;
      }

      this._progress.setRoundProgress(this._nbrRound, this._nbrIteration, this._hopeful().size);

      return true;
    }
  }, {
    key: "_processAMeeksIteration",
    value: function _processAMeeksIteration() {
      this._nbrIteration += 1;
      this.totalNbrIterations++;

      this._initIterTally(); // Reference rule step B.2.a, Distribute votes


      this._currentNodeStats = new NodeStats('distribute round ' + this._nbrRound + ' iteration ' + this._nbrIteration);
      this._currentNodeStats.nbrIterations = 1;

      if (this._ballotTree) {
        this._distributeVotesByTree();
      } else {
        this._distributeVotes();
      }

      this._currentNodeStats.setElapsedTime();

      this._totalNodeStats.add(this._currentNodeStats);

      this._totalCandidateVotes = this._getTotalCandidateVotes();
      this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.totalCandidateVotes] = this._totalCandidateVotes;
      this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.totalVotes] = this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.totalCandidateVotes].plus(this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.overvotes]).plus(this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.abstentions]).plus(this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.otherExhausted]); //# Reference rule step B.2.b, Update quota

      this._setQuota();

      this._updateCandidateStatusTally();

      if (this._testing['stopAfterStatusUpdate'] === this._nbrRound) {
        return false;
      } // Reference rule step B.2.c, Find winners
      // candidates with more than a quota of votes are elected


      this._newElecteds = this._getNewElecteds();

      if (this._newElecteds.size) {
        this._electCandidates(this._newElecteds);
      } // Reference rule step B.2.d, Calculate the total surplus


      this._totalSurplus = this._getTotalSurplus();
      this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.totalSurplus] = this._totalSurplus; // Reference rule step B.2.e, Test for iteration finished
      // Test whether this is the final iteration for the round

      if (this._newElecteds.size) {
        return false;
      } // Check for alternative / multiple / batch / simultaneous defeats
      // if no new electeds


      if (this._getAltDefeatsOption() === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alternativeDefeats.yes && this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs.ifNoNewElecteds) {
        this._defeatThisRound = this._getStvAlternativeDefeats();

        if (this._defeatThisRound.size) {
          return false;
        }
      }

      if (this._totalSurplus.isLess(this._omega)) {
        return false;
      }

      if (this._prevTotalSurplus !== null && this._totalSurplus.isGreaterEqual(this._prevTotalSurplus)) {
        return false;
      } // Check for alternative / multiple / batch / simultaneous defeats
      // per reference rule, possibly with deferred surplus distribution


      if (this._getAltDefeatsOption() === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alternativeDefeats.yes && this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs._value] === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.typeOfAltDefs.perRefRule) {
        this._defeatThisRound = this._getStvAlternativeDefeats();

        if (this._defeatThisRound.size) {
          return false;
        }
      } // Reference rule step B.2.f, Update keep factors


      this._updateKeepFactors();

      this._progress.setIterationProgress(this._nbrRound, this._nbrIteration, this._nbrHopefuls);

      return true;
    }
  }, {
    key: "_initIterTally",
    value: function _initIterTally() {
      this._iterTally = {};

      for (var tabCode in this._tallies) {
        if (this._statuses[tabCode] !== undefined && this._statuses[tabCode].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.defeated) {
          this._iterTally[tabCode] = null;
        } else {
          this._iterTally[tabCode] = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO;
        }
      }

      this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.nbrIterations] = this._nbrIteration;
    }
  }, {
    key: "_distributeVotesByTree",
    value: function _distributeVotesByTree() {
      /*
      Distribute votes from ballots to candidates using the ballot tree
      */
      this._distributeFromNode(this._ballotTree, _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ONE, 0);
    }
  }, {
    key: "_distributeFromNode",
    value: function _distributeFromNode(node, ballotWeight, depth) {
      depth++;
      this._currentNodeStats.nbrVisited++;
      var parentMultiple = node.ballotCount;
      var rankingCode = node.name;

      if (node.name !== ':root' && (!this._statuses[rankingCode] || this._statuses[rankingCode].status !== _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.defeated)) {
        var rankingKeep = ballotWeight;

        if (this._statuses[rankingCode] !== undefined) {
          if (this._statuses[rankingCode].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful || this._statuses[rankingCode].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.elected) {
            rankingKeep = ballotWeight.times(this._keepFactors[rankingCode], _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ROUND.away);
          }
        }

        try {
          this._iterTally[rankingCode] = this._iterTally[rankingCode].plus(rankingKeep.times(parentMultiple));
        } catch (exc) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"]('Error: Failure to accumulate votes to iteration tally.', [['node name', node.name], ['node ballotCount', node.ballotCount], ['rankingCode', rankingCode], ['iterTally[rankingCode]', JSON.stringify(this._iterTally[rankingCode])]], exc);
        }

        ballotWeight = ballotWeight.minus(rankingKeep);
      }

      if (ballotWeight.isEqual(_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO)) {
        return;
      }

      for (var childName in node.children) {
        var child = node.children[childName];

        this._distributeFromNode(child, ballotWeight, depth);
      }
    }
  }, {
    key: "_distributeVotes",
    value: function _distributeVotes() {
      var _this9 = this;

      /*
      Distribute votes from ballots to candidates without using the ballot tree
      */
      this._ballots.forEach(function (ballot) {
        var ballotWeight = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ONE;
        var wellRanked = new Set();
        var multiple = ballot.getMultiple();
        ballot.getRankings().every(function (rankingCode, rankingIndex) {
          if (rankingCode === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].RANKING_CODE.overvote) {
            _this9._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.overvotes] = _this9._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.overvotes].plus(ballotWeight.times(multiple));
            ballotWeight = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO;
            _this9._currentNodeStats.nbrVisited++;
            return false;
          }

          if (_this9._statuses[rankingCode] !== undefined) {
            if ((_this9._statuses[rankingCode].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful || _this9._statuses[rankingCode].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.elected) && !wellRanked.has(rankingCode)) {
              var rankingKeep = ballotWeight.times(_this9._keepFactors[rankingCode], _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ROUND.away);
              _this9._iterTally[rankingCode] = _this9._iterTally[rankingCode].plus(rankingKeep.times(multiple));
              ballotWeight = ballotWeight.minus(rankingKeep);
              _this9._currentNodeStats.nbrVisited++;

              if (ballotWeight.isEqual(_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO)) {
                return false;
              }
            }

            wellRanked.add(rankingCode);
          }

          return true;
        });

        if (ballotWeight.isGreater(_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO)) {
          _this9._currentNodeStats.nbrVisited++;
          var exhaustedVotes = ballotWeight.times(multiple);

          if (wellRanked.size < _this9._maxWellRanked) {
            _this9._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.abstentions] = _this9._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.abstentions].plus(exhaustedVotes);
          } else {
            _this9._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.otherExhausted] = _this9._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.otherExhausted].plus(exhaustedVotes);
          }
        }
      });
    }
  }, {
    key: "_getCandidateDestiny",
    value: function _getCandidateDestiny(candidate) {
      var result = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].DESTINY.normal;

      if (this._excluded.has(candidate)) {
        result = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].DESTINY.excluded;
      } else if (this._protectedzz.has(candidate)) {
        result = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].DESTINY.protected;
      }

      return result;
    }
  }, {
    key: "_getTotalCandidateVotes",
    value: function _getTotalCandidateVotes() {
      var result = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO;

      for (var candidate in this._statuses) {
        if (this._iterTally[candidate] !== null) {
          result = result.plus(this._iterTally[candidate]);
        }
      }

      return result;
    }
  }, {
    key: "_setQuota",
    value: function _setQuota() {
      var _this10 = this;

      var quota = this._totalCandidateVotes.divideBy(this._nbrSeatsToFill + 1);

      quota = quota.plus(_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ULP);
      this._quota = quota;

      if (this._protectedzz.size) {
        this._protectedQuota = quota;
        this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.protectedQuota] = this._protectedQuota;
        this._protectedVotes = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO;

        this._protectedzz.forEach(function (candidate) {
          _this10._protectedVotes = _this10._protectedVotes.plus(_this10._iterTally[candidate].isLess(_this10._protectedQuota) ? _this10._iterTally[candidate] : _this10._protectedQuota);
        });

        this._quotaVotes = this._totalCandidateVotes.minus(this._protectedVotes);
        this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.quotaVotes] = this._quotaVotes;
        quota = this._quotaVotes.divideBy(this._nbrUnprotectedSeats + 1);
        this._quota = quota.plus(_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ULP);
      }

      this._iterTally[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].LABEL.quota] = this._quota;
    }
  }, {
    key: "_getQuota",
    value: function _getQuota(candidate) {
      var result = this._protectedzz.has(candidate) ? this._protectedQuota : this._quota;
      return result;
    }
  }, {
    key: "_updateCandidateStatusTally",
    value: function _updateCandidateStatusTally() {
      for (var candidate in this._statuses) {
        var candidateStatus = this._statuses[candidate];

        if (candidateStatus.status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful) {
          candidateStatus.nbrRound = this._nbrRound;
          candidateStatus.votes = this._iterTally[candidate];
        }

        candidateStatus.keepFactor = this._keepFactors[candidate];
      }
    }
  }, {
    key: "_getTotalSurplus",
    value: function _getTotalSurplus() {
      var result = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO;

      for (var candidate in this._statuses) {
        if (this._statuses[candidate].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.elected) {
          result = result.plus(this._iterTally[candidate].minus(this._getQuota(candidate)));
        }
      }

      return result;
    }
  }, {
    key: "_updateKeepFactors",
    value: function _updateKeepFactors() {
      for (var candidate in this._keepFactors) {
        var keepFactor = this._keepFactors[candidate];

        if (this._statuses[candidate].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.elected) {
          var quota = this._getQuota(candidate);

          var product = keepFactor.times(quota, _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ROUND.away);
          var newKeepFactor = product.divideBy(this._iterTally[candidate], _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ROUND.away);
          this._keepFactors[candidate] = newKeepFactor;
        }
      }
    }
  }, {
    key: "_elected",
    value: function _elected() {
      /*
      Provide a set of the elected candidates
      */
      var electedCandidates = new Set();

      for (var candidate in this._statuses) {
        if (this._statuses[candidate].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.elected) {
          electedCandidates.add(candidate);
        }
      }

      return electedCandidates;
    }
  }, {
    key: "_hopeful",
    value: function _hopeful() {
      /*
      Provide a set of the hopeful candidates
      */
      var hopefulCandidates = new Set();

      for (var candidate in this._statuses) {
        if (this._statuses[candidate].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful) {
          hopefulCandidates.add(candidate);
        }
      }

      return hopefulCandidates;
    }
  }, {
    key: "_hopefulVotes",
    value: function _hopefulVotes() {
      var _this11 = this;

      /*
      Get a dict of hopeful candidates and their vote totals
      */
      var hopefulVotes = {};

      this._hopeful().forEach(function (candidate) {
        hopefulVotes[candidate] = _this11._statuses[candidate].votes;
      });

      return hopefulVotes;
    }
  }, {
    key: "_getNewElecteds",
    value: function _getNewElecteds() {
      var _this12 = this;

      /*
      Get a dict of hopeful candidates that have reached the quota
      */
      var newElecteds = new Set();

      this._hopeful().forEach(function (candidate) {
        if (_this12._iterTally[candidate].isGreaterEqual(_this12._getQuota(candidate))) {
          newElecteds.add(candidate);
        }
      });

      return newElecteds;
    }
  }, {
    key: "_electCandidates",
    value: function _electCandidates(candidates) {
      var _this13 = this;

      /*
      Update the status of each candidate in the list
      */
      candidates.forEach(function (candidate) {
        if (_this13._statuses[candidate] instanceof _status_js__WEBPACK_IMPORTED_MODULE_25__["Status"] && _this13._statuses[candidate].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful) {
          _this13._statuses[candidate].status = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.elected;
        } else {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"]('Attempting to elect a candidate that is not hopeful.', [['candidate', candidate], ['status', _this13._statuses[candidate].status], ['round', _this13._nbrRound]]);
        }
      });
    }
  }, {
    key: "_defeatable",
    value: function _defeatable() {
      var _this14 = this;

      /*
      Provide a set of the hopeful candidates that are not protectedzz
      */
      var result = new Set();

      this._hopeful().forEach(function (candidate) {
        if (!_this14._protectedzz.has(candidate)) {
          result.add(candidate);
        }
      });

      return result;
    }
  }, {
    key: "_defeatableVotes",
    value: function _defeatableVotes() {
      var _this15 = this;

      /*
      Get a dict of defeatable candidates and their vote totals
      */
      var defeatableVotes = {};

      this._defeatable().forEach(function (candidate) {
        defeatableVotes[candidate] = _this15._statuses[candidate].votes;
      });

      return defeatableVotes;
    }
  }, {
    key: "_defeatCandidates",
    value: function _defeatCandidates(candidates) {
      var _this16 = this;

      /*
      Defeat the collection of candidates
      */
      candidates.forEach(function (candidate) {
        if (_this16._statuses[candidate] instanceof _status_js__WEBPACK_IMPORTED_MODULE_25__["Status"] && _this16._statuses[candidate].status === _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.hopeful && !_this16._protectedzz.has(candidate)) {
          _this16._statuses[candidate].status = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].STATUS.defeated;
          _this16._keepFactors[candidate] = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO;
        } else {
          throw Object(_errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekImplementationError"])('Attempting to defeat a candidate that is not defeatable.', [['candidate', candidate], ['status', _this16._statuses[candidate].status], ['round', _this16._nbrRound]]);
        }
      });
    }
  }, {
    key: "_getSingleDefeatCandidate",
    value: function _getSingleDefeatCandidate() {
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
      var defeatableVotes = this._defeatableVotes();

      var minVotes = _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ONE.times(_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].Decimal.MAX_SAFE_VALUE + 1);

      for (var candidate in defeatableVotes) {
        var candidateVotes = defeatableVotes[candidate];

        if (candidateVotes.isLess(minVotes)) {
          minVotes = candidateVotes;
        }
      }

      var defeatThreshold = minVotes.plus(this._totalSurplus);
      var trailingCandidates = new Set();

      for (var _candidate in defeatableVotes) {
        var votes = defeatableVotes[_candidate];

        if (votes.isLessEqual(defeatThreshold)) {
          trailingCandidates.add(_candidate);
        }
      }

      var defeatCandidate = this._resolveTie(trailingCandidates);

      return new Set([defeatCandidate]);
    }
  }, {
    key: "_resolveTie",
    value: function _resolveTie(tiedCandidates) {
      var _this17 = this;

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

      var notInTieBreaker = _util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].setDifference(tiedCandidates, _util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].getKeys(this._tieBreaker));

      if (notInTieBreaker.size) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekValueError"]('Tied candidate is not in tieBreaker:', [['candidate', Array.from(notInTieBreaker)[0]], ['round', this._nbrRound], ['tiedCandidates', tiedCandidates], ['tieBreaker', this._tieBreaker]]);
      }

      var tiedCandidatesByIndex = {};
      tiedCandidates.forEach(function (candidate) {
        tiedCandidatesByIndex[_this17._tieBreaker[candidate]] = candidate;
      });
      var minIndex = Infinity;
      tiedCandidates.forEach(function (candidate) {
        var index = _this17._tieBreaker[candidate];

        if (index < minIndex) {
          minIndex = index;
        }
      });
      var selectedCandidate = tiedCandidatesByIndex[minIndex];
      return selectedCandidate;
    }
  }, {
    key: "_getAltDefeatsOption",
    value: function _getAltDefeatsOption() {
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
      var optionsValue = this._options[_constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].OPTIONS.alternativeDefeats._value];
      var altDefeatsOption;

      if (typeof optionsValue === 'string') {
        altDefeatsOption = optionsValue;
      } else {
        if (optionsValue instanceof Array && this._nbrRound <= optionsValue.length) {
          altDefeatsOption = optionsValue[this._nbrRound - 1];
        } else {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_24__["MeekValueError"]('Round by round value for alternative defeats option' + ' is too short:', [['nbrRound', this._nbrRound], ['optionsValue.length', optionsValue.length], ['optionsValue', optionsValue]]);
        }
      }

      return altDefeatsOption;
    }
  }, {
    key: "_getStvAlternativeDefeats",
    value: function _getStvAlternativeDefeats() {
      var _this18 = this;

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
      var totalSurplusVotes = this._totalSurplus;

      var defeatableVotes = this._defeatableVotes();

      var totalVotesToDefeat = _util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].getOwnItems(defeatableVotes).reduce(function (sum, item) {
        return sum.plus(item.value);
      }, _constants_js__WEBPACK_IMPORTED_MODULE_22__["default"].ZERO);
      var byVotes = _util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].getOwnItems(defeatableVotes).sort(function (a, b) {
        return a.value.isLess(b.value) ? 1 : a.value.isEqual(b.value) ? 0 : -1;
      });
      var candidatesToDefeat = new Set(_util_basic_js__WEBPACK_IMPORTED_MODULE_21__["UBF"].getKeys(defeatableVotes));

      var nbrElected = this._elected().size; // Breaking out of this loop produces a set of candidates to defeat,
      //     possibly an empty set.
      // Not breaking out of this loop will produce an empty set.
      //let nbrDefeated = byVotes.length;


      byVotes.some(function (item, ix) {
        var candidate = item.name;
        var lowestRemainingVotes = item.value;
        totalVotesToDefeat = totalVotesToDefeat.minus(lowestRemainingVotes);
        candidatesToDefeat.delete(candidate);
        var nbrRemaining = ix + 1; //nbrDefeated -= 1
        //let mostVotesToDefeat = (nbrRemaining < byVotes.length ?
        //      byVotes[ix+1].value : K.ZERO);
        // Reference rule terminology:
        //   candidate c is byVotes[ix + 1].name if ix + 1 is a valid index
        //   votes v is mostVotesToDefeat
        //   votes v'' is lowestRemainingVotes

        var cond_2 = totalVotesToDefeat.plus(totalSurplusVotes).isLess(lowestRemainingVotes);
        var cond_1 = nbrRemaining + nbrElected >= _this18._nbrSeatsToFill;
        var condAltDef = cond_1 && cond_2; // Test top-level conditions

        if (condAltDef) {
          return true;
        }

        return false;
      });
      return candidatesToDefeat;
    }
  }]);

  return Tabulation;
}();

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $every = __webpack_require__(57).every;
var sloppyArrayMethod = __webpack_require__(65);

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('every') }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $indexOf = __webpack_require__(38).indexOf;
var sloppyArrayMethod = __webpack_require__(65);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var assign = __webpack_require__(134);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(7);
var objectKeys = __webpack_require__(50);
var getOwnPropertySymbolsModule = __webpack_require__(43);
var propertyIsEnumerableModule = __webpack_require__(8);
var toObject = __webpack_require__(47);
var IndexedObject = __webpack_require__(11);

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);
var objectDefinePropertyModile = __webpack_require__(20);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilBasicFunctions", function() { return UtilBasicFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UBF", function() { return UBF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilBaseError", function() { return UtilBaseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilValueError", function() { return UtilValueError; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(137);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(138);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(133);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(141);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(142);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(146);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(148);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_pad_end__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(149);
/* harmony import */ var core_js_modules_es_string_pad_end__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_end__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(153);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_37__);







































function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module UtilBasic
 * @summary Basic utility functions and classes
 *   without other module dependencies.
 */

/** A convenience class for exporting a collection of functions
 *  as static functions of the class.
 *
 *  This class is intended to be used for its static functions and is
 *  not expected to be instantiated.0
 */
var UtilBasicFunctions =
/*#__PURE__*/
function () {
  function UtilBasicFunctions() {
    _classCallCheck(this, UtilBasicFunctions);
  }

  _createClass(UtilBasicFunctions, null, [{
    key: "describeError",

    /** Create a multi-line description of an error and its traceback.
     * @param {Error} err - a caught exception.
     * @return {string} a multi-line string showing message and traceback
     *   of err. */
    value: function describeError(err) {
      return _describeError(err);
    }
    /** Indent a possibly multi-line text string.
     *
     * @param {string} message - the message string to indent.
     * @param {number} [indentBy=2] - the number of spaces to indent each
     *   line of the message.
     * @return {string} a string with the indentations added to each line.
     */

  }, {
    key: "indentMessage",
    value: function indentMessage(message) {
      var indentBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return _indentMessage(message, indentBy);
    }
    /**
     * Create an array of strings from a string or an array of strings.
     *
     * If value is a string, it is split by its first character,
     * and the resulting parts populate the array.
     *
     * If the value is the empty string, an empty array is returned.
     *
     * If value is a string of length 1, an array containing a single
     * empty string is returned.
     *
     * If value is an array of strings,
     * (either typeof 'string' or instanceof String),
     * a copy of that array is returned,
     * with any Strings converted to items of typeof 'string'.
     *
     * @param {string|array} value - A string that will be converted to an
     * array of strings, or an array that will be verified as only
     * containing strings.
     *
     * @return {array} An array of strings.
     *
     * @throws {UtilValueError} If value is not a string and is not an
     * array of strings.
     */

  }, {
    key: "toArrayOfStrings",
    value: function toArrayOfStrings(value) {
      return _toArrayOfStrings(value);
    }
    /**
     * Get the class name of an instance object, if it is available.
     *
     * Look for the name property of the prototype's constructor.
     *
     * @param {Object} instance - A value;
     * @return {string} The found name or the empty string.
     */

  }, {
    key: "getClassNameOf",
    value: function getClassNameOf(instance) {
      return _getClassNameOf(instance);
    }
    /**
     * Get an array of an object's enumerable property keys.
     *
     * Accomplish this with a traditional for in loop.
     * This can retrieve keys that are only in the prototype chain,
     * and can reflect gaps in an array's indexing.
     *
     * @param {Object} object - The object for which keys are retrieved.
     * @return {array<string>} An array of found keys.
     */

  }, {
    key: "getKeys",
    value: function getKeys(object) {
      return _getKeys(object);
    }
    /**
     * Get a sorted array of an object's enumerable property keys.
     *
     * Use 'getKeys()' to retrieve the keys.
     *
     * For sorting, key strings that correspond to a decimal integer value
     * are converted to numbers and sorted in numeric order before any
     * string keys.  The numbers are converted back to strings before
     * returning the sorted array.
     * @param {Object} object - The object for which keys are retrieved.
     * @return {Array<string>} A sorted array of found keys.
     */

  }, {
    key: "getSortedKeys",
    value: function getSortedKeys(object) {
      return _getSortedKeys(object);
    }
    /**
     * Get an array of names / keys of enumerable properties for an
     * object.
     *
     * The names are retrieved using a for-in loop.
     * @param {Object} object - The object for which names are retrieved.
     * @return {array} An array with the found property names / keys.
     */

  }, {
    key: "getNames",
    value: function getNames(object) {
      return _getNames(object);
    }
    /**
     * Get an array of names and values for an object's enumerable
     * properties.
     *
     * Each entry in the array is an `ObjItem` instance.
     *
     * The names and values are retrieved with a for-in loop.
     * @param {Object} object - The object for which names and values are
     *   retrieved.
     * @return {array} An array with the found property data.
     */

  }, {
    key: "getItems",
    value: function getItems(object) {
      return _getItems(object);
    }
    /**
     * Get an array of values for an object's enumerable properties.
     *
     * The values are retrieved with a for-in loop.
     * @param {Object} object - The object for which values are retrieved.
     * @return {array} An array with the found property values.
     */

  }, {
    key: "getValues",
    value: function getValues(object) {
      return _getValues(object);
    }
    /**
     * Get an array of names / keys of own properties for an object.
     *
     * The names are retrieved using `Object.getOwnPropertyDescriptors()`.
     * @param {Object} object - The object for which names are retrieved.
     * @return {array} An array with the found property names / keys.
     * @throws {*} An error if Object.getOwnPropertyDescriptors() is not
     *   supported.
     */

  }, {
    key: "getOwnNames",
    value: function getOwnNames(object) {
      return _getOwnNames(object);
    }
    /**
     * Get an array of names and values of own properties for an object.
     *
     * The data is retrieved using `Object.getOwnPropertyDescriptors()`.
     * @param {Object} object - The object for which data are retrieved.
     * @return {array} An array with the found names and values.
     *   Each array entry is an instance of `ObjItem`.
     * @throws {*} An error if Object.getOwnPropertyDescriptors() is not
     *   supported.
     */

  }, {
    key: "getOwnItems",
    value: function getOwnItems(object) {
      return _getOwnItems(object);
    }
    /**
     * Get an array of values of own properties for an object.
     *
     * The values are retrieved using `Object.getOwnPropertyDescriptors()`.
     * @param {Object} object - The object for which values are retrieved.
     * @return {array} An array with the found values.
     *   Each array entry is an instance of `ObjItem`.
     * @throws {*} An error if Object.getOwnPropertyDescriptors() is not
     *   supported.
     */

  }, {
    key: "getOwnValues",
    value: function (_getOwnValues2) {
      function getOwnValues(_x) {
        return _getOwnValues2.apply(this, arguments);
      }

      getOwnValues.toString = function () {
        return _getOwnValues2.toString();
      };

      return getOwnValues;
    }(function (object) {
      return getOwnValues(object);
    })
    /** Create a string representation of a Javascript value.
     *
     * The value can be a primitive or an object.
     * Support for data objects, arrays, and sets is provided.
     *
     * Currently there is no use of the `options` and `showClasses`
     * parameters.
     *
     * @param {*} value - A value to be converted to a string.
     * @param {Object} options - A data object with options for
     *   converting to and formatting of the string.
     * @param {array<ShowClass>} showClasses - Per class customizations
     *   for how the value should be converted and how the string
     *   should be formatted.
     * @return {string} A string representing the value.
     */

  }, {
    key: "show",
    value: function show(value, options, showClasses) {
      var result = _show.show(value, options, showClasses);

      return result;
    }
    /**
     * Produce the set union of two iterables.
     *
     * @param {iterable} iterable1 - An iterable object such as an array,
     *   set, or other object.
     * @param {iterable} iterable2 - An iterable object such as an array,
     *   set, or other object.
     * @return {Set} A set with the union of the iterated values.
     * For object arguments, the set contains their keys.
     */

  }, {
    key: "setUnion",
    value: function setUnion(iterable1, iterable2) {
      return _setUnion(iterable1, iterable2);
    }
    /**
     * Produce the set intersection of two iterables.
     *
     * @param {iterable} iterable1 - An iterable object such as an array,
     *   set, or other object.
     * @param {iterable} iterable2 - An iterable object such as an array,
     *   set, or other object.
     * @return {Set} A set with the intersection of the iterated values.
     * For object arguments, the set contains their keys.
     */

  }, {
    key: "setIntersection",
    value: function setIntersection(iterable1, iterable2) {
      return _setIntersection(iterable1, iterable2);
    }
    /**
     * Produce the set difference of two iterables.
     *
     * @param {iterable} iterable1 - An iterable object such as an array,
     *   set, or other object.
     * @param {iterable} iterable2 - An iterable object such as an array,
     *   set, or other object.
     * @return {Set} A set with difference of the iterated values,
     *   all of the items in iterable1 that are not in iterable2.
     * For object arguments, the set contains their keys.
     */

  }, {
    key: "setDifference",
    value: function setDifference(iterable1, iterable2) {
      return _setDifference(iterable1, iterable2);
    }
  }]);

  return UtilBasicFunctions;
}();
/**
 * An alias for the `UtilBasicFunctions` class,
 * which provides various functions as static class
 * functions for general use. */

var UBF = UtilBasicFunctions;
/** A base class for thrown errors.
 */

var UtilBaseError =
/*#__PURE__*/
function (_Error) {
  _inherits(UtilBaseError, _Error);

  /**
   * @param {string} [message='ERROR'] - text describing the error.
   * @param {array} [otherValues=[]] - an array of values,
   *   each value is typically a two-element array as [description, value].
   *   Other kinds of values are possible, however.
   * @param {Error|null} [priorError=null] - an error of some type that was the
   *   cause for this error being formed. */
  function UtilBaseError() {
    var _this;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ERROR';
    var otherValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var priorError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, UtilBaseError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UtilBaseError).call(this, message));
    /** The message for this error.
     * @type {string} */

    _this.message = String(message);
    /** Other values associated with this error and which document additional
     *    context surrounding the error.
     * @type {array} */

    _this.otherValues = otherValues;
    /** The prior error that was a direct cause for this error.
     * @type {Error|null} */

    _this.priorError = priorError;
    /** A fuller description of the prior error, created using describeError().
     * @type(string) */

    _this.priorErrorDescription = '';

    if (_this.priorError !== null && _this.priorError instanceof Error) {
      _this.priorErrorDescription = _describeError(_this.priorError);
    }
    /** The name of the class of this error.
     * @type{string} */


    _this.name = _getClassNameOf(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UtilBaseError, [{
    key: "_showPriorError",
    value: function _showPriorError() {
      // Select what to show about the priorError.
      return this.priorError.toString();
    }
    /** Convert to a string
     * @return {string} a string representing the error's message,
     *   its otherValues, and its priorError, if any. */

  }, {
    key: "toString",
    value: function toString() {
      var result = [this.name + (this.message ? ': ' + this.message : '')];

      if (this.otherValues.length) {
        result.push(this._otherValuesAsStr(this.otherValues));
      }

      if (this.priorError) {
        result.push('  Prior error:');
        result.push(_indentMessage(this._showPriorError(), 4));
      }

      result = result.join('\n');
      return result;
    }
  }, {
    key: "_otherValuesAsStr",
    value: function _otherValuesAsStr(otherValues) {
      var indentBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var limit = 200;
      var result = [];

      if (otherValues instanceof Array) {
        this.otherValues.forEach(function (valueItem, ix) {
          if (valueItem instanceof Array && valueItem.length === 2) {
            var line = String(valueItem[0]).padEnd(25) + ' = ';
            var showValue = UBF.show(valueItem[1]);
            var value = truncateString(showValue, limit);
            line += value;
            result.push(line);
          } else {
            var _showValue = UBF.show(valueItem);

            var _value = truncateString(_showValue, limit);

            result.push(_value);
          }
        });
      } else {
        var showValue = UBF.show(otherValues);
        var value = truncateString(otherValues, limit);
        result.push(value);
      }

      result = result.join('\n');
      result = _indentMessage(result, indentBy);
      return result;
    }
  }]);

  return UtilBaseError;
}(_wrapNativeSuper(Error));
/** This function is used by UtilBaseError to limit how long
 * a displayed value can be from otherValues. */

function truncateString(value) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;

  if (typeof value != 'string') {
    value = String(value);
  }

  if (!limit || !Number.isInteger(limit) || limit < 0) {
    limit = 10;
  }

  if (value.length > limit) {
    value = value.slice(0, limit);

    if (value.length && value[0] === '"') {
      value += '"';
    }

    value = '(only first ' + limit + ' chars): ' + value + ' + more ...';
  }

  return value;
}
/** An error class for invalid data values and types.
 */


var UtilValueError =
/*#__PURE__*/
function (_UtilBaseError) {
  _inherits(UtilValueError, _UtilBaseError);

  /** The calling convention is the same as for UtilBaseError. */
  function UtilValueError(message) {
    var otherValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var priorError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, UtilValueError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UtilValueError).call(this, message, otherValues, priorError));
  }

  return UtilValueError;
}(UtilBaseError);
/** See the corresponding UtilBasicFunction method. */

function _describeError(err) {
  //"""
  var parts = [];
  parts.push('Error description:');
  parts.push(_indentMessage(err.toString()));

  if (err.stack) {
    parts.push('Error stack:');
    parts.push(_indentMessage(err.stack.toString()));
  } else {
    parts.push("  ".concat(err.toString(), ":"));
  }

  if (err.priorError) {
    parts.push('Prior Error:');
    parts.push(_indentMessage(_describeError(err.priorError), 2));
  }

  parts.push('END Error description');
  var result = parts.join("\n");
  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _indentMessage(message) {
  var indentBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var indentStr = ' '.repeat(indentBy);
  var tail = '';
  var mainMessage = message.toString(); //console.log('typeof mainMessage='+typeof mainMessage);
  //console.log('mainMessage.valueOf()='+mainMessage.valueOf());

  if (mainMessage && mainMessage.slice(-1) === '\n') {
    tail = '\n';
    mainMessage = message.slice(0, -1);
  }

  var newMessage = indentStr + mainMessage.replace(/\n/g, '\n' + indentStr) + tail;
  return newMessage;
}
/** See the corresponding UtilBasicFunction method. */


function _toArrayOfStrings(value) {
  if (typeof value == 'string' || value instanceof String) {
    if (value.length) {
      var result = value.slice(1).split(value[0]);
      return result;
    } else {
      return [];
    }
  } else if (Array.isArray(value)) {
    var _result = []; // for loop, instead of forEach, used to detect skipped/undefined values

    for (var ix = 0; ix < value.length; ix++) {
      var item = value[ix];

      if (typeof item == 'string' || item instanceof String) {
        _result.push(String(item));

        continue;
      }

      throw new UtilValueError('Array has an item that is not a string:', [['item position', ix + 1], ['typeof item', _typeof(item)], ['item', item], ['array length', value.length]]);
    }

    return _result;
  }

  throw new UtilValueError('Value is not a string or array:', [['typeof value', _typeof(value)], ['value', value]]);
}
/** See the corresponding UtilBasicFunction method. */


function _getClassNameOf(instance) {
  var result = '';

  if (_typeof(instance) != 'object' || instance === null) {
    return result;
  }

  var prototype = Object.getPrototypeOf(instance);

  if ('constructor' in prototype && 'name' in prototype.constructor) {
    result = prototype.constructor.name;

    if (typeof result == 'string') {
      return result;
    }
  }

  return '';
}
/** See the corresponding UtilBasicFunction method. */


function _getKeys(object) {
  var result = [];

  try {
    for (var x in object) {
      result.push(x);
    }
  } catch (exc) {}

  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _getSortedKeys(object) {
  var result = _getKeys(object);

  if (result.length) {
    result = result.map(function (key) {
      return typeof key == 'string' && key.match(/^(\+|-)?[0-9]+$/) ? parseInt(key) : key;
    });
    result.sort(function (a, b) {
      var comparison = 2;

      if (typeof a == 'number') {
        comparison = typeof b == 'number' ? a < b ? -1 : a > b ? 1 : 0 : -1;
      } else if (typeof a == 'string') {
        if (typeof b == 'string') {
          comparison = a < b ? -1 : a > b ? 1 : 0;
        } else {
          comparison = typeof b == 'number' ? 1 : -1;
        }
      } else if (_typeof(b) == 'symbol') {
        comparison = 0;
      } else {
        comparison = 1;
      }

      return comparison;
    });
    result = result.map(function (key) {
      return typeof key == 'number' ? String(key) : key;
    });
  }

  return result;
} // a regexp for a decimal, possibly infinite number that is not a NaN:
//     /^(+|-)?(Infinity)|(([0-9]+(\.[0-9]*)?)|(\.[0-9]+)(e(+|-)[0-9]+))$/
// a regexp for a decimal, non-negative array index
//     /^[0-9]+$/
// a regexp for a decimial integer
//     /^(+|-)[0-9]+$/
//export usort(array)

/*
class USort {
  static sort(array) {
    if (!Array.isArray(array)) {
*/

/**
 * A helper class for the `Show` class that will be used to provide
 * custom formatting and parsing for a particular class.
 *
 * This is not yet actively used.
 */


var ShowClass = function ShowClass(classType, showFunction) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _classCallCheck(this, ShowClass);

  this.classType = classType;
  this.showFunction = showFunction;
  this.options = options;
};
/**
 * A helper class for the `Show` class that is used to internally
 * represent intermediate results.
 *
 * This is not expected to be used as part of the public interface.
 */


var _ShowParts =
/*#__PURE__*/
function () {
  function _ShowParts() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var head = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var tail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var separator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ', ';

    _classCallCheck(this, _ShowParts);

    this.content = content;
    this.name = name;
    this.head = head;
    this.tail = tail;
    this.separator = separator;

    if (this.name === 'Object' && Array.isArray(this.content) && this.head === '{' && this.tail === '}') {
      this.name = '';
    }
  }

  _createClass(_ShowParts, [{
    key: "push",
    value: function push(item) {
      if (typeof this.content == 'string') {
        this.content += String(item);
      } else if (Array.isArray(this.content)) {
        this.content.push(String(item));
      }

      return this;
    }
  }, {
    key: "compose",
    value: function compose() {
      var result = '';

      if (this.name.length) {
        result += '@' + this.name + ':';
      }

      result += this.head;

      if (typeof this.content == 'string') {
        result += this.content;
      } else if (Array.isArray(this.content)) {
        result += this.content.join(this.separator);
      }

      result += this.tail;
      return result;
    }
  }, {
    key: "length",
    get: function get() {
      var _this2 = this;

      var result = this.name.length + this.head.length + this.tail.length;

      if (this.name.length) {
        result += 2;
      }

      if (typeof this.content == 'string') {
        result += this.content.length;
      } else if (Array.isArray(this.content)) {
        this.content.forEach(function (content_item, ix) {
          result += content_item.length + (ix > 0 ? _this2.separator.length : 0);
        });
      }

      return result;
    }
  }]);

  return _ShowParts;
}();
/**
 * A class for creating string representations of primitive values
 * and objects, using an extensible mechanism for custom handling
 * of various types of objects.
 *
 * Current support handles all standard primitive types except for
 * Symbols, for Arrays and Sets, and for other objects generally.
 */


var Show =
/*#__PURE__*/
function () {
  function Show() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var showClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Show);

    this.options = options;
    this.showClasses = showClasses;
  }

  _createClass(Show, [{
    key: "show",
    value: function show(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var showClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var useOptions = Object.assign({}, this.options, options);
      var useShowClasses = showClasses.concat(this.showClasses);

      var result = this._compose(value, useOptions, useShowClasses);

      return result;
    }
  }, {
    key: "_compose",
    value: function _compose(value, options, showClasses) {
      var parts = this._decompose(value, options, showClasses);

      var formatted = this._formatParts(parts, value, options, showClasses);

      var result = formatted.compose();
      return result;
    }
  }, {
    key: "_formatParts",
    value: function _formatParts(parts, value, options, showClasses) {
      return parts;
    }
  }, {
    key: "_decompose",
    value: function _decompose(value, options, showClasses) {
      var _this3 = this;

      if (typeof value === 'string') {
        var value2 = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r');
        var parts = new _ShowParts(value2, '', '"', '"');
        return parts;
      }

      if (typeof value === 'number') {
        return new _ShowParts(String(value));
      }

      if (typeof value === 'undefined') {
        return new _ShowParts('undefined');
      }

      if (value === null) {
        return new _ShowParts('null');
      }

      if (Array.isArray(value)) {
        var _parts = new _ShowParts([], '', '[', ']');

        var nextIndex = 0;

        _getKeys(value).forEach(function (value_index) {
          var index = Number(value_index);

          if (Number.isInteger(index) && index >= 0 && index < Number.MAX_SAFE_INTEGER) {
            if (index > nextIndex) {
              _parts.push('<skip ' + (index - nextIndex) + '>');

              nextIndex = index;
            }

            _parts.push(_this3._compose(value[value_index], options, showClasses));

            nextIndex = index + 1;
          }
        });

        return _parts;
      } //    if (value instanceof K.Decimal && !options.decimal9AsObject) {
      //      return new _ShowParts(value.toString());
      //    }


      if (value instanceof Set) {
        var _parts2 = new _ShowParts(this._compose(Array.from(value)), 'Set');

        return _parts2;
      }

      if (typeof value === 'boolean') {
        return new _ShowParts(String(value));
      }

      if (typeof value === 'function') {
        return new _ShowParts('<function>');
      }
      /*
      if (typeof value === 'bigint') {
        const result = value.toString();
        return result;
      }
      */


      if (_typeof(value) === 'object') {
        var _parts3 = new _ShowParts([], _getClassNameOf(value), '{', '}');

        _getSortedKeys(value).forEach(function (value_key, ix) {
          _parts3.push(_this3._compose(String(value_key), options, showClasses) + ': ' + _this3._compose(value[value_key], options, showClasses));
        });

        return _parts3;
      }

      return '<unknown>';
    }
  }]);

  return Show;
}();
/**
 * An instance of the `Show` class which has its `show()` method
 * exposed as a static method of the `UtilBasicFunctions` class.
 */


var _show = Object.freeze(new Show());
/**
 * A class representing the name and value of an object property.
 */


var ObjItem =
/*#__PURE__*/
function () {
  /**
   * @param {string|symbol} The name / key of the property.
   * @param {*} The value of the property.
   */
  function ObjItem(name, value) {
    _classCallCheck(this, ObjItem);

    /** The name of the property, either a string or a symbol.
     * @type {string|symbol} */
    this.name = name;
    /** The value of the property.
     * @type {*} */

    this.value = value;
  }
  /**
   * Produce a string representation of the name and value,
   * mimicking the format of an object literal.
   * @return {string} A string representation of the key and value.
   */


  _createClass(ObjItem, [{
    key: "toString",
    value: function toString() {
      var result = '{name: "' + String(this.name) + '", value: ' + (typeof this.value === 'string' ? '"' + this.value + '"' : this.value.valueOf()) + '}';
      return result;
    }
  }]);

  return ObjItem;
}();
/** See the corresponding UtilBasicFunction method. */


function _getNames(object) {
  var result = [];

  for (var name in object) {
    result.push(String(name));
  }

  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _getItems(object) {
  var result = [];

  for (var name in object) {
    var value = object[name];
    result.push(new ObjItem(name, value));
  }

  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _getValues(object) {
  var result = [];

  _getItems(object).forEach(function (item) {
    result.push(item.value);
  });

  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _getOwnNames(object) {
  var result = [];
  var descriptors = {};

  try {
    descriptors = Object.getOwnPropertyDescriptors(object);
  } catch (exc) {
    console.error('Error: Unsupported Object.getOwnPropertyDescriptors()');
    console.error('  error message="' + exc.toString() + '"');
    console.error('Error description:\n' + _describeError(exc));
    throw exc;
  }

  for (var name in descriptors) {
    var descriptor = descriptors[name];

    if (descriptor.enumerable) {
      result.push(name);
    }
  }

  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _getOwnItems(object) {
  var result = [];
  var descriptors = {};

  try {
    descriptors = Object.getOwnPropertyDescriptors(object);
  } catch (exc) {
    console.error('Error: Unsupported Object.getOwnPropertyDescriptors()');
    console.error('  error message="' + exc.toString() + '"');
    console.error('Error description:\n' + _describeError(exc));
    throw exc;
  }

  for (var name in descriptors) {
    var descriptor = descriptors[name];

    if (descriptor.enumerable) {
      result.push(new ObjItem(name, descriptor.value));
    }
  }

  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _getOwnValues(object) {
  var result = [];

  _getOwnItems(object).forEach(function (item) {
    result.push(item.value);
  });

  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _setUnion(iterable1, iterable2) {
  var result = new Set(iterable1);
  iterable2.forEach(function (item) {
    result.add(item);
  });
  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _setIntersection(iterable1, iterable2) {
  var base = new Set(iterable2);
  var result = new Set();
  iterable1.forEach(function (item) {
    if (base.has(item)) {
      result.add(item);
    }
  });
  return result;
}
/** See the corresponding UtilBasicFunction method. */


function _setDifference(iterable1, iterable2) {
  var result = new Set(iterable1);
  iterable2.forEach(function (item) {
    result.delete(item);
  });
  return result;
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var fails = __webpack_require__(7);
var isArray = __webpack_require__(46);
var isObject = __webpack_require__(15);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var createProperty = __webpack_require__(71);
var arraySpeciesCreate = __webpack_require__(60);
var arrayMethodHasSpeciesSupport = __webpack_require__(86);
var wellKnownSymbol = __webpack_require__(53);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(113);
var collectionStrong = __webpack_require__(118);

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (get) {
  return function Map() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong, true);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);

// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.github.io/ecma262/#sec-number.max_safe_integer
$({ target: 'Number', stat: true }, {
  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var FREEZING = __webpack_require__(115);
var fails = __webpack_require__(7);
var isObject = __webpack_require__(15);
var onFreeze = __webpack_require__(114).onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);
var ownKeys = __webpack_require__(33);
var toIndexedObject = __webpack_require__(10);
var getOwnPropertyDescriptorModule = __webpack_require__(5);
var createProperty = __webpack_require__(71);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var fails = __webpack_require__(7);
var toObject = __webpack_require__(47);
var nativeGetPrototypeOf = __webpack_require__(80);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(81);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var setPrototypeOf = __webpack_require__(82);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var parseIntImplementation = __webpack_require__(145);

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var trim = __webpack_require__(97).trim;
var whitespaces = __webpack_require__(98);

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var getBuiltIn = __webpack_require__(34);
var aFunction = __webpack_require__(59);
var anObject = __webpack_require__(21);
var isObject = __webpack_require__(15);
var create = __webpack_require__(48);
var bind = __webpack_require__(147);
var fails = __webpack_require__(7);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(59);
var isObject = __webpack_require__(15);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(124);
var anObject = __webpack_require__(21);
var toLength = __webpack_require__(39);
var requireObjectCoercible = __webpack_require__(13);
var advanceStringIndex = __webpack_require__(125);
var regExpExec = __webpack_require__(126);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $padEnd = __webpack_require__(150).end;
var WEBKIT_BUG = __webpack_require__(151);

// `String.prototype.padEnd` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(39);
var repeat = __webpack_require__(103);
var requireObjectCoercible = __webpack_require__(13);

var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = String(requireObjectCoercible($this));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__(152);

// eslint-disable-next-line unicorn/no-unsafe-regex
module.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(34);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var repeat = __webpack_require__(103);

// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(124);
var isRegExp = __webpack_require__(155);
var anObject = __webpack_require__(21);
var requireObjectCoercible = __webpack_require__(13);
var speciesConstructor = __webpack_require__(156);
var advanceStringIndex = __webpack_require__(125);
var toLength = __webpack_require__(39);
var callRegExpExec = __webpack_require__(126);
var regexpExec = __webpack_require__(109);
var fails = __webpack_require__(7);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var classof = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(53);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var aFunction = __webpack_require__(59);
var wellKnownSymbol = __webpack_require__(53);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _decimal9_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(158);










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module K
 * @summary Centrally defined constants for an Meek tabulation
 */

/** Major, minor, patch version numbers using semantic versioning */

var _versionNumbers = [1, 0, 0];
/** Major, minor, patch version as a string */

var _versionString = _versionNumbers.join('.');
/** The ranking codes other than candidate identifiers */


var _ranking_code = Object.freeze({
  undervote: '',
  overvote: '#'
});
/** Labels and identifiers for tabulation categories other than
 * candidate identifiers */


var _label = Object.freeze({
  totalCandidateVotes: ':Votes for candidates',
  overvotes: ':Overvotes',
  abstentions: ':Abstentions',
  otherExhausted: ':Other exhausted',
  totalVotes: ':Total votes',
  protectedQuota: ':Protected quota',
  quotaVotes: ':Quota votes',
  quota: ':Quota',
  totalSurplus: ':Total surplus',
  nbrIterations: ':Iterations'
});
/** This class represents a node in a tree structured options constant
 * Each node facilitates identifying and validating values at the next
 * lower level within the tree. */


var _Option = function _Option(jsId, value) {
  var _this = this;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var toUpper = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  _classCallCheck(this, _Option);

  this._jsId = String(jsId);
  this._value = value;
  this._value_set = new Set();
  this._valueToJsId = {};
  options.forEach(function (option) {
    _this[option._jsId] = option._value_set.size == 0 ? option._value : option;

    _this._value_set.add(option._value);

    _this._valueToJsId[option._value] = option._jsId;
  });
  Object.freeze(this);
};
/** The tree-structured options constant. */


var _options = new _Option('option', 'options', [new _Option('alternativeDefeats', 'alternative_defeats', [new _Option('yes', 'Y'), new _Option('never', 'N')]), new _Option('typeOfAltDefs', 'type_of_altdefs', [new _Option('perRefRule', 'per_reference_rule'), new _Option('beforeSingleDefeats', 'before_single_defeats'), new _Option('ifNoNewElecteds', 'if_no_new_electeds')]), new _Option('alwaysCountVotes', 'always_count_votes', [new _Option('yes', true), new _Option('no', false)]), new _Option('ballotTree', 'ballot_tree', [new _Option('dynamic', 'dynamic'), new _Option('static', 'static'), new _Option('none', 'none')])]);
/**
 * This is a data object that provides various constants that are used
 * across multiple modules.
 * Some of its values are as if the following initializations had been made:
 * 
 * ~~~
 * K.Decimal = Decimal9; // the Decimal9 class
 * K.VERSION_NUMBERS = [ 1, 0, 0 ];
 * K.VERSION_STRING = '1.0.0';
 * K.ZERO = new Decimal9(0);
 * K.ONE = new Decimal9(1);
 * K.ULP = new Decimal9(0.000000001); // =  new Decimal9(1, -9);
 * K.MIN_RANKINGS_SUPPORTED = 3,
 * K.RANKING_CODE = { undervote: '', overvote: '#' },
 * K.RANKING_CODES_NOT_A_CANDIDATE = Set {['', '#']},
 * K.LABEL = {
 *   totalCandidateVotes:   ':Votes for candidates',
 *   overvotes:   ':Overvotes',
 *   abstentions:   ':Abstentions',
 *   otherExhausted:   ':Other exhausted',
 *   totalVotes:   ':Total votes',
 *   protectedQuota:   ':Protected quota',
 *   quotaVotes:   ':Quota votes',
 *   quota:   ':Quota',
 *   totalSurplus:   ':Total surplus',
 *   nbrIterations:   ':Iterations'
 * };
 * K.OTHER_LABELS_LIST = [
 *      ':Votes for candidates',
 *      ':Overvotes',
 *      ':Abstentions',
 *      ':Other exhausted',
 *      ':Total votes',
 *      ':Protected quota',
 *      ':Quota votes',
 *      ':Quota',
 *      ':Total surplus',
 *      ':Iterations'
 * ];
 * K.OPTIONS = {};
 * K.OPTIONS._value_set = Set {[
 *         'alternative_defeats',
 *         'type_of_altdefs',
 *         'always_count_votes',
 *         'ballot_tree'
 *         ]},
 * K.OPTIONS.alternativeDefeats = {
 *   _value = 'alternative_defeats',
 *   yes: 'Y',
 *   never: 'N',
 * };
 * K.OPTIONS.typeOfAltDefs = {
 *   _value: 'type_of_altdefs',
 *   perRefRule: 'per_reference_rule',
 *   beforeSingleDefeats: 'before_single_defeats',
 *   ifNoNewElecteds: 'if_no_new_electeds',
 * };
 * K.OPTIONS.alwaysCountVotes = {
 *   _value: 'always_count_votes',
 *   yes: true,
 *   'no': false,
 * };
 * K.OPTIONS.ballotTree = {
 *   _value: 'ballot_tree',
 *   'dynamic': 'dynamic',
 *   'static': 'static',
 *   'none': 'none',
 * };
 * K.STATUS = {
 *   hopeful: 'hopeful',
 *   defeated: 'defeated',
 *   elected: 'elected'
 * };
 * K.DESTINY = {
 *   normal: 'normal',
 *   excluded: 'excluded',
 *   'protected': 'protected'
 * };
 * K.ROUND = {
 *   away: 'away',
 *   truncate: 'truncate',
 *   nearest: 'nearest'
 * };
 *~~~
 */


var K = Object.freeze({
  Decimal: _decimal9_js__WEBPACK_IMPORTED_MODULE_9__["Decimal9"],

  /** @type {array<number>} Major, minor, patch version numbers
   * using semantic versioning */
  VERSION_NUMBERS: _versionNumbers,

  /** @type {string} Major, minor, patch version numbers separated by periods
   * based on semantic versioning */
  VERSION_STRING: _versionString,
  ZERO: Object.freeze(new _decimal9_js__WEBPACK_IMPORTED_MODULE_9__["Decimal9"](0)),
  ONE: Object.freeze(new _decimal9_js__WEBPACK_IMPORTED_MODULE_9__["Decimal9"](1)),
  ULP: Object.freeze(_decimal9_js__WEBPACK_IMPORTED_MODULE_9__["Decimal9"].ulp()),
  MIN_RANKINGS_SUPPORTED: 3,
  RANKING_CODE: _ranking_code,
  RANKING_CODES_NOT_A_CANDIDATE: Object.freeze(new Set([_ranking_code.undervote, _ranking_code.overvote])),
  LABEL: _label,
  OTHER_LABELS_LIST: Object.freeze([_label.totalCandidateVotes, _label.overvotes, _label.abstentions, _label.otherExhausted, _label.totalVotes, _label.protectedQuota, _label.quotaVotes, _label.quota, _label.totalSurplus, _label.nbrIterations]),
  OPTIONS: _options,
  STATUS: Object.freeze({
    hopeful: 'hopeful',
    defeated: 'defeated',
    elected: 'elected'
  }),
  DESTINY: Object.freeze({
    normal: 'normal',
    excluded: 'excluded',
    protected: 'protected'
  }),
  ROUND: Object.freeze({
    away: 'away',
    truncate: 'truncate',
    nearest: 'nearest'
  })
});
/* harmony default export */ __webpack_exports__["default"] = (K);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimal9", function() { return Decimal9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimal9Total", function() { return Decimal9Total; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimal9Error", function() { return Decimal9Error; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(138);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(142);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(146);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _util_basic_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(136);
/* harmony import */ var _big_integer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(160);
























function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Decimal9
 */

/**
* @summary Support for decimals with nine decimal places.
*/


var _NBR_DECIMAL_PLACES = 9;

var _FACTOR = Math.pow(10, _NBR_DECIMAL_PLACES);

var _FACTOR_BIGINT = Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(_FACTOR);

var BIGINT_ONE = Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(1);
var BIGINT_MINUS_ONE = Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(-1);
var BIGINT_TWO = Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(2);
/** An error type used with the Decimal9 class. */

var Decimal9Error =
/*#__PURE__*/
function (_UtilBaseError) {
  _inherits(Decimal9Error, _UtilBaseError);

  /** The calling convention is the same as for UtilBaseError.
   * Initialize with a message, other values, and a prior error. */
  function Decimal9Error(message) {
    var otherValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var priorError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Decimal9Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Decimal9Error).call(this, message, otherValues, priorError));
  }

  return Decimal9Error;
}(_util_basic_js__WEBPACK_IMPORTED_MODULE_23__["UtilBaseError"]);
/** Unit of least precision.
 * @return {Decimal9} A value of the smallest positive value represented
 *   by a Decimal9 value: 1 * 10^-9 = 0.000000001. */


function _ulp() {
  var result = new Decimal9(1, -_NBR_DECIMAL_PLACES);
  return result;
}
/** An immutable class for expressing numbers to nine decimal places.
 *
 * This is useful for counting votes in STV tabulations.
 *
 * This class provides defined behavior, relatively free from
 * external influences, providing values are kept within a safe range.
 * Internally, values are stored as integer Javascript number values.
 *
 * Values that are outside the safe range may not be relied upon
 * to provide accurate results. It is the responsibilty of code using this
 * class to ensure that values stay within the safe range.
 *
 * Multiplication and division can require greater precision in
 * intermediate results before rounding or truncation than Javascript
 * numbers can provide.
 *
 * To support the required capacity for numerical precision, the Javascript
 * numbers are converted to big integers, currently using the npm
 * big-integer package and BigInt() constructor, for performing
 * multiplication and division.
 * The results, after applicable rounding
 * (including truncation) are converted back to native Javascript numbers.
 * It is left to the application to check or otherwise ensure that the
 * resulting values can be adequately represented as safe Javascript
 * integers.
 */


var Decimal9 =
/*#__PURE__*/
function (_Object) {
  _inherits(Decimal9, _Object);

  /**
   * @param {number|Number|Decimal9|null} [value=null] - A numeric value that
   *   the new instance should represent; if null, the result is zero.
   * @param {number} [exponentOf10=0] - Number indicating how many powers of 10
   *   the `value` should be be multiplied by to get the instance's true
   *   numeric value; `exponentOf10` can be negative.
   * @throw {Decimal9Error} If either `value` or `exponentOf10` is not a
   *   supported value or type.
   */
  function Decimal9() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var exponentOf10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Decimal9);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Decimal9).call(this));
    var roundedExponentOf10 = Math.round(exponentOf10);

    if (!Number.isInteger(roundedExponentOf10)) {
      throw new Decimal9Error('exponentOf10 is not a supported value:', [['type', _typeof(exponentOf10)], ['rounded exponentOf10', roundedExponentOf10], ['exponentOf10', exponentOf10]]);
    }

    exponentOf10 = roundedExponentOf10;

    if (value === null) {
      _this._valueAsInteger = 0;
      return _possibleConstructorReturn(_this);
    }

    if (value instanceof Decimal9) {
      if (exponentOf10 === 0) {
        _this._valueAsInteger = value._valueAsInteger;
      } else if (exponentOf10 > 0) {
        var multiplier = Math.pow(10, exponentOf10);
        _this._valueAsInteger = value._valueAsInteger * multiplier;
      } else {
        var divisor = Math.pow(10, -exponentOf10);

        var division = _integerDivide(value._valueAsInteger, divisor);

        _this._valueAsInteger = _round(division.q, division.r, division.d, 'nearest');
      }

      return _possibleConstructorReturn(_this);
    }

    if (_typeof(value) == 'object' && value instanceof Number) {
      value = Number(value);
    }

    if (typeof value == 'number') {
      var adjustedExponent = exponentOf10 + _NBR_DECIMAL_PLACES;

      var _multiplier = Math.pow(10, adjustedExponent);

      var adjustedValue = value * _multiplier;

      if (Math.trunc(value) === value) {
        if (adjustedExponent >= 0) {
          _this._valueAsInteger = value * _multiplier;
        } else {
          _this._valueAsInteger = Math.trunc(adjustedValue);
        }
      } else {
        _this._valueAsInteger = Math.round(adjustedValue);
      }

      return _possibleConstructorReturn(_this);
    } else {
      throw new Decimal9Error('Value is not a supported type:', [['type', _typeof(value)], ['value of value', value.toString()]]);
    }

    return _this;
  }
  /** Get the underlying integer value.
   * @return {number} The underlying JavaScript integer value used to
   *   internally represent the Decimal9 value; this may not be accurate
   *   if the value is not a safe Javascript integer. */


  _createClass(Decimal9, [{
    key: "_getValue",
    value: function _getValue() {
      return this._valueAsInteger;
    }
    /** Get the Decimal9 value as a Javascript number.
     * @return {number} A representation of the Decimal9 value as a Javascript
     *   number. */

  }, {
    key: "toNumber",
    value: function toNumber() {
      // Get the value as a javascript number.
      var result = this._getValue() / _FACTOR;

      return result;
    }
    /** The max safe integer value that Decimal9 uses internally,
     *  as a static class value.
     *
     * This represents a slightly smaller number than Javascript uses, since
     * Javascript has some conversion anomalies for what it deems to be
     * safe integers.
     *
     * The value is 9000100000000000 = 9,000,100,000,000,000. */

  }, {
    key: "toString",

    /** Convert the Decimal9 value to a string, showing all decimal places,
     * even if they include trailing zeros.
     * @return {string} A string reflecting the represented numeric value. */
    value: function toString() {
      var parts = _integerDivide(new _big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"](this._valueAsInteger), _FACTOR);

      parts.r = parts.r.toJSNumber();
      var result = parts.q.abs().toString() + '.' + Math.abs(parts.r).toString().padStart(9, '0');
      result = result.replace(/0{1,8}$/, '');
      parts.q = parts.q.toJSNumber();

      if (parts.q < 0 || parts.q === 0 && parts.r < 0) {
        result = '-' + result;
      }

      return result;
    }
    /** Test whether the Decimal9 value is in the safe range.
     * @return {boolean} A true/false indication of whether the Decimal9
     *   value is within the safe range, endpoints included. */

  }, {
    key: "isSafe",
    value: function isSafe() {
      if (this._valueAsInteger >= Decimal9.MIN_SAFE_INTEGER && this._valueAsInteger <= Decimal9.MAX_SAFE_INTEGER) {
        return true;
      } else {
        return false;
      }
    }
    /** Test whether this Decimal9 value is less than another one.
     * @param {Decimal9} value - A Decimal9 instance to compare with.
     * @return {boolean} A true/false indication of whether this numeric value
     *   is less than the numeric value of the argument. */

  }, {
    key: "isLess",
    value: function isLess(value) {
      _confirmTypes(value, Decimal9);

      var result = this._valueAsInteger < value._valueAsInteger;
      return result;
    }
    /** Test whether this Decimal9 value is less than or equal to another one.
     * @param {Decimal9} value - A Decimal9 instance to compare with.
     * @return {boolean} A true/false indication of whether this numeric value
     *   is less than or equal to the numeric value of the argument. */

  }, {
    key: "isLessEqual",
    value: function isLessEqual(value) {
      _confirmTypes(value, Decimal9);

      var result = this._valueAsInteger <= value._valueAsInteger;
      return result;
    }
    /** Test whether this Decimal9 value is equal to another one.
     * @param {Decimal9} value - A Decimal9 instance to compare with.
     * @return {boolean} A true/false indication of whether this numeric value
     *   is equal to the numeric value of the argument. */

  }, {
    key: "isEqual",
    value: function isEqual(value) {
      if (value === null) {
        return false;
      }

      _confirmTypes(value, Decimal9);
      /*
      if (!(value instanceof Decimal9)) {
        return false;
      }
      */


      var result = this._valueAsInteger === value._valueAsInteger;
      return result;
    }
    /** Test whether this Decimal9 value is not equal to another one.
     * @param {Decimal9} value - A Decimal9 instance to compare with.
     * @return {boolean} A true/false indication of whether this numeric value
     *   is not equal to the numeric value of the argument. */

  }, {
    key: "isNotEqual",
    value: function isNotEqual(value) {
      var result = !this.isEqual(value);
      return result;
    }
    /** Test whether this Decimal9 value is greater than or equal to another one.
     * @param {Decimal9} value - A Decimal9 instance to compare with.
     * @return {boolean} A true/false indication of whether this numeric value
     *   is greater than or equal to the numeric value of the argument. */

  }, {
    key: "isGreaterEqual",
    value: function isGreaterEqual(value) {
      _confirmTypes(value, Decimal9);

      var result = this._valueAsInteger >= value._valueAsInteger;
      return result;
    }
    /** Test whether this Decimal9 value is greater than another one.
     * @param {Decimal9} value - A Decimal9 instance to compare with.
     * @return {boolean} A true/false indication of whether this numeric value
     *   is greater than the numeric value of the argument. */

  }, {
    key: "isGreater",
    value: function isGreater(value) {
      _confirmTypes(value, Decimal9);

      var result = this._valueAsInteger > value._valueAsInteger;
      return result;
    }
    /** Add a value to this value, producing a new value.
     *
     * @param {Decimal9} value - The value to be added to this one.
     * @return {Decimal9} The sum of this and value. */

  }, {
    key: "plus",
    value: function plus(value) {
      _confirmTypes(value, Decimal9);

      var asInteger = this._valueAsInteger + value._valueAsInteger;
      var result = new Decimal9(asInteger, -_NBR_DECIMAL_PLACES);
      return result;
    }
    /** Subtract a value from this value, producing a new value.
     *
     * @param {Decimal9} value - The value to be subtracted from this one.
     * @return {Decimal9} The difference of this minus value. */

  }, {
    key: "minus",
    value: function minus(value) {
      _confirmTypes(value, Decimal9);

      var asInteger = this._valueAsInteger - value._valueAsInteger;
      var result = new Decimal9(asInteger, -_NBR_DECIMAL_PLACES);
      return result;
    }
    /** Arithmetically negate this value, producing a new value.
     *
     * @return {Decimal9} The negative of this. */

  }, {
    key: "negative",
    value: function negative() {
      var asInteger = -this._valueAsInteger;
      var result = new Decimal9(asInteger, -_NBR_DECIMAL_PLACES);
      return result;
    }
    /** Multiply this value by another value, producing a new value.
     *
     * @param {Decimal9|number|Number} value - The value to be multiplied by.
     *   this one
     * @param {string} [rounding='truncate'] - An indication of what kind of
     *   rounding should be done.  Should be a value in K.ROUND:
     *
     *   - 'truncate' = Truncate any value beyond 9 decimal places.
     *   - 'away' = Round away from zero to 9 decimal places.
     *   - 'nearest' = Round to the nearest 9-decimal-place value,
     *       rounding to an even digit in the 9th decimal place if there
     *       is a tie for the nearest value.
     * @return {Decimal9} The product of the two values, rounded as requested. */

  }, {
    key: "times",
    value: function times(value) {
      var rounding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'truncate';

      _confirmTypes(value, Decimal9, 'number', Number);

      if (!(value instanceof Decimal9)) {
        value = new Decimal9(value);
      }

      var product = new _big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"](this._valueAsInteger).multiply(new _big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"](value._valueAsInteger));

      var scaledProduct = _integerDivide(product, _FACTOR);

      var asInteger = _round(scaledProduct.q, scaledProduct.r, _FACTOR, rounding);

      var result = new Decimal9(asInteger, -_NBR_DECIMAL_PLACES);
      return result;
    }
    /** Divide this value by another value, producing a new value.
     *
     * @param {Decimal9|number|Number} value - The divisor value.
     * @param {string} [rounding='truncate'] - An indication of what kind of
     *   rounding should be done.  Should be a value in K.ROUND:
     *
     *   - 'truncate' = Truncate any value beyond 9 decimal places.
     *   - 'away' = Round away from zero to 9 decimal places.
     *   - 'nearest' = Round to the nearest 9-decimal-place value,
     *       rounding to an even digit in the 9th decimal place if there
     *       is a tie for the nearest value.
     * @return {Decimal9} The quotient of this divided by value, after any
     *   indicated rounding. */

  }, {
    key: "divideBy",
    value: function divideBy(value) {
      var rounding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'truncate';

      _confirmTypes(value, Decimal9, 'number', Number);

      if (!(value instanceof Decimal9)) {
        value = new Decimal9(Number(value));
      }

      if (value._valueAsInteger === 0) {
        throw new Decimal9Error('Divide by zero.');
      }

      var division = _integerDivide(Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(this._valueAsInteger).multiply(_FACTOR_BIGINT), Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(value._valueAsInteger));

      var asInteger = _round(division.q, division.r, division.d.abs(), rounding);

      var result = new Decimal9(asInteger, -_NBR_DECIMAL_PLACES);
      return result;
    }
  }], [{
    key: "MAX_SAFE_INTEGER",
    get: function get() {
      return 9000100000000000;
    }
    /** The negative of Decimal9.MAX_SAFE_INTEGER. */

  }, {
    key: "MIN_SAFE_INTEGER",
    get: function get() {
      return -Decimal9.MAX_SAFE_INTEGER;
    }
    /** The maximum value that Decimal9 deems safe to work with.
     *
     * The value is 9000100 = 9,000,100 , i.e. nine million one hundred. */

  }, {
    key: "MAX_SAFE_VALUE",
    get: function get() {
      return 9000100;
    }
    /** The negative of Decimal9.MAX_SAFE_VALUE. */

  }, {
    key: "MIN_SAFE_VALUE",
    get: function get() {
      return -Decimal9.MAX_SAFE_VALUE;
    }
  }]);

  return Decimal9;
}(_wrapNativeSuper(Object));

Decimal9.ulp = _ulp;
/** A mutable subclass of Decimal9 for accumulating totals.
 *
 * Totals can be accumulated through standard addition and subtraction
 * operations, `plus` and `minus`, without creating new instances.
 *
 * The constructor does not take any parameters and always initializes
 * a new instance to a zero value.
 */

var Decimal9Total =
/*#__PURE__*/
function (_Decimal) {
  _inherits(Decimal9Total, _Decimal);

  function Decimal9Total() {
    var _this2;

    _classCallCheck(this, Decimal9Total);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Decimal9Total).call(this));
    _this2._valueAsInteger = 0;
    return _this2;
  }
  /** Add a value to this value, accumulating the result in this.
   *
   * @param {Decimal9} value - The value to be added to this one
   * @return {Decimal9Total} This, which now carries the sum. */


  _createClass(Decimal9Total, [{
    key: "plus",
    value: function plus(value) {
      _confirmTypes(value, Decimal9);

      this._valueAsInteger += value._valueAsInteger;
      return this;
    }
    /** Subtract a value from this value, accumulating the result in this.
     *
     * @param {Decimal9} value - The value to be subtracted from this one
     * @return {Decimal9Total} This, which now carries the difference. */

  }, {
    key: "minus",
    value: function minus(value) {
      _confirmTypes(value, Decimal9);

      this._valueAsInteger -= value._valueAsInteger;
      return this;
    }
  }]);

  return Decimal9Total;
}(Decimal9);
/** Perform big integer division.
 * @param {number|big-integer} numerator - The numerator.
 * @param {number|big-integer} denominator - The denominator.
 * @return {Object} A data object containing the quotient, remainder, and
 * denominator, all as big integers.
 */


function _integerDivide(numerator, denominator) {
  // return BigInt quotient , remainder, and denominator.
  // first convert numerator and denominator to BigInt's as needed.
  if (typeof numerator === 'number') {
    numerator = Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(numerator);
  }

  if (typeof denominator === 'number') {
    denominator = Object(_big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"])(denominator);
  }

  var division = numerator.divmod(denominator);
  var result = {
    q: division.quotient,
    r: division.remainder,
    d: denominator
  };
  return result;
}
/** Round a big integer value based on its remainder, a modulus, and
 *  a rounding setting of 'truncate', 'away', or 'nearest'.
 *  @param {big-integer} asInteger - The value to round.
 *  @param {big-integer} remainder - The remainder to be rounded.
 *  @param {big-integer} modulus - Round to multiples of this value.
 *  @param {string} rounding - Values of 'truncate', 'away', or 'nearest'.
 *  @return {number} A Javascript integer appropriately rounded.
 */


function _round(asInteger, remainder, modulus) {
  var rounding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'truncate';

  // Round the value of asInteger + remainder / modulus to an integer.
  //
  // Return a Javascript number
  //
  // Give the correct answer whenever it and asInteger are safe integers.
  //
  // Assumptions:
  //   asInteger, remainder, and modulus are BigInt integers.
  //   //NOT ASSUMED: asInteger and remainder are the same sign or one of them
  //         is zero.
  //   //NOT ASSUMED: modulus is positive.
  //   Twice the modulus is a safe integer.
  //   remainder is less in absolute value than modulus.
  //
  // This function is only used internally, and the assumptions are not
  // asserted.
  if (rounding === 'away' && !remainder.isZero()) {
    asInteger = asInteger.plus(asInteger.isZero() ? remainder.isPositive() ? BIGINT_ONE : BIGINT_MINUS_ONE : asInteger.isPositive() ? BIGINT_ONE : BIGINT_MINUS_ONE);
  } else if (rounding === 'nearest') {
    var factorCompare = remainder.abs().multiply(BIGINT_TWO);
    var modulusAbs = modulus instanceof _big_integer_js__WEBPACK_IMPORTED_MODULE_24__["default"] ? modulus.abs() : Math.abs(modulus);

    if (factorCompare.gt(modulusAbs) || factorCompare.equals(modulusAbs) && asInteger.isOdd()) {
      asInteger = asInteger.plus(asInteger.isZero() ? remainder.isPositive() ? BIGINT_ONE : BIGINT_MINUS_ONE : asInteger.isPositive() ? BIGINT_ONE : BIGINT_MINUS_ONE);
    }
  }

  asInteger = asInteger.toJSNumber();
  return asInteger;
}

function _confirmTypes(value) {
  for (var _len = arguments.length, requiredTypes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    requiredTypes[_key - 1] = arguments[_key];
  }

  /* Raise an Decimal9Error if value is not an instance of the
  required class or of the required type.
  */
  for (var _i = 0, _requiredTypes = requiredTypes; _i < _requiredTypes.length; _i++) {
    var requiredType = _requiredTypes[_i];

    if (typeof requiredType == 'string' && _typeof(value) == requiredType || value === null && requiredType === null || (_typeof(requiredType) == 'object' || typeof requiredType == 'function') && requiredType !== null && value instanceof requiredType) {
      return true;
    }
  }

  throw new Decimal9Error('Value is not an instance of the required type:', [['value type', _typeof(value)], ['value', String(value)], ['required types', requiredTypes.map(function (x) {
    return (': ' + x).slice(2, 102);
  })]]);
}



/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $padStart = __webpack_require__(150).start;
var WEBKIT_BUG = __webpack_require__(151);

// `String.prototype.padStart` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BigInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module big-integer
 * @summary A shim for npm big-integer package.
 * @description This module provides redirection to the big-integer.
 *   This module allows the location, name, and version of the big-intger
 *   module to change without impacting other modules.
 *
 *   When used with browsers, a customized version of the big-integer module
 *   may be needed in order to avoid conflicts with other development tools.
 *
 *   In that case, the custom version of big-integer is hosted in the same
 *   directory as this module, instead of in a standard npm node_modules
 *   directory.
 *   The customization removes features that support other of module types
 *   which are not needed by this implementation.
 */

/* harmony default export */ __webpack_exports__["default"] = (_BigInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(162);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_es_date_to_json__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(164);
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_14__);
















/**
 * @copyright This file is in the public domain.
 *
 * This file was derived from the npm big-integer package
 * by Peter Olson, which is in the public domain.
 *
 * This file was obtained mostly by deleting or commenting out
 * portions that were not needed or that conflicted with
 * the use of Webpack.
 *
 */
var bigInt = function (undefined) {
  //"use strict";
  var BASE = 1e7,
      LOG_BASE = 7,
      MAX_INT = 9007199254740992,
      MAX_INT_ARR = smallToArray(MAX_INT),
      DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";

  function Integer(v, radix, alphabet, caseSensitive) {
    if (typeof v === "undefined") return Integer[0];
    if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
    return parseValue(v);
  }

  function BigInteger(value, sign) {
    this.value = value;
    this.sign = sign;
    this.isSmall = false;
  }

  BigInteger.prototype = Object.create(Integer.prototype);

  function SmallInteger(value) {
    this.value = value;
    this.sign = value < 0;
    this.isSmall = true;
  }

  SmallInteger.prototype = Object.create(Integer.prototype);

  function isPrecise(n) {
    return -MAX_INT < n && n < MAX_INT;
  }

  function smallToArray(n) {
    // For performance reasons doesn't reference BASE, need to change this function if BASE changes
    if (n < 1e7) return [n];
    if (n < 1e14) return [n % 1e7, Math.floor(n / 1e7)];
    return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
  }

  function arrayToSmall(arr) {
    // If BASE changes this function may need to change
    trim(arr);
    var length = arr.length;

    if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
      switch (length) {
        case 0:
          return 0;

        case 1:
          return arr[0];

        case 2:
          return arr[0] + arr[1] * BASE;

        default:
          return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
      }
    }

    return arr;
  }

  function trim(v) {
    var i = v.length;

    while (v[--i] === 0) {
      ;
    }

    v.length = i + 1;
  }

  function createArray(length) {
    // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
    var x = new Array(length);
    var i = -1;

    while (++i < length) {
      x[i] = 0;
    }

    return x;
  }

  function truncate(n) {
    if (n > 0) return Math.floor(n);
    return Math.ceil(n);
  }

  function add(a, b) {
    // assumes a and b are arrays with a.length >= b.length
    var l_a = a.length,
        l_b = b.length,
        r = new Array(l_a),
        carry = 0,
        base = BASE,
        sum,
        i;

    for (i = 0; i < l_b; i++) {
      sum = a[i] + b[i] + carry;
      carry = sum >= base ? 1 : 0;
      r[i] = sum - carry * base;
    }

    while (i < l_a) {
      sum = a[i] + carry;
      carry = sum === base ? 1 : 0;
      r[i++] = sum - carry * base;
    }

    if (carry > 0) r.push(carry);
    return r;
  }

  function addAny(a, b) {
    if (a.length >= b.length) return add(a, b);
    return add(b, a);
  }

  function addSmall(a, carry) {
    // assumes a is array, carry is number with 0 <= carry < MAX_INT
    var l = a.length,
        r = new Array(l),
        base = BASE,
        sum,
        i;

    for (i = 0; i < l; i++) {
      sum = a[i] - base + carry;
      carry = Math.floor(sum / base);
      r[i] = sum - carry * base;
      carry += 1;
    }

    while (carry > 0) {
      r[i++] = carry % base;
      carry = Math.floor(carry / base);
    }

    return r;
  }

  BigInteger.prototype.add = function (v) {
    var n = parseValue(v);

    if (this.sign !== n.sign) {
      return this.subtract(n.negate());
    }

    var a = this.value,
        b = n.value;

    if (n.isSmall) {
      return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
    }

    return new BigInteger(addAny(a, b), this.sign);
  };

  BigInteger.prototype.plus = BigInteger.prototype.add;

  SmallInteger.prototype.add = function (v) {
    var n = parseValue(v);
    var a = this.value;
    var lessThanZero = a < 0;

    if (lessThanZero !== n.sign) {
      return this.subtract(n.negate());
    }

    var b = n.value;

    if (n.isSmall) {
      if (isPrecise(a + b)) return new SmallInteger(a + b);
      b = smallToArray(Math.abs(b));
    }

    return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
  };

  SmallInteger.prototype.plus = SmallInteger.prototype.add;

  function subtract(a, b) {
    // assumes a and b are arrays with a >= b
    var a_l = a.length,
        b_l = b.length,
        r = new Array(a_l),
        borrow = 0,
        base = BASE,
        i,
        difference;

    for (i = 0; i < b_l; i++) {
      difference = a[i] - borrow - b[i];

      if (difference < 0) {
        difference += base;
        borrow = 1;
      } else borrow = 0;

      r[i] = difference;
    }

    for (i = b_l; i < a_l; i++) {
      difference = a[i] - borrow;
      if (difference < 0) difference += base;else {
        r[i++] = difference;
        break;
      }
      r[i] = difference;
    }

    for (; i < a_l; i++) {
      r[i] = a[i];
    }

    trim(r);
    return r;
  }

  function subtractAny(a, b, sign) {
    var value;

    if (compareAbs(a, b) >= 0) {
      value = subtract(a, b);
    } else {
      value = subtract(b, a);
      sign = !sign;
    }

    value = arrayToSmall(value);

    if (typeof value === "number") {
      if (sign) value = -value;
      return new SmallInteger(value);
    }

    return new BigInteger(value, sign);
  }

  function subtractSmall(a, b, sign) {
    // assumes a is array, b is number with 0 <= b < MAX_INT
    var l = a.length,
        r = new Array(l),
        carry = -b,
        base = BASE,
        i,
        difference;

    for (i = 0; i < l; i++) {
      difference = a[i] + carry;
      carry = Math.floor(difference / base);
      difference %= base;
      r[i] = difference < 0 ? difference + base : difference;
    }

    r = arrayToSmall(r);

    if (typeof r === "number") {
      if (sign) r = -r;
      return new SmallInteger(r);
    }

    return new BigInteger(r, sign);
  }

  BigInteger.prototype.subtract = function (v) {
    var n = parseValue(v);

    if (this.sign !== n.sign) {
      return this.add(n.negate());
    }

    var a = this.value,
        b = n.value;
    if (n.isSmall) return subtractSmall(a, Math.abs(b), this.sign);
    return subtractAny(a, b, this.sign);
  };

  BigInteger.prototype.minus = BigInteger.prototype.subtract;

  SmallInteger.prototype.subtract = function (v) {
    var n = parseValue(v);
    var a = this.value;
    var lessThanZero = a < 0;

    if (lessThanZero !== n.sign) {
      return this.add(n.negate());
    }

    var b = n.value;

    if (n.isSmall) {
      return new SmallInteger(a - b);
    }

    return subtractSmall(b, Math.abs(a), a >= 0);
  };

  SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

  BigInteger.prototype.negate = function () {
    return new BigInteger(this.value, !this.sign);
  };

  SmallInteger.prototype.negate = function () {
    var sign = this.sign;
    var small = new SmallInteger(-this.value);
    small.sign = !sign;
    return small;
  };

  BigInteger.prototype.abs = function () {
    return new BigInteger(this.value, false);
  };

  SmallInteger.prototype.abs = function () {
    return new SmallInteger(Math.abs(this.value));
  };

  function multiplyLong(a, b) {
    var a_l = a.length,
        b_l = b.length,
        l = a_l + b_l,
        r = createArray(l),
        base = BASE,
        product,
        carry,
        i,
        a_i,
        b_j;

    for (i = 0; i < a_l; ++i) {
      a_i = a[i];

      for (var j = 0; j < b_l; ++j) {
        b_j = b[j];
        product = a_i * b_j + r[i + j];
        carry = Math.floor(product / base);
        r[i + j] = product - carry * base;
        r[i + j + 1] += carry;
      }
    }

    trim(r);
    return r;
  }

  function multiplySmall(a, b) {
    // assumes a is array, b is number with |b| < BASE
    var l = a.length,
        r = new Array(l),
        base = BASE,
        carry = 0,
        product,
        i;

    for (i = 0; i < l; i++) {
      product = a[i] * b + carry;
      carry = Math.floor(product / base);
      r[i] = product - carry * base;
    }

    while (carry > 0) {
      r[i++] = carry % base;
      carry = Math.floor(carry / base);
    }

    return r;
  }

  function shiftLeft(x, n) {
    var r = [];

    while (n-- > 0) {
      r.push(0);
    }

    return r.concat(x);
  }

  function multiplyKaratsuba(x, y) {
    var n = Math.max(x.length, y.length);
    if (n <= 30) return multiplyLong(x, y);
    n = Math.ceil(n / 2);
    var b = x.slice(n),
        a = x.slice(0, n),
        d = y.slice(n),
        c = y.slice(0, n);
    var ac = multiplyKaratsuba(a, c),
        bd = multiplyKaratsuba(b, d),
        abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));
    var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
    trim(product);
    return product;
  } // The following function is derived from a surface fit of a graph plotting the performance difference
  // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.


  function hide_useKaratsuba(l1, l2) {
    return false; //return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
  }

  BigInteger.prototype.multiply = function (v) {
    var n = parseValue(v),
        a = this.value,
        b = n.value,
        sign = this.sign !== n.sign,
        abs;

    if (n.isSmall) {
      if (b === 0) return Integer[0];
      if (b === 1) return this;
      if (b === -1) return this.negate();
      abs = Math.abs(b);

      if (abs < BASE) {
        return new BigInteger(multiplySmall(a, abs), sign);
      }

      b = smallToArray(abs);
    }

    if (hide_useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
      return new BigInteger(multiplyKaratsuba(a, b), sign);
    return new BigInteger(multiplyLong(a, b), sign);
  };

  BigInteger.prototype.times = BigInteger.prototype.multiply;

  function multiplySmallAndArray(a, b, sign) {
    // a >= 0
    if (a < BASE) {
      return new BigInteger(multiplySmall(b, a), sign);
    }

    return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
  }

  SmallInteger.prototype._multiplyBySmall = function (a) {
    if (isPrecise(a.value * this.value)) {
      return new SmallInteger(a.value * this.value);
    }

    return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
  };

  BigInteger.prototype._multiplyBySmall = function (a) {
    if (a.value === 0) return Integer[0];
    if (a.value === 1) return this;
    if (a.value === -1) return this.negate();
    return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
  };

  SmallInteger.prototype.multiply = function (v) {
    return parseValue(v)._multiplyBySmall(this);
  };

  SmallInteger.prototype.times = SmallInteger.prototype.multiply;

  function square(a) {
    //console.assert(2 * BASE * BASE < MAX_INT);
    var l = a.length,
        r = createArray(l + l),
        base = BASE,
        product,
        carry,
        i,
        a_i,
        a_j;

    for (i = 0; i < l; i++) {
      a_i = a[i];
      carry = 0 - a_i * a_i;

      for (var j = i; j < l; j++) {
        a_j = a[j];
        product = 2 * (a_i * a_j) + r[i + j] + carry;
        carry = Math.floor(product / base);
        r[i + j] = product - carry * base;
      }

      r[i + l] = carry;
    }

    trim(r);
    return r;
  }

  BigInteger.prototype.square = function () {
    return new BigInteger(square(this.value), false);
  };

  SmallInteger.prototype.square = function () {
    var value = this.value * this.value;
    if (isPrecise(value)) return new SmallInteger(value);
    return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
  };

  function divMod1(a, b) {
    // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
    var a_l = a.length,
        b_l = b.length,
        base = BASE,
        result = createArray(b.length),
        divisorMostSignificantDigit = b[b_l - 1],
        // normalization
    lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
        remainder = multiplySmall(a, lambda),
        divisor = multiplySmall(b, lambda),
        quotientDigit,
        shift,
        carry,
        borrow,
        i,
        l,
        q;
    if (remainder.length <= a_l) remainder.push(0);
    divisor.push(0);
    divisorMostSignificantDigit = divisor[b_l - 1];

    for (shift = a_l - b_l; shift >= 0; shift--) {
      quotientDigit = base - 1;

      if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
        quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
      } // quotientDigit <= base - 1


      carry = 0;
      borrow = 0;
      l = divisor.length;

      for (i = 0; i < l; i++) {
        carry += quotientDigit * divisor[i];
        q = Math.floor(carry / base);
        borrow += remainder[shift + i] - (carry - q * base);
        carry = q;

        if (borrow < 0) {
          remainder[shift + i] = borrow + base;
          borrow = -1;
        } else {
          remainder[shift + i] = borrow;
          borrow = 0;
        }
      }

      while (borrow !== 0) {
        quotientDigit -= 1;
        carry = 0;

        for (i = 0; i < l; i++) {
          carry += remainder[shift + i] - base + divisor[i];

          if (carry < 0) {
            remainder[shift + i] = carry + base;
            carry = 0;
          } else {
            remainder[shift + i] = carry;
            carry = 1;
          }
        }

        borrow += carry;
      }

      result[shift] = quotientDigit;
    } // denormalization


    remainder = divModSmall(remainder, lambda)[0];
    return [arrayToSmall(result), arrayToSmall(remainder)];
  }

  function divMod2(a, b) {
    // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
    // Performs faster than divMod1 on larger input sizes.
    var a_l = a.length,
        b_l = b.length,
        result = [],
        part = [],
        base = BASE,
        guess,
        xlen,
        highx,
        highy,
        check;

    while (a_l) {
      part.unshift(a[--a_l]);
      trim(part);

      if (compareAbs(part, b) < 0) {
        result.push(0);
        continue;
      }

      xlen = part.length;
      highx = part[xlen - 1] * base + part[xlen - 2];
      highy = b[b_l - 1] * base + b[b_l - 2];

      if (xlen > b_l) {
        highx = (highx + 1) * base;
      }

      guess = Math.ceil(highx / highy);

      do {
        check = multiplySmall(b, guess);
        if (compareAbs(check, part) <= 0) break;
        guess--;
      } while (guess);

      result.push(guess);
      part = subtract(part, check);
    }

    result.reverse();
    return [arrayToSmall(result), arrayToSmall(part)];
  }

  function divModSmall(value, lambda) {
    var length = value.length,
        quotient = createArray(length),
        base = BASE,
        i,
        q,
        remainder,
        divisor;
    remainder = 0;

    for (i = length - 1; i >= 0; --i) {
      divisor = remainder * base + value[i];
      q = truncate(divisor / lambda);
      remainder = divisor - q * lambda;
      quotient[i] = q | 0;
    }

    return [quotient, remainder | 0];
  }

  function divModAny(self, v) {
    var value,
        n = parseValue(v);
    var a = self.value,
        b = n.value;
    var quotient;
    if (b === 0) throw new Error("Cannot divide by zero");

    if (self.isSmall) {
      if (n.isSmall) {
        return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
      }

      return [Integer[0], self];
    }

    if (n.isSmall) {
      if (b === 1) return [self, Integer[0]];
      if (b == -1) return [self.negate(), Integer[0]];
      var abs = Math.abs(b);

      if (abs < BASE) {
        value = divModSmall(a, abs);
        quotient = arrayToSmall(value[0]);
        var remainder = value[1];
        if (self.sign) remainder = -remainder;

        if (typeof quotient === "number") {
          if (self.sign !== n.sign) quotient = -quotient;
          return [new SmallInteger(quotient), new SmallInteger(remainder)];
        }

        return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
      }

      b = smallToArray(abs);
    }

    var comparison = compareAbs(a, b);
    if (comparison === -1) return [Integer[0], self];
    if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]]; // divMod1 is faster on smaller input sizes

    if (a.length + b.length <= 200) value = divMod1(a, b);else value = divMod2(a, b);
    quotient = value[0];
    var qSign = self.sign !== n.sign,
        mod = value[1],
        mSign = self.sign;

    if (typeof quotient === "number") {
      if (qSign) quotient = -quotient;
      quotient = new SmallInteger(quotient);
    } else quotient = new BigInteger(quotient, qSign);

    if (typeof mod === "number") {
      if (mSign) mod = -mod;
      mod = new SmallInteger(mod);
    } else mod = new BigInteger(mod, mSign);

    return [quotient, mod];
  }

  BigInteger.prototype.divmod = function (v) {
    var result = divModAny(this, v);
    return {
      quotient: result[0],
      remainder: result[1]
    };
  };

  SmallInteger.prototype.divmod = BigInteger.prototype.divmod;

  BigInteger.prototype.divide = function (v) {
    return divModAny(this, v)[0];
  };

  SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

  BigInteger.prototype.mod = function (v) {
    return divModAny(this, v)[1];
  };

  SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

  BigInteger.prototype.pow = function (v) {
    var n = parseValue(v),
        a = this.value,
        b = n.value,
        value,
        x,
        y;
    if (b === 0) return Integer[1];
    if (a === 0) return Integer[0];
    if (a === 1) return Integer[1];
    if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];

    if (n.sign) {
      return Integer[0];
    }

    if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");

    if (this.isSmall) {
      if (isPrecise(value = Math.pow(a, b))) return new SmallInteger(truncate(value));
    }

    x = this;
    y = Integer[1];

    while (true) {
      if (b & 1 === 1) {
        y = y.times(x);
        --b;
      }

      if (b === 0) break;
      b /= 2;
      x = x.square();
    }

    return y;
  };

  SmallInteger.prototype.pow = BigInteger.prototype.pow;

  BigInteger.prototype.modPow = function (exp, mod) {
    exp = parseValue(exp);
    mod = parseValue(mod);
    if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
    var r = Integer[1],
        base = this.mod(mod);

    if (exp.isNegative()) {
      exp = exp.multiply(Integer[-1]);
      base = base.modInv(mod);
    }

    while (exp.isPositive()) {
      if (base.isZero()) return Integer[0];
      if (exp.isOdd()) r = r.multiply(base).mod(mod);
      exp = exp.divide(2);
      base = base.square().mod(mod);
    }

    return r;
  };

  SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

  function compareAbs(a, b) {
    if (a.length !== b.length) {
      return a.length > b.length ? 1 : -1;
    }

    for (var i = a.length - 1; i >= 0; i--) {
      if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
    }

    return 0;
  }

  BigInteger.prototype.compareAbs = function (v) {
    var n = parseValue(v),
        a = this.value,
        b = n.value;
    if (n.isSmall) return 1;
    return compareAbs(a, b);
  };

  SmallInteger.prototype.compareAbs = function (v) {
    var n = parseValue(v),
        a = Math.abs(this.value),
        b = n.value;

    if (n.isSmall) {
      b = Math.abs(b);
      return a === b ? 0 : a > b ? 1 : -1;
    }

    return -1;
  };

  BigInteger.prototype.compare = function (v) {
    // See discussion about comparison with Infinity:
    // https://github.com/peterolson/BigInteger.js/issues/61
    if (v === Infinity) {
      return -1;
    }

    if (v === -Infinity) {
      return 1;
    }

    var n = parseValue(v),
        a = this.value,
        b = n.value;

    if (this.sign !== n.sign) {
      return n.sign ? 1 : -1;
    }

    if (n.isSmall) {
      return this.sign ? -1 : 1;
    }

    return compareAbs(a, b) * (this.sign ? -1 : 1);
  };

  BigInteger.prototype.compareTo = BigInteger.prototype.compare;

  SmallInteger.prototype.compare = function (v) {
    if (v === Infinity) {
      return -1;
    }

    if (v === -Infinity) {
      return 1;
    }

    var n = parseValue(v),
        a = this.value,
        b = n.value;

    if (n.isSmall) {
      return a == b ? 0 : a > b ? 1 : -1;
    }

    var lessThanZero = a < 0;

    if (lessThanZero !== n.sign) {
      return a < 0 ? -1 : 1;
    }

    return a < 0 ? 1 : -1;
  };

  SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

  BigInteger.prototype.equals = function (v) {
    return this.compare(v) === 0;
  };

  SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

  BigInteger.prototype.notEquals = function (v) {
    return this.compare(v) !== 0;
  };

  SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

  BigInteger.prototype.greater = function (v) {
    return this.compare(v) > 0;
  };

  SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

  BigInteger.prototype.lesser = function (v) {
    return this.compare(v) < 0;
  };

  SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

  BigInteger.prototype.greaterOrEquals = function (v) {
    return this.compare(v) >= 0;
  };

  SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

  BigInteger.prototype.lesserOrEquals = function (v) {
    return this.compare(v) <= 0;
  };

  SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

  BigInteger.prototype.isEven = function () {
    return (this.value[0] & 1) === 0;
  };

  SmallInteger.prototype.isEven = function () {
    return (this.value & 1) === 0;
  };

  BigInteger.prototype.isOdd = function () {
    return (this.value[0] & 1) === 1;
  };

  SmallInteger.prototype.isOdd = function () {
    return (this.value & 1) === 1;
  };

  BigInteger.prototype.isPositive = function () {
    return !this.sign;
  };

  SmallInteger.prototype.isPositive = function () {
    return this.value > 0;
  };

  BigInteger.prototype.isNegative = function () {
    return this.sign;
  };

  SmallInteger.prototype.isNegative = function () {
    return this.value < 0;
  };

  BigInteger.prototype.isUnit = function () {
    return false;
  };

  SmallInteger.prototype.isUnit = function () {
    return Math.abs(this.value) === 1;
  };

  BigInteger.prototype.isZero = function () {
    return false;
  };

  SmallInteger.prototype.isZero = function () {
    return this.value === 0;
  };

  BigInteger.prototype.isDivisibleBy = function (v) {
    var n = parseValue(v);
    if (n.isZero()) return false;
    if (n.isUnit()) return true;
    if (n.compareAbs(2) === 0) return this.isEven();
    return this.mod(n).isZero();
  };

  SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

  function isBasicPrime(v) {
    var n = v.abs();
    if (n.isUnit()) return false;
    if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
    if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
    if (n.lesser(49)) return true; // we don't know if it's prime: let the other functions figure it out
  }

  function millerRabinTest(n, a) {
    var nPrev = n.prev(),
        b = nPrev,
        r = 0,
        d,
        i,
        x;

    while (b.isEven()) {
      b = b.divide(2);
      r++;
    }

    next: for (i = 0; i < a.length; i++) {
      if (n.lesser(a[i])) continue;
      x = bigInt(a[i]).modPow(b, n);
      if (x.isUnit() || x.equals(nPrev)) continue;

      for (d = r - 1; d != 0; d--) {
        x = x.square().mod(n);
        if (x.isUnit()) return false;
        if (x.equals(nPrev)) continue next;
      }

      return false;
    }

    return true;
  } // Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2


  BigInteger.prototype.isPrime = function (strict) {
    var isPrime = isBasicPrime(this);
    if (isPrime !== undefined) return isPrime;
    var n = this.abs();
    var bits = n.bitLength();
    if (bits <= 64) return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    var logN = Math.log(2) * bits.toJSNumber();
    var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);

    for (var a = [], i = 0; i < t; i++) {
      a.push(bigInt(i + 2));
    }

    return millerRabinTest(n, a);
  };

  SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

  BigInteger.prototype.isProbablePrime = function (iterations) {
    var isPrime = isBasicPrime(this);
    if (isPrime !== undefined) return isPrime;
    var n = this.abs();
    var t = iterations === undefined ? 5 : iterations;

    for (var a = [], i = 0; i < t; i++) {
      a.push(bigInt.randBetween(2, n.minus(2)));
    }

    return millerRabinTest(n, a);
  };

  SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

  BigInteger.prototype.modInv = function (n) {
    var t = bigInt.zero,
        newT = bigInt.one,
        r = parseValue(n),
        newR = this.abs(),
        q,
        lastT,
        lastR;

    while (!newR.isZero()) {
      q = r.divide(newR);
      lastT = t;
      lastR = r;
      t = newT;
      r = newR;
      newT = lastT.subtract(q.multiply(newT));
      newR = lastR.subtract(q.multiply(newR));
    }

    if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");

    if (t.compare(0) === -1) {
      t = t.add(n);
    }

    if (this.isNegative()) {
      return t.negate();
    }

    return t;
  };

  SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

  BigInteger.prototype.next = function () {
    var value = this.value;

    if (this.sign) {
      return subtractSmall(value, 1, this.sign);
    }

    return new BigInteger(addSmall(value, 1), this.sign);
  };

  SmallInteger.prototype.next = function () {
    var value = this.value;
    if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
    return new BigInteger(MAX_INT_ARR, false);
  };

  BigInteger.prototype.prev = function () {
    var value = this.value;

    if (this.sign) {
      return new BigInteger(addSmall(value, 1), true);
    }

    return subtractSmall(value, 1, this.sign);
  };

  SmallInteger.prototype.prev = function () {
    var value = this.value;
    if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
    return new BigInteger(MAX_INT_ARR, true);
  };

  var powersOfTwo = [1];

  while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) {
    powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
  }

  var powers2Length = powersOfTwo.length,
      highestPower2 = powersOfTwo[powers2Length - 1];

  function shift_isSmall(n) {
    return Math.abs(n) <= BASE;
  }

  BigInteger.prototype.shiftLeft = function (v) {
    var n = parseValue(v).toJSNumber();

    if (!shift_isSmall(n)) {
      throw new Error(String(n) + " is too large for shifting.");
    }

    if (n < 0) return this.shiftRight(-n);
    var result = this;
    if (result.isZero()) return result;

    while (n >= powers2Length) {
      result = result.multiply(highestPower2);
      n -= powers2Length - 1;
    }

    return result.multiply(powersOfTwo[n]);
  };

  SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

  BigInteger.prototype.shiftRight = function (v) {
    var remQuo;
    var n = parseValue(v).toJSNumber();

    if (!shift_isSmall(n)) {
      throw new Error(String(n) + " is too large for shifting.");
    }

    if (n < 0) return this.shiftLeft(-n);
    var result = this;

    while (n >= powers2Length) {
      if (result.isZero() || result.isNegative() && result.isUnit()) return result;
      remQuo = divModAny(result, highestPower2);
      result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      n -= powers2Length - 1;
    }

    remQuo = divModAny(result, powersOfTwo[n]);
    return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
  };

  SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

  function bitwise(x, y, fn) {
    y = parseValue(y);
    var xSign = x.isNegative(),
        ySign = y.isNegative();
    var xRem = xSign ? x.not() : x,
        yRem = ySign ? y.not() : y;
    var xDigit = 0,
        yDigit = 0;
    var xDivMod = null,
        yDivMod = null;
    var result = [];

    while (!xRem.isZero() || !yRem.isZero()) {
      xDivMod = divModAny(xRem, highestPower2);
      xDigit = xDivMod[1].toJSNumber();

      if (xSign) {
        xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
      }

      yDivMod = divModAny(yRem, highestPower2);
      yDigit = yDivMod[1].toJSNumber();

      if (ySign) {
        yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
      }

      xRem = xDivMod[0];
      yRem = yDivMod[0];
      result.push(fn(xDigit, yDigit));
    }

    var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);

    for (var i = result.length - 1; i >= 0; i -= 1) {
      sum = sum.multiply(highestPower2).add(bigInt(result[i]));
    }

    return sum;
  }

  BigInteger.prototype.not = function () {
    return this.negate().prev();
  };

  SmallInteger.prototype.not = BigInteger.prototype.not;

  BigInteger.prototype.and = function (n) {
    return bitwise(this, n, function (a, b) {
      return a & b;
    });
  };

  SmallInteger.prototype.and = BigInteger.prototype.and;

  BigInteger.prototype.or = function (n) {
    return bitwise(this, n, function (a, b) {
      return a | b;
    });
  };

  SmallInteger.prototype.or = BigInteger.prototype.or;

  BigInteger.prototype.xor = function (n) {
    return bitwise(this, n, function (a, b) {
      return a ^ b;
    });
  };

  SmallInteger.prototype.xor = BigInteger.prototype.xor;
  var LOBMASK_I = 1 << 30,
      LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;

  function roughLOB(n) {
    // get lowestOneBit (rough)
    // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
    // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
    var v = n.value,
        x = typeof v === "number" ? v | LOBMASK_I : v[0] + v[1] * BASE | LOBMASK_BI;
    return x & -x;
  }

  function integerLogarithm(value, base) {
    if (base.compareTo(value) <= 0) {
      var tmp = integerLogarithm(value, base.square(base));
      var p = tmp.p;
      var e = tmp.e;
      var t = p.multiply(base);
      return t.compareTo(value) <= 0 ? {
        p: t,
        e: e * 2 + 1
      } : {
        p: p,
        e: e * 2
      };
    }

    return {
      p: bigInt(1),
      e: 0
    };
  }

  BigInteger.prototype.bitLength = function () {
    var n = this;

    if (n.compareTo(bigInt(0)) < 0) {
      n = n.negate().subtract(bigInt(1));
    }

    if (n.compareTo(bigInt(0)) === 0) {
      return bigInt(0);
    }

    return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
  };

  SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

  function max(a, b) {
    a = parseValue(a);
    b = parseValue(b);
    return a.greater(b) ? a : b;
  }

  function min(a, b) {
    a = parseValue(a);
    b = parseValue(b);
    return a.lesser(b) ? a : b;
  }

  function gcd(a, b) {
    a = parseValue(a).abs();
    b = parseValue(b).abs();
    if (a.equals(b)) return a;
    if (a.isZero()) return b;
    if (b.isZero()) return a;
    var c = Integer[1],
        d,
        t;

    while (a.isEven() && b.isEven()) {
      d = min(roughLOB(a), roughLOB(b));
      a = a.divide(d);
      b = b.divide(d);
      c = c.multiply(d);
    }

    while (a.isEven()) {
      a = a.divide(roughLOB(a));
    }

    do {
      while (b.isEven()) {
        b = b.divide(roughLOB(b));
      }

      if (a.greater(b)) {
        t = b;
        b = a;
        a = t;
      }

      b = b.subtract(a);
    } while (!b.isZero());

    return c.isUnit() ? a : a.multiply(c);
  }

  function lcm(a, b) {
    a = parseValue(a).abs();
    b = parseValue(b).abs();
    return a.divide(gcd(a, b)).multiply(b);
  }

  function randBetween(a, b) {
    a = parseValue(a);
    b = parseValue(b);
    var low = min(a, b),
        high = max(a, b);
    var range = high.subtract(low).add(1);
    if (range.isSmall) return low.add(Math.floor(Math.random() * range));
    var digits = toBase(range, BASE).value;
    var result = [],
        restricted = true;

    for (var i = 0; i < digits.length; i++) {
      var top = restricted ? digits[i] : BASE;
      var digit = truncate(Math.random() * top);
      result.push(digit);
      if (digit < top) restricted = false;
    }

    return low.add(Integer.fromArray(result, BASE, false));
  }

  var parseBase = function parseBase(text, base, alphabet, caseSensitive) {
    alphabet = alphabet || DEFAULT_ALPHABET;
    text = String(text);

    if (!caseSensitive) {
      text = text.toLowerCase();
      alphabet = alphabet.toLowerCase();
    }

    var length = text.length;
    var i;
    var absBase = Math.abs(base);
    var alphabetValues = {};
    var c;

    for (i = 0; i < alphabet.length; i++) {
      alphabetValues[alphabet[i]] = i;
    }

    for (i = 0; i < length; i++) {
      c = text[i];
      if (c === "-") continue;

      if (c in alphabetValues) {
        if (alphabetValues[c] >= absBase) {
          if (c === "1" && absBase === 1) continue;
          throw new Error(c + " is not a valid digit in base " + base + ".");
        }
      }
    }

    base = parseValue(base);
    var digits = [];
    var isNegative = text[0] === "-";

    for (i = isNegative ? 1 : 0; i < text.length; i++) {
      c = text[i];
      if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));else if (c === "<") {
        var start = i;

        do {
          i++;
        } while (text[i] !== ">" && i < text.length);

        digits.push(parseValue(text.slice(start + 1, i)));
      } else throw new Error(c + " is not a valid character");
    }

    return parseBaseFromArray(digits, base, isNegative);
  };

  function parseBaseFromArray(digits, base, isNegative) {
    var val = Integer[0],
        pow = Integer[1],
        i;

    for (i = digits.length - 1; i >= 0; i--) {
      val = val.add(digits[i].times(pow));
      pow = pow.times(base);
    }

    return isNegative ? val.negate() : val;
  }

  function stringify(digit, alphabet) {
    alphabet = alphabet || DEFAULT_ALPHABET;

    if (digit < alphabet.length) {
      return alphabet[digit];
    }

    return "<" + digit + ">";
  }

  function toBase(n, base) {
    base = bigInt(base);

    if (base.isZero()) {
      if (n.isZero()) return {
        value: [0],
        isNegative: false
      };
      throw new Error("Cannot convert nonzero numbers to base 0.");
    }

    if (base.equals(-1)) {
      if (n.isZero()) return {
        value: [0],
        isNegative: false
      };
      if (n.isNegative()) return {
        value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
        isNegative: false
      };
      var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
      arr.unshift([1]);
      return {
        value: [].concat.apply([], arr),
        isNegative: false
      };
    }

    var neg = false;

    if (n.isNegative() && base.isPositive()) {
      neg = true;
      n = n.abs();
    }

    if (base.isUnit()) {
      if (n.isZero()) return {
        value: [0],
        isNegative: false
      };
      return {
        value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
        isNegative: neg
      };
    }

    var out = [];
    var left = n,
        divmod;

    while (left.isNegative() || left.compareAbs(base) >= 0) {
      divmod = left.divmod(base);
      left = divmod.quotient;
      var digit = divmod.remainder;

      if (digit.isNegative()) {
        digit = base.minus(digit).abs();
        left = left.next();
      }

      out.push(digit.toJSNumber());
    }

    out.push(left.toJSNumber());
    return {
      value: out.reverse(),
      isNegative: neg
    };
  }

  function toBaseString(n, base, alphabet) {
    var arr = toBase(n, base);
    return (arr.isNegative ? "-" : "") + arr.value.map(function (x) {
      return stringify(x, alphabet);
    }).join('');
  }

  BigInteger.prototype.toArray = function (radix) {
    return toBase(this, radix);
  };

  SmallInteger.prototype.toArray = function (radix) {
    return toBase(this, radix);
  };

  BigInteger.prototype.toString = function (radix, alphabet) {
    if (radix === undefined) radix = 10;
    if (radix !== 10) return toBaseString(this, radix, alphabet);
    var v = this.value,
        l = v.length,
        str = String(v[--l]),
        zeros = "0000000",
        digit;

    while (--l >= 0) {
      digit = String(v[l]);
      str += zeros.slice(digit.length) + digit;
    }

    var sign = this.sign ? "-" : "";
    return sign + str;
  };

  SmallInteger.prototype.toString = function (radix, alphabet) {
    if (radix === undefined) radix = 10;
    if (radix != 10) return toBaseString(this, radix, alphabet);
    return String(this.value);
  };

  BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () {
    return this.toString();
  };

  BigInteger.prototype.valueOf = function () {
    return parseInt(this.toString(), 10);
  };

  BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

  SmallInteger.prototype.valueOf = function () {
    return this.value;
  };

  SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;

  function parseStringValue(v) {
    if (isPrecise(+v)) {
      var x = +v;
      if (x === truncate(x)) return new SmallInteger(x);
      throw new Error("Invalid integer: " + v);
    }

    var sign = v[0] === "-";
    if (sign) v = v.slice(1);
    var split = v.split(/e/i);
    if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));

    if (split.length === 2) {
      var exp = split[1];
      if (exp[0] === "+") exp = exp.slice(1);
      exp = +exp;
      if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
      var text = split[0];
      var decimalPlace = text.indexOf(".");

      if (decimalPlace >= 0) {
        exp -= text.length - decimalPlace - 1;
        text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
      }

      if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
      text += new Array(exp + 1).join("0");
      v = text;
    }

    var isValid = /^([0-9][0-9]*)$/.test(v);
    if (!isValid) throw new Error("Invalid integer: " + v);
    var r = [],
        max = v.length,
        l = LOG_BASE,
        min = max - l;

    while (max > 0) {
      r.push(+v.slice(min, max));
      min -= l;
      if (min < 0) min = 0;
      max -= l;
    }

    trim(r);
    return new BigInteger(r, sign);
  }

  function parseNumberValue(v) {
    if (isPrecise(v)) {
      if (v !== truncate(v)) throw new Error(v + " is not an integer.");
      return new SmallInteger(v);
    }

    return parseStringValue(v.toString());
  }

  function parseValue(v) {
    if (typeof v === "number") {
      return parseNumberValue(v);
    }

    if (typeof v === "string") {
      return parseStringValue(v);
    }

    return v;
  } // Pre-define numbers in range [-999,999]


  for (var i = 0; i < 1000; i++) {
    Integer[i] = parseValue(i);
    if (i > 0) Integer[-i] = parseValue(-i);
  } // Backwards compatibility


  Integer.one = Integer[1];
  Integer.zero = Integer[0];
  Integer.minusOne = Integer[-1];
  Integer.max = max;
  Integer.min = min;
  Integer.gcd = gcd;
  Integer.lcm = lcm;

  Integer.isInstance = function (x) {
    return x instanceof BigInteger || x instanceof SmallInteger;
  };

  Integer.randBetween = randBetween;

  Integer.fromArray = function (digits, base, isNegative) {
    return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
  };

  return Integer;
}();

/* harmony default export */ __webpack_exports__["default"] = (bigInt);
/*
// Node.js check
if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
    module.exports = bigInt;
}
*/
//amd check

/*
if (typeof define === "function" && define.amd) {
    define("big-integer", [], function () {
        return bigInt;
    });
}
*/

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var isArray = __webpack_require__(46);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var fails = __webpack_require__(7);
var toObject = __webpack_require__(47);
var toPrimitive = __webpack_require__(14);

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(153);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _util_basic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(136);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(157);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(166);
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(167);


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Meek
 *
 * @summary Tabulate RCV / STV per prfound.org's Meek's method.
 */




/**
 * The results of a tabulation.
 *
 * This class also includes various static functions that are
 * useful for converting those results to strings and printing them
 * to the console.
 */

var Results =
/*#__PURE__*/
function () {
  /**
   * Store the three results of a tabulation.
   * See the description of `Tabulation.tabulate()` for details.
   * @param {Set<string>} elected - A set of elected candidate identifiers.
   * @param {array<Status>} statuses - An array of statuses for each
   *   candidate.
   * @param {Object} tally - A data object with the round-by-round
   *   tally of votes and other counts for each candidate and
   *   other tabulation categories.
   */
  function Results(elected, statuses, tally) {
    _classCallCheck(this, Results);

    /** A set of elected candidate identifiers.
     * @type {Set<string>} */
    this.elected = elected;
    /** An array of statuses for each candidate.
     * @type {array<Status>} */

    this.statuses = statuses;
    /** A data object with the round-by-round tally of votes and other
     * counts for each candidate and other tabulation categories.
     * @type{Object} */

    this.tally = tally;
  }
  /**
   * Format as a string a set or array of elected candidate identifiers
   *
   * The resulting string can be a JSON fragment specifying an
   * object property.
   *
   * @param {array|Set} elected
   *   A set or array of elected candidate identifiers.
   *
   * @param {string} [prefix='']
   *   A string that prefixes label.
   *   This can specify a separating comma.
   *
   * @param {string} [label='"elected": ']
   *   A string that labels the string.
   *   This can specify a property key and its surrounding punctuation.
   *
   * @param {number} [indent1=2]
   *   The number of spaces that prefix the first (and only) line.
   *
   * @param {string} [suffix='']
   *   A string that is printed at the end of the line.
   *   This can specify a separating comma.
   *
   * @return {string} A string representing elected in
   *   standard sorted order.
   */


  _createClass(Results, [{
    key: "getElectedAsString",

    /** See the corresponding static class method for description.
     * This method implicitly uses this.elected, so only prefix, label,
     * indent1, and suffix are parameters. */
    value: function getElectedAsString(prefix, label, indent1, suffix) {
      return Results.getElectedAsString(this.elected, prefix, label, indent1, suffix);
    }
    /**
     * Format a data object of candidate statuses as a string
     *
     * The resulting string can be a JSON fragment specifying an
     * object property.
     *
     * @param {Object} statuses
     *   A data object of Status objects, keyed by candidate identifiers.
     *
     * @param {string} [prefix='']
     *   A string that prefixes label2.
     *   This can specify a separating comma.
     *
     * @param {string} [label='"status": ']
     *   A string that labels the string.
     *   This can specify a property key and its surrounding punctuation.
     *
     * @param {number} [indent1=2]
     *   The number of spaces that prefix the first and last lines.
     *
     * @param {number} [indent2=4]
     *   The number of spaces that prefix each line other than the
     *   first and last lines.
     *
     * @param {string} [suffix='']
     *   A string that is printed at the end of the last line.
     *   This can specify a separating comma.
     *
     * @return {string} A string representing the statuses in
     *   standard sorted order.
     */

  }, {
    key: "getStatusesAsString",

    /** See the corresponding static class method for description.
     * This method implicitly uses this.statuses, so only prefix, label,
     * indent1, indent2, and suffix are parameters. */
    value: function getStatusesAsString(prefix, label, indent1, indent2, suffix) {
      return Results.getStatusesAsString(this.statuses, prefix, label, indent1, indent2, suffix);
    }
    /**
     * Format a tally data object as a string
     *
     * The resulting string can be a JSON fragment specifying an
     * object property.
     *
     * @param {Object} tally
     *   A tally data object, keyed by candidate identifiers
     *   and labels for other tabulation categories.
     *
     * @param {Object} statuses
     *   A data object of Status objects, keyed by candidate identifiers.
     *
     * @param {string} [prefix='']
     *   A string that prefixes label2.
     *   This can specify a separating comma.
     *
     * @param {string} [label='"tally": ']
     *   A string that labels the string.
     *   This can specify a property key and its surrounding punctuation.
     *
     * @param {number} [indent1=2]
     *   The number of spaces that prefix the first and last lines.
     *
     * @param {number} [indent2=4]
     *   The number of spaces that prefix each line other than the
     *   first and last lines.
     *
     * @param {string} [suffix='']
     *   A string that is printed at the end of the last line.
     *   This can specify a separating comma.
     *
     * @return {string} A string representing the statuses in
     *   standard sorted order.
     */

  }, {
    key: "getTallyAsString",

    /** See the corresponding static class method for description.
     * This method implicitly uses this.tally and this.statuses,
     * so only prefix, label, indent1, indent2, and suffix are parameters.
     */
    value: function getTallyAsString(prefix, label, indent1, indent2, suffix) {
      return Results.getTallyAsString(this.tally, this.statuses, prefix, label, indent1, indent2, suffix);
    }
    /**
     * Get a sort key for a candidate identifier or other tabulation
     * category label.
     *
     * The sort key can be used to provide a standardized sort order
     * for candidates and other tabulation categories,
     * that reflects the results of a tabulation.
     *
     * The sort codes will sort:
     * - candidates before other tabulation categories
     *   - elected candidates before hopeful candidates
     *     - elected candidates by increasing round of election,
     *       then by decreasing votes
     *   - hopeful candidates before defeated candidates
     *     - hopeful candidates by decreasing votes
     *   - defeated candidates by decreasing round of defeat,
     *     then by decreasing votes
     * - Other tabulation categories are sorted in the order recorded
     *   in `K.OTHER_LABELS_ORDER`.
     *
     * Any remaining ties for sort order among candidates are resolved
     * by the sort order of candidate identifiers.
     *
     * @param {string} code - The candidate identifier or label for a
     *   tabulation category.
     * @param {Object} statuses
     *   A data object of Status objects, keyed by candidate identifiers.
     * @return {array<string|number|Decimal9>} A sort key as an array of
     *   strings and numbers, and/or Decimal9 instances.
     */

  }], [{
    key: "getElectedAsString",
    value: function getElectedAsString(elected) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '"elected": ';
      var indent1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
      var suffix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var electedArray = Array.from(elected);
      electedArray.sort();
      var coreContent = _util_basic_js__WEBPACK_IMPORTED_MODULE_17__["UBF"].show(electedArray);
      var result = ' '.repeat(indent1) + prefix + label + coreContent + suffix;
      return result;
    }
  }, {
    key: "getStatusesAsString",
    value: function getStatusesAsString(statuses) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '"status": ';
      var indent1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
      var indent2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
      var suffix = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var statusItems = _util_basic_js__WEBPACK_IMPORTED_MODULE_17__["UBF"].getOwnItems(statuses);
      statusItems.forEach(function (item) {
        item.sortKey = Results.getSortKey(item.name, statuses);
      });
      statusItems.sort(Results.compareSortKeys);
      var result = ' '.repeat(indent1) + prefix + label + '[\n';
      var lines = [];
      statusItems.forEach(function (item, index) {
        var line = ' '.repeat(indent2) + '[';
        item.value.asArray().forEach(function (entry, ix) {
          line += ix === 0 ? '' : ', ';

          if (typeof entry === 'string') {
            line += _util_basic_js__WEBPACK_IMPORTED_MODULE_17__["UBF"].show(entry);
          } else if (entry instanceof _constants_js__WEBPACK_IMPORTED_MODULE_18__["default"].Decimal) {
            if (Number.isInteger(entry.toNumber())) {
              line += String(entry.toNumber()) + '.0';
            } else {
              line += String(entry.toNumber());
            }
          } else {
            line += String(entry);
          }
        });
        line += index === statusItems.length - 1 ? ']' : '],';
        lines.push(line);
      });
      result += lines.join('\n');
      result += '\n' + ' '.repeat(indent1) + ']' + suffix;
      return result;
    }
  }, {
    key: "getTallyAsString",
    value: function getTallyAsString(tally, statuses) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '"tally": ';
      var indent1 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
      var indent2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 4;
      var suffix = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
      var tallyItems = _util_basic_js__WEBPACK_IMPORTED_MODULE_17__["UBF"].getOwnItems(tally);
      tallyItems.forEach(function (item) {
        item.sortKey = Results.getSortKey(item.name, statuses);
      });
      tallyItems.sort(Results.compareSortKeys);
      var result = ' '.repeat(indent1) + prefix + label + '{\n';
      var lines = [];
      tallyItems.forEach(function (item) {
        var line = ' '.repeat(indent2) + '"' + item.name + '": ';
        line += '[';
        item.value.forEach(function (entry, ix) {
          line += ix === 0 ? '' : ', ';

          if (entry instanceof _constants_js__WEBPACK_IMPORTED_MODULE_18__["default"].Decimal) {
            if (Number.isInteger(entry.toNumber())) {
              line += entry.toNumber().toString() + '.0';
            } else {
              line += entry.toNumber().toString();
            }
          } else {
            line += String(entry);
          }
        });
        line += ']';
        lines.push(line);
      });
      result += lines.join(',\n');
      result += '\n' + ' '.repeat(indent1) + '}' + suffix;
      return result;
    }
  }, {
    key: "getSortKey",
    value: function getSortKey(code, statuses) {
      var sortKey = [[9, code]];

      if (statuses[code] !== undefined) {
        var nbrRound = statuses[code].nbrRound;
        var votes = statuses[code].votes;

        if (votes === null) {
          votes = _constants_js__WEBPACK_IMPORTED_MODULE_18__["default"].ONE.negative();
        }

        if (statuses[code].status === _constants_js__WEBPACK_IMPORTED_MODULE_18__["default"].STATUS.elected) {
          sortKey = [1, 1, nbrRound, votes.negative(), code];
        } else if (statuses[code].status === _constants_js__WEBPACK_IMPORTED_MODULE_18__["default"].STATUS.hopeful) {
          sortKey = [1, 2, -nbrRound, votes.negative(), code];
        } else {
          sortKey = [1, 3, -nbrRound, votes.negative(), code];
        }
      } else {
        var otherLabelsIndex = _constants_js__WEBPACK_IMPORTED_MODULE_18__["default"].OTHER_LABELS_LIST.indexOf(code);

        if (otherLabelsIndex >= 0) {
          sortKey = [2, otherLabelsIndex, code];
        } else {
          sortKey = [3, 1, code];
        }
      }

      return sortKey;
    }
    /**
     * Compare two sort keys that were built with `getSortKey()`.
     *
     * This function is useful as a comparison parameter to a sort
     * function.
     *
     * @param {array} a - The first sort key to compare.
     * @param {array} b - The second sort key to compare.
     * @return {number} A comparison result value that is
     *   less than zero if `a` sorts before `b`,
     *   greater than zero if `a` sort after `b`,
     *   and equal to zero if `a` sorts equal to `b`.
     */

  }, {
    key: "compareSortKeys",
    value: function compareSortKeys(a, b) {
      var comparison = null;
      a.sortKey.some(function (aKey, ix) {
        var bKey = b.sortKey[ix];

        if (aKey instanceof _constants_js__WEBPACK_IMPORTED_MODULE_18__["default"].Decimal) {
          if (aKey.isLess(bKey)) {
            comparison = -1;
            return true;
          }

          if (aKey.isGreater(bKey)) {
            comparison = 1;
            return true;
          }

          comparison = 0;
          return false;
        }

        if (aKey < bKey) {
          comparison = -1;
          return true;
        }

        if (aKey > bKey) {
          comparison = 1;
          return true;
        }

        comparison = 0;
        return false;
      });
      return comparison;
    }
    /**
     * Create an array with the keys of a tally in sorted order.
     * @param {Object} tally - A tally data object.
     * @param {Object} statuses
     *   A data object of Status objects, keyed by candidate identifiers.
     * @return {array<string>} - An array with the keys of tally in
     *   sorted order. */

  }, {
    key: "getTallyOrderAsArray",
    value: function getTallyOrderAsArray(tally, statuses) {
      var tallyItems = _util_basic_js__WEBPACK_IMPORTED_MODULE_17__["UBF"].getOwnItems(tally);
      tallyItems.forEach(function (item) {
        item.sortKey = Results.getSortKey(item.name, statuses);
      });
      tallyItems.sort(Results.compareSortKeys);
      var result = tallyItems.map(function (item) {
        return item.name;
      });
      return result;
    }
    /**
     * Create a data object with sort-order indexes for
     *   the keys of a tally object.
     * @param {Object} tally - A tally data item.
     * @param {Object} statuses
     *   A data object of Status objects, keyed by candidate identifiers.
     * @return {array<string>} - A data object keyed by the keys
     *   of `tally` and values that are numbers indicating their
     *   relative sort order.
     */

  }, {
    key: "getTallyOrderAsLookup",
    value: function getTallyOrderAsLookup(tally, statuses) {
      var asArray = Results.getTallyOrderAsArray(tally, statuses);
      var result = {};
      asArray.forEach(function (code, index) {
        result[code] = index;
      });
      return result;
    }
  }]);

  return Results;
}();

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeekValueError", function() { return MeekValueError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeekImplementationError", function() { return MeekImplementationError; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(142);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_basic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(136);










function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module MeekErrs
 * @summary Meek's method base classes and functions for errors.
 */

/** An error class that identifies invalid data values and types.
 *
 * This is most typically used for data that is supplied from outside the
 * package.
 */

var MeekValueError =
/*#__PURE__*/
function (_UtilBaseError) {
  _inherits(MeekValueError, _UtilBaseError);

  /** The calling convention is the same as for UtilBaseError.
   * Initialize with a message, other values, and a prior error. */
  function MeekValueError(message) {
    var otherValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var priorError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, MeekValueError);

    return _possibleConstructorReturn(this, _getPrototypeOf(MeekValueError).call(this, message, otherValues, priorError));
  }

  return MeekValueError;
}(_util_basic_js__WEBPACK_IMPORTED_MODULE_9__["UtilBaseError"]);
/** An error class for possible implementation errors in this package. */

var MeekImplementationError =
/*#__PURE__*/
function (_UtilBaseError2) {
  _inherits(MeekImplementationError, _UtilBaseError2);

  /** The calling convention is the same as for UtilBaseError.
   * Initialize with a message, other values, and a prior error. */
  function MeekImplementationError(message) {
    var otherValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var priorError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, MeekImplementationError);

    return _possibleConstructorReturn(this, _getPrototypeOf(MeekImplementationError).call(this, message, otherValues, priorError));
  }

  return MeekImplementationError;
}(_util_basic_js__WEBPACK_IMPORTED_MODULE_9__["UtilBaseError"]);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(157);











function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Status
 */

/**
 *
 * A class to record a candidate's status in a Meek tabulation.
 */

var Status =
/*#__PURE__*/
function () {
  /**
   * @param {(string|object)} candidate -
   *   the candidate identifier for the candidate.
   *
   *   If the candidate argument is an object,
   *   then expect that it is a Status or is Status-like
   *   and initialize this Status object
   *   from the corresponding keys of that object.
   * @param {K.Decimal|null} [votes=K.ZERO] - The number of votes for the
   *   candidate; null before the first round and for excluded
   *   candidates.
   * @param {number} [nbrRound=0] - The 1-based number of the
   *   round for which this status applies or the round in which the
   *   candidate was elected or defeated.
   * @param {string} [status=K.STATUS.hopeful] - A string indicating the
   *   status of the candidate.  The value should be one in K.STATUS.
   * @param {number} [keepFactor=K.ONE] - The fraction of a ballot's
   *   vote weight that is counted for the candidate.
   * @param {string} [destiny=K.DESTINY.normal] - An indication of
   *   whether the candidate was pre-designated as excluded or protected.
   *   The value should be one in K.DESTINY.
   *
   */
  function Status(candidate) {
    var votes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].ZERO;
    var nbrRound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].STATUS.hopeful;
    var keepFactor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].ONE;
    var destiny = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].DESTINY.normal;

    _classCallCheck(this, Status);

    if (_typeof(candidate) == 'object') {
      /** The candidate identifier.
       *  @type {string} */
      this.candidate = candidate['candidate'];
      /** The number of votes for the candidate when the candidate was
       *    elected or defeated, or as of the most recent tabulation of
       *    votes if the candidate is hopeful; `null` if the candidate
       *    is excluded or if no rounds have been tabulated yet.
       *  @type {K.Decimal|null} */

      this.votes = candidate['votes'];
      /** The 1-based number of the round for which votes applies,
       *    possibly 0 if votes is null.
       *  @type {number} */

      this.nbrRound = candidate['nbrRound'];
      /** A string indicating the status of
       *    the candidate; a value in `K.STATUS`.
       *  @type {string} */

      this.status = candidate['status'];
      /** The fraction of a ballot's vote weight that was counted for
       *    the candidate.
       *  @type {number} */

      this.keepFactor = candidate['keepFactor'];
      /** An indication of whether the candidate was pre-designated as
       *    excluded, as protected, or neither.  The value should be
       *    in `K.DESTINY`.
       *  @type {string} destiny */

      this.destiny = candidate['destiny'] || _constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].DESTINY.normal;
    } else {
      this.candidate = candidate;
      this.votes = votes;
      this.nbrRound = nbrRound;
      this.status = status;
      this.keepFactor = keepFactor;
      this.destiny = destiny;
    }

    if (this.candidate === null || this.candidate === undefined) {
      this.candidate = ':???';
    }
  }
  /**
   * Create a corresponding plain data object.
   * @returns {object} An object that has keys and properties corresponding to
   * the data properties of this object.
   */


  _createClass(Status, [{
    key: "asSimpleObject",
    value: function asSimpleObject() {
      var result = {
        'candidate': this.candidate,
        'votes': this.votes,
        'nbrRound': this.nbrRound,
        'status': this.status,
        'keepFactor': this.keepFactor,
        'destiny': this.destiny
      };
      return result;
    }
    /**
     * Create a corresponding array with the data values.
     * @returns {array} An array that lists the values of the status
     *   properties as follows:
     *
     *       [candidate, status, nbrRound, votes, keepFactor, destiny]
     *
     *   where destiny is omitted if it is 'normal'.
     */

  }, {
    key: "asArray",
    value: function asArray() {
      var result = [this.candidate, this.status, this.nbrRound, this.votes, this.keepFactor];

      if (this.destiny !== _constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].DESTINY.normal) {
        result.push(this.destiny);
      }

      return result;
    }
    /**
     * Create a string representation of the keys and values.
     * @returns {string} A string that lists the keys and values of the
     *   `Status` properties in the format of a data object literal,
     *   omitting the key and value for destiny if its value is 'normal'.
     */

  }, {
    key: "toString",
    value: function toString() {
      var result = '{';
      result += 'candidate: ' + (this.candidate === null || this.candidate === undefined ? this.candidate : '"' + this.candidate.toString() + '"');
      result += ', status: "' + this.status.toString() + '"';
      result += ', nbrRound: ' + (this.nbrRound === null ? this.nbrRound : this.nbrRound.toString());
      result += ', votes: ' + this.votes.toString();
      result += ', keepFactor: ' + this.keepFactor.toString();

      if (this.destiny !== _constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].DESTINY.normal) {
        result += ', destiny: "' + this.destiny.toString() + '"';
      }

      result += '}';
      return result;
    }
    /**
     * Test for `Status` equality.
     *
     * Tests whether another value has the same values corresponding
     *   to the properties of this `Status` instance.
     * @param {*} other - A value to be compared.
     * @returns {boolean} A true/false indication of whether `other` has
     *   the same `Status` property values as the calling Status.
     */

  }, {
    key: "isEqual",
    value: function isEqual(other) {
      var isEqual = true;

      try {
        if (this.candidate !== other.candidate) {
          return false;
        }

        if (this.status !== other.status) {
          return false;
        }

        if (this.nbrRound !== other.nbrRound) {
          return false;
        }

        if (this.votes.isNotEqual(other.votes)) {
          return false;
        }

        if (this.keepFactor.isNotEqual(other.keepFactor)) {
          return false;
        }

        if (this.destiny !== other.destiny) {
          return false;
        }
      } catch (err) {
        isEqual = false;
      }

      return isEqual;
    }
    /**
     * Test for `Status` inequality.
     *
     * Tests whether another value has any different values
     *   corresponding to those of this Status instance.
     * @param {*} other - A value to be compared.
     * @returns {boolean} A true/false indication of whether any of the
     *   calling Status object's property values are different from the
     *   corresponding values for `other`.
     */

  }, {
    key: "isNotEqual",
    value: function isNotEqual(other) {
      var result = !this.isEqual(other);
      return result;
    }
  }]);

  return Status;
}();

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(157);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(166);
/* harmony import */ var _util_basic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(136);
/* harmony import */ var _ballot_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(169);
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Validate
 */




/**
 * A collection of validation and reformatting methods for Meek data.
 *
 * See the description of parameters for the Tabulation() constructor
 * for details about the requirements for those values, which are enforced
 * here.
 */

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, [{
    key: "nbrSeatsToFill",

    /**
     * Validate a number of seats to fill.
     * @param {number} nbrSeatsToFill - The number to validate.
     * @return {number} nbrSeatsToFill if it was valid.
     * @throw {MeekValueError} If nbrSeatsToFill was not valid.
     */
    value: function nbrSeatsToFill(_nbrSeatsToFill) {
      if (!Validator.isSafeInteger(_nbrSeatsToFill)) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('nbrSeatsToFill is not a safe integer:', [['typeof nbrSeatsToFill', _typeof(_nbrSeatsToFill)], ['nbrSeatsToFill is a Number?', _nbrSeatsToFill instanceof Number], ['nbrSeatsToFill', _nbrSeatsToFill]]);
      }

      _nbrSeatsToFill = Number(_nbrSeatsToFill);

      if (_nbrSeatsToFill <= 0) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('nbrSeatsToFill is less than 1:', [['nbrSeatsToFill', _nbrSeatsToFill]]);
      }

      return _nbrSeatsToFill;
    }
    /** Validate a list of candidate identifiers.
     * @param {string|array<string>} candidates - A proposed value.
     * @return {array<string>} candidates if it was valid.
     * @throw {MeekValueError} If candidates was not valid.
     */

  }, {
    key: "candidates",
    value: function candidates(_candidates) {
      try {
        _candidates = Validator.toArrayOfStrings(_candidates);
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid candidates type:', [], exc);
      }

      var candidateIndexes = {};

      _candidates.forEach(function (candId, ix) {
        if (!candId.length || _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].RANKING_CODES_NOT_A_CANDIDATE.has(candId) || candId[0] === ':') {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid candidate ID in list of candidates:', [['candidate id', candId], ['list position', ix + 1]]);
        }

        if (typeof candidateIndexes[candId] == 'number') {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Duplicate candidate ID in list of candidates:', [['candidate id', candId], ['first list position', candidateIndexes[candId]], ['next list position', ix + 1]]);
        }

        candidateIndexes[candId] = ix + 1;
      });

      return _candidates;
    }
    /**
     * Validate a tieBreaker list of candidate identifiers.
     * @param {string|array<string>} tieBreaker - A proposed value.
     * @param {array<string>} candidates - A validated array of ranking codes.
     * @return {object} tieBreaker as an object keyed by candidate IDs
     *   and values equal to ordering indexes.
     * @throw {MeekValueError} If tieBreaker was not valid.
     */

  }, {
    key: "tieBreaker",
    value: function tieBreaker(_tieBreaker, candidates) {
      try {
        _tieBreaker = Validator.toArrayOfStrings(_tieBreaker);
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid tieBreaker type:', [], exc);
      }

      _tieBreaker.forEach(function (candId, ix) {
        if (candidates.indexOf(candId) === -1) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid candidate ID in tieBreaker:', [['candidate candId', candId], ['tieBreaker list position', ix + 1]]);
        }
      });

      var result = {};
      var tieBreakerSet = new Set();

      _tieBreaker.forEach(function (candId, ix) {
        if (typeof result[candId] == 'number') {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Duplicate candidate ID in tieBreaker:', [['candidate id', candId], ['first list position', result[candId] + 1], ['next list position', ix + 1]]);
        }

        result[candId] = ix;
        tieBreakerSet.add(candId);
      });

      return result;
    }
    /**
     * Validate an array of ballots.
     * @param {array<string|array>} ballots - A proposed value.
     * @param {array<string>} candidates - A validated array of ranking codes.
     * @param {number|null} maxRankingLevels - A validated value.
     * @param {Progress} progress - To report progress via callback.
     * @return {array<Ballot>} An array of Ballot objects.
     * @throw {MeekValueError} If ballots was not valid.
     */

  }, {
    key: "ballots",
    value: function ballots(_ballots, candidates, maxRankingLevels, progress) {
      var result = [];

      if (!Array.isArray(_ballots)) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('ballots is not an array:', [['typeof ballots', _typeof(_ballots)], ['ballots', _ballots]]);
      }

      var absoluteTotalNbrBallots = 0;

      _ballots.forEach(function (ballot, ix) {
        var multiple = 1;
        var rankings = [];

        if (typeof ballot == 'string') {
          rankings = ballot;
        } else if (Array.isArray(ballot) && (ballot.length == 0 || typeof ballot[0] == 'string')) {
          rankings = ballot;
        } else {
          if (!Array.isArray(ballot)) {
            throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('A ballot is not an array nor a string:', [['typeof ballot', _typeof(ballot)], ['ballot', ballot], ['ballot nbr', ix + 1]]);
          }

          if (ballot.length !== 2) {
            throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('A ballot is not a pair of values:', [['ballot.length', ballot.length], ['ballot', ballot], ['ballot nbr', ix + 1]]);
          }

          multiple = ballot[0];
          rankings = ballot[1];
        }

        if (!Validator.isSafeInteger(multiple)) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('A ballot multiple is not a safe integer:', [['type(multiple)', _typeof(multiple)], ['multiple', multiple], ['ballot nbr', ix + 1]]);
        }

        multiple = Number(multiple);

        if (multiple < 1) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('A ballot multiple is zero or less:', [['multiple', multiple], ['ballot nbr', ix + 1]]);
        }

        try {
          rankings = Validator.toArrayOfStrings(rankings);
        } catch (exc) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid ballot rankings type:', [['ballot nbr', ix + 1]], exc);
        }

        if (maxRankingLevels !== null && rankings.length > maxRankingLevels) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Ballot rankings is too long:', [['rankings.length', rankings.length], ['maxRankingLevels', maxRankingLevels], ['ballot nbr', ix + 1]]);
        }

        rankings.forEach(function (rankingCode, rix) {
          if (candidates.indexOf(rankingCode) === -1 && !_constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].RANKING_CODES_NOT_A_CANDIDATE.has(rankingCode)) {
            throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid ballot ranking code:', [['ranking code', rankingCode], ['ballot nbr', ix + 1], ['ranking code position', rix + 1]]);
          }
        });
        var internalBallot = new _ballot_js__WEBPACK_IMPORTED_MODULE_18__["Ballot"](multiple, rankings);
        absoluteTotalNbrBallots += Math.abs(multiple);
        result.push(internalBallot);

        if (progress && (ix + 1) % progress.validationPeriod === 0) {
          progress.setValidationProgress(ix + 1);
        }
      });

      if (result.length !== _ballots.length) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Ballots contains undefined items:', [['ballots.length', _ballots.length], ['number of validated ballots', result.length]]);
      }

      if (!Validator.isSafeInteger(absoluteTotalNbrBallots)) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('The absolute total number of ballots' + ' is not a safe integer:', [['typeof total nbr ballots)', _typeof(absoluteTotalNbrBallots)], ['total nbr ballots', absoluteTotalNbrBallots], ['max safe integer', _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].Decimal.MAX_SAFE_VALUE]]);
      }

      if (progress) {
        progress.setValidationProgress(progress.completedLabel);
      }

      return result;
    }
    /**
     * Validate maxRankingLevels.
     * @param {number|null} maxRankingLevels - A proposed value.
     * @return {number|null} A valid maxRankingLevels.
     * @throw {MeekValueError} If maxRankingLevels was not valid.
     */

  }, {
    key: "maxRankingLevels",
    value: function maxRankingLevels(_maxRankingLevels) {
      if (_maxRankingLevels === null) {
        return null;
      }

      if (!Validator.isSafeInteger(_maxRankingLevels)) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('maxRankingLevels is not a safe integer:', [['typeof maxRankingLevels', _typeof(_maxRankingLevels)], ['maxRankingLevels', _maxRankingLevels]]);
      }

      _maxRankingLevels = Number(_maxRankingLevels);

      if (_maxRankingLevels < _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].MIN_RANKINGS_SUPPORTED) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('maxRankingLevels is less than ' + _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].MIN_RANKINGS_SUPPORTED + ':', [['maxRankingLevels', _maxRankingLevels]]);
      }

      return _maxRankingLevels;
    }
    /**
     * Validate a list of excluded candidates.
     * @param {string|array<string>} excluded - A proposed value.
     * @param {array<string>} candidates - A validated array of candidate IDs.
     * @return {Set<string>} A set of excluded candidate IDs.
     * @throw {MeekValueError} If excluded was not valid.
     */

  }, {
    key: "excluded",
    value: function excluded(_excluded, candidates) {
      if (_excluded === null) {
        _excluded = [];
      }

      try {
        _excluded = Validator.toArrayOfStrings(_excluded);
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid excluded type:', [], exc);
      }

      var result = new Set();
      var candidateIndexes = {};

      _excluded.forEach(function (candId, ix) {
        if (candidates.indexOf(candId) === -1) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid candidate ID in excluded:', [['candidate candId', candId], ['excluded list position', ix + 1]]);
        }

        if (result.has(candId)) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Candidate ID in excluded is not unique:', [['candid ID', candId], ['first list position', candidateIndexes[candId] + 1], ['next list position', ix + 1]]);
        }

        result.add(candId);
        candidateIndexes[candId] = ix;
      });

      return result;
    }
    /**
     * Validate a list of protected candidates.
     * @param {string|array<string>} protectedList - A proposed value.
     * @param {array<string>} candidates - A validated array of candidate IDs.
     * @param {Set<string>} excluded - A validated set of excluded candidate
     *   IDs.
     * @param {number} nbrSeatsToFill - A validated number of seats to fill.
     * @return {Set<string>} A set of protected candidate IDs.
     * @throw {MeekValueError} If protectedList was not valid.
     */

  }, {
    key: "protectedCandidates",
    value: function protectedCandidates(protectedList, candidates, excluded, nbrSeatsToFill) {
      if (protectedList === null) {
        protectedList = [];
      }

      try {
        protectedList = Validator.toArrayOfStrings(protectedList);
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid protectedList type:', [], exc);
      }

      var result = new Set();
      var candidateIndexes = {};
      protectedList.forEach(function (candId, ix) {
        if (candidates.indexOf(candId) === -1) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid protected candidate ID:', [['candidate ID', candId], ['list position', ix + 1]]);
        }

        if (excluded.has(candId)) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Candidate ID is protected and excluded:', [['candidate ID', candId], ['protected list position', ix + 1]]);
        }

        if (result.has(candId)) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Protected candidate ID is not unique:', [['candidate candId', candId], ['first list position', candidateIndexes[candId] + 1], ['next list position', ix + 1]]);
        }

        result.add(candId);
        candidateIndexes[candId] = ix;
      });

      if (result.size > nbrSeatsToFill) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('More protected candidates than seats to fill:', [['nbr protected', result.size], ['nbr seats to fill', nbrSeatsToFill]]);
      }

      return result;
    }
    /**
     * Validate a plain old data object of tabulation options.
     * @param {Object} options - A proposed value.
     * @return {Object} An object with validated tabulation options,
     *   if options was valid.
     * @throw {MeekValueError} If options was not valid.
     */

  }, {
    key: "options",
    value: function options(_options) {
      var result = {};

      if (_typeof(_options) != 'object') {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Options is not an object:', [['typeof options', _typeof(_options)]]);
      }

      var _loop = function _loop(name) {
        // The following if statement can not be true.

        /*
        if (typeof name != 'string') {
          throw new MeekValueError('An option name is not a string:', [
                ['typeof option name', typeof name],
                ['option name', name],
          ]);
        }
        */
        var value = _options[name];

        if (name === _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].OPTIONS.alternativeDefeats._value) {
          if (typeof value == 'string' && _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].OPTIONS.alternativeDefeats._value_set.has(value.toUpperCase())) {
            value = value.toUpperCase();
          } else {
            try {
              value = Validator.toArrayOfStrings(value);
            } catch (exc) {
              throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid option value type:', [['option name', name]], exc);
            }

            value.forEach(function (perRoundValue, ix) {
              if (!_constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].OPTIONS.alternativeDefeats._value_set.has(perRoundValue.toUpperCase())) {
                throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid per-round option value:', [['per-round value', perRoundValue], ['index', ix], ['for round', ix + 1], ['option name', name]]);
              }
            });
            var newValue = [];
            value.forEach(function (perRoundValue, ix) {
              newValue.push(perRoundValue.toUpperCase());
            });
            value = newValue;
          }

          result[_constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].OPTIONS.alternativeDefeats._value] = value;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].OPTIONS._value_set.has(name)) {
          var originalValue = value;

          if (typeof value == 'string') {
            value = value.toLowerCase();
          }

          var key = _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].OPTIONS._valueToJsId[name];

          if (_constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].OPTIONS[key]._value_set.has(value)) {
            result[name] = value;
          } else {
            throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid option value:', [['typeof value', _typeof(originalValue)], ['value', originalValue], ['option name', name]]);
          }
        } else {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"]('Invalid option name:', [['typeof name', _typeof(name)], ['name', name]]);
        }
      };

      for (var name in _options) {
        _loop(name);
      }

      return result;
    }
  }], [{
    key: "isSafeInteger",

    /**
     * A test for being a safe integer, which accepts number values
     * @param {*} value - A value to be tested whether it is a safe integer.
     * @returns {boolean} The indication of whether the tested value is a safe
     * integer.
     */
    value: function isSafeInteger(value) {
      if (typeof value == 'number' && Number.isInteger(value)) {
        if (Math.trunc(value) === value) {
          var maxSafeInteger = _constants_js__WEBPACK_IMPORTED_MODULE_15__["default"].Decimal.MAX_SAFE_VALUE;

          if (value >= -maxSafeInteger && value <= maxSafeInteger) {
            return true;
          }
        }
      }

      return false;
    }
    /**
     * Create an array of strings from a string or an array of strings.
     *
     * If value is a string, it is split by its first character,
     * and the resulting parts populate the array.
     *
     * If value is an array of strings,
     * (either typeof 'string' or instanceof String),
     * a copy of that array is returned,
     * with any Strings converted to items of typeof 'string'.
     *
     * This function is a wrapper function for
     * `UtilBasicFunctions.toArrayOFStrings()`, and ensures that any
     * validation error that is thrown is of type MeekValueError.
     *
     * @param {string|array} value - A string that will be converted to an array
     * of strings, or an array that will be verified as only containing strings
     * and then duplicated.
     *
     * @return {array} An array of strings.
     *
     * @throws {MeekValueError} If value is not a string and is not an array of
     * strings.
     */

  }, {
    key: "toArrayOfStrings",
    value: function toArrayOfStrings(value) {
      var result = '';

      try {
        result = _util_basic_js__WEBPACK_IMPORTED_MODULE_17__["UBF"].toArrayOfStrings(value);
      } catch (exc) {
        if (exc instanceof _util_basic_js__WEBPACK_IMPORTED_MODULE_17__["UtilValueError"]) {
          var newErr = new _errors_js__WEBPACK_IMPORTED_MODULE_16__["MeekValueError"](exc.message, exc.otherValues);
          throw newErr;
        }

        throw exc;
      }

      return result;
    }
  }]);

  return Validator;
}();

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ballot", function() { return Ballot; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(157);






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Ballot
 */
 //import * as Errors from "./errors.js";

/**
 * A class representing a group of ballots which share the same rankings.
 *
 * The requirements for the arguments are the same as for
 * a ballot group in the ballots argument for the meek.tabulate() function.
 * However, the arguments should already have been processesd by an appropriate
 * validation and formatting routine. In particular, rankings represented by
 * a single string should already have been reformatted to an array of
 * strings.
 */

var Ballot =
/*#__PURE__*/
function () {
  /**
   * @param {number} [multiple=0] - The number of ballots in the group.
   * @param {array<string>} [rankings=[]] - The candidate rankings for the ballot
   * group.
   */
  function Ballot() {
    var multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var rankings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Ballot);

    this._multiple = multiple;
    this._rankings = rankings;
  }
  /** Get the number of ballots in this ballot group.
   * @return {number} The number of ballots in this ballot group.
   */


  _createClass(Ballot, [{
    key: "getMultiple",
    value: function getMultiple() {
      return this._multiple;
    }
    /** Get the rankings for this ballot group.
     * @return {array<string>} An array of strings that are the rankings for this
     *   ballot group.
     */

  }, {
    key: "getRankings",
    value: function getRankings() {
      return this._rankings;
    }
    /** Convert the ballot to a string.
     * @return {string} A string in object-literal format showing the
     *   values for this ballot. */

  }, {
    key: "valueOf",
    value: function valueOf() {
      var result = '{multiple: ' + this._multiple + ', rankings: [';

      this._rankings.forEach(function (ranking, rix) {
        result += "".concat(rix === 0 ? "" : ", ", "\"").concat(ranking, "\"");
      });

      result += ']}';
      return result;
    }
    /** Convert the ballot to a string.
     * @return {string} A string in object-literal format showing the
     *   values for this ballot. */

  }, {
    key: "toString",
    value: function toString() {
      var result = this.valueOf();
      return result;
    }
    /** Convert the ballot to an array.
     * @return {array} A two element array, [multiple, rankings], with the values
     *   of the corresponding properties of this ballot. */

  }, {
    key: "asArray",
    value: function asArray() {
      var result = [this._multiple, this._rankings];
      return result;
    }
    /** Test for equality.
     * @param {*} other - A value to test for equality.
     * @return {boolean} A true/false indication of whether `other` has
     *   values corresponding to the data properties of this ballot. */

  }, {
    key: "isEqual",
    value: function isEqual(other) {
      var isEqual = true;

      try {
        if (!(typeof this._multiple == 'number' && typeof other._multiple == 'number' && this._multiple === other._multiple)) {
          return false;
        }

        if (Array.isArray(other._rankings)) {
          if (this._rankings.length !== other._rankings.length) {
            return false;
          }

          this._rankings.some(function (value, ix) {
            if (typeof value !== 'string' || value !== other._rankings[ix]) {
              isEqual = false;
              return true;
            }
          });
        } else {
          return false;
        }
      } catch (exc) {
        console.debug('ERROR: in Ballot.isEqual, caught exception:\n  "' + String(exc) + '"');
        isEqual = false;
      }

      return isEqual;
    }
    /** Test for inequality.
     * @param {*} other - A value to test for inequality.
     * @return {boolean} A true/false indication of whether `other` does not have
     *   values corresponding to the data properties of this ballot. */

  }, {
    key: "isNotEqual",
    value: function isNotEqual(other) {
      var result = !this.isEqual(other);
      return result;
    }
  }]);

  return Ballot;
}();

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * @module Meek
 *
 * @summary Provide progress updates via a callback function.
 */
var FORCE_DELAY = 0; //const FORCE_DELAY = 10 * 1000 * 1000;

/** A class for handling progress reports from a `Tabulation` initialization
 * and its `tabulate()` function.
 */

var Progress =
/*#__PURE__*/
function () {
  /**
   * @param {function} callback - The callback function that forwards
   *    progress reports from the tabulation functions.
   *
   *    The callback function is called with one parameter, a plain old data
   *    object with properties:
   *
   *    - `progressFraction` = A number between 0 and 100 inclusive, indicating
   *         the current percentage of work completed
   *    - `description` = A string that gives a description of the progress
   *         that is being made.
   */
  function Progress(callback) {
    _classCallCheck(this, Progress);

    this.setCallback(callback);
    /** The minimum amount of delay in milliseconds until the first progress
     *    report can be sent.
     * @type {number} */

    this.firstDelay = 1; // all delays in ms

    /** The minimum amount of delay in milliseconds between sending successive
     *    progress reports, except when reporting completion of a major
     *    activity.
     * @type {number} */

    this.updateDelay = 100;
    /** Indicates whether a ballot tree is used.
     * @type {boolean} */

    this.isBallotTreeUsed = false;
    /** Indicates whether a dynamic ballot tree is used.
     * @type {boolean} */

    this.isDynamicTreeUsed = false;
    this.setNbrBallotGroups();
    this.setNbrOriginalHopefuls();
    this.startTimers();
    /** The amount of weight given to other activities.
     * @type {number} */

    this.otherBase = 1;
    /** The amount of other activities that are completed, using the same
     *    scale as `otherBase`.
     * @type {number} */

    this.otherCompleted = 0;
    /** A number indicating the fraction of progress on the current major
     *    activity.
     * @type {number}*/

    this.inProgress = 0;
    /** The number of original hopeful candidates that have been elected or
     * defeated.
     * @type {number} */

    this.nbrResolvedHopefuls = 0;
    /** The descriptive message that is sent with a progress report.
     * @type {string} */

    this.description = 'Tabulation started.';
    /** The amount of progress completed on the current major activity.
     * @type {number} */

    this.progress = 0;
    /** The number of ballot groups that Tabulation() should validate
     * between checking whether a progress report can be sent.
     * @type {number} */

    this.validationPeriod = 1001;
    /** The number of ballot groups that tabulate() should queue for
     *    building a tree between checking whether a progress report can be
     *    sent.
     * @type {number} */

    this.treeInitPeriod = 1001;
    /** The number of ballot groups that tabulate() should process while
     *    building a ballot tree  between checking whether a progress report
     *    can be sent.
     * @type {number} */

    this.treeBuildPeriod = 1001;
    /** A special value indicating that a segment of activity has completed.
     * @type {string} */

    this.completedLabel = 'COMPLETE';
    /** An indication of whether validation of ballot groups is complete.
     * @type {boolean} */

    this.validationComplete = false;
    /** An indication of whether the build of a ballot tree is complete.
     * @type {boolean} */

    this.buildComplete = false;
    /** An indication of whether the initialization for building a ballot tree
     *    is complete.
     * @type {boolean} */

    this.initComplete = false;
    /** A count of the maximum number of iterations in a round that has been
     *    experienced so far in the tabulation.
     * @type {number} */

    this.maxNbrIterations = 1;
  }
  /** Set the callback function.
   * @param {function} callback - The new callback function. */


  _createClass(Progress, [{
    key: "setCallback",
    value: function setCallback(callback) {
      /** The callback function that is used to send progress reports
       *    back to the requester.
       * @type {function} */
      this.callback = typeof callback == 'function' ? callback : null;
    }
    /** Start timers and the times at which the next status reports can be sent.
     * @parameter {Date} [now=Date.now()] - A time when the timer is deemed to
     * have started; not normally not provided, but useful for unit testing. */

  }, {
    key: "startTimers",
    value: function startTimers(now) {
      /** The time at which progress timing began.
       * @type {Date} */
      this.startTime = this.now = now || Date.now();
      this.updateTimers(this.now);
    }
    /** Update the times at which the next progress reports can be sent.
     * @parameter {Date} [now=Date.now()] - A time deemed to be the curent time;
     * not normally not provided, but useful for unit testing. */

  }, {
    key: "updateTimers",
    value: function updateTimers(now) {
      now = this.now = now || Date.now();
      /** The earliest time that the first progress report can be sent.
       * @type {Date} */

      this.earliestFirstTime = now + this.firstDelay;
      this.setEarliestUpdateTime(now);
    }
    /** Update the times at which the next update progress report can be sent.
     * @parameter {Date} [now=Date.now()] - A time deemed to be the curent time;
     * not normally not provided, but useful for unit testing. */

  }, {
    key: "setEarliestUpdateTime",
    value: function setEarliestUpdateTime(now) {
      now = this.now = now || Date.now();
      /** The earliest time at which the next update to a progress report can
       *    be sent.
       * @type {Date} */

      this.earliestUpdateTime = now + this.updateDelay;
    }
    /** Indicate that the tabulation will use a ballot tree and whether
     * the ballot tree is static or dynamic
     * @parameter {boolean} [isDynamic=false] - If true indicates that a
     *   dynamic ballot tree will be used, otherwise that a static ballot tree
     *   will be used. */

  }, {
    key: "useBallotTree",
    value: function useBallotTree() {
      var isDynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isBallotTreeUsed = true;
      this.isDynamicTreeUsed = isDynamic;
      this.otherBase = 2;
    }
    /** Set the number of ballot groups that will be processed by the
     *    tabulation.
     * @parameter {number|falsey} [nbrBallotGroups=1] The number of ballot
     *   groups that will be processed by the tabulation. */

  }, {
    key: "setNbrBallotGroups",
    value: function setNbrBallotGroups() {
      var nbrBallotGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      /** The number of ballot groups used in the tabulation
       * @type {number} */
      this.nbrBallotGroups = nbrBallotGroups || 1;
    }
    /** Set the original number of hopeful candidates for the tabulation
     * @parameter {number|falsey} [number=1] the original number of hopeful
     * candidates for the tabulation. */

  }, {
    key: "setNbrOriginalHopefuls",
    value: function setNbrOriginalHopefuls() {
      var nbrOriginalHopefuls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      /** The number of original hopeful candidates for the tabulation;
       *    The number of candidates that must be defeated or elected,
       *    possibly just one candidate per round, except for the last round.
       * @type {number} */
      this.nbrOriginalHopefuls = nbrOriginalHopefuls || 1;
    }
    /** Check whether enough time has elapsed that a next progress report can
     *    be sent.
     *    Optionally, and only for testing, force a busy-loop delay to slow down
     *    the activities.
     * @parameter {Date} [now=Date.now()] - A time deemed to be the curent time;
     *   not normally not provided, but useful for unit testing.
     * @return {boolean} A true/false indication of whether enough time has
     *   elapsed. */

  }, {
    key: "isTimeToUpdate",
    value: function isTimeToUpdate(now) {
      if (FORCE_DELAY > 0) {
        var k = 537;

        for (var twix = 0; twix < FORCE_DELAY; twix++) {
          k = (k + 239) * 5317 % 293731;
        }
      }

      now = this.now = now || Date.now();
      var isTime = Boolean(this.callback) && now >= this.earliestFirstTime && now >= this.earliestUpdateTime;
      return isTime;
    }
    /** Check whether enough time has elapsed that a next progress report can
     *    be sent.
     *    If it has, send the progress report by calling the callback.
     * @parameter {Date} [now=Date.now()] - A time deemed to be the curent time;
     *   not normally not provided, but useful for unit testing.
     */

  }, {
    key: "checkToUpdate",
    value: function checkToUpdate(now) {
      now = this.now = now || Date.now();

      if (!this.isTimeToUpdate(now)) {
        return;
      }

      var progressFraction = this.getProgressFraction();
      var response = {
        progressFraction: progressFraction,
        description: this.description
      };
      this.callback(response);
      this.setEarliestUpdateTime();
    }
    /** Calculate the progressFraction as a number between 0 and 100 inclusive,
     *    indicating how much total progress has been completed.
     * @return {number} The calculated progress Fraction. */

  }, {
    key: "getProgressFraction",
    value: function getProgressFraction() {
      var maxNbrRounds = Math.max(1, this.nbrOriginalHopefuls - 1);
      var progressAmount = Math.min(this.otherCompleted, this.otherBase) + Math.min(this.inProgress, 1) + Math.min(this.nbrResolvedHopefuls, maxNbrRounds);
      var progressBase = Math.max(1, this.otherBase + maxNbrRounds);
      var result = progressAmount / progressBase;

      if (Number.isNaN(result)) {
        result = 0;
      }

      this.progress = Math.trunc(result * 10000) / 100;
      return result;
    }
    /** Set validation progress, subject to limits on frequency of sending
     * progress reports.
     * @param {number} progress - The number of ballot groups validated so far.
     */

  }, {
    key: "setValidationProgress",
    value: function setValidationProgress() {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (progress === this.completedLabel) {
        this.inProgress = 0;
        this.description = 'Ballot validation complete.';

        if (!this.validationComplete) {
          this.validationComplete = true;
          this.otherCompleted += 1;
        }

        this.checkToUpdate();
      } else {
        if (this.isTimeToUpdate() && !this.validationComplete && Number.isInteger(progress) && progress >= 0) {
          this.inProgress = progress / this.nbrBallotGroups;
          this.description = 'Ballot validation: ' + progress + ' ballot groups, ' + (Math.trunc(this.inProgress * 1000) / 10).toFixed(1) + '%';
          this.checkToUpdate(this.now);
        }
      }
    }
    /** Set ballot tree build progress, subject to limits on frequency of sending
     * progress reports.
     * @param {number} progress - The number of ballot groups built so far.
     */

  }, {
    key: "setTreeBuildProgress",
    value: function setTreeBuildProgress() {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (progress === this.completedLabel) {
        this.inProgress = 0;
        this.description = 'Build ballot tree complete.';

        if (!this.buildComplete) {
          this.buildComplete = true;
          this.otherCompleted += this.isDynamicTreeUsed ? 0.5 : 1;
        }

        this.checkToUpdate();
      } else {
        if (this.isTimeToUpdate() && !this.buildComplete && Number.isInteger(progress) && progress >= 0) {
          this.inProgress = progress / this.nbrBallotGroups;
          this.description = 'Build ballot tree: ' + progress + ' ballot groups, ' + (Math.trunc(this.inProgress * 1000) / 10).toFixed(1) + '%';
          this.inProgress /= this.isDynamicTreeUsed ? 2 : 1;
          this.checkToUpdate(this.now);
        }
      }
    }
    /** Set ballot tree initialization progress, subject to limits on
     *   frequency of sending progress reports.
     * @param {number} progress - The number of ballot groups initialized so far.
     */

  }, {
    key: "setDynamicTreeInitProgress",
    value: function setDynamicTreeInitProgress() {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (progress === this.completedLabel) {
        this.inProgress = 0;
        this.description = 'Init for ballot tree complete.';

        if (!this.initComplete) {
          this.initComplete = true;
          this.otherCompleted += 0.5;
        }

        this.checkToUpdate();
      } else {
        if (this.isTimeToUpdate() && !this.initComplete && Number.isInteger(progress) && progress >= 0) {
          this.inProgress = progress / this.nbrBallotGroups;
          this.description = 'Init for ballot tree: ' + progress + ' ballot groups, ' + (Math.trunc(this.inProgress * 1000) / 10).toFixed(1) + '%';
          this.inProgress /= 2;
          this.checkToUpdate(this.now);
        }
      }
    }
    /** Set progress running iterations within a round, subject to limits on
     *   frequency of sending progress reports.
     * @param {number} nbrRound - The number of the round being tabulated.
     * @param {number} nbrIteration - The number of the iteration just completed.
     * @param {number} nbrHopefuls - The number of remaining hopeful candidates.
     */

  }, {
    key: "setIterationProgress",
    value: function setIterationProgress(nbrRound, nbrIteration, nbrHopefuls) {
      if (nbrIteration > this.maxNbrIterations) {
        this.maxNbrIterations = nbrIteration;
      }

      this.inProgress = (nbrIteration + (this.isDynamicTreeUsed ? 1 : 0)) / ((this.maxNbrIterations + 3 + (this.isDynamicTreeUsed ? 1 : 0)) * 1.1);
      this.description = 'Round ' + nbrRound + ' iteration ' + nbrIteration + ' : ' + nbrHopefuls + ' hopefuls remain.';
      this.checkToUpdate();
    }
    /** Set progress running rounds and
     *    reducing the number of hopeful candidates, subject to limits on
     *    the frequency of sending progress reports.
     * @param {number} nbrRound - The number of the round nearly completed.
     * @param {number} nbrIteration - The number of the iteration just completed.
     * @param {number} nbrHopefuls - The number of remaining hopeful candidates.
     */

  }, {
    key: "setRoundProgress",
    value: function setRoundProgress(nbrRound, nbrIteration, nbrHopefuls) {
      if (!this.callback) {
        return;
      }

      if (nbrIteration > this.maxNbrIterations) {
        this.maxNbrIterations = nbrIteration;
      }

      this.inProgress = 0;
      this.nbrResolvedHopefuls = this.nbrOriginalHopefuls - nbrHopefuls;
      this.description = 'Round ' + nbrRound + ' complete : ' + nbrHopefuls + ' hopefuls remain.';
      this.checkToUpdate();
    }
  }]);

  return Progress;
}();
/* harmony default export */ __webpack_exports__["default"] = (Progress);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementIn", function() { return createElementIn; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(174);













function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 * DOM access and manipulation wrapper functions
 */

var DBG = _debug_js__WEBPACK_IMPORTED_MODULE_12__["default"].setDBG(0); // level of debug traces; see ./debug.js for usage 

var PDBG = _debug_js__WEBPACK_IMPORTED_MODULE_12__["default"].PDBG;
function getId(id) {
  id = String(id);
  var result = document.getElementById(id);

  if (!result) {
    throw ReferenceError('Error: no element found with id = "' + id + '".');
  }

  return result;
}
function listen(element, type, listener) {
  element.addEventListener(type, listener);
}
function hasClass(element, className) {
  className = String(className);
  var classNames = String(element.className).split(' ');
  var result = classNames.some(function (name) {
    return name === className;
  });
  return result;
}
function addClass(element, className) {
  className = String(className);
  var classNames = element.className;

  if (!hasClass(element, className)) {
    classNames += (classNames.length ? ' ' : '') + className;
  }

  element.className = classNames;
}
function removeClass(element, className) {
  className = String(className);
  var classNames = element.className.split(' ');
  classNames = classNames.filter(function (name) {
    return name !== className && name !== '';
  });
  element.className = classNames.join(' ');
}
function createElement(tagName, id, classNames, attributes) {
  var newElement = document.createElement(tagName);

  if (id) {
    newElement.setAttribute('id', id);
  }

  if (classNames) {
    newElement.setAttribute('class', classNames);
  }

  if (attributes && _typeof(attributes) == 'object') {
    for (var attributeName in attributes) {
      newElement.setAttribute(attributeName, attributes[attributeName]);
    }
  }

  return newElement;
}
function createElementIn(parentElement, tagName, id, classNames, attributes) {
  var newElement = createElement(tagName, id, classNames, attributes);

  if (parentElement) {
    parentElement.appendChild(newElement);
  }

  return newElement;
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $filter = __webpack_require__(57).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(86);

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_DBG", function() { return UI_DBG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDBG", function() { return PDBG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDBG", function() { return setDBG; });
/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 * Debug utilities
 */
// Level of debugging traces
//   0 = no traces
//   1 = problem specific traces
//   2 = high level tracking of what happened
//   3 = high level summary data
//   4 = high level more detailed data
//   5 = problem specific traces
//   6 = mid-level tracking of what happened
//   7 = mid-level tracking of summary data
//   8 = mid-level tracking of more detailed data
//   9 = problem specific traces
//  10 = ballot or candidate level activity
//  11 = ballot or candidate level data
//  12 = ranking level activity
//  13 = ranking level data
//  14 = input text area, file text, inputData, etc.
var UI_DBG = 0; // Limit on level of debugging traces, not to exceed

var PDBG = console.debug;
function setDBG(level) {
  var result = Math.min(level, UI_DBG);
  return result;
}
var Debug = {
  setDBG: setDBG,
  UI_DBG: UI_DBG,
  PDBG: PDBG
};
/* harmony default export */ __webpack_exports__["default"] = (Debug);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConvertEb; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(108);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(121);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(148);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_pad_end__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(149);
/* harmony import */ var core_js_modules_es_string_pad_end__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_end__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(154);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(176);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(179);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _dom_utils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(172);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(166);
/* harmony import */ var _util_basic_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(136);
/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(181);
/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(jssha__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(174);
































function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright 2016-2019 David Cary;
 * @license Apache-2.0
 *
 * Count votes with Meek's Method RCV / STV
 *
 * Convert from EB-format ballot (vote_by_vote.csv) file.
 */





var DBG = _debug_js__WEBPACK_IMPORTED_MODULE_35__["default"].setDBG(0); // level of debug traces; see ./debug.js for usage 

var PDBG = _debug_js__WEBPACK_IMPORTED_MODULE_35__["default"].PDBG;

var ConvertEb =
/*#__PURE__*/
function () {
  function ConvertEb(fileName, fileText, elementIds) {
    _classCallCheck(this, ConvertEb);

    this.fileName = fileName.replace('C:\\fakepath\\', '');
    this.safeFileName = this.fileName.replace(/</, '&lt;');
    this.fileText = fileText;
    this.elementIds = elementIds;
    this.messageUnknown = '??';
    this.message = this.messageUnknown;
  }

  _createClass(ConvertEb, [{
    key: "isEbBallotFile",
    value: function isEbBallotFile() {
      try {
        var result = this._checkIsEbBallotFormat(this.fileText);

        return result;
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_32__["MeekImplementationError"]('Error: While checking whether read file is in EB format.', [], exc);
      }
    }
  }, {
    key: "_checkIsEbBallotFormat",
    value: function _checkIsEbBallotFormat(fileText) {
      var result = false;

      var valuesByLine = this._splitText(fileText.slice(0, 100 * 1024));

      if (valuesByLine.length >= 5) if (valuesByLine[0].length === 1) if (valuesByLine[1].length === 0 || valuesByLine[1].length === 1 && valuesByLine[1][0].length === 0) if (valuesByLine[2].length === 1) if (valuesByLine[2][0] === 'The highest ranked candidate' + ' gets the highest score; thus a score of 1 indicates' + ' the candidate was least preferred.') if (valuesByLine[4].length >= 1) if (valuesByLine[4][0] === 'Ballot') return true;
      return false;
    }
  }, {
    key: "_splitText",
    value: function _splitText(text) {
      var lines = text.split('\n');

      if (text.length && text[text.length - 1] === '\n' && lines[lines.length - 1] === []) {
        lines.pop();
      }

      var valuesByLine = [];
      lines.forEach(function (line, ix) {
        var values = line.split('\t');
        valuesByLine.push(values);
      });
      return valuesByLine;
    }
  }, {
    key: "createCandidateIdsForReview",
    value: function createCandidateIdsForReview() {
      try {
        var message = '';

        var _this$_isValidJson = this._isValidJson(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(this.elementIds.inputTextarea).value);

        var _this$_isValidJson2 = _slicedToArray(_this$_isValidJson, 2);

        message = _this$_isValidJson2[0];
        this.inputData = _this$_isValidJson2[1];

        if (message) {
          return message;
        }

        message = this._extractData();

        if (message) {
          return message;
        }

        this.inputData.names = this.candidateNames;
        this.candidateIds = this._buildSuggestedCandidateIds(this.candidateNames, this.candidateIds);
        /** /
        if (this.candidateIds.length >= 6) {
          this.candidateIds[1] = 'ju nk';
          this.candidateIds[3] = 'dup1';
          this.candidateIds[5] = 'dup1';
        }
        /**/

        this.newTbody = this._buildCandidateIdsTbody(this.candidateNames, this.candidateIds);

        var _this$_validateAll = this._validateAll(this.candidateIds);

        var _this$_validateAll2 = _slicedToArray(_this$_validateAll, 3);

        this.itemList = _this$_validateAll2[0];
        this.itemsById = _this$_validateAll2[1];
        this.errorList = _this$_validateAll2[2];

        this._installNewTbody(this.newTbody);

        this._setAllErrors(this.errorList);

        return message;
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_32__["MeekImplementationError"]("ERROR: While creating candidate Id's from read file for review.", [], exc);
      }
    }
  }, {
    key: "_isValidJson",
    value: function _isValidJson(text) {
      var message = '';
      var inputTextarea = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(this.elementIds.inputTextarea);
      var inputData = {};

      try {
        if (inputTextarea.value !== '') {
          inputData = JSON.parse(inputTextarea.value);

          if (!(inputData && _typeof(inputData) == 'object')) {
            inputData = {};
          }
        }
      } catch (exc) {
        message = 'Error: Existing input text';
        ' is not in a valid JSON format.' + '<br/>Fix it or delete all of it, then try again.' + '<br/>' + String(exc);
        return [message, {}];
      }

      this._discardInputDataParts(inputData);

      return [message, inputData];
    }
  }, {
    key: "_discardInputDataParts",
    value: function _discardInputDataParts(inputData) {
      delete inputData.ballots;
      delete inputData.names;
      delete inputData.candidates;
      delete inputData.tieBreaker;
      delete inputData.included;
      delete inputData.protected;
    }
  }, {
    key: "_extractData",
    value: function _extractData() {
      var message = '';

      var valuesByLine = this._splitText(this.fileText);

      this.fileText = null;

      var _this$_validateBallot = this._validateBallotNumbering(valuesByLine);

      var _this$_validateBallot2 = _slicedToArray(_this$_validateBallot, 2);

      message = _this$_validateBallot2[0];
      this.nbrBallots = _this$_validateBallot2[1];

      if (message) {
        return message;
      }

      var parms;

      var _this$_extractCandida = this._extractCandidates(valuesByLine);

      var _this$_extractCandida2 = _slicedToArray(_this$_extractCandida, 4);

      parms = _this$_extractCandida2[0];
      this.candidateNames = _this$_extractCandida2[1];
      this.candidateIndexes = _this$_extractCandida2[2];
      this.candidateIds = _this$_extractCandida2[3];
      this.nbrListedCandidates = this.candidateNames.length;

      var _this$_extractRatingN = this._extractRatingNumbersAndWriteins(valuesByLine, parms, this.candidateNames, this.candidateIndexes);

      var _this$_extractRatingN2 = _slicedToArray(_this$_extractRatingN, 2);

      message = _this$_extractRatingN2[0];
      this.maxRatingNbr = _this$_extractRatingN2[1];
      this.nbrWriteinCandidates = this.candidateNames.length - this.nbrListedCandidates;

      if (message) {
        return message;
      }

      var _this$_extractBallots = this._extractBallots(valuesByLine, parms, this.maxRatingNbr, this.candidateIndexes);

      var _this$_extractBallots2 = _slicedToArray(_this$_extractBallots, 2);

      message = _this$_extractBallots2[0];
      this.indexedBallots = _this$_extractBallots2[1];

      if (message) {
        return message;
      }

      return '';
    }
  }, {
    key: "_validateBallotNumbering",
    value: function _validateBallotNumbering(valuesByLine) {
      var message = '';
      var haveEmptyBallotLines = false;
      var nbrBallots = 0;
      valuesByLine.every(function (line, ix) {
        if (ix <= 4) {
          return true;
        }

        if (line.length == 0 || line.length == 1 && line[0] === '') {
          haveEmptyBallotLines = true;
          return true;
        } else if (haveEmptyBallotLines) {
          message = 'Error: Non-empty ballot lines' + ' follow empty ballot lines' + '<br/>&nbsp;&nbsp;in an Election Buddy' + ' vote_by_vote ballot file:' + '<br/>starting at line number ' + (ix + 1);
          nbrBallots = NaN;
          return false;
        }

        var ballotNbr = Number(line[0]);
        var ballotNbrInt = parseInt(line[0], 10);

        if (Number.isInteger(ballotNbr) && Number.isInteger(ballotNbrInt) && ballotNbr === ballotNbrInt && ballotNbr > 0 && ballotNbr === nbrBallots + 1) {
          nbrBallots++;
          return true;
        }

        message = 'Error: Ballot lines are not consecutively numbered' + '<br/>&nbsp;&nbsp;in an Election Buddy' + ' vote_by_vote ballot file:' + '<br/>starting at line number ' + (ix + 1);
        '<br/>after ' + nbrBallots + ' consecutively numbered ballot lines';
        nbrBallots = NaN;
        return false;
      });
      return [message, nbrBallots];
    }
  }, {
    key: "_cleanName",
    value: function _cleanName(name) {
      var cleanedName = name.replace(/[\t\n\r]/g, ' ').replace(/  +/g, ' ');
      return cleanedName;
    }
  }, {
    key: "_extractCandidates",
    value: function _extractCandidates(valuesByLine) {
      var _this = this;

      var parms = {};
      parms.listedFirstColumnIx = 1;

      if (valuesByLine[4].length >= 2 && valuesByLine[4][1].startsWith('Voter')) {
        parms.listedFirstColumnIx = 2;
      }

      parms.writeinFirstColumnIx = valuesByLine[4].indexOf('Write-in 1');
      parms.abstainColumnIx = valuesByLine[4].indexOf('Abstain');
      parms.writeinLastColumnIx = parms.writinFirstColumn === -1 ? -1 : parms.abstainColumnIx === -1 ? valuesByLine[4].length - 1 : parms.abstainColumnIx - 1;
      parms.listedLastColumnIx = parms.writeinFirstColumnIx === -1 ? parms.abstainColumnIx === -1 ? valuesByLine[4].length - 1 : parms.abstainColumnIx - 1 : parms.writeinFirstColumnIx - 1;
      var candidateIds = valuesByLine[3].slice(parms.listedFirstColumnIx).map(function (code) {
        return _this._cleanName(code);
      });
      var candidateNames = valuesByLine[4].slice(parms.listedFirstColumnIx, parms.listedLastColumnIx + 1).map(function (name) {
        return _this._cleanName(name);
      });
      var candidateIndexes = {};
      candidateNames.forEach(function (name, ix) {
        candidateIndexes[name] = ix;
      });
      return [parms, candidateNames, candidateIndexes, candidateIds];
    }
  }, {
    key: "_makeRatingNbr",
    value: function _makeRatingNbr(rating, maxRatingNbr) {
      var ratingNbr = Number(rating);
      var ratingInt = parseInt(rating, 10);

      if (Number.isInteger(ratingNbr) && Number.isInteger(ratingInt) && ratingNbr === ratingInt && ratingNbr >= 0) {
        return ratingNbr;
      }

      return NaN;
    }
  }, {
    key: "_extractRatingNumbersAndWriteins",
    value: function _extractRatingNumbersAndWriteins(valuesByLine, parms, candidateNames, candidateIndexes) {
      var _this2 = this;

      var message = '';
      var maxRatingNbr = 0;
      var isGood = valuesByLine.every(function (line, lineIx) {
        if (lineIx <= 4) {
          return true;
        }

        var isLineGood = line.every(function (rating, rix) {
          if (rix < parms.listedFirstColumnIx) {
            return true;
          }

          if (rix <= parms.listedLastColumnIx) {
            if (rating.trim() === '') {
              return true;
            }

            var _ratingNbr = 0;
            _ratingNbr = _this2._makeRatingNbr(rating);

            if (!Number.isNaN(_ratingNbr)) {
              if (_ratingNbr > maxRatingNbr) {
                maxRatingNbr = _ratingNbr;
              }

              valuesByLine[lineIx][rix] = _ratingNbr;
              return true;
            }

            message = 'Error: Invalid / unexpected rating number' + ' for a listed candidate' + '<br/>&nbsp;&nbsp;in an Election Buddy' + ' vote_by_vote ballot file:' + '<br/>value = "' + rating.replace(/</g, '&lt;') + '"' + '<br/>ballot number = ' + line[0] + ' on line ' + (lineIx + 1) + '<br/>in (tab separated) value column ' + (rix + 1);
            return false;
          }

          if (rating.trim() === '') {
            return true;
          }

          if (rix > parms.writeinLastColumnIx) {
            return true;
          }

          var matches = rating.match(/^(.*) \((\d+)\)$/);

          if (matches === null) {
            message = 'Error: Invalid / unexpected format' + ' for a write-in candidate' + '<br/>&nbsp;&nbsp;in an Election Buddy' + ' vote_by_vote ballot file:' + '<br/>value = "' + rating.replace(/</g, '&lt;') + '"' + '<br/>ballot number = ' + line[0] + ' on line ' + (lineIx + 1) + '<br/>in (tab separated) value column ' + (rix + 1);
            return false;
          }

          var name = _this2._cleanName(matches[1]);

          if (!(name in candidateIndexes)) {
            candidateIndexes[name] = candidateNames.length;
            candidateNames.push(name);
          }

          var ratingNbr = _this2._makeRatingNbr(matches[2]);

          if (!Number.isNaN(ratingNbr)) {
            if (ratingNbr > maxRatingNbr) {
              maxRatingNbr = ratingNbr;
            }

            valuesByLine[lineIx][rix] = {
              name: name,
              ratingNbr: ratingNbr
            };
            return true;
          }

          message = 'Error: Invalid / unexpected rating number' + ' for a write-in candidate' + '<br/>&nbsp;&nbsp;in an Election Buddy vote_by_vote ballot file:' + '<br/>column value = "' + rating.replace(/</g, '&lt;') + '"' + '<br/>rating number = "' + matches[2].replace(/</g, '&lt;') + '"' + '<br/>ballot number = ' + line[0] + ' on line ' + (lineIx + 1) + '<br/>in (tab separated) value column ' + (rix + 1);
          return false;
        });
        return isLineGood;
      });
      return [message, maxRatingNbr];
    }
  }, {
    key: "_extractBallots",
    value: function _extractBallots(valuesByLine, parms, maxRatingNbr, candidateIndexes) {
      var message = '';
      var ballots = [];
      var isGood = valuesByLine.every(function (line, lineIx) {
        if (lineIx <= 4) {
          return true;
        }

        if (line.length == 0 || line.length == 1 && line[0] === '') {
          return true;
        }

        var ballotRankings = [];
        var isLineGood = line.every(function (rating, rix) {
          if (rix < parms.listedFirstColumnIx) {
            return true;
          }

          if (rix <= parms.listedLastColumnIx) {
            if (typeof rating == 'number') {
              var _ranking = maxRatingNbr - rating;

              if (_ranking in ballotRankings) {
                ballotRankings[_ranking] = '#';
              } else {
                ballotRankings[_ranking] = rix - parms.listedFirstColumnIx;
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

          var ranking = maxRatingNbr - rating.ratingNbr;
          var writeinIndex = candidateIndexes[rating.name];

          if (ranking in ballotRankings && ballotRankings[ranking] !== writeinIndex) {
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
  }, {
    key: "_buildSuggestedCandidateIds",
    value: function _buildSuggestedCandidateIds(names, candidateIds) {
      var _this3 = this;

      names.every(function (name, ix) {
        var candidateId = '';

        if (!candidateIds[ix]) {
          candidateId = _this3._suggestCandidateId(name, ix);
          candidateIds[ix] = candidateId;
        }

        return true;
      });
      candidateIds = candidateIds.slice(0, names.length);
      return candidateIds;
    }
  }, {
    key: "_suggestCandidateId",
    value: function _suggestCandidateId(name, ix) {
      var simpleName = (' ' + name + ' ').replace(/-/g, ' ').replace(/  +/g, ' ').replace(/[.,_'"~`!@#$%^&+=:;?|<>(){}[\]\/\t\n\r\\]/g, '').replace(/ dr | rev | jr | sr | ii | iii /gi, ' ').slice(1, -1);
      var nameParts = simpleName.split(' ');
      var targetLength = 6;
      var lastTargetLength = 3;
      var candidateId = 'C' + String(ix + 1).padStart(3, '0');

      if (nameParts.length == 1) {
        candidateId = nameParts[0].slice(0, targetLength);
      } else if (nameParts.length == 2) {
        var lastPart = nameParts[1].slice(0, lastTargetLength);
        candidateId = nameParts[0].slice(0, targetLength - lastPart.length);
        candidateId += nameParts[1].slice(0, targetLength - candidateId.length);
      } else if (nameParts.length > 2) {
        var secondPart = nameParts[1].slice(0, 1);
        var _lastPart = nameParts[nameParts.length - 1];
        candidateId = nameParts[0].slice(0, targetLength - secondPart.length - _lastPart.slice(0, lastTargetLength).length);
        candidateId += secondPart;
        candidateId += _lastPart.slice(0, targetLength - candidateId.length);
      }

      candidateId = candidateId.padEnd(targetLength, '_');
      return candidateId;
    }
  }, {
    key: "_buildCandidateIdsTbody",
    value: function _buildCandidateIdsTbody(names, candidateIds) {
      var _this4 = this;

      var newTbody = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["createElement"])('tbody', this.elementIds.candidateIdsTbody);
      var this2 = this;
      Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["listen"])(newTbody, 'input', function (evt) {
        return _this4._handleInputOnCandidateId(evt);
      });
      names.every(function (name, ix) {
        var candidateId = candidateIds[ix];
        var rowId = 'row-' + String(ix + 1).padStart(2, '0');
        var rowElement = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["createElementIn"])(newTbody, 'tr', 'candId-' + rowId);
        var tdElement = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["createElementIn"])(rowElement, 'td', 'candId-seq-' + rowId, 'candId-seq');
        tdElement.innerText = String(ix + 1);
        tdElement = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["createElementIn"])(rowElement, 'td', 'candId-code-' + rowId, 'candId-code');
        var inputElement = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["createElementIn"])(tdElement, 'input', 'candId-code-input-' + rowId, '', {
          type: 'text',
          value: candidateId
        });
        var this2 = _this4; //let handler = function(a, b) {
        //  this._handleChangedCandidateId(a, b);
        //}
        //inputElement.addEventListener('input', handler);

        tdElement = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["createElementIn"])(rowElement, 'td', 'candId-name-' + rowId, 'candId-name');
        tdElement.innerText = name;
        return true;
      });
      return newTbody;
    }
  }, {
    key: "_validateAll",
    value: function _validateAll(candidateIds) {
      var _this5 = this;

      var itemList = [];
      var values = {};
      var itemsById = {};
      candidateIds.forEach(function (code, ix) {
        var item = {
          ix: ix,
          id: 'candId-code-input-row-' + String(ix + 1).padStart(2, '0'),
          value: code,
          hasDuplicate: false,
          isOwnError: !_this5._validateOnOwn(code)
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
      var errorList = [];
      itemList.forEach(function (item) {
        if (item.hasDuplicate || item.isOwnError) {
          errorList.push(item);
        }
      });
      return [itemList, itemsById, errorList];
    }
  }, {
    key: "_validateOnOwn",
    value: function _validateOnOwn(candidateId) {
      if (candidateId !== '') if (candidateId !== '*') if (candidateId[0] !== ':') if (candidateId.indexOf(' ') == -1) if (candidateId.indexOf('"') == -1) if (candidateId.indexOf(':') == -1) if (candidateId.indexOf('[') == -1) if (candidateId.indexOf(']') == -1) if (candidateId.length <= 8) if (candidateId.split('').every(function (ch) {
        var codeNbr = ch.charCodeAt(0);
        if (codeNbr > 0x20 && codeNbr < 0x7f) return true;
        if (codeNbr >= 0xa0) if (!(codeNbr >= 0xd800 && codeNbr < 0xe000)) if (!(codeNbr === 0xfffe || codeNbr === 0xfeff)) return true;
        return false;
      })) return true;
      return false;
    }
  }, {
    key: "_installNewTbody",
    value: function _installNewTbody(newTbody) {
      var tableElement = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(this.elementIds.candidateIdsTable);
      tableElement.removeChild(Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(this.elementIds.candidateIdsTbody));
      tableElement.appendChild(newTbody);
    }
  }, {
    key: "_handleInputOnCandidateId",
    value: function _handleInputOnCandidateId(evt) {
      var startTime = Date.now();

      var _this$_validateOne = this._validateOne(evt.target.id, evt.target.value, this.itemList, this.itemsById[evt.target.id]),
          _this$_validateOne2 = _slicedToArray(_this$_validateOne, 2),
          errorList = _this$_validateOne2[0],
          clearList = _this$_validateOne2[1];

      this._setIncrementalErrors(errorList, clearList);

      var endTime = Date.now();
    }
  }, {
    key: "_setIncrementalErrors",
    value: function _setIncrementalErrors(errorList, clearList) {
      errorList.forEach(function (item) {
        var element = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(item.id);
        Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["addClass"])(element, 'isNotValid');
      });
      clearList.forEach(function (item) {
        var element = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(item.id);
        Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["removeClass"])(element, 'isNotValid');
      });
    }
  }, {
    key: "_validateOne",
    value: function _validateOne(id, newValue, itemList, item) {
      var oldIsError = itemList.map(function (item2) {
        return item2.hasDuplicate || item2.isOwnError;
      });
      var oldValue = item.value;
      item.value = newValue;
      item.hasDuplicate = false;
      item.isOwnError = !this._validateOnOwn(item.value);
      var oldValueDupCount = 0;
      var oldValueDupItem = null;
      itemList.forEach(function (item2, ix) {
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

      var newErrorList = [];
      var newClearList = [];
      itemList.forEach(function (item, ix) {
        var itemIsError = item.hasDuplicate || item.isOwnError;

        if (itemIsError && !oldIsError[ix]) {
          newErrorList.push(item);
        }

        if (!itemIsError && oldIsError[ix]) {
          newClearList.push(item);
        }
      });
      return [newErrorList, newClearList];
    }
  }, {
    key: "_setAllErrors",
    value: function _setAllErrors(errorList) {
      var tbody = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(this.elementIds.candidateIdsTbody);
      var inputElements = tbody.querySelectorAll('input');
      var nextErrorIx = 0;
      var nextError = errorList[nextErrorIx];
      inputElements.forEach(function (element, ix) {
        if (nextError && nextError.ix === ix) {
          Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["addClass"])(element, 'isNotValid');
          nextError = errorList[++nextErrorIx];
        } else {
          Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["removeClass"])(element, 'isNotValid');
        }
      });
    }
  }, {
    key: "checkForErrors",
    value: function checkForErrors() {
      try {
        var candidates = this._getReviewedCandidateIds();

        var _this$_validateAll3 = this._validateAll(candidates);

        var _this$_validateAll4 = _slicedToArray(_this$_validateAll3, 3);

        this.itemList = _this$_validateAll4[0];
        this.itemsById = _this$_validateAll4[1];
        this.errorList = _this$_validateAll4[2];

        this._setAllErrors(this.errorList);

        if (this.errorList.length === 0) {
          return null;
        }

        var errorStats = {
          nbrInError: 0,
          nbrOwnErrors: 0,
          nbrDuplicates: 0
        };
        this.itemList.forEach(function (item) {
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
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_32__["MeekImplementationError"]('Error: While checking if reviewed candidate Id\'s are valid.', [], exc);
      }
    }
  }, {
    key: "replaceInputText",
    value: function replaceInputText() {
      try {
        this.candidates = this._getReviewedCandidateIds();
        this.ballots = this._buildBallotsWithCandidateIds(this.indexedBallots, this.candidates);
        this.inputData.candidates = this.candidates;
        this.inputData.ballots = this.ballots;
        this.tieBreaker = this._buildTieBreakerList(this.candidates, this.nbrListedCandidates, this.candidateNames, this.inputData.randomSeed);
        this.inputData.tieBreaker = this.tieBreaker;

        var inputText = this._buildInputText(this.inputData);

        Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(this.elementIds.inputTextarea).value = inputText;
      } catch (exc) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_32__["MeekImplementationError"]('Error: While building and replacing input text.', [], exc);
      }
    }
  }, {
    key: "_getReviewedCandidateIds",
    value: function _getReviewedCandidateIds() {
      var tableBody = Object(_dom_utils_js__WEBPACK_IMPORTED_MODULE_31__["getId"])(this.elementIds.candidateIdsTbody);
      var inputElements = tableBody.querySelectorAll('input');
      var candidates = [];

      for (var iix = 0; iix < inputElements.length; iix++) {
        candidates.push(String(inputElements[iix].value));
      }

      return candidates;
    }
  }, {
    key: "_buildBallotsWithCandidateIds",
    value: function _buildBallotsWithCandidateIds(indexedBallots, candidates) {
      var ballots = [];
      indexedBallots.forEach(function (ballot, bix) {
        var newBallot = ballot.map(function (ranking, rix) {
          var result = Number.isInteger(ranking) ? candidates[ranking] : ranking;
          return result;
        });
        ballots.push([1, ' ' + newBallot.join(' ')]);
      });
      return ballots;
    }
  }, {
    key: "_buildTieBreakerList",
    value: function _buildTieBreakerList(candidates, nbrListedCandidates, candidateNames, randomSeed) {
      var listedNames = candidateNames.slice(0, nbrListedCandidates).sort();
      var baseHashInput = '';

      if (typeof randomSeed == 'number' || typeof randomSeed == 'string') {
        baseHashInput += String(randomSeed);
      }

      baseHashInput += listedNames.join('');
      var baseHasher = new jssha__WEBPACK_IMPORTED_MODULE_34___default.a('SHA-256', 'TEXT');
      baseHasher.update(baseHashInput);
      var baseHash = baseHasher.getHash('HEX');
      var nameHashes = [];
      candidates.forEach(function (candidate, ix) {
        var nameHasher = new jssha__WEBPACK_IMPORTED_MODULE_34___default.a('SHA-256', 'TEXT');
        var nameHashInput = baseHash + String(candidateNames[ix]);
        nameHasher.update(nameHashInput);
        var nameHash = [nameHasher.getHash('HEX'), candidate];
        nameHashes.push(nameHash);
      });
      nameHashes.sort(function (a, b) {
        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      });
      var tieBreaker = nameHashes.map(function (item) {
        return item[1];
      });
      return tieBreaker;
    }
  }, {
    key: "_buildInputText",
    value: function _buildInputText(inputData) {
      var textParts = [];
      var textPart = '';
      var inputKey = 'description';

      if (inputKey in inputData) {
        textPart = '"' + inputKey + '": ' + JSON.stringify(inputData[inputKey]);
        textParts.push(textPart);
      }

      inputKey = 'nbrSeatsToFill';

      if (inputKey in inputData) {
        textPart = '"' + inputKey + '": ' + JSON.stringify(inputData[inputKey]);
        textParts.push(textPart);
      }

      inputKey = 'maxRankingLevels';

      if (inputKey in inputData) {
        textPart = '"' + inputKey + '": ' + JSON.stringify(inputData[inputKey]);
        textParts.push(textPart);
      }

      inputKey = 'options';

      if (inputKey in inputData) {
        var options = inputData.options;

        if (options && _typeof(options) == 'object') {
          textPart = '';

          for (var optionsKey in options) {
            textPart += '    ,"' + optionsKey + '": ' + JSON.stringify(options[optionsKey]) + '\n';
          }

          textPart = textPart.replace(/^    ,/, '    ');

          if (textPart) {
            textPart = '"options": {\n' + textPart + '  }';
          } else {
            textPart = '"options": { }';
          }
        } else {
          textPart = '"options": ' + JSON.stringify(options);
        }

        textParts.push(textPart);
      }

      for (var _inputKey in inputData) {
        if (['description', 'nbrSeatsToFill', 'maxRankingLevels', 'options', 'excluded', 'protected', 'tieBreaker', 'candidates', 'ballots', 'names'].indexOf(_inputKey) === -1) {
          textPart = '"' + _inputKey + '": ' + JSON.stringify(inputData[_inputKey]);
          textParts.push(textPart);
        }
      }

      textParts.push('"excluded": ""');
      textParts.push('"protected": ""');
      textPart = '"tieBreaker": " ' + inputData.tieBreaker.join(' ') + '"';
      textParts.push(textPart);
      textPart = '"candidates": " ' + inputData.candidates.join(' ') + '"';
      textParts.push(textPart);
      var namesParts = inputData.names.map(function (name, ix) {
        return JSON.stringify(String(inputData.candidates[ix])) + ': ' + JSON.stringify(name);
      }).sort();
      textPart = '"names": {\n    ' + namesParts.join(',\n    ') + '\n  }';
      textParts.push(textPart);
      var newBallots = [];
      inputData.ballots.forEach(function (ballot, ix) {
        var newBallot = '"' + ballot[1] + '"';
        newBallots.push(newBallot);
      });
      textPart = '"ballots": [\n    ' + newBallots.join(',\n    ') + '\n  ]';
      textParts.push(textPart);
      var newText = '{\n  ' + textParts.join('\n  ,') + '\n}';
      return newText;
    }
  }]);

  return ConvertEb;
}();



/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var toLength = __webpack_require__(39);
var notARegExp = __webpack_require__(177);
var requireObjectCoercible = __webpack_require__(13);
var correctIsRegExpLogic = __webpack_require__(178);

var nativeStartsWith = ''.startsWith;
var min = Math.min;

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('startsWith') }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(155);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(53);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $trim = __webpack_require__(97).trim;
var forcedStringTrimMethod = __webpack_require__(180);

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(7);
var whitespaces = __webpack_require__(98);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2017
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
(function(Y){function C(c,a,b){var e=0,h=[],n=0,g,l,d,f,m,q,u,r,I=!1,v=[],w=[],t,y=!1,z=!1,x=-1;b=b||{};g=b.encoding||"UTF8";t=b.numRounds||1;if(t!==parseInt(t,10)||1>t)throw Error("numRounds must a integer >= 1");if("SHA-1"===c)m=512,q=K,u=Z,f=160,r=function(a){return a.slice()};else if(0===c.lastIndexOf("SHA-",0))if(q=function(a,b){return L(a,b,c)},u=function(a,b,h,e){var k,f;if("SHA-224"===c||"SHA-256"===c)k=(b+65>>>9<<4)+15,f=16;else if("SHA-384"===c||"SHA-512"===c)k=(b+129>>>10<<
5)+31,f=32;else throw Error("Unexpected error in SHA-2 implementation");for(;a.length<=k;)a.push(0);a[b>>>5]|=128<<24-b%32;b=b+h;a[k]=b&4294967295;a[k-1]=b/4294967296|0;h=a.length;for(b=0;b<h;b+=f)e=L(a.slice(b,b+f),e,c);if("SHA-224"===c)a=[e[0],e[1],e[2],e[3],e[4],e[5],e[6]];else if("SHA-256"===c)a=e;else if("SHA-384"===c)a=[e[0].a,e[0].b,e[1].a,e[1].b,e[2].a,e[2].b,e[3].a,e[3].b,e[4].a,e[4].b,e[5].a,e[5].b];else if("SHA-512"===c)a=[e[0].a,e[0].b,e[1].a,e[1].b,e[2].a,e[2].b,e[3].a,e[3].b,e[4].a,
e[4].b,e[5].a,e[5].b,e[6].a,e[6].b,e[7].a,e[7].b];else throw Error("Unexpected error in SHA-2 implementation");return a},r=function(a){return a.slice()},"SHA-224"===c)m=512,f=224;else if("SHA-256"===c)m=512,f=256;else if("SHA-384"===c)m=1024,f=384;else if("SHA-512"===c)m=1024,f=512;else throw Error("Chosen SHA variant is not supported");else if(0===c.lastIndexOf("SHA3-",0)||0===c.lastIndexOf("SHAKE",0)){var F=6;q=D;r=function(a){var c=[],e;for(e=0;5>e;e+=1)c[e]=a[e].slice();return c};x=1;if("SHA3-224"===
c)m=1152,f=224;else if("SHA3-256"===c)m=1088,f=256;else if("SHA3-384"===c)m=832,f=384;else if("SHA3-512"===c)m=576,f=512;else if("SHAKE128"===c)m=1344,f=-1,F=31,z=!0;else if("SHAKE256"===c)m=1088,f=-1,F=31,z=!0;else throw Error("Chosen SHA variant is not supported");u=function(a,c,e,b,h){e=m;var k=F,f,g=[],n=e>>>5,l=0,d=c>>>5;for(f=0;f<d&&c>=e;f+=n)b=D(a.slice(f,f+n),b),c-=e;a=a.slice(f);for(c%=e;a.length<n;)a.push(0);f=c>>>3;a[f>>2]^=k<<f%4*8;a[n-1]^=2147483648;for(b=D(a,b);32*g.length<h;){a=b[l%
5][l/5|0];g.push(a.b);if(32*g.length>=h)break;g.push(a.a);l+=1;0===64*l%e&&D(null,b)}return g}}else throw Error("Chosen SHA variant is not supported");d=M(a,g,x);l=A(c);this.setHMACKey=function(a,b,h){var k;if(!0===I)throw Error("HMAC key already set");if(!0===y)throw Error("Cannot set HMAC key after calling update");if(!0===z)throw Error("SHAKE is not supported for HMAC");g=(h||{}).encoding||"UTF8";b=M(b,g,x)(a);a=b.binLen;b=b.value;k=m>>>3;h=k/4-1;if(k<a/8){for(b=u(b,a,0,A(c),f);b.length<=h;)b.push(0);
b[h]&=4294967040}else if(k>a/8){for(;b.length<=h;)b.push(0);b[h]&=4294967040}for(a=0;a<=h;a+=1)v[a]=b[a]^909522486,w[a]=b[a]^1549556828;l=q(v,l);e=m;I=!0};this.update=function(a){var c,b,k,f=0,g=m>>>5;c=d(a,h,n);a=c.binLen;b=c.value;c=a>>>5;for(k=0;k<c;k+=g)f+m<=a&&(l=q(b.slice(k,k+g),l),f+=m);e+=f;h=b.slice(f>>>5);n=a%m;y=!0};this.getHash=function(a,b){var k,g,d,m;if(!0===I)throw Error("Cannot call getHash after setting HMAC key");d=N(b);if(!0===z){if(-1===d.shakeLen)throw Error("shakeLen must be specified in options");
f=d.shakeLen}switch(a){case "HEX":k=function(a){return O(a,f,x,d)};break;case "B64":k=function(a){return P(a,f,x,d)};break;case "BYTES":k=function(a){return Q(a,f,x)};break;case "ARRAYBUFFER":try{g=new ArrayBuffer(0)}catch(p){throw Error("ARRAYBUFFER not supported by this environment");}k=function(a){return R(a,f,x)};break;default:throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");}m=u(h.slice(),n,e,r(l),f);for(g=1;g<t;g+=1)!0===z&&0!==f%32&&(m[m.length-1]&=16777215>>>24-f%32),m=u(m,f,
0,A(c),f);return k(m)};this.getHMAC=function(a,b){var k,g,d,p;if(!1===I)throw Error("Cannot call getHMAC without first setting HMAC key");d=N(b);switch(a){case "HEX":k=function(a){return O(a,f,x,d)};break;case "B64":k=function(a){return P(a,f,x,d)};break;case "BYTES":k=function(a){return Q(a,f,x)};break;case "ARRAYBUFFER":try{k=new ArrayBuffer(0)}catch(v){throw Error("ARRAYBUFFER not supported by this environment");}k=function(a){return R(a,f,x)};break;default:throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
}g=u(h.slice(),n,e,r(l),f);p=q(w,A(c));p=u(g,f,m,p,f);return k(p)}}function b(c,a){this.a=c;this.b=a}function O(c,a,b,e){var h="";a/=8;var n,g,d;d=-1===b?3:0;for(n=0;n<a;n+=1)g=c[n>>>2]>>>8*(d+n%4*b),h+="0123456789abcdef".charAt(g>>>4&15)+"0123456789abcdef".charAt(g&15);return e.outputUpper?h.toUpperCase():h}function P(c,a,b,e){var h="",n=a/8,g,d,p,f;f=-1===b?3:0;for(g=0;g<n;g+=3)for(d=g+1<n?c[g+1>>>2]:0,p=g+2<n?c[g+2>>>2]:0,p=(c[g>>>2]>>>8*(f+g%4*b)&255)<<16|(d>>>8*(f+(g+1)%4*b)&255)<<8|p>>>8*(f+
(g+2)%4*b)&255,d=0;4>d;d+=1)8*g+6*d<=a?h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(p>>>6*(3-d)&63):h+=e.b64Pad;return h}function Q(c,a,b){var e="";a/=8;var h,d,g;g=-1===b?3:0;for(h=0;h<a;h+=1)d=c[h>>>2]>>>8*(g+h%4*b)&255,e+=String.fromCharCode(d);return e}function R(c,a,b){a/=8;var e,h=new ArrayBuffer(a),d,g;g=new Uint8Array(h);d=-1===b?3:0;for(e=0;e<a;e+=1)g[e]=c[e>>>2]>>>8*(d+e%4*b)&255;return h}function N(c){var a={outputUpper:!1,b64Pad:"=",shakeLen:-1};c=c||{};
a.outputUpper=c.outputUpper||!1;!0===c.hasOwnProperty("b64Pad")&&(a.b64Pad=c.b64Pad);if(!0===c.hasOwnProperty("shakeLen")){if(0!==c.shakeLen%8)throw Error("shakeLen must be a multiple of 8");a.shakeLen=c.shakeLen}if("boolean"!==typeof a.outputUpper)throw Error("Invalid outputUpper formatting option");if("string"!==typeof a.b64Pad)throw Error("Invalid b64Pad formatting option");return a}function M(c,a,b){switch(a){case "UTF8":case "UTF16BE":case "UTF16LE":break;default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
}switch(c){case "HEX":c=function(a,c,d){var g=a.length,l,p,f,m,q,u;if(0!==g%2)throw Error("String of HEX type must be in byte increments");c=c||[0];d=d||0;q=d>>>3;u=-1===b?3:0;for(l=0;l<g;l+=2){p=parseInt(a.substr(l,2),16);if(isNaN(p))throw Error("String of HEX type contains invalid characters");m=(l>>>1)+q;for(f=m>>>2;c.length<=f;)c.push(0);c[f]|=p<<8*(u+m%4*b)}return{value:c,binLen:4*g+d}};break;case "TEXT":c=function(c,h,d){var g,l,p=0,f,m,q,u,r,t;h=h||[0];d=d||0;q=d>>>3;if("UTF8"===a)for(t=-1===
b?3:0,f=0;f<c.length;f+=1)for(g=c.charCodeAt(f),l=[],128>g?l.push(g):2048>g?(l.push(192|g>>>6),l.push(128|g&63)):55296>g||57344<=g?l.push(224|g>>>12,128|g>>>6&63,128|g&63):(f+=1,g=65536+((g&1023)<<10|c.charCodeAt(f)&1023),l.push(240|g>>>18,128|g>>>12&63,128|g>>>6&63,128|g&63)),m=0;m<l.length;m+=1){r=p+q;for(u=r>>>2;h.length<=u;)h.push(0);h[u]|=l[m]<<8*(t+r%4*b);p+=1}else if("UTF16BE"===a||"UTF16LE"===a)for(t=-1===b?2:0,l="UTF16LE"===a&&1!==b||"UTF16LE"!==a&&1===b,f=0;f<c.length;f+=1){g=c.charCodeAt(f);
!0===l&&(m=g&255,g=m<<8|g>>>8);r=p+q;for(u=r>>>2;h.length<=u;)h.push(0);h[u]|=g<<8*(t+r%4*b);p+=2}return{value:h,binLen:8*p+d}};break;case "B64":c=function(a,c,d){var g=0,l,p,f,m,q,u,r,t;if(-1===a.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");p=a.indexOf("=");a=a.replace(/\=/g,"");if(-1!==p&&p<a.length)throw Error("Invalid '=' found in base-64 string");c=c||[0];d=d||0;u=d>>>3;t=-1===b?3:0;for(p=0;p<a.length;p+=4){q=a.substr(p,4);for(f=m=0;f<q.length;f+=1)l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(q[f]),
m|=l<<18-6*f;for(f=0;f<q.length-1;f+=1){r=g+u;for(l=r>>>2;c.length<=l;)c.push(0);c[l]|=(m>>>16-8*f&255)<<8*(t+r%4*b);g+=1}}return{value:c,binLen:8*g+d}};break;case "BYTES":c=function(a,c,d){var g,l,p,f,m,q;c=c||[0];d=d||0;p=d>>>3;q=-1===b?3:0;for(l=0;l<a.length;l+=1)g=a.charCodeAt(l),m=l+p,f=m>>>2,c.length<=f&&c.push(0),c[f]|=g<<8*(q+m%4*b);return{value:c,binLen:8*a.length+d}};break;case "ARRAYBUFFER":try{c=new ArrayBuffer(0)}catch(e){throw Error("ARRAYBUFFER not supported by this environment");}c=
function(a,c,d){var g,l,p,f,m,q;c=c||[0];d=d||0;l=d>>>3;m=-1===b?3:0;q=new Uint8Array(a);for(g=0;g<a.byteLength;g+=1)f=g+l,p=f>>>2,c.length<=p&&c.push(0),c[p]|=q[g]<<8*(m+f%4*b);return{value:c,binLen:8*a.byteLength+d}};break;default:throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");}return c}function y(c,a){return c<<a|c>>>32-a}function S(c,a){return 32<a?(a-=32,new b(c.b<<a|c.a>>>32-a,c.a<<a|c.b>>>32-a)):0!==a?new b(c.a<<a|c.b>>>32-a,c.b<<a|c.a>>>32-a):c}function w(c,a){return c>>>
a|c<<32-a}function t(c,a){var k=null,k=new b(c.a,c.b);return k=32>=a?new b(k.a>>>a|k.b<<32-a&4294967295,k.b>>>a|k.a<<32-a&4294967295):new b(k.b>>>a-32|k.a<<64-a&4294967295,k.a>>>a-32|k.b<<64-a&4294967295)}function T(c,a){var k=null;return k=32>=a?new b(c.a>>>a,c.b>>>a|c.a<<32-a&4294967295):new b(0,c.a>>>a-32)}function aa(c,a,b){return c&a^~c&b}function ba(c,a,k){return new b(c.a&a.a^~c.a&k.a,c.b&a.b^~c.b&k.b)}function U(c,a,b){return c&a^c&b^a&b}function ca(c,a,k){return new b(c.a&a.a^c.a&k.a^a.a&
k.a,c.b&a.b^c.b&k.b^a.b&k.b)}function da(c){return w(c,2)^w(c,13)^w(c,22)}function ea(c){var a=t(c,28),k=t(c,34);c=t(c,39);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function fa(c){return w(c,6)^w(c,11)^w(c,25)}function ga(c){var a=t(c,14),k=t(c,18);c=t(c,41);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function ha(c){return w(c,7)^w(c,18)^c>>>3}function ia(c){var a=t(c,1),k=t(c,8);c=T(c,7);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function ja(c){return w(c,17)^w(c,19)^c>>>10}function ka(c){var a=t(c,19),k=t(c,61);
c=T(c,6);return new b(a.a^k.a^c.a,a.b^k.b^c.b)}function G(c,a){var b=(c&65535)+(a&65535);return((c>>>16)+(a>>>16)+(b>>>16)&65535)<<16|b&65535}function la(c,a,b,e){var h=(c&65535)+(a&65535)+(b&65535)+(e&65535);return((c>>>16)+(a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)&65535)<<16|h&65535}function H(c,a,b,e,h){var d=(c&65535)+(a&65535)+(b&65535)+(e&65535)+(h&65535);return((c>>>16)+(a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)+(d>>>16)&65535)<<16|d&65535}function ma(c,a){var d,e,h;d=(c.b&65535)+(a.b&65535);e=(c.b>>>16)+
(a.b>>>16)+(d>>>16);h=(e&65535)<<16|d&65535;d=(c.a&65535)+(a.a&65535)+(e>>>16);e=(c.a>>>16)+(a.a>>>16)+(d>>>16);return new b((e&65535)<<16|d&65535,h)}function na(c,a,d,e){var h,n,g;h=(c.b&65535)+(a.b&65535)+(d.b&65535)+(e.b&65535);n=(c.b>>>16)+(a.b>>>16)+(d.b>>>16)+(e.b>>>16)+(h>>>16);g=(n&65535)<<16|h&65535;h=(c.a&65535)+(a.a&65535)+(d.a&65535)+(e.a&65535)+(n>>>16);n=(c.a>>>16)+(a.a>>>16)+(d.a>>>16)+(e.a>>>16)+(h>>>16);return new b((n&65535)<<16|h&65535,g)}function oa(c,a,d,e,h){var n,g,l;n=(c.b&
65535)+(a.b&65535)+(d.b&65535)+(e.b&65535)+(h.b&65535);g=(c.b>>>16)+(a.b>>>16)+(d.b>>>16)+(e.b>>>16)+(h.b>>>16)+(n>>>16);l=(g&65535)<<16|n&65535;n=(c.a&65535)+(a.a&65535)+(d.a&65535)+(e.a&65535)+(h.a&65535)+(g>>>16);g=(c.a>>>16)+(a.a>>>16)+(d.a>>>16)+(e.a>>>16)+(h.a>>>16)+(n>>>16);return new b((g&65535)<<16|n&65535,l)}function B(c,a){return new b(c.a^a.a,c.b^a.b)}function A(c){var a=[],d;if("SHA-1"===c)a=[1732584193,4023233417,2562383102,271733878,3285377520];else if(0===c.lastIndexOf("SHA-",0))switch(a=
[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],d=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],c){case "SHA-224":break;case "SHA-256":a=d;break;case "SHA-384":a=[new b(3418070365,a[0]),new b(1654270250,a[1]),new b(2438529370,a[2]),new b(355462360,a[3]),new b(1731405415,a[4]),new b(41048885895,a[5]),new b(3675008525,a[6]),new b(1203062813,a[7])];break;case "SHA-512":a=[new b(d[0],4089235720),new b(d[1],2227873595),
new b(d[2],4271175723),new b(d[3],1595750129),new b(d[4],2917565137),new b(d[5],725511199),new b(d[6],4215389547),new b(d[7],327033209)];break;default:throw Error("Unknown SHA variant");}else if(0===c.lastIndexOf("SHA3-",0)||0===c.lastIndexOf("SHAKE",0))for(c=0;5>c;c+=1)a[c]=[new b(0,0),new b(0,0),new b(0,0),new b(0,0),new b(0,0)];else throw Error("No SHA variants supported");return a}function K(c,a){var b=[],e,d,n,g,l,p,f;e=a[0];d=a[1];n=a[2];g=a[3];l=a[4];for(f=0;80>f;f+=1)b[f]=16>f?c[f]:y(b[f-
3]^b[f-8]^b[f-14]^b[f-16],1),p=20>f?H(y(e,5),d&n^~d&g,l,1518500249,b[f]):40>f?H(y(e,5),d^n^g,l,1859775393,b[f]):60>f?H(y(e,5),U(d,n,g),l,2400959708,b[f]):H(y(e,5),d^n^g,l,3395469782,b[f]),l=g,g=n,n=y(d,30),d=e,e=p;a[0]=G(e,a[0]);a[1]=G(d,a[1]);a[2]=G(n,a[2]);a[3]=G(g,a[3]);a[4]=G(l,a[4]);return a}function Z(c,a,b,e){var d;for(d=(a+65>>>9<<4)+15;c.length<=d;)c.push(0);c[a>>>5]|=128<<24-a%32;a+=b;c[d]=a&4294967295;c[d-1]=a/4294967296|0;a=c.length;for(d=0;d<a;d+=16)e=K(c.slice(d,d+16),e);return e}function L(c,
a,k){var e,h,n,g,l,p,f,m,q,u,r,t,v,w,y,A,z,x,F,B,C,D,E=[],J;if("SHA-224"===k||"SHA-256"===k)u=64,t=1,D=Number,v=G,w=la,y=H,A=ha,z=ja,x=da,F=fa,C=U,B=aa,J=d;else if("SHA-384"===k||"SHA-512"===k)u=80,t=2,D=b,v=ma,w=na,y=oa,A=ia,z=ka,x=ea,F=ga,C=ca,B=ba,J=V;else throw Error("Unexpected error in SHA-2 implementation");k=a[0];e=a[1];h=a[2];n=a[3];g=a[4];l=a[5];p=a[6];f=a[7];for(r=0;r<u;r+=1)16>r?(q=r*t,m=c.length<=q?0:c[q],q=c.length<=q+1?0:c[q+1],E[r]=new D(m,q)):E[r]=w(z(E[r-2]),E[r-7],A(E[r-15]),E[r-
16]),m=y(f,F(g),B(g,l,p),J[r],E[r]),q=v(x(k),C(k,e,h)),f=p,p=l,l=g,g=v(n,m),n=h,h=e,e=k,k=v(m,q);a[0]=v(k,a[0]);a[1]=v(e,a[1]);a[2]=v(h,a[2]);a[3]=v(n,a[3]);a[4]=v(g,a[4]);a[5]=v(l,a[5]);a[6]=v(p,a[6]);a[7]=v(f,a[7]);return a}function D(c,a){var d,e,h,n,g=[],l=[];if(null!==c)for(e=0;e<c.length;e+=2)a[(e>>>1)%5][(e>>>1)/5|0]=B(a[(e>>>1)%5][(e>>>1)/5|0],new b(c[e+1],c[e]));for(d=0;24>d;d+=1){n=A("SHA3-");for(e=0;5>e;e+=1){h=a[e][0];var p=a[e][1],f=a[e][2],m=a[e][3],q=a[e][4];g[e]=new b(h.a^p.a^f.a^
m.a^q.a,h.b^p.b^f.b^m.b^q.b)}for(e=0;5>e;e+=1)l[e]=B(g[(e+4)%5],S(g[(e+1)%5],1));for(e=0;5>e;e+=1)for(h=0;5>h;h+=1)a[e][h]=B(a[e][h],l[e]);for(e=0;5>e;e+=1)for(h=0;5>h;h+=1)n[h][(2*e+3*h)%5]=S(a[e][h],W[e][h]);for(e=0;5>e;e+=1)for(h=0;5>h;h+=1)a[e][h]=B(n[e][h],new b(~n[(e+1)%5][h].a&n[(e+2)%5][h].a,~n[(e+1)%5][h].b&n[(e+2)%5][h].b));a[0][0]=B(a[0][0],X[d])}return a}var d,V,W,X;d=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,
2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];V=[new b(d[0],3609767458),new b(d[1],602891725),new b(d[2],3964484399),new b(d[3],2173295548),new b(d[4],4081628472),new b(d[5],3053834265),new b(d[6],2937671579),new b(d[7],3664609560),new b(d[8],2734883394),new b(d[9],1164996542),new b(d[10],1323610764),new b(d[11],3590304994),new b(d[12],4068182383),new b(d[13],991336113),new b(d[14],633803317),new b(d[15],3479774868),new b(d[16],2666613458),new b(d[17],944711139),new b(d[18],2341262773),
new b(d[19],2007800933),new b(d[20],1495990901),new b(d[21],1856431235),new b(d[22],3175218132),new b(d[23],2198950837),new b(d[24],3999719339),new b(d[25],766784016),new b(d[26],2566594879),new b(d[27],3203337956),new b(d[28],1034457026),new b(d[29],2466948901),new b(d[30],3758326383),new b(d[31],168717936),new b(d[32],1188179964),new b(d[33],1546045734),new b(d[34],1522805485),new b(d[35],2643833823),new b(d[36],2343527390),new b(d[37],1014477480),new b(d[38],1206759142),new b(d[39],344077627),
new b(d[40],1290863460),new b(d[41],3158454273),new b(d[42],3505952657),new b(d[43],106217008),new b(d[44],3606008344),new b(d[45],1432725776),new b(d[46],1467031594),new b(d[47],851169720),new b(d[48],3100823752),new b(d[49],1363258195),new b(d[50],3750685593),new b(d[51],3785050280),new b(d[52],3318307427),new b(d[53],3812723403),new b(d[54],2003034995),new b(d[55],3602036899),new b(d[56],1575990012),new b(d[57],1125592928),new b(d[58],2716904306),new b(d[59],442776044),new b(d[60],593698344),new b(d[61],
3733110249),new b(d[62],2999351573),new b(d[63],3815920427),new b(3391569614,3928383900),new b(3515267271,566280711),new b(3940187606,3454069534),new b(4118630271,4000239992),new b(116418474,1914138554),new b(174292421,2731055270),new b(289380356,3203993006),new b(460393269,320620315),new b(685471733,587496836),new b(852142971,1086792851),new b(1017036298,365543100),new b(1126000580,2618297676),new b(1288033470,3409855158),new b(1501505948,4234509866),new b(1607167915,987167468),new b(1816402316,
1246189591)];X=[new b(0,1),new b(0,32898),new b(2147483648,32906),new b(2147483648,2147516416),new b(0,32907),new b(0,2147483649),new b(2147483648,2147516545),new b(2147483648,32777),new b(0,138),new b(0,136),new b(0,2147516425),new b(0,2147483658),new b(0,2147516555),new b(2147483648,139),new b(2147483648,32905),new b(2147483648,32771),new b(2147483648,32770),new b(2147483648,128),new b(0,32778),new b(2147483648,2147483658),new b(2147483648,2147516545),new b(2147483648,32896),new b(0,2147483649),
new b(2147483648,2147516424)];W=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]]; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return C}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(this);


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return new Worker(__webpack_require__.p + "v1.0.0.a1-tab-worker.js");
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.20
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.20',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            ], [NAME, VERSION], [

            /(konqueror)\/([\w\.]+)/i                                           // Konqueror
            ], [[NAME, 'Konqueror'], VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i                          // Microsoft Edge
            ], [[NAME, 'Edge'], VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /(focus)\/([\w\.]+)/i                                               // Firefox Focus
            ], [[NAME, 'Firefox Focus'], VERSION], [

            /(opt)\/([\w\.]+)/i                                                 // Opera Touch
            ], [[NAME, 'Opera Touch'], VERSION], [

            /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(windowswechat qbcore)\/([\w\.]+)/i                                // WeChat Desktop for Windows Built-in Browser
            ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(brave)\/([\w\.]+)/i                                              // Brave browser
            ], [[NAME, 'Brave'], VERSION], [

            /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
            ], [NAME, VERSION], [

            /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
            ], [NAME, VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /(BIDUBrowser)[\/\s]?([\w\.]+)/i                                    // Baidu Browser
            ], [NAME, VERSION], [

            /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
            ], [NAME, VERSION], [

            /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
            ], [NAME], [

            /(LBBROWSER)/i                                      // LieBao Browser
            ], [NAME], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
            ], [NAME, VERSION], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /((?:oculus|samsung)browser)\/([\w\.]+)/i
            ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(sailfishbrowser)\/([\w\.]+)/i                                     // Sailfish Browser
            ], [[NAME, 'Sailfish Browser'], VERSION], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
            ], [[NAME, 'GSA'], VERSION], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
            /android.+aft([bms])\sbuild/i                                       // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,                        // HTC
            /(zte)-(\w*)/i,                                                     // ZTE
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                                // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /d\/huawei([\w\s-]+)[;\)]/i,
            /(nexus\s6p)/i                                                      // Huawei
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]*)/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w*)/i,
            /android.+lg(\-?[\d\w]+)\s+build/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i             // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [
            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
            /(lenovo)[_\s-]?([\w-]+)/i
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel( [23])?( xl)?)[\s)]/i                              // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    
                                                                                // Xiaomi Mi
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i       // Redmi Phones
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i            // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
            /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
            /(mz)-([\w-]{2,})/i
            ], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i,                                        // OnePlus
            /android.+oneplus\s(a\d{4})\s+build/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

            /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

            /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
            ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

            /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

            /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

            /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
            /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

            /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

            /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

            /android.+;\s(PH-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

            /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

            /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

            /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

            /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL], [

            /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
            ], [[TYPE, SMARTTV]], [

            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)/i                                  // Blink
            ], [[NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,     
                                                                                // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i                                                // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION],[

            /cfnetwork\/.+darwin/i,
            /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    var UAParser = function (uastring, extensions) {

        if (typeof uastring === 'object') {
            extensions = uastring;
            uastring = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = { name: undefined, version: undefined };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            var cpu = { architecture: undefined };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            var device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            var engine = { name: undefined, version: undefined };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            var os = { name: undefined, version: undefined };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window && (window.jQuery || window.Zepto);
    if (typeof $ !== UNDEF_TYPE && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ })
/******/ ]);