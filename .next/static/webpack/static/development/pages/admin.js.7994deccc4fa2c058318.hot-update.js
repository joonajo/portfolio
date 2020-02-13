webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/EditItem/EditItem.tsx":
/*!************************************************!*\
  !*** ./components/Admin/EditItem/EditItem.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form/form */ "./form/form.ts");
/* harmony import */ var _ItemForm_ItemForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ItemForm/ItemForm */ "./components/Admin/ItemForm/ItemForm.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];






var css = __webpack_require__(/*! ./EditItem.module.css */ "./components/Admin/EditItem/EditItem.module.css");

var EditItem = function EditItem(_ref) {
  var show = _ref.show,
      item = _ref.item,
      close = _ref.close;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      sending = _React$useState2[0],
      setSending = _React$useState2[1];

  var authContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["PortfolioContext"]);

  var editItem = function editItem(item) {
    console.log('edit', item);

    if (authContext.state.signedIn) {
      setSending(true);
      var baseURL = 'https://joonajo-portfolio.firebaseio.com/items/';
      var title = item.title + ".json";
      var tokenParam = "?auth=".concat(authContext.state.idToken);
      fetch(baseURL + title + tokenParam, {
        method: 'patch',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(item)
      }).then(function (response) {
        return response.json().then(function (data) {
          console.log(data);
          setSending(false);
        });
      });
      portfolioContext.dispatch({
        type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["TPortfolioActionTypes"].ADD_ITEM,
        payload: item
      });
      close();
    }
  };

  var containerStyles = [css.EditItemContainer, show && css.show].join(' ');
  return __jsx("div", {
    className: containerStyles
  }, __jsx(_ItemForm_ItemForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _form_form__WEBPACK_IMPORTED_MODULE_3__["formTypes"].EDIT,
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
//# sourceMappingURL=admin.js.7994deccc4fa2c058318.hot-update.js.map