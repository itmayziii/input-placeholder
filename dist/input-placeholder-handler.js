var InputPlaceholderHandler =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(1);
var InputPlaceholderHandler = /** @class */ (function () {
    function InputPlaceholderHandler() {
        this.labelPlaceholderClass = 'label-placeholder';
    }
    InputPlaceholderHandler.prototype.initialize = function () {
        var inputs = this.findLabelPlaceholderInputs();
        this.listenToFocus(inputs, this.respondToFocus);
        this.listenToBlur(inputs, this.respondToBlur);
    };
    InputPlaceholderHandler.prototype.listenToFocus = function (labels, onFocus) {
        labels.focus(onFocus.bind(this));
    };
    InputPlaceholderHandler.prototype.listenToBlur = function (labels, onBlur) {
        labels.blur(onBlur.bind(this));
    };
    InputPlaceholderHandler.prototype.findLabelPlaceholderInputs = function () {
        return $("." + this.labelPlaceholderClass);
    };
    InputPlaceholderHandler.prototype.respondToFocus = function (event) {
        var inputId = this.getIdFromEventTarget(event);
        if (!inputId) {
            return;
        }
        var labelElement = this.findLabelById(inputId);
        if (!labelElement) {
            return;
        }
        labelElement.hide();
    };
    InputPlaceholderHandler.prototype.respondToBlur = function (event) {
        var inputValue = event.currentTarget.value;
        var inputId = event.currentTarget.getAttribute('id');
        var labelElement = this.findLabelById(inputId);
        if (!labelElement || inputValue !== '') {
            return;
        }
        labelElement.show();
    };
    InputPlaceholderHandler.prototype.findLabelById = function (id) {
        var labelElement = $("[for=" + id + "]");
        if (labelElement.length !== 1) {
            console.error("InputPlaceholderHandler: No corresponding label for input with ID - " + id);
            return;
        }
        return labelElement;
    };
    InputPlaceholderHandler.prototype.getIdFromEventTarget = function (event) {
        var id = event.currentTarget.getAttribute('id');
        if (!id) {
            console.error("InputPlaceholderHandler: Input with class - " + this.labelPlaceholderClass);
            return;
        }
        return id;
    };
    return InputPlaceholderHandler;
}());
exports.InputPlaceholderHandler = InputPlaceholderHandler;
$(document).ready(function () {
    new InputPlaceholderHandler().initialize();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })
/******/ ]);