webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Cover/Cover.tsx":
/*!************************************!*\
  !*** ./components/Cover/Cover.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Icons/MediaIcons/MediaIcons */ "./components/UI/Icons/MediaIcons/MediaIcons.tsx");
/* harmony import */ var _context_toolbarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/toolbarContext */ "./context/toolbarContext.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");

var _jsxFileName = "/home/joojo/code/portfolio/components/Cover/Cover.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var css = __webpack_require__(/*! ./Cover.css */ "./components/Cover/Cover.css");

var Cover = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
  var toolbarContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_toolbarContext__WEBPACK_IMPORTED_MODULE_3__["ToolbarContext"]);
  var coverRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(undefined),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      height = _React$useState2[0],
      setHeight = _React$useState2[1];

  console.log(height);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setHeight(window.innerHeight);
    window.addEventListener('scroll', scrollHandler, true);
    return function () {
      return window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  var scrollHandler = function scrollHandler() {};

  var scrollToPortfolio = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    if (coverRef && coverRef.current) {
      var posToScrollTo = coverRef.current.clientHeight;
      window.scrollTo({
        top: posToScrollTo,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [coverRef]);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(undefined),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      arrowIn = _React$useState4[0],
      setArrowIn = _React$useState4[1];

  var arrowTextClasses = [css.ArrowText, arrowIn ? css["in"] : arrowIn === false ? css.out : null].join(' ');

  var transitionHandler = function transitionHandler() {
    if (arrowIn === false) {
      setArrowIn(undefined);
    }
  };

  var hoverHandler = function hoverHandler() {
    setArrowIn(true); // if (arrowIn === undefined) {
    //     setArrowIn(true)
    // }
  };

  var mouseOutHandler = function mouseOutHandler() {
    setArrowIn(false); // if (arrowIn) {
    //     setArrowIn(false)
    // }
  };

  return __jsx("div", {
    className: css.Main,
    ref: coverRef,
    style: {
      height: "".concat(height, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: css.BackgroundContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/palm.jpg",
    className: css.BackgroundImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("div", {
    className: css.BackgroundMask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx("div", {
    className: css.MediaIcons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("div", {
    className: css.TitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("span", {
    className: css.FirstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Joona"), __jsx("span", {
    className: css.Surname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Joenpolvi"), __jsx("span", {
    className: css.Description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Front-End Developer")), __jsx("div", {
    className: css.ArrowContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: css.ArrowIcon,
    onClick: scrollToPortfolio,
    onMouseOver: hoverHandler,
    onMouseOut: mouseOutHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_5__["icons"].faChevronDown,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("p", {
    className: arrowTextClasses,
    onTransitionEnd: transitionHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "to portfolio")));
});
/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=index.js.e0f76dec98d00fea5825.hot-update.js.map