webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Cover/Cover.tsx":
/*!************************************!*\
  !*** ./components/Cover/Cover.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Icons/MediaIcons/MediaIcons */ "./components/UI/Icons/MediaIcons/MediaIcons.tsx");
/* harmony import */ var _context_toolbarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/toolbarContext */ "./context/toolbarContext.tsx");
var _jsxFileName = "/home/joojo/code/portfolio/components/Cover/Cover.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var css = __webpack_require__(/*! ./Cover.css */ "./components/Cover/Cover.css");

var Cover = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function () {
  var toolbarContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_toolbarContext__WEBPACK_IMPORTED_MODULE_2__["ToolbarContext"]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    window.addEventListener('scroll', scrollHandler, true);
    return function () {
      return window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  var scrollHandler = function scrollHandler() {
    console.log('scrollolol');
  };

  return __jsx("div", {
    className: css.Main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: css.Parallax,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: css.MediaIcons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: css.TitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("span", {
    className: css.FirstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Joona"), __jsx("span", {
    className: css.Surname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Joenpolvi"), __jsx("span", {
    className: css.Description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Front-End Developer")));
});
/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=index.js.2cc8fe7486bf93f665da.hot-update.js.map