(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
    ref: itemRef
  }, __jsx("p", {
    className: css.Title
  }, __jsx("span", null, props.title)), __jsx("div", {
    className: css.ItemContent
  }, __jsx(ItemImage, {
    video_src: props.video_src,
    gif_src: props.gif_src,
    link: props.link,
    githubLink: props.githubLink
  }), __jsx(ItemInfo, {
    languages: props.language,
    title: props.title,
    desc: props.description,
    desktop: props.desktop,
    mobile: props.mobile,
    link: props.link,
    githubLink: props.githubLink
  })));
};

var ItemInfo = function ItemInfo(props) {
  return __jsx("div", {
    className: css.InfoContainer
  }, __jsx("div", {
    className: css.MadeWith
  }, "made with", props.languages.map(function (lang, index) {
    return __jsx("p", {
      key: lang,
      className: css.Language
    }, lang, index !== props.languages.length - 1 ? __jsx("span", {
      style: {
        color: 'dimgray'
      }
    }, " + ") : '');
  })), __jsx("p", {
    className: css.Description
  }, props.desc), __jsx("div", {
    className: css.IconsAndLinks
  }, __jsx("div", {
    className: css.ItemLinks
  }, __jsx("a", {
    className: css.ItemLinkContainer,
    href: props.githubLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("p", {
    className: css.ItemLink
  }, "Github"), __jsx("div", {
    className: css.ItemLinkIcon
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faGithub
  }))), __jsx("a", {
    className: css.ItemLinkContainer,
    href: props.link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("p", {
    className: css.ItemLink
  }, "Open"), __jsx("div", {
    className: css.ItemLinkIcon
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faExternalLinkSquareAlt
  })))), __jsx(HardwareIcons, {
    desktop: props.desktop,
    mobile: props.mobile
  })));
};

var HardwareIcons = function HardwareIcons(_ref) {
  var desktop = _ref.desktop,
      mobile = _ref.mobile;
  return __jsx("div", {
    className: css.HardwareIcons
  }, __jsx("div", {
    className: css.HardwareIconContainer
  }, __jsx("div", {
    className: [css.HardwareIcon, css.DesktopIcon].join(' ')
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faDesktop
  })), desktop ? __jsx(CheckMarkIcon, null) : __jsx(TimesIcon, null)), __jsx("div", {
    className: css.HardwareIconContainer
  }, __jsx("div", {
    className: [css.HardwareIcon, css.MobileIcon].join(' ')
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faMobileAlt
  })), mobile ? __jsx(CheckMarkIcon, null) : __jsx(TimesIcon, null)));
};

var CheckMarkIcon = function CheckMarkIcon() {
  return __jsx("div", {
    className: [css.HardwareIcon, css.CheckMarkIcon].join(' ')
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faCheck,
    color: "green"
  }));
};

var TimesIcon = function TimesIcon() {
  return __jsx("div", {
    className: [css.HardwareIcon, css.TimesIcon].join(' ')
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faTimes,
    color: "crimson"
  }));
};

var ItemImage = function ItemImage(props) {
  return __jsx("div", {
    className: css.ImageContainer
  }, __jsx("img", {
    className: css.Image,
    src: props.gif_src,
    alt: "portfolio-img"
  }), __jsx("div", {
    className: css.ImageMask
  }, __jsx("div", {
    className: css.MaskLinks
  }, __jsx(ExpandVideo, {
    video_src: props.video_src
  }))));
};

var ExpandVideo = function ExpandVideo(_ref2) {
  var video_src = _ref2.video_src;
  var classes = [css.ExpandVideo].join(' ');
  return __jsx("div", {
    className: classes
  }, __jsx("p", null, "Expand Video"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faExpand,
    color: "white"
  }));
};

var MaskLink = function MaskLink(_ref3) {
  var address = _ref3.address,
      text = _ref3.text,
      icon = _ref3.icon;
  return __jsx("a", {
    href: address,
    className: css.MaskLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("div", {
    className: css.MaskLinkText
  }, __jsx("span", null, text)));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

}]);
//# sourceMappingURL=1.js.map