webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Icons/MediaIcons/MediaIcons */ "./components/UI/Icons/MediaIcons/MediaIcons.tsx");
/* harmony import */ var _context_toolbarContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/toolbarContext */ "./context/toolbarContext.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var css = __webpack_require__(/*! ./Cover.module.css */ "./components/Cover/Cover.module.css");

var Cover = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
  var toolbarContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_toolbarContext__WEBPACK_IMPORTED_MODULE_4__["ToolbarContext"]);
  var coverRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(undefined),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      height = _React$useState2[0],
      setHeight = _React$useState2[1];

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
      zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.toY(posToScrollTo);
    }
  }, [coverRef]);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      arrowIn = _React$useState4[0],
      setArrowIn = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      arrowInAnim = _React$useState6[0],
      setArrowInAnim = _React$useState6[1];

  var arrowTextClasses = [css.ArrowText, arrowInAnim ? arrowIn ? css["in"] : css.out : undefined].join(' ');

  var transitionHandler = function transitionHandler() {
    setArrowInAnim(false);
    setArrowIn(false);
  };

  var hoverHandler = function hoverHandler(mouseIn) {
    if (!arrowInAnim && mouseIn) {
      setArrowIn(mouseIn);
    } else if (arrowInAnim && !mouseIn) {
      setArrowIn(false);
    } // if (arrowIn === undefined) {
    //     setArrowIn(true)
    // }

  };

  return __jsx("div", {
    className: css.Main,
    ref: coverRef,
    style: {
      height: "".concat(height, "px")
    }
  }, __jsx("div", {
    className: css.BackgroundContainer
  }, __jsx("div", {
    className: css.BackgroundMask
  })), __jsx("div", {
    className: css.MediaIcons
  }, __jsx(_UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    vertical: true
  })), __jsx("div", {
    className: css.TitleContainer
  }, __jsx("h1", {
    className: css.FirstName
  }, "Joona"), __jsx("h1", {
    className: css.Surname
  }, "Joenpolvi"), __jsx("h3", {
    className: css.Description
  }, " ", "<Front End Developer />", " ")), __jsx("div", {
    className: css.ArrowContainer
  }, __jsx("div", {
    className: css.ArrowIcon,
    onClick: scrollToPortfolio,
    onMouseOver: function onMouseOver() {
      return hoverHandler(true);
    },
    onMouseOut: function onMouseOut() {
      return hoverHandler(false);
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_6__["icons"].faChevronDown,
    size: "lg"
  })), __jsx("p", {
    className: arrowTextClasses,
    onTransitionEnd: transitionHandler
  }, "to portfolio")));
});
/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=index.js.f1bcabc5da473a9df998.hot-update.js.map