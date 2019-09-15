webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Item/Item.tsx":
/*!**********************************!*\
  !*** ./components/Item/Item.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _jsxFileName = "/home/joojo/code/portfolio/components/Item/Item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var css = __webpack_require__(/*! ./Item.module.css */ "./components/Item/Item.module.css");

var SHOW_TRESHOLD = 1600;

var Item = function Item(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showItem = _React$useState2[0],
      toggleShowItem = _React$useState2[1];

  var itemRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  var windowHeight = window.innerHeight; // update the event listeners every time the showItem state is changed

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    window.addEventListener('scroll', checkIfInViewport, true);
    return function () {
      return window.removeEventListener('scroll', checkIfInViewport, true);
    };
  }, [showItem]);

  var checkIfInViewport = function checkIfInViewport() {
    var itemPos = itemRef.current.getBoundingClientRect().top;

    if (itemPos < windowHeight) {
      toggleShowItem(true);
    } else {
      toggleShowItem(false);
    }
  };

  var itemClasses = [css.Item, showItem ? css.show : null].join(' ');
  return __jsx("div", {
    className: itemClasses,
    ref: itemRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("p", {
    className: css.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.title)), __jsx(ItemImage, {
    gif_src: props.gif_src,
    title: props.title,
    link: props.link,
    githubLink: props.githubLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
};

function ItemImage(props) {
  return __jsx("div", {
    className: css.ImageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("img", {
    className: css.Image,
    src: props.gif_src,
    alt: "portfolio-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("div", {
    className: css.ImageMask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: css.MaskLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(MaskLink, {
    address: props.link,
    text: "Open",
    icon: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(MaskLink, {
    address: props.githubLink,
    text: "Github",
    icon: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
}

var MaskLink = function MaskLink(_ref) {
  var address = _ref.address,
      text = _ref.text,
      icon = _ref.icon;
  return __jsx("a", {
    href: address,
    className: css.MaskLink,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: css.MaskLinkText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, text)), __jsx("div", {
    className: css.MaskLinkIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, icon === 'github' ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faGithub,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faExternalLinkSquareAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.0938590c59ab35dae5f6.hot-update.js.map