webpackHotUpdate(1,{

/***/ "./components/ExpandedVideo/ExpandedVideo.tsx":
/*!****************************************************!*\
  !*** ./components/ExpandedVideo/ExpandedVideo.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var css = __webpack_require__(/*! ./ExpandedVideo.module.css */ "./components/ExpandedVideo/ExpandedVideo.module.css");

var ExpandedVideo = function ExpandedVideo(_ref) {
  var video_src = _ref.video_src,
      close = _ref.close;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      unmount = _React$useState2[0],
      setUnmount = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    window.addEventListener('keydown', keyHandler, true);
    return function () {
      return window.removeEventListener('keydown', keyHandler, true);
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useLayoutEffect(function () {
    // Get original body overflow
    var originalStyle = window.getComputedStyle(document.body).overflow; // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Re-enable scrolling when component unmounts

    return function () {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  var keyHandler = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (event) {
    console.log(event.key);

    switch (event.key) {
      case 'Escape':
        setUnmount(true);
        setTimeout(function () {
          close();
        }, 5000);
        break;

      default:
        break;
    }
  }, []);
  var closeHandler = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    setUnmount(true);
    setTimeout(function () {
      close();
    }, 300);
  }, [close]);
  var classes = [css.Main, unmount ? css.unmount : css.mount].join(' ');
  return __jsx("div", {
    className: classes
  }, __jsx("div", {
    className: css.Backdrop,
    onClick: closeHandler
  }), __jsx("div", {
    className: css.VideoContainer
  }, __jsx("video", {
    className: css.Video,
    controls: true,
    muted: true,
    autoPlay: true
  }, __jsx("source", {
    src: video_src,
    type: "video/mp4"
  }))), __jsx("div", {
    className: css.CloseButton,
    onClick: closeHandler
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_3__["icons"].faTimes
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ExpandedVideo);

/***/ })

})
//# sourceMappingURL=1.9d6484e3796c0864f8bc.hot-update.js.map