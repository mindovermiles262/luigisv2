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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst about = () => {\n  const div = document.createElement('div');\n  div.classList.add('tab');\n  div.innerHTML = \"<h3 id='about'>About</h3>\";\n\n  return div;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: bodyDiv, menuContent, aboutContent, contactContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodyDiv\", function() { return bodyDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuContent\", function() { return menuContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutContent\", function() { return aboutContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactContent\", function() { return contactContent; });\nconst bodyDiv = () => {\n  const div = document.createElement('div');\n  div.classList.add('body');\n\n  return div;\n}\n\nconst menuContent = () => {\n  let menuHTML = \"<p>Menu built from scratch</p>\";\n  return menuHTML;\n}\n\nconst aboutContent = () => {\n  const aboutHTML = \"<p>Created using Javascript Only</p>\"\n  return aboutHTML;\n}\n\nconst contactContent = () => {\n  const contactHTML = \"<p>Find me at <a href='https://andyduss.com'>andyduss.com</a></p>\";\n  return contactHTML;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/body.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactTab = () => {\n  const div = document.createElement('div');\n  div.classList.add('tab');\n  div.innerHTML = \"<h3 id='contact'>Contact</h3>\";\n\n  return div;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactTab);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst footer = () => {\n  const div = document.createElement('div');\n  div.classList.add('footer');\n  div.innerHTML = '<h3>This is the footer</h3>';\n\n  return div;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst header = () => {\n  const div = document.createElement('div');\n  div.classList.add('header')\n  div.innerHTML = \"<h1>Luigi's Restaurant</h1>\";\n  return div\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\nconst content = document.querySelector(\".content\");\nconst sections = [Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), Object(_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), Object(_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), Object(_body__WEBPACK_IMPORTED_MODULE_1__[\"bodyDiv\"])(), Object(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()];\n\nsections.forEach( (DomElement) => {\n  content.appendChild(DomElement);\n})\n\nconst body = document.querySelector('.body');\nbody.innerHTML = Object(_body__WEBPACK_IMPORTED_MODULE_1__[\"menuContent\"])();\n\nconst tabs = document.querySelectorAll('.tab');\ntabs.forEach((tab) => {\n tab.addEventListener('click', (event) => {\n\n   let bodyFunctions = {\n     menu: Object(_body__WEBPACK_IMPORTED_MODULE_1__[\"menuContent\"])(),\n     about: Object(_body__WEBPACK_IMPORTED_MODULE_1__[\"aboutContent\"])(),\n     contact: Object(_body__WEBPACK_IMPORTED_MODULE_1__[\"contactContent\"])()\n   }\n\n   body.innerHTML = \"\";\n   let bodyContent = bodyFunctions[event.target.id]\n   body.innerHTML = bodyContent;\n })\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menuTab = () => {\n  const div = document.createElement('div');\n  div.classList.add('tab');\n  div.innerHTML = \"<h3 id='menu'>Menu</h3>\";\n\n  return div;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuTab);\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });