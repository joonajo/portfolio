webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/EditItem/EditItem.tsx":
/*!************************************************!*\
  !*** ./components/Admin/EditItem/EditItem.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemForm_ItemForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ItemForm/ItemForm */ "./components/Admin/ItemForm/ItemForm.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var css = __webpack_require__(/*! ./EditItem.module.css */ "./components/Admin/EditItem/EditItem.module.css");

var EditItem = function EditItem(_ref) {
  var show = _ref.show,
      item = _ref.item,
      close = _ref.close;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      sending = _React$useState2[0],
      setSending = _React$useState2[1];

  var editItem = function editItem(item) {};

  var containerStyles = [css.EditItemContainer, show && css.show].join(' ');
  return __jsx("div", {
    className: containerStyles
  }, __jsx(_ItemForm_ItemForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "edit",
    show: show,
    sending: sending,
    item: item,
    close: close,
    add: editItem
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditItem);

/***/ })

})
//# sourceMappingURL=admin.js.51982391569429404bdc.hot-update.js.map