exports.ids = [7];
exports.modules = {

/***/ "HA4/":
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
	"PreviewContainer": "PreviewContainer___2378D",
	"PreviewMask": "PreviewMask___BxlQ3",
	"MaskLinks": "MaskLinks___3b_RG",
	"MaskLink": "MaskLink___2Z_QC",
	"MaskLinkText": "MaskLinkText___V2BhR",
	"MaskLinkIcon": "MaskLinkIcon___1xuTX",
	"ExpandVideo": "ExpandVideo___2-0ff"
};

/***/ }),

/***/ "TKBz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./icons/icons.tsx
var icons = __webpack_require__("rCmD");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./components/ExpandedVideo/ExpandedVideo.tsx
var __jsx = external_react_default.a.createElement;




const css = __webpack_require__("nM6+");

const ExpandedVideo = ({
  video_src,
  close
}) => {
  const [unmount, setUnmount] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    window.addEventListener('keydown', keyHandler, true);
    return () => window.removeEventListener('keydown', keyHandler, true);
  }, []);
  external_react_default.a.useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow; // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Re-enable scrolling when component unmounts

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  const keyHandler = external_react_default.a.useCallback(event => {
    console.log(event.key);

    switch (event.key) {
      case 'Escape':
        closeHandler();
        break;

      default:
        break;
    }
  }, []);
  const closeHandler = external_react_default.a.useCallback(() => {
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
    src: video_src,
    controls: true,
    muted: true,
    autoPlay: true,
    playsInline: true
  })), __jsx("div", {
    className: css.CloseButton,
    onClick: closeHandler
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: icons["a" /* icons */].faTimes
  })));
};

/* harmony default export */ var ExpandedVideo_ExpandedVideo = (ExpandedVideo);
// CONCATENATED MODULE: ./components/Item/Item.tsx
var Item_jsx = external_react_default.a.createElement;





const Item_css = __webpack_require__("HA4/");

const SHOW_TRESHOLD = 100; // pixels

const Item = props => {
  const [showItem, toggleShowItem] = external_react_default.a.useState(false);
  const [showVideo, toggleShowVideo] = external_react_default.a.useState(false);
  const itemRef = external_react_default.a.useRef(null); // update the event listeners every time the showItem state is changed

  external_react_default.a.useEffect(() => {
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

  const itemClasses = [Item_css.Item, showItem && Item_css.show].join(' ');
  return Item_jsx("div", {
    className: itemClasses,
    ref: itemRef
  }, Item_jsx("p", {
    className: Item_css.Title
  }, Item_jsx("span", null, props.title)), Item_jsx("div", {
    className: Item_css.ItemContent
  }, Item_jsx(ItemPreview, {
    video_src: props.video_src,
    preview_src: props.preview_src,
    gif_src: props.gif_src,
    link: props.link,
    githubLink: props.githubLink,
    toggle: toggleShowVideo
  }), Item_jsx(ItemInfo, {
    languages: props.language,
    title: props.title,
    desc: props.description,
    desktop: props.desktop,
    mobile: props.mobile,
    link: props.link,
    githubLink: props.githubLink
  })), showVideo && Item_jsx(ExpandedVideo_ExpandedVideo, {
    video_src: props.video_src,
    close: () => toggleShowVideo(false)
  }));
};

const ItemInfo = props => {
  return Item_jsx("div", {
    className: Item_css.InfoContainer
  }, Item_jsx("div", {
    className: Item_css.MadeWith
  }, "made with", props.languages.map((lang, index) => Item_jsx("p", {
    key: lang,
    className: Item_css.Language
  }, lang, index !== props.languages.length - 1 ? Item_jsx("span", {
    style: {
      color: 'dimgray'
    }
  }, " + ") : ''))), Item_jsx("p", {
    className: Item_css.Description
  }, props.desc), Item_jsx("div", {
    className: Item_css.IconsAndLinks
  }, Item_jsx("div", {
    className: Item_css.ItemLinks
  }, Item_jsx("a", {
    className: Item_css.ItemLinkContainer,
    href: props.githubLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, Item_jsx("p", {
    className: Item_css.ItemLink
  }, "Github"), Item_jsx("div", {
    className: Item_css.ItemLinkIcon
  }, Item_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: icons["a" /* icons */].faGithub
  }))), Item_jsx("a", {
    className: Item_css.ItemLinkContainer,
    href: props.link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, Item_jsx("p", {
    className: Item_css.ItemLink
  }, "Open"), Item_jsx("div", {
    className: Item_css.ItemLinkIcon
  }, Item_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: icons["a" /* icons */].faExternalLinkSquareAlt
  })))), Item_jsx(HardwareIcons, {
    desktop: props.desktop,
    mobile: props.mobile
  })));
};

const HardwareIcons = ({
  desktop,
  mobile
}) => Item_jsx("div", {
  className: Item_css.HardwareIcons
}, Item_jsx("div", {
  className: Item_css.HardwareIconContainer
}, Item_jsx("div", {
  className: [Item_css.HardwareIcon, Item_css.DesktopIcon].join(' ')
}, Item_jsx(react_fontawesome_["FontAwesomeIcon"], {
  icon: icons["a" /* icons */].faDesktop
})), desktop ? Item_jsx(CheckMarkIcon, null) : Item_jsx(TimesIcon, null)), Item_jsx("div", {
  className: Item_css.HardwareIconContainer
}, Item_jsx("div", {
  className: [Item_css.HardwareIcon, Item_css.MobileIcon].join(' ')
}, Item_jsx(react_fontawesome_["FontAwesomeIcon"], {
  icon: icons["a" /* icons */].faMobileAlt
})), mobile ? Item_jsx(CheckMarkIcon, null) : Item_jsx(TimesIcon, null)));

const CheckMarkIcon = () => Item_jsx("div", {
  className: [Item_css.HardwareIcon, Item_css.CheckMarkIcon].join(' ')
}, Item_jsx(react_fontawesome_["FontAwesomeIcon"], {
  icon: icons["a" /* icons */].faCheck,
  color: "green"
}));

const TimesIcon = () => Item_jsx("div", {
  className: [Item_css.HardwareIcon, Item_css.TimesIcon].join(' ')
}, Item_jsx(react_fontawesome_["FontAwesomeIcon"], {
  icon: icons["a" /* icons */].faTimes,
  color: "crimson"
}));

const ItemPreview = props => {
  return Item_jsx("div", {
    className: Item_css.PreviewContainer
  }, Item_jsx("video", {
    className: Item_css.PreviewVideo,
    poster: props.gif_src,
    muted: true,
    autoPlay: true,
    playsInline: true,
    loop: true
  }, Item_jsx("source", {
    src: props.preview_src,
    type: "video/mp4"
  })), Item_jsx("div", {
    className: Item_css.PreviewMask
  }, Item_jsx("div", {
    className: Item_css.MaskLinks
  }, Item_jsx(ExpandVideo, {
    toggle: props.toggle
  }))));
};

const ExpandVideo = ({
  toggle
}) => {
  const classes = [Item_css.ExpandVideo].join(' ');
  return Item_jsx(external_react_default.a.Fragment, null, Item_jsx("div", {
    className: classes,
    onClick: () => toggle(true)
  }, Item_jsx("p", null, "Expand Video"), Item_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: icons["a" /* icons */].faExpand,
    color: "white"
  })));
};

const MaskLink = ({
  address,
  text
}) => {
  return Item_jsx("a", {
    href: address,
    className: Item_css.MaskLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, Item_jsx("div", {
    className: Item_css.MaskLinkText
  }, Item_jsx("span", null, text)));
};

/* harmony default export */ var Item_Item = __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "nM6+":
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

/***/ })

};;