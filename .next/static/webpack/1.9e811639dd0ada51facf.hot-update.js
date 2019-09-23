webpackHotUpdate(1,{

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

var SHOW_TRESHOLD = 300; // pixels

var Item = function Item(props) {
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
    var itemPos = itemRef.current.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (itemPos + SHOW_TRESHOLD < windowHeight) {
      toggleShowItem(true);
    } else if (showItem) {
      toggleShowItem(false);
    }
  };

  var itemClasses = [css.Item, showItem ? css.show : null].join(' ');
  return __jsx("div", {
    className: itemClasses,
    ref: itemRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("p", {
    className: css.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.title)), __jsx("div", {
    className: css.ItemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(ItemImage, {
    video_src: props.video_src,
    link: props.link,
    githubLink: props.githubLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(ItemInfo, {
    languages: props.language,
    title: props.title,
    desc: props.description,
    desktop: props.desktop,
    mobile: props.mobile,
    link: props.link,
    githubLink: props.githubLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })));
};

var ItemInfo = function ItemInfo(props) {
  return __jsx("div", {
    className: css.InfoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: css.MadeWith,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "made with", props.languages.map(function (lang, index) {
    return __jsx("p", {
      key: lang,
      className: css.Language,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, lang, index !== props.languages.length - 1 ? __jsx("span", {
      style: {
        color: 'dimgray'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, " + ") : '');
  })), __jsx("p", {
    className: css.Description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, props.desc), __jsx("div", {
    className: css.IconsAndLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: css.ItemLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a", {
    className: css.ItemLinkContainer,
    href: props.githubLink,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    className: css.ItemLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Github"), __jsx("div", {
    className: css.ItemLinkIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faGithub,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx("a", {
    className: css.ItemLinkContainer,
    href: props.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("p", {
    className: css.ItemLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Open"), __jsx("div", {
    className: css.ItemLinkIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faExternalLinkSquareAlt,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })))), __jsx(HardwareIcons, {
    desktop: props.desktop,
    mobile: props.mobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })));
};

var HardwareIcons = function HardwareIcons(_ref) {
  var desktop = _ref.desktop,
      mobile = _ref.mobile;
  return __jsx("div", {
    className: css.HardwareIcons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: css.HardwareIconContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    className: css.HardwareIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: css.DesktopIcon,
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faDesktop,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), __jsx("div", {
    className: css.HardwareIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, desktop ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faCheck,
    size: "lg",
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faTimes,
    size: "lg",
    color: "crimson",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))), __jsx("div", {
    className: css.HardwareIconContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: css.HardwareIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: css.DesktopIcon,
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faMobileAlt,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx("div", {
    className: css.HardwareIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, mobile ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faCheck,
    size: "lg",
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faTimes,
    size: "lg",
    color: "crimson",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))));
};

var ItemImage = function ItemImage(props) {
  return __jsx("div", {
    className: css.ImageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("img", {
    className: css.Image,
    src: props.video_src,
    alt: "portfolio-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx("div", {
    className: css.ImageMask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: css.MaskLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(MaskLink, {
    address: props.link,
    text: "Open",
    icon: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx(MaskLink, {
    address: props.githubLink,
    text: "Github",
    icon: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }))));
};

var MaskLink = function MaskLink(_ref2) {
  var address = _ref2.address,
      text = _ref2.text,
      icon = _ref2.icon;
  return __jsx("a", {
    href: address,
    className: css.MaskLink,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("div", {
    className: css.MaskLinkText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, text)), __jsx("div", {
    className: css.MaskLinkIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, icon === 'github' ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faGithub,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faExternalLinkSquareAlt,
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=1.9e811639dd0ada51facf.hot-update.js.map