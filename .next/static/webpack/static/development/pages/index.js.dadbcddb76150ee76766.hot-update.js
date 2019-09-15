webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Item/Item.tsx":
/*!**********************************!*\
  !*** ./components/Item/Item.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/joojo/code/portfolio/components/Item/Item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var css = __webpack_require__(/*! ./Item.module.css */ "./components/Item/Item.module.css");

var SHOW_TRESHOLD = 1100;
function Item(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showItem = _React$useState2[0],
      toggleShowItem = _React$useState2[1];

  var itemRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null); // update the event listeners every time the showItem state is changed

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    window.addEventListener('scroll', checkIfInViewport, true);
    return function () {
      return window.removeEventListener('scroll', checkIfInViewport, true);
    };
  }, [showItem]);

  var checkIfInViewport = function checkIfInViewport() {
    var bottom = itemRef.current.getBoundingClientRect().bottom;

    if (bottom < SHOW_TRESHOLD) {
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
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    className: css.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.title)), __jsx(ItemImage, {
    gif_src: props.gif_src,
    title: props.title,
    link: props.link,
    githubLink: props.githubLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
}

function ItemImage(props) {
  return __jsx("div", {
    className: css.ImageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("img", {
    className: css.Image,
    src: props.gif_src,
    alt: "portfolio-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("div", {
    className: css.ImageMask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h1", {
    className: css.MaskTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, props.title), __jsx("div", {
    className: css.MaskLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(MaskLink, {
    address: props.link,
    text: "Open",
    icon: "fas fa-external-link-square-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(MaskLink, {
    address: props.githubLink,
    text: "Github",
    icon: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))));
}

var MaskLink = function MaskLink(props) {
  return __jsx("a", {
    href: props.address,
    className: css.MaskLink,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: css.MaskLinkText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, props.text)), __jsx("div", {
    className: css.MaskLinkIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("i", {
    className: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.dadbcddb76150ee76766.hot-update.js.map