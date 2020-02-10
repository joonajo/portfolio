webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/PortfolioManagement/Portfolio.tsx":
/*!************************************************************!*\
  !*** ./components/Admin/PortfolioManagement/Portfolio.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _AddNewItem_AddNewItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AddNewItem/AddNewItem */ "./components/Admin/AddNewItem/AddNewItem.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];


var css = __webpack_require__(/*! ./Portfolio.module.css */ "./components/Admin/PortfolioManagement/Portfolio.module.css");







var PortfolioItems = function PortfolioItems(_ref) {
  var items = _ref.items;
  return __jsx("div", {
    className: css.ItemsContainer
  }, items && items.map(function (item) {
    return __jsx(PortfolioItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: item.title
    }, item));
  }), __jsx(_AddNewItem_AddNewItem__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

var PortfolioItem = function PortfolioItem(props) {
  var authContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]);
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_7__["PortfolioContext"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      confirmDelete = _React$useState2[0],
      setConfirmDelete = _React$useState2[1];

  var deleteHandler = function deleteHandler() {
    setConfirmDelete(true);
  };

  var deleteItem = function deleteItem() {
    if (authContext.state.signedIn) {
      var baseURL = "https://joonajo-portfolio.firebaseio.com/items/";
      var itemParam = "".concat(props.title, ".json");
      var tokenParam = "?auth=".concat(authContext.state.idToken);
      fetch(baseURL + itemParam + tokenParam, {
        method: 'delete'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('succesfully deleted', props.title);
      });
      portfolioContext.dispatch({
        type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_7__["TPortfolioActionTypes"].DELETE_ITEM,
        payload: props.title
      });
    }

    setConfirmDelete(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
    className: css.ItemContainer
  }, __jsx("div", {
    className: css.ItemMainContent
  }, __jsx("p", null, props.title)), __jsx("div", {
    className: css.ItemHoverContent
  }, __jsx("span", null, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_4__["icons"].faEdit
  }), " ", __jsx("p", null, "edit"), " "), __jsx("span", {
    onClick: deleteHandler
  }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_4__["icons"].faTrash
  }), " ", __jsx("p", null, "delete"), " "))), confirmDelete && __jsx(ConfirmDelete, {
    confirm: deleteItem,
    cancel: function cancel() {
      return setConfirmDelete(false);
    }
  }));
};

var ConfirmDelete = function ConfirmDelete(_ref2) {
  var confirm = _ref2.confirm,
      cancel = _ref2.cancel;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
    className: css.ConfirmDeleteContainer
  }, __jsx("span", null, " ", __jsx("p", {
    className: css.ConfirmDeleteText
  }, "Confirm Delete"), " "), __jsx("div", {
    className: css.ConfirmDeleteButtons
  }, __jsx("p", {
    onClick: confirm
  }, "Delete"), __jsx("p", {
    onClick: cancel
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItems);

/***/ })

})
//# sourceMappingURL=admin.js.d6d2ab757c51abb1a203.hot-update.js.map