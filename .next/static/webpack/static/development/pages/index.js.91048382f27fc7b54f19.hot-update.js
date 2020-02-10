webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Content/Content.tsx":
/*!****************************************!*\
  !*** ./components/Content/Content.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/portfolioContext */ "./context/portfolioContext.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Item = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../Item/Item */ "./components/Item/Item.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Item/Item */ "./components/Item/Item.tsx")];
    },
    modules: ['../Item/Item']
  }
});

var css = __webpack_require__(/*! ./Content.module.css */ "./components/Content/Content.module.css");

var Content = function Content() {
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_portfolioContext__WEBPACK_IMPORTED_MODULE_3__["PortfolioContext"]);
  var portfolioState = portfolioContext.state;
  return __jsx("div", {
    className: css.Content
  }, __jsx("h2", {
    className: css.Title
  }, "Portfolio"), portfolioState.items.map(function (item) {
    return __jsx(Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.title
    }, item));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./portfolio/portfolio.ts":
false

})
//# sourceMappingURL=index.js.91048382f27fc7b54f19.hot-update.js.map