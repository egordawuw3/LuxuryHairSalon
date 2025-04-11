/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../assets/js/src/theme/index.js":
/*!*********************************************************!*\
  !*** ../../../assets/js/src/theme/index.js + 3 modules ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ../utils/src/index.js + 86 modules\nvar src = __webpack_require__(\"../utils/src/index.js\");\n;// CONCATENATED MODULE: ../../../assets/js/src/theme/core/turnstile-widget-event-handlers.js\n/**\n * @function callback\n * @description Event handler that runs when a turnstile widget gets a token. Removes any previous token.\n */\nvar callback = function callback() {\n  var previousResponse = document.querySelector('.ginput_container_turnstile>input[name=\"cf-turnstile-response\"]');\n  if (previousResponse) {\n    previousResponse.remove();\n  }\n};\n\n/**\n * @function beforeInteractiveCallback\n * @description Removes the turnstile widget if there is already a token so the user doesn't have to interact again.\n */\nvar beforeInteractiveCallback = function beforeInteractiveCallback() {\n  var previousResponse = document.querySelector('.ginput_container_turnstile>input[name=\"cf-turnstile-response\"]');\n  if (previousResponse) {\n    document.querySelector('.cf-turnstile').remove();\n  }\n};\n/* harmony default export */ var turnstile_widget_event_handlers = (function () {\n  window.gf_turnstile_callback = callback;\n  window.gf_turnstile_before_interactive_callback = beforeInteractiveCallback;\n});\n;// CONCATENATED MODULE: ../../../assets/js/src/theme/core/ready.js\n/**\n * @module\n * @exports ready\n * @description The core dispatcher for the dom ready event in javascript.\n *\n */\n\n\n\n\n/**\n * @function init\n * @description The core dispatcher for init across the codebase.\n *\n */\nvar init = function init() {\n  // initialize modules.\n  turnstile_widget_event_handlers();\n  console.info('Gravity Forms Turnstile Theme: Initialized all javascript that targeted document ready.');\n};\n\n/**\n * @function domReady\n * @description Export our dom ready enabled init.\n *\n */\nvar domReady = function domReady() {\n  (0,src.ready)(init);\n};\n/* harmony default export */ var ready = (domReady);\n;// CONCATENATED MODULE: external \"gform_theme_config\"\nvar external_gform_theme_config_namespaceObject = gform_theme_config;\nvar external_gform_theme_config_default = /*#__PURE__*/__webpack_require__.n(external_gform_theme_config_namespaceObject);\n;// CONCATENATED MODULE: ../../../assets/js/src/theme/index.js\n\n\n__webpack_require__.p = (external_gform_theme_config_default()).public_path; // eslint-disable-line\n\nready();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vYXNzZXRzL2pzL3NyYy90aGVtZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFDN0IsSUFBTUMsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLGlFQUFrRSxDQUFDO0VBQ3BILElBQUtGLGdCQUFnQixFQUFHO0lBQ3ZCQSxnQkFBZ0IsQ0FBQ0csTUFBTSxDQUFDLENBQUM7RUFDMUI7QUFDRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBQSxFQUFTO0VBQzlDLElBQU1KLGdCQUFnQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBRSxpRUFBa0UsQ0FBQztFQUNwSCxJQUFLRixnQkFBZ0IsRUFBRztJQUN2QkMsUUFBUSxDQUFDQyxhQUFhLENBQUUsZUFBZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUNuRDtBQUNELENBQUM7QUFFRCxvRUFBZSxZQUFNO0VBQ3BCRSxNQUFNLENBQUNDLHFCQUFxQixHQUFHUCxRQUFRO0VBQ3ZDTSxNQUFNLENBQUNFLHdDQUF3QyxHQUFHSCx5QkFBeUI7QUFDNUUsQ0FBQyxFOztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDO0FBQ2hCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNsQjtFQUNBRCwrQkFBcUIsQ0FBQyxDQUFDO0VBQ3ZCRSxPQUFPLENBQUNDLElBQUksQ0FDWCx5RkFDRCxDQUFDO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztFQUN0QkwsYUFBSyxDQUFFRSxJQUFLLENBQUM7QUFDZCxDQUFDO0FBRUQsMENBQWVHLFFBQVEsRTs7QUNoQ3ZCLElBQUksMkNBQTRCLHNCOzs7QUNBcEI7QUFDaUM7QUFFN0NFLHFCQUF1QixHQUFHRCxtREFBdUIsQ0FBQyxDQUFDOztBQUVuRE4sS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZm9ybS10dXJuc3RpbGUvLi4vLi4vLi4vYXNzZXRzL2pzL3NyYy90aGVtZS9jb3JlL3R1cm5zdGlsZS13aWRnZXQtZXZlbnQtaGFuZGxlcnMuanM/NWRkOSIsIndlYnBhY2s6Ly9nZm9ybS10dXJuc3RpbGUvLi4vLi4vLi4vYXNzZXRzL2pzL3NyYy90aGVtZS9jb3JlL3JlYWR5LmpzPzQxNDgiLCJ3ZWJwYWNrOi8vZ2Zvcm0tdHVybnN0aWxlL2V4dGVybmFsIHZhciBcImdmb3JtX3RoZW1lX2NvbmZpZ1wiPzczZGUiLCJ3ZWJwYWNrOi8vZ2Zvcm0tdHVybnN0aWxlLy4uLy4uLy4uL2Fzc2V0cy9qcy9zcmMvdGhlbWUvaW5kZXguanM/ZDFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmdW5jdGlvbiBjYWxsYmFja1xuICogQGRlc2NyaXB0aW9uIEV2ZW50IGhhbmRsZXIgdGhhdCBydW5zIHdoZW4gYSB0dXJuc3RpbGUgd2lkZ2V0IGdldHMgYSB0b2tlbi4gUmVtb3ZlcyBhbnkgcHJldmlvdXMgdG9rZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0Y29uc3QgcHJldmlvdXNSZXNwb25zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuZ2lucHV0X2NvbnRhaW5lcl90dXJuc3RpbGU+aW5wdXRbbmFtZT1cImNmLXR1cm5zdGlsZS1yZXNwb25zZVwiXScgKTtcblx0aWYgKCBwcmV2aW91c1Jlc3BvbnNlICkge1xuXHRcdHByZXZpb3VzUmVzcG9uc2UucmVtb3ZlKCk7XG5cdH1cbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uIGJlZm9yZUludGVyYWN0aXZlQ2FsbGJhY2tcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIHRoZSB0dXJuc3RpbGUgd2lkZ2V0IGlmIHRoZXJlIGlzIGFscmVhZHkgYSB0b2tlbiBzbyB0aGUgdXNlciBkb2Vzbid0IGhhdmUgdG8gaW50ZXJhY3QgYWdhaW4uXG4gKi9cbmV4cG9ydCBjb25zdCBiZWZvcmVJbnRlcmFjdGl2ZUNhbGxiYWNrID0gKCkgPT4ge1xuXHRjb25zdCBwcmV2aW91c1Jlc3BvbnNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5naW5wdXRfY29udGFpbmVyX3R1cm5zdGlsZT5pbnB1dFtuYW1lPVwiY2YtdHVybnN0aWxlLXJlc3BvbnNlXCJdJyApO1xuXHRpZiAoIHByZXZpb3VzUmVzcG9uc2UgKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jZi10dXJuc3RpbGUnICkucmVtb3ZlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0d2luZG93LmdmX3R1cm5zdGlsZV9jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR3aW5kb3cuZ2ZfdHVybnN0aWxlX2JlZm9yZV9pbnRlcmFjdGl2ZV9jYWxsYmFjayA9IGJlZm9yZUludGVyYWN0aXZlQ2FsbGJhY2s7XG59O1xuIiwiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZXhwb3J0cyByZWFkeVxuICogQGRlc2NyaXB0aW9uIFRoZSBjb3JlIGRpc3BhdGNoZXIgZm9yIHRoZSBkb20gcmVhZHkgZXZlbnQgaW4gamF2YXNjcmlwdC5cbiAqXG4gKi9cblxuaW1wb3J0IHsgcmVhZHkgfSBmcm9tICdAZ3Jhdml0eWZvcm1zL3V0aWxzJztcbmltcG9ydCBpbml0VHVybnN0aWxlSGFuZGxlcnMgZnJvbSAnLi90dXJuc3RpbGUtd2lkZ2V0LWV2ZW50LWhhbmRsZXJzJztcblxuLyoqXG4gKiBAZnVuY3Rpb24gaW5pdFxuICogQGRlc2NyaXB0aW9uIFRoZSBjb3JlIGRpc3BhdGNoZXIgZm9yIGluaXQgYWNyb3NzIHRoZSBjb2RlYmFzZS5cbiAqXG4gKi9cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdC8vIGluaXRpYWxpemUgbW9kdWxlcy5cblx0aW5pdFR1cm5zdGlsZUhhbmRsZXJzKCk7XG5cdGNvbnNvbGUuaW5mbyhcblx0XHQnR3Jhdml0eSBGb3JtcyBUdXJuc3RpbGUgVGhlbWU6IEluaXRpYWxpemVkIGFsbCBqYXZhc2NyaXB0IHRoYXQgdGFyZ2V0ZWQgZG9jdW1lbnQgcmVhZHkuJ1xuXHQpO1xufTtcblxuLyoqXG4gKiBAZnVuY3Rpb24gZG9tUmVhZHlcbiAqIEBkZXNjcmlwdGlvbiBFeHBvcnQgb3VyIGRvbSByZWFkeSBlbmFibGVkIGluaXQuXG4gKlxuICovXG5jb25zdCBkb21SZWFkeSA9ICgpID0+IHtcblx0cmVhZHkoIGluaXQgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVJlYWR5O1xuIiwidmFyIF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSBnZm9ybV90aGVtZV9jb25maWc7IiwiaW1wb3J0IHJlYWR5IGZyb20gJy4vY29yZS9yZWFkeSc7XG5pbXBvcnQgdGhlbWVDb25maWcgZnJvbSAnZ2Zvcm0tdGhlbWUtY29uZmlnJztcblxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB0aGVtZUNvbmZpZy5wdWJsaWNfcGF0aDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5yZWFkeSgpO1xuIl0sIm5hbWVzIjpbImNhbGxiYWNrIiwicHJldmlvdXNSZXNwb25zZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImJlZm9yZUludGVyYWN0aXZlQ2FsbGJhY2siLCJ3aW5kb3ciLCJnZl90dXJuc3RpbGVfY2FsbGJhY2siLCJnZl90dXJuc3RpbGVfYmVmb3JlX2ludGVyYWN0aXZlX2NhbGxiYWNrIiwicmVhZHkiLCJpbml0VHVybnN0aWxlSGFuZGxlcnMiLCJpbml0IiwiY29uc29sZSIsImluZm8iLCJkb21SZWFkeSIsInRoZW1lQ29uZmlnIiwiX193ZWJwYWNrX3B1YmxpY19wYXRoX18iLCJwdWJsaWNfcGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../assets/js/src/theme/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts-theme": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgform_turnstile"] = self["webpackChunkgform_turnstile"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendor-theme"], function() { return __webpack_require__("../../core-js/modules/es.array.iterator.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-theme"], function() { return __webpack_require__("../../../assets/js/src/theme/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;