exports.ids = [0];
exports.modules = {

/***/ "./components/ExpandedVideo/ExpandedVideo.module.css":
/*!***********************************************************!*\
  !*** ./components/ExpandedVideo/ExpandedVideo.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Main": "Main___3w2yc",
	"mount": "mount___2v3RS",
	"fadein": "fadein___1ZLib",
	"unmount": "unmount___3mvc-",
	"Backdrop": "Backdrop___3B7tu",
	"VideoContainer": "VideoContainer___2gnni",
	"Video": "Video___QoA7X",
	"CloseButton": "CloseButton____MALA"
};

/***/ }),

/***/ "./components/ExpandedVideo/ExpandedVideo.tsx":
/*!****************************************************!*\
  !*** ./components/ExpandedVideo/ExpandedVideo.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const css = __webpack_require__(/*! ./ExpandedVideo.module.css */ "./components/ExpandedVideo/ExpandedVideo.module.css");

const ExpandedVideo = ({
  video_src,
  close
}) => {
  const [unmount, setUnmount] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.addEventListener('keydown', keyHandler, true);
    return () => window.removeEventListener('keydown', keyHandler, true);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow; // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Re-enable scrolling when component unmounts

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  const keyHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(event => {
    console.log(event.key);

    switch (event.key) {
      case 'Escape':
        setUnmount(true);
        setTimeout(() => {
          close();
        }, 5000);
        break;

      default:
        break;
    }
  }, []);
  const closeHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    setUnmount(true);
    setTimeout(() => {
      close();
    }, 300);
  }, [close]);
  const classes = [css.Main, unmount ? css.unmount : css.mount].join(' ');
  return __jsx("div", {
    className: classes
  }, __jsx("div", {
    className: css.Backdrop,
    onClick: closeHandler
  }), __jsx("div", {
    className: css.VideoContainer
  }, __jsx("video", {
    className: css.Video,
    controls: true
  }, __jsx("source", {
    src: video_src,
    type: "video/mp4"
  }))), __jsx("div", {
    className: css.CloseButton,
    onClick: closeHandler
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faTimes
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ExpandedVideo);

/***/ }),

/***/ "./components/Item/Item.module.css":
/*!*****************************************!*\
  !*** ./components/Item/Item.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Item": "Item___2z7E8",
	"show": "show___6kfVr",
	"Title": "Title___3ZaYJ",
	"ItemContent": "ItemContent___3R0xe",
	"InfoContainer": "InfoContainer___2K1Jf",
	"MadeWith": "MadeWith___2_0_d",
	"Language": "Language___3j4M0",
	"Description": "Description___3jL8P",
	"IconsAndLinks": "IconsAndLinks___3W2-o",
	"HardwareIcons": "HardwareIcons___1Zo3h",
	"HardwareIconContainer": "HardwareIconContainer___2Svmz",
	"HardwareIcon": "HardwareIcon___7oC72",
	"DesktopIcon": "DesktopIcon___1I-OD",
	"MobileIcon": "MobileIcon___2Qx5_",
	"CheckMarkIcon": "CheckMarkIcon___11WPT",
	"TimesIcon": "TimesIcon___gPzyh",
	"ItemLinks": "ItemLinks___316VE",
	"ItemLinkContainer": "ItemLinkContainer___3gKyx",
	"ItemLink": "ItemLink___zvdwb",
	"ItemLinkIcon": "ItemLinkIcon___2pksG",
	"ImageContainer": "ImageContainer___3ZHP8",
	"ImageMask": "ImageMask___ZcxR5",
	"MaskLinks": "MaskLinks___3b_RG",
	"MaskLink": "MaskLink___2Z_QC",
	"MaskLinkText": "MaskLinkText___V2BhR",
	"MaskLinkIcon": "MaskLinkIcon___1xuTX",
	"ExpandVideo": "ExpandVideo___2-0ff"
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
/* harmony import */ var _ExpandedVideo_ExpandedVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExpandedVideo/ExpandedVideo */ "./components/ExpandedVideo/ExpandedVideo.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const css = __webpack_require__(/*! ./Item.module.css */ "./components/Item/Item.module.css");

const SHOW_TRESHOLD = 100; // pixels

const Item = props => {
  const [showItem, toggleShowItem] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [showVideo, toggleShowVideo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const itemRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null); // update the event listeners every time the showItem state is changed

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.addEventListener('scroll', checkIfInViewport, true);
    return () => window.removeEventListener('scroll', checkIfInViewport, true);
  }, [showItem]);

  const checkIfInViewport = () => {
    if (itemRef && itemRef.current) {
      const itemPos = itemRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const newShowItem = itemPos < windowHeight - SHOW_TRESHOLD;
      if (newShowItem !== showItem) toggleShowItem(newShowItem);
    }
  };

  const itemClasses = [css.Item, showItem && css.show].join(' ');
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
    githubLink: props.githubLink,
    toggle: toggleShowVideo
  }), __jsx(ItemInfo, {
    languages: props.language,
    title: props.title,
    desc: props.description,
    desktop: props.desktop,
    mobile: props.mobile,
    link: props.link,
    githubLink: props.githubLink
  })), showVideo && __jsx(_ExpandedVideo_ExpandedVideo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    video_src: props.video_src,
    close: () => toggleShowVideo(false)
  }));
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
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faGithub
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
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faExternalLinkSquareAlt
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
  className: [css.HardwareIcon, css.DesktopIcon].join(' ')
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faDesktop
})), desktop ? __jsx(CheckMarkIcon, null) : __jsx(TimesIcon, null)), __jsx("div", {
  className: css.HardwareIconContainer
}, __jsx("div", {
  className: [css.HardwareIcon, css.MobileIcon].join(' ')
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faMobileAlt
})), mobile ? __jsx(CheckMarkIcon, null) : __jsx(TimesIcon, null)));

const CheckMarkIcon = () => __jsx("div", {
  className: [css.HardwareIcon, css.CheckMarkIcon].join(' ')
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faCheck,
  color: "green"
}));

const TimesIcon = () => __jsx("div", {
  className: [css.HardwareIcon, css.TimesIcon].join(' ')
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faTimes,
  color: "crimson"
}));

const ItemImage = props => {
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
    toggle: props.toggle
  }))));
};

const ExpandVideo = ({
  toggle
}) => {
  const classes = [css.ExpandVideo].join(' ');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classes,
    onClick: () => toggle(true)
  }, __jsx("p", null, "Expand Video"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["icons"].faExpand,
    color: "white"
  })));
};

const MaskLink = ({
  address,
  text
}) => {
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

};;
//# sourceMappingURL=0.js.map