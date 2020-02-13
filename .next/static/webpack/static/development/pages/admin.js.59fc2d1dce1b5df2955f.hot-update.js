webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/PortfolioManagement/Portfolio.tsx":
/*!************************************************************!*\
  !*** ./components/Admin/PortfolioManagement/Portfolio.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddNewItem_AddNewItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AddNewItem/AddNewItem */ "./components/Admin/AddNewItem/AddNewItem.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item/Item */ "./components/Admin/PortfolioManagement/Item/Item.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


var css = __webpack_require__(/*! ./Portfolio.module.css */ "./components/Admin/PortfolioManagement/Portfolio.module.css");






var PortfolioItems = function PortfolioItems(_ref) {
  var items = _ref.items;
  var authContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_4__["PortfolioContext"]);

  var deleteItem = function deleteItem(itemTitle) {
    if (authContext.state.signedIn) {
      var baseURL = "https://joonajo-portfolio.firebaseio.com/items/";
      var itemParam = "".concat(itemTitle, ".json");
      var tokenParam = "?auth=".concat(authContext.state.idToken);
      fetch(baseURL + itemParam + tokenParam, {
        method: 'delete'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('succesfully deleted', itemTitle);
        portfolioContext.dispatch({
          type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_4__["TPortfolioActionTypes"].DELETE_ITEM,
          payload: itemTitle
        });
      });
    }
  };

  return __jsx("div", {
    className: css.ItemsContainer
  }, items && items.map(function (item) {
    return __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.title
    }, item, {
      deleteItem: deleteItem
    }));
  }), __jsx(_AddNewItem_AddNewItem__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItems);

/***/ })

})
//# sourceMappingURL=admin.js.59fc2d1dce1b5df2955f.hot-update.js.map