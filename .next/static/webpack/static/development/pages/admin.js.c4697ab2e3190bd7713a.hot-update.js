webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/PortfolioManagement/Portfolio.tsx":
/*!************************************************************!*\
  !*** ./components/Admin/PortfolioManagement/Portfolio.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddNewItem_AddItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AddNewItem/AddItem */ "./components/Admin/AddNewItem/AddItem.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item/Item */ "./components/Admin/PortfolioManagement/Item/Item.tsx");
/* harmony import */ var _UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UI/Loading/Loading */ "./components/UI/Loading/Loading.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];


var css = __webpack_require__(/*! ./Portfolio.module.css */ "./components/Admin/PortfolioManagement/Portfolio.module.css");







var PortfolioItems = function PortfolioItems(_ref) {
  var items = _ref.items;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      sending = _React$useState2[0],
      setSending = _React$useState2[1];

  var authContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__["PortfolioContext"]);

  var addItemToDatabase = function addItemToDatabase(item) {
    if (authContext.state.signedIn) {
      setSending(true);
      var baseURL = 'https://joonajo-portfolio.firebaseio.com/items/';
      var title = item.title + ".json";
      var tokenParam = "?auth=".concat(authContext.state.idToken);
      fetch(baseURL + title + tokenParam, {
        method: 'put',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(item)
      }).then(function (response) {
        return response.json().then(function (data) {
          setSending(false);
        });
      });
    }
  };

  var deleteItem = function deleteItem(itemTitle) {
    if (authContext.state.signedIn) {
      setSending(true);
      var baseURL = "https://joonajo-portfolio.firebaseio.com/items/";
      var itemParam = "".concat(itemTitle, ".json");
      var tokenParam = "?auth=".concat(authContext.state.idToken);
      fetch(baseURL + itemParam + tokenParam, {
        method: 'delete'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('succesfully deleted', itemTitle);
        setSending(false);
        portfolioContext.dispatch({
          type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__["TPortfolioActionTypes"].DELETE_ITEM,
          payload: itemTitle
        });
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("div", {
    className: css.ItemsContainer
  }, items && items.map(function (item) {
    return __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.title,
      item: item,
      deleteItem: deleteItem
    });
  }), __jsx(_AddNewItem_AddItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    add: addItemToDatabase,
    sending: sending
  })), __jsx(_UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: sending,
    transparent: true,
    fadeout: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItems);

/***/ })

})
//# sourceMappingURL=admin.js.c4697ab2e3190bd7713a.hot-update.js.map