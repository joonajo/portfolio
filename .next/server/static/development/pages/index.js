module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content/Content.module.css":
/*!***********************************************!*\
  !*** ./components/Content/Content.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Content": "Content___1Enco"
};

/***/ }),

/***/ "./components/Content/Content.tsx":
/*!****************************************!*\
  !*** ./components/Content/Content.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _portfolio_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../portfolio/portfolio */ "./portfolio/portfolio.ts");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Item/Item */ "./components/Item/Item.tsx");

var _jsxFileName = "/home/joojo/code/portfolio/components/Content/Content.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const css = __webpack_require__(/*! ./Content.module.css */ "./components/Content/Content.module.css");

const Content = () => {
  return __jsx("div", {
    className: css.Content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, _portfolio_portfolio__WEBPACK_IMPORTED_MODULE_2__["portfolioItems"].map(item => {
    return __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Cover/Cover.css":
/*!************************************!*\
  !*** ./components/Cover/Cover.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Main": "Main___3c-CL",
	"MediaIcons": "MediaIcons___1mSCZ",
	"Parallax": "Parallax___t0GrZ",
	"TitleContainer": "TitleContainer___1bxur",
	"FirstName": "FirstName___8PGm4",
	"Surname": "Surname___3Gmvy",
	"Description": "Description___HbED0"
};

/***/ }),

/***/ "./components/Cover/Cover.tsx":
/*!************************************!*\
  !*** ./components/Cover/Cover.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Icons/MediaIcons/MediaIcons */ "./components/Layout/Icons/MediaIcons/MediaIcons.tsx");
var _jsxFileName = "/home/joojo/code/portfolio/components/Cover/Cover.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const css = __webpack_require__(/*! ./Cover.css */ "./components/Cover/Cover.css");

const Cover = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(() => {
  return __jsx("div", {
    className: css.Main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: css.Parallax,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: css.MediaIcons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_Layout_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: css.TitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("span", {
    className: css.FirstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Joona"), __jsx("span", {
    className: css.Surname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Joenpolvi"), __jsx("span", {
    className: css.Description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Front-End Developer")));
});
/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ }),

/***/ "./components/Item/Item.module.css":
/*!*****************************************!*\
  !*** ./components/Item/Item.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Item": "Item___2HggL",
	"show": "show___12H2j",
	"open": "open___32yCn",
	"Title": "Title___19rVv",
	"ImageContainer": "ImageContainer___17WA_",
	"ImageMask": "ImageMask___1aSDB",
	"MaskLinks": "MaskLinks___1129d",
	"MaskLink": "MaskLink___3V_OW",
	"MaskLinkText": "MaskLinkText___EPhQZ",
	"MaskLinkIcon": "MaskLinkIcon___23L6-",
	"MaskTitle": "MaskTitle___vjZsk",
	"ExpandInfo": "ExpandInfo___R82gv",
	"ExpandButton": "ExpandButton____PDbK",
	"ExpandLanguages": "ExpandLanguages___1isXq",
	"ExpandLanguage": "ExpandLanguage___Cvi_b",
	"ExpandText": "ExpandText___3kCJw",
	"InfoContainer": "InfoContainer___2jgE-",
	"InfoTop": "InfoTop___3f-2q",
	"InfoBottom": "InfoBottom___IbU0k",
	"Language": "Language___qBw-5",
	"Description": "Description___3QyIB",
	"Links": "Links___1lTZs",
	"TopBorder": "TopBorder___1M0PG",
	"BottomBorder": "BottomBorder___Sp_1u",
	"LeftBorder": "LeftBorder___2cQZ1",
	"RightBorder": "RightBorder___3CBvG",
	"TopBorderActive": "TopBorderActive___2QLkW",
	"BottomBorderActive": "BottomBorderActive___1MlSe",
	"LeftBorderActive": "LeftBorderActive___1nPsS",
	"RightBorderActive": "RightBorderActive___1Z0Ak",
	"pop": "pop___2J0KC"
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/joojo/code/portfolio/components/Item/Item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const css = __webpack_require__(/*! ./Item.module.css */ "./components/Item/Item.module.css");

const SHOW_TRESHOLD = 1100;
function Item(props) {
  const [showItem, toggleShowItem] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [showInfo, toggleShowInfo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const itemRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const infoRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null); // update the event listeners every time the showItem state is changed

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.addEventListener('scroll', checkIfInViewport, true);
    return () => window.removeEventListener('scroll', checkIfInViewport, true);
  }, [showItem]);

  const checkIfInViewport = () => {
    const bottom = itemRef.current.getBoundingClientRect().bottom;

    if (bottom < SHOW_TRESHOLD) {
      toggleShowItem(true);
    } else {
      toggleShowItem(false);
    }
  };

  const expand = () => {
    toggleShowInfo(!showInfo);
  };

  let itemClasses = [css.Item, showInfo ? css.open : null, showItem ? css.show : null].join(' ');
  return __jsx("div", {
    className: itemClasses,
    ref: itemRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(ItemTitle, {
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(ItemImage, {
    gif_src: props.gif_src,
    title: props.title,
    link: props.link,
    githubLink: props.githubLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
}

function ItemTitle(props) {
  return __jsx("p", {
    className: css.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, props.title));
}

function ItemImage(props) {
  return __jsx("div", {
    className: css.ImageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("img", {
    className: css.Image,
    src: props.gif_src,
    alt: "portfolio-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("div", {
    className: css.ImageMask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h1", {
    className: css.MaskTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, props.title), __jsx("div", {
    className: css.MaskLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(MaskLink, {
    address: props.link,
    text: "Open",
    icon: "fas fa-external-link-square-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(MaskLink, {
    address: props.githubLink,
    text: "Github",
    icon: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))));
}

const MaskLink = props => {
  return __jsx("a", {
    href: props.address,
    className: css.MaskLink,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("div", {
    className: css.MaskLinkText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, props.text)), __jsx("div", {
    className: css.MaskLinkIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("i", {
    className: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./components/Layout/Footer/Footer.css":
/*!*********************************************!*\
  !*** ./components/Layout/Footer/Footer.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Footer": "Footer___2Ne5u",
	"fadein": "fadein___2rBOx",
	"MediaIcons": "MediaIcons___1HxbE",
	"Copyright": "Copyright___2iaGI"
};

/***/ }),

/***/ "./components/Layout/Footer/Footer.tsx":
/*!*********************************************!*\
  !*** ./components/Layout/Footer/Footer.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/MediaIcons/MediaIcons */ "./components/Layout/Icons/MediaIcons/MediaIcons.tsx");
var _jsxFileName = "/home/joojo/code/portfolio/components/Layout/Footer/Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const css = __webpack_require__(/*! ./Footer.css */ "./components/Layout/Footer/Footer.css");

const Footer = () => {
  return __jsx("div", {
    className: css.Footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: css.MediaIcons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_Icons_MediaIcons_MediaIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    horizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("div", {
    className: css.Copyright,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-cloud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\xA9 Joona Joenpolvi 2019. All rights reserved.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/Icons/MediaIcons/MediaIcons.css":
/*!***********************************************************!*\
  !*** ./components/Layout/Icons/MediaIcons/MediaIcons.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Icons": "Icons___1S2Lv",
	"horizontal": "horizontal___2eWCk",
	"vertical": "vertical___2_ZAB",
	"Icon": "Icon___2XN9E",
	"Github": "Github___2-JPM"
};

/***/ }),

/***/ "./components/Layout/Icons/MediaIcons/MediaIcons.tsx":
/*!***********************************************************!*\
  !*** ./components/Layout/Icons/MediaIcons/MediaIcons.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/joojo/code/portfolio/components/Layout/Icons/MediaIcons/MediaIcons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const css = __webpack_require__(/*! ./MediaIcons.css */ "./components/Layout/Icons/MediaIcons/MediaIcons.css");

const MediaIcons = ({
  horizontal,
  vertical
}) => {
  const containerClasses = [css.Icons, horizontal ? css.horizontal : vertical ? css.vertical : null].join(' ');
  const iconClasses = [css.Icon, horizontal ? css.horizontal : vertical ? css.vertical : null].join(' ');
  return __jsx("div", {
    className: containerClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://github.com/joonajo",
    className: iconClasses,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx("a", {
    href: "mailto: joona.joenpolvi@gmail.com",
    className: iconClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://instagram.com/joonajo",
    className: iconClasses,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.strava.com/athletes/6604883",
    className: iconClasses,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStrava"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.flickr.com/photos/150620060@N07/",
    className: iconClasses,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFlickr"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaIcons);

/***/ }),

/***/ "./components/Layout/Layout.css":
/*!**************************************!*\
  !*** ./components/Layout/Layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Layout": "Layout___3HjLA"
};

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ "./components/Layout/Footer/Footer.tsx");
var _jsxFileName = "/home/joojo/code/portfolio/components/Layout/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const css = __webpack_require__(/*! ./Layout.css */ "./components/Layout/Layout.css");

const Layout = ({
  children,
  title
}) => {
  return __jsx("div", {
    className: css.Layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Ubuntu&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://use.fontawesome.com/releases/v5.10.2/css/svg-with-js.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), children, __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Cover/Cover */ "./components/Cover/Cover.tsx");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Content/Content */ "./components/Content/Content.tsx");
var _jsxFileName = "/home/joojo/code/portfolio/pages/index/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = () => {
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_components_Cover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_components_Content_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./portfolio/portfolio.ts":
/*!********************************!*\
  !*** ./portfolio/portfolio.ts ***!
  \********************************/
/*! exports provided: Languages, items, portfolioItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioItems", function() { return portfolioItems; });
let Languages;

(function (Languages) {
  Languages["React"] = "React";
  Languages["TypeScript"] = "TypeScript";
  Languages["JavaScript"] = "JavaScript";
  Languages["Cpp"] = "C++";
})(Languages || (Languages = {}));

const items = {
  NasaHub: {
    title: 'Nasa Hub',
    language: [Languages.React, Languages.TypeScript],
    link: 'https://nnasahub.web.app',
    githubLink: 'https://github.com/joonajo/Nasa-Hub',
    description: 'Built with React + TypeScript + Redux. Utilizes open NASA APIs. Check out the Astronomy Picture of the Day (APOD), latest Mars rover images as well as Earth from the space with the EPIC API.',
    gif_src: 'https://thumbs.gfycat.com/ShamefulPopularFieldmouse.webp',
    desktop: true,
    mobile: true
  },
  WeatherApp: {
    title: 'Weather App',
    language: [Languages.React, Languages.TypeScript],
    link: 'https://weatherr.web.app',
    githubLink: 'https://github.com/joonajo/Weather-app',
    description: 'Built with React + TypeScript + Redux. Utilizes three different APIs (OpenWeatherMap, TimezoneDB & Geonames) to seamlessly check the weather all over the world, with timezones adjusted accordingly.',
    gif_src: 'https://thumbs.gfycat.com/FantasticDismalAsianporcupine.webp',
    desktop: true,
    mobile: true
  },
  BurgerBuilder: {
    title: 'Burger Builder',
    language: [Languages.React, Languages.JavaScript],
    link: 'https://react-burgerapp-d2ef8.web.app',
    githubLink: 'https://github.com/joonajo/Burger-Builder',
    description: 'Built with ReactJS + Redux. Utilizes Firebase account authorization and realtime database. Build your own burger and order it!',
    gif_src: 'https://thumbs.gfycat.com/AchingAlienatedAsp.webp',
    desktop: true,
    mobile: true
  },
  TodoList: {
    title: 'To-Do List',
    language: [Languages.React, Languages.TypeScript],
    link: 'https://todo-reactts.web.app',
    githubLink: 'https://github.com/joonajo/Todo-ReactTS',
    description: 'Built with React + TypeScript. Utilizes Firebase Cloud database (Firestore) and account authorization. Make a todo-list, check/remove items, and keep it saved in the database!',
    gif_src: 'https://thumbs.gfycat.com/CreamyTheseBeagle.webp',
    desktop: true,
    mobile: true
  },
  CannonGame: {
    title: 'Cannon Game',
    language: [Languages.Cpp],
    link: 'https://www.youtube.com/watch?v=6rbhqyCm97E',
    githubLink: 'https://github.com/joonajo/CannonGame',
    description: 'Built purely with C++ and the SFML graphics library. A simple Cannon Game against a basic AI.',
    gif_src: 'https://media.giphy.com/media/ftB8xRdaDJHzk2v6Ur/giphy.gif',
    desktop: true,
    mobile: false
  } // makes it easy to switch up the order if needed

};
const portfolioItems = [items.NasaHub, items.WeatherApp, items.TodoList, items.BurgerBuilder, items.CannonGame];

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/index/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joojo/code/portfolio/pages/index/index.tsx */"./pages/index/index.tsx");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map