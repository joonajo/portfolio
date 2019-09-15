webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UI/Toolbar/Toolbar.tsx":
/*!*******************************************!*\
  !*** ./components/UI/Toolbar/Toolbar.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_toolbarContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/toolbarContext */ "./context/toolbarContext.tsx");
var _jsxFileName = "/home/joojo/code/portfolio/components/UI/Toolbar/Toolbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var css = __webpack_require__(/*! ./Toolbar.module.css */ "./components/UI/Toolbar/Toolbar.module.css");

var Toolbar = function Toolbar() {
  var toolbarContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_toolbarContext__WEBPACK_IMPORTED_MODULE_1__["ToolbarContext"]);
  var show = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(toolbarContext.show);
  console.log(toolbarContext.show);
  var classes = [css.Toolbar, show && css.enabled].join(' ');
  return __jsx("div", {
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ })

})
//# sourceMappingURL=index.js.6fa61aac69de84f874a3.hot-update.js.map