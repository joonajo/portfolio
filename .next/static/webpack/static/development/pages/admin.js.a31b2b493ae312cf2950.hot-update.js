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
  }, items ? items.map(function (item) {
    return __jsx("div", null, "item");
  }) : __jsx("p", null, "no items"));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ })

})
//# sourceMappingURL=admin.js.a31b2b493ae312cf2950.hot-update.js.map