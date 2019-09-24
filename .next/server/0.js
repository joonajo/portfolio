exports.ids = [0];
exports.modules = {

/***/ "./components/Item/Item.module.css":
/*!*****************************************!*\
  !*** ./components/Item/Item.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Item": "Item___2HggL",
	"show": "show___12H2j",
	"Title": "Title___19rVv",
	"ItemContent": "ItemContent___1Xtsc",
	"InfoContainer": "InfoContainer___2jgE-",
	"MadeWith": "MadeWith___181Xb",
	"Language": "Language___qBw-5",
	"Description": "Description___3QyIB",
	"IconsAndLinks": "IconsAndLinks___3ruVO",
	"HardwareIcons": "HardwareIcons___2HOvV",
	"HardwareIconContainer": "HardwareIconContainer___130pR",
	"HardwareIcon": "HardwareIcon___21LZp",
	"ItemLinks": "ItemLinks___30O86",
	"ItemLinkContainer": "ItemLinkContainer___2PKLE",
	"ItemLink": "ItemLink___3DGlD",
	"ItemLinkIcon": "ItemLinkIcon___2LwMV",
	"ImageContainer": "ImageContainer___17WA_",
	"ImageMask": "ImageMask___1aSDB",
	"MaskLinks": "MaskLinks___1129d",
	"MaskLink": "MaskLink___3V_OW",
	"MaskLinkText": "MaskLinkText___EPhQZ",
	"MaskLinkIcon": "MaskLinkIcon___23L6-"
};

/***/ }),

/***/ "./components/Item/Item.tsx":
/*!**********************************!*\
  !*** ./components/Item/Item.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const css = __webpack_require__(/*! ./Item.module.css */ "./components/Item/Item.module.css");

const SHOW_TRESHOLD = 300; // pixels

const Item = props => {
  const [showItem, toggleShowItem] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const itemRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null); // update the event listeners every time the showItem state is changed

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.addEventListener('scroll', checkIfInViewport, true);
    return () => window.removeEventListener('scroll', checkIfInViewport, true);
  }, [showItem]);

  const checkIfInViewport = () => {
    const itemPos = itemRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemPos + SHOW_TRESHOLD < windowHeight) {
      toggleShowItem(true);
    } else if (showItem) {
      toggleShowItem(false);
    }
  };

  const itemClasses = [css.Item, showItem ? css.show : null].join(' ');
  return __jsx("div", {
    className: itemClasses,
    ref: itemRef
  }, __jsx("p", {
    className: css.Title
  }, __jsx("span", null, props.title)), __jsx("div", {
    className: css.ItemContent
  }, __jsx(ItemImage, {
    video_src: props.video_src,
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

const ItemInfo = props => {
  return __jsx("div", {
    className: css.InfoContainer
  }, __jsx("div", {
    className: css.MadeWith
  }, "made with", props.languages.map((lang, index) => __jsx("p", {
    key: lang,
    className: css.Language
  }, lang, index !== props.languages.length - 1 ? __jsx("span", {
    style: {
      color: 'dimgray'
    }
  }, " + ") : ''))), __jsx("p", {
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
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faGithub,
    size: "lg"
  }))), __jsx("a", {
    className: css.ItemLinkContainer,
    href: props.link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("p", {
    className: css.ItemLink
  }, "Open"), __jsx("div", {
    className: css.ItemLinkIcon
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faExternalLinkSquareAlt,
    size: "lg"
  })))), __jsx(HardwareIcons, {
    desktop: props.desktop,
    mobile: props.mobile
  })));
};

const HardwareIcons = ({
  desktop,
  mobile
}) => __jsx("div", {
  className: css.HardwareIcons
}, __jsx("div", {
  className: css.HardwareIconContainer
}, __jsx("div", {
  className: css.HardwareIcon
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  className: css.DesktopIcon,
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faDesktop,
  size: "lg"
})), __jsx("div", {
  className: css.HardwareIcon
}, desktop ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faCheck,
  size: "lg",
  color: "green"
}) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faTimes,
  size: "lg",
  color: "crimson"
}))), __jsx("div", {
  className: css.HardwareIconContainer
}, __jsx("div", {
  className: css.HardwareIcon
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  className: css.DesktopIcon,
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faMobileAlt,
  size: "lg"
})), __jsx("div", {
  className: css.HardwareIcon
}, mobile ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faCheck,
  size: "lg",
  color: "green"
}) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faTimes,
  size: "lg",
  color: "crimson"
}))));

const ItemImage = props => {
  return __jsx("div", {
    className: css.ImageContainer
  }, __jsx("img", {
    className: css.Image,
    src: props.video_src,
    alt: "portfolio-img"
  }), __jsx("div", {
    className: css.ImageMask
  }, __jsx("div", {
    className: css.MaskLinks
  }, __jsx(MaskLink, {
    address: props.link,
    text: "Open",
    icon: "link"
  }), __jsx(MaskLink, {
    address: props.githubLink,
    text: "Github",
    icon: "github"
  }))));
};

const MaskLink = ({
  address,
  text,
  icon
}) => {
  return __jsx("a", {
    href: address,
    className: css.MaskLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("div", {
    className: css.MaskLinkText
  }, __jsx("span", null, text)), __jsx("div", {
    className: css.MaskLinkIcon
  }, icon === 'github' ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faGithub,
    size: "lg"
  }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faExternalLinkSquareAlt,
    size: "lg"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

};;
//# sourceMappingURL=0.js.map