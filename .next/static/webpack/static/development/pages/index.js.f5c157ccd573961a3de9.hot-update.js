webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/Home/Home.tsx":
/*!**********************************!*\
  !*** ./containers/Home/Home.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Cover_Cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Cover/Cover */ "./components/Cover/Cover.tsx");
/* harmony import */ var _components_UI_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Layout/Layout */ "./components/UI/Layout/Layout.tsx");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Content/Content */ "./components/Content/Content.tsx");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var css = __webpack_require__(/*! ./Home.module.css */ "./containers/Home/Home.module.css");

var Home = function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      bgLoaded = _React$useState2[0],
      setBgLoaded = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // check if bg image is already cached
    // if yes, set as loaded
    var image = new Image();
    image.src = '/images/palm.png';
    if (image.complete) setBgLoaded(true);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !bgLoaded && __jsx(Loading, null), __jsx(_components_UI_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_components_Cover_Cover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    load: function load() {
      return setBgLoaded(true);
    }
  }), bgLoaded && __jsx(_components_Content_Content__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

var Loading = function Loading() {
  return __jsx("div", {
    className: css.Loading
  }, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__["CubeSpinner"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Home/Home */ "./containers/Home/Home.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var css = __webpack_require__(/*! ./index.module.css */ "./pages/index/index.module.css");

var Index = function Index() {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
        console.log('service worker registration successful');
      })["catch"](function (err) {
        console.warn('service worker registration failed', err.message);
      });
    }
  }, []);
  return __jsx(_containers_Home_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f5c157ccd573961a3de9.hot-update.js.map