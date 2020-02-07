webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./containers/Admin/Admin.tsx":
/*!************************************!*\
  !*** ./containers/Admin/Admin.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var css = __webpack_require__(/*! ./Admin.module.css */ "./containers/Admin/Admin.module.css");

var Admin = function Admin() {
  return __jsx("div", {
    className: css.AdminWrapper
  }, __jsx(PortfolioItems, null));
};

var PortfolioItems = function PortfolioItems(_ref) {
  var items = _ref.items;
  return __jsx("div", {
    className: css.ItemsContainer
  }, items && items.map(function (item) {
    return __jsx("div", null, "item");
  }), __jsx(AddPortfolioItem, null));
};

var AddPortfolioItem = function AddPortfolioItem() {
  return __jsx("div", {
    className: css.AddItemContainer
  }, __jsx("span", null, "add item ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].faPlus
  }), " "));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ })

})
//# sourceMappingURL=admin.js.4ea2fc8631a3e428eb44.hot-update.js.map