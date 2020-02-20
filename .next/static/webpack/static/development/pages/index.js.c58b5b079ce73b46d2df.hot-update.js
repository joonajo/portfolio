webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UI/Loading/Loading.tsx":
/*!*******************************************!*\
  !*** ./components/UI/Loading/Loading.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.module.css */ "./components/UI/Loading/Loading.module.css");
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loading_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var Loading = function Loading(_ref) {
  var show = _ref.show,
      transparent = _ref.transparent,
      fadeout = _ref.fadeout,
      slideout = _ref.slideout,
      fullscreen = _ref.fullscreen;
  var styles = [_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Loading, transparent && _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.transparent, fullscreen && _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fullscreen, !show && fadeout && _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fadeout, !show && slideout && _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.slideout].join(' ');
  return __jsx("div", {
    className: styles
  }, __jsx(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_1__["CubeSpinner"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ })

})
//# sourceMappingURL=index.js.c58b5b079ce73b46d2df.hot-update.js.map