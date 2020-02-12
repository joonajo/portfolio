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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var css = __webpack_require__(/*! ./Cover.module.css */ "./components/Cover/Cover.module.css");

var Cover = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (_ref) {
  var show = _ref.show,
      load = _ref.load;
  var coverRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(undefined),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      height = _React$useState2[0],
      setHeight = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setHeight(window.innerHeight);
  }, []);
  var scrollToPortfolio = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    if (coverRef && coverRef.current) {
      var posToScrollTo = coverRef.current.clientHeight;
      zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.toY(posToScrollTo);
    }
  }, [coverRef]);
  var descStyles = [css.Description, show && css.loaded].join(' ');
  var animTextStyles = [css.AnimText, show && css.loaded].join(' ');
  return __jsx("div", {
    className: css.Main,
    ref: coverRef,
    style: {
      height: "".concat(height, "px")
    }
  }, __jsx("div", {
    className: css.BackgroundContainer
  }, __jsx("img", {
    src: "/images/palm.png",
    alt: "cover-bg-palm",
    className: css.BackgroundImage,
    onLoad: load
  }), __jsx("div", {
    className: css.BackgroundMask
  })), __jsx("div", {
    className: css.CoverContent
  }, __jsx("div", {
    className: css.MediaIcons
  }, __jsx(_UI_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    vertical: true
  })), __jsx("div", {
    className: css.TitleContainer
  }, __jsx("div", {
    className: animTextStyles,
    style: {
      transitionDelay: '.3s'
    }
  }, __jsx(AnimatedText, {
    text: "Joona",
    show: show
  })), __jsx("div", {
    className: animTextStyles,
    style: {
      transitionDelay: '.6s'
    }
  }, __jsx(AnimatedText, {
    text: "Joenpolvi",
    show: show,
    delay: .5
  })), __jsx("h3", {
    className: descStyles
  }, " ", __jsx("span", null, "<Front End Developer />"), " ")), __jsx("div", {
    className: css.ArrowContainer
  }, __jsx("div", {
    className: css.ArrowIcon,
    onClick: scrollToPortfolio
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_5__["icons"].faChevronDown,
    size: "lg"
  })), __jsx("p", {
    className: css.ArrowText
  }, "to portfolio"))));
});

var AnimatedText = function AnimatedText(_ref2) {
  var text = _ref2.text,
      show = _ref2.show,
      delay = _ref2.delay;
  var containerStyles = [css.AnimatedText].join(' ');
  var trueDelay = delay ? delay : 0;
  return __jsx("div", {
    className: containerStyles,
    style: {
      transitionDelay: "".concat(trueDelay / 2 + .3, "s")
    }
  }, text, __jsx("span", {
    style: {
      animationDelay: "".concat(trueDelay, "s")
    }
  }, text), __jsx("span", {
    style: {
      animationDelay: "".concat(trueDelay, "s")
    }
  }, text), __jsx("span", {
    style: {
      animationDelay: "".concat(trueDelay, "s")
    }
  }, text), __jsx("span", {
    style: {
      animationDelay: "".concat(trueDelay, "s")
    }
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=index.js.bb4d366e35a46178a2ce.hot-update.js.map