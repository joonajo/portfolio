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
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/portfolioContext */ "./context/portfolioContext.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var css = __webpack_require__(/*! ./Home.module.css */ "./containers/Home/Home.module.css");

var Home = function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      bgLoaded = _React$useState2[0],
      setBgLoaded = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      ready = _React$useState6[0],
      setReady = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (bgLoaded && !loading) setReady(true);
  }, [bgLoaded, loading]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // check if bg image is already cached
    // if yes, set as loaded
    var image = new Image();
    image.src = '/images/palm.png';
    if (image.complete) setBgLoaded(true);
  }, []);
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["PortfolioContext"]);
  var portfolioState = portfolioContext.state;
  var portfolioDispatch = portfolioContext.dispatch; // React.useEffect(() => {
  //     if (portfolioState && portfolioDispatch) {
  //         if (portfolioState.items.length === 0) {
  //             const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items.json'
  //             const newItems: IPortfolioItem[] = []
  //             fetch(baseURL, { method: 'get' }).then(response => response.json())
  //                 .then(data => {
  //                     if (data) {
  //                         Object.keys(data).forEach(item => {
  //                             newItems.push(data[item])
  //                         })
  //                         portfolioDispatch({ type: TPortfolioActionTypes.SET_ITEMS, payload: newItems })
  //                     }
  //                     setLoading(false)
  //                 })
  //         }
  //     }
  // }, [portfolioState])

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    portfolioDispatch({
      type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["TPortfolioActionTypes"].FETCH_ITEMS
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    console.log('hmm', portfolioState.items);
    if (portfolioState.items.length !== 0) setLoading(false);
  }, [portfolioState.items]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Loading, {
    show: !ready
  }), __jsx(_components_UI_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_components_Cover_Cover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: ready,
    load: function load() {
      return setBgLoaded(true);
    }
  }), bgLoaded && !loading && __jsx(_components_Content_Content__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

var Loading = function Loading(_ref) {
  var show = _ref.show;
  var styles = [css.Loading, !show && css.out].join(' ');
  return __jsx("div", {
    className: styles
  }, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_5__["CubeSpinner"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.022beed40ff60d8a2eb4.hot-update.js.map