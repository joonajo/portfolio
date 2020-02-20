webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/PortfolioManagement/Item/Item.tsx":
/*!************************************************************!*\
  !*** ./components/Admin/PortfolioManagement/Item/Item.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _EditItem_EditItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../EditItem/EditItem */ "./components/Admin/EditItem/EditItem.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];





var css = __webpack_require__(/*! ./Item.module.css */ "./components/Admin/PortfolioManagement/Item/Item.module.css");

var PortfolioItem = function PortfolioItem(_ref) {
  var item = _ref.item,
      deleteItem = _ref.deleteItem;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      editItem = _React$useState2[0],
      setEditItem = _React$useState2[1];

  var editItemHandler = function editItemHandler() {
    setEditItem(!editItem);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: css.ItemContainer
  }, __jsx("div", {
    className: css.ItemMainContent
  }, __jsx("p", null, item.title)), __jsx("div", {
    className: css.ItemHoverContent
  }, __jsx("div", {
    className: css.Button,
    onClick: editItemHandler
  }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_3__["icons"].faEdit
  }), " ", __jsx("p", null, "edit"), " "), __jsx(DeleteButton, {
    deleteItem: function (_deleteItem) {
      function deleteItem() {
        return _deleteItem.apply(this, arguments);
      }

      deleteItem.toString = function () {
        return _deleteItem.toString();
      };

      return deleteItem;
    }(function () {
      return deleteItem(item.title);
    })
  }))), __jsx(_EditItem_EditItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: editItem,
    item: item,
    close: editItemHandler
  }));
};

var DeleteButton = function DeleteButton(_ref2) {
  var deleteItem = _ref2.deleteItem;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      showConfirm = _React$useState4[0],
      setShowConfirm = _React$useState4[1];

  var confirmHandler = function confirmHandler() {
    deleteItem();
    setShowConfirm(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: css.Button,
    onClick: function onClick() {
      return setShowConfirm(true);
    }
  }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_3__["icons"].faTrash
  }), " ", __jsx("p", null, "delete"), "  "), showConfirm && __jsx("div", null, __jsx("p", {
    onClick: confirmHandler
  }, "yes"), __jsx("p", {
    onClick: function onClick() {
      return setShowConfirm(false);
    }
  }, "no")));
};

var ConfirmDelete = function ConfirmDelete(_ref3) {
  var confirm = _ref3.confirm,
      cancel = _ref3.cancel;
  return __jsx("div", {
    className: css.ConfirmDeleteContainer
  }, __jsx("h2", {
    className: css.ConfirmDeleteText
  }, "Confirm Delete"), __jsx("div", {
    className: css.ConfirmDeleteButtons
  }, __jsx("p", {
    onClick: confirm
  }, "Delete"), __jsx("p", {
    onClick: cancel
  }, "Cancel")));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ })

})
//# sourceMappingURL=admin.js.a71e3f3ed3e67c93dd7f.hot-update.js.map