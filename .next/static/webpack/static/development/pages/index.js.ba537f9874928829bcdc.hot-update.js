webpackHotUpdate("static/development/pages/index.js",{

/***/ "./context/toolbarContext.tsx":
/*!************************************!*\
  !*** ./context/toolbarContext.tsx ***!
  \************************************/
/*! exports provided: initalToolbarState, ToolbarContext, ToolbarProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalToolbarState", function() { return initalToolbarState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarContext", function() { return ToolbarContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarProvider", function() { return ToolbarProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/joojo/code/portfolio/context/toolbarContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var initalToolbarState = {
  show: false
};
var ToolbarContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(initalToolbarState);
var ToolbarProvider = function ToolbarProvider(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  return __jsx(ToolbarContext.Provider, {
    value: {
      show: show,
      setShow: setShow
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children);
};

/***/ })

})
//# sourceMappingURL=index.js.ba537f9874928829bcdc.hot-update.js.map