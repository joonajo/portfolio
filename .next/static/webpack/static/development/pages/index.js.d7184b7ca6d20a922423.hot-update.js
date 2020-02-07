webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Cover/Cover */ "./components/Cover/Cover.tsx");
/* harmony import */ var _components_UI_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Layout/Layout */ "./components/UI/Layout/Layout.tsx");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Content/Content */ "./components/Content/Content.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var css = __webpack_require__(/*! ./index.module.css */ "./pages/index/index.module.css");

var Home = function Home() {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
        console.log('service worker registration successful');
      })["catch"](function (err) {
        console.warn('service worker registration failed', err.message);
      });
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_UI_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_Cover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_Content_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d7184b7ca6d20a922423.hot-update.js.map