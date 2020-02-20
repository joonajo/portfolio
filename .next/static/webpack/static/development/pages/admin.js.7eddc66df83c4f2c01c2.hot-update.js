webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/AddNewItem/AddItem.tsx":
/*!*************************************************!*\
  !*** ./components/Admin/AddNewItem/AddItem.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/form */ "./form/form.ts");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _ItemForm_ItemForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ItemForm/ItemForm */ "./components/Admin/ItemForm/ItemForm.tsx");
/* harmony import */ var _UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Loading/Loading */ "./components/UI/Loading/Loading.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







var css = __webpack_require__(/*! ./AddItem.module.css */ "./components/Admin/AddNewItem/AddItem.module.css");

var AddPortfolioItem = function AddPortfolioItem(_ref) {
  var showForm = _ref.showForm,
      setShowForm = _ref.setShowForm,
      add = _ref.add,
      sending = _ref.sending;

  var clickHandler = function clickHandler() {
    toggleForm(true);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: css.AddItemContainer
  }, __jsx("span", {
    className: css.AddItemButton,
    onClick: clickHandler
  }, "add item ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_3__["icons"].faPlus,
    className: css.AddItemIcon
  })), __jsx(_ItemForm_ItemForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _form_form__WEBPACK_IMPORTED_MODULE_2__["formTypes"].ADD,
    show: showForm,
    close: function close() {
      return setShowForm(false);
    },
    add: add,
    sending: sending
  })), __jsx(_UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: sending,
    transparent: true,
    fadeout: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AddPortfolioItem);

/***/ })

})
//# sourceMappingURL=admin.js.7eddc66df83c4f2c01c2.hot-update.js.map