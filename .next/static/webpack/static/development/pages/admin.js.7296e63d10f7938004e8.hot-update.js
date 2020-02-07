webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/admin/index.tsx":
/*!*******************************!*\
  !*** ./pages/admin/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/Auth/Auth */ "./containers/Auth/Auth.tsx");
/* harmony import */ var _containers_Admin_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/Admin/Admin */ "./containers/Admin/Admin.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];





var css = __webpack_require__(/*! ./index.module.css */ "./pages/admin/index.module.css");

var AdminPage = function AdminPage() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      signedIn = _React$useState2[0],
      setSignedIn = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      sending = _React$useState4[0],
      setSending = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      screensize = _React$useState6[0],
      setScreensize = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    document.title = 'Portfolio // Admin';
    setScreensize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    if (localStorage.length !== 0) {
      // check for auth info in local storage
      // compare current time in milliseconds to expire time in storage
      // if current time is LESS, use the auth info from storage to refresh
      // else, clear local storage
      var expireTime = localStorage.getItem('expireTime');

      if (expireTime) {
        if (new Date().getTime() < +expireTime) {
          setSignedIn(true);
          setSending(false);
        } else {
          localStorage.clear();
          setSending(false);
        }
      }
    }
  }, []);
  return __jsx("div", {
    className: css.Main,
    style: {
      minHeight: "".concat(screensize === null || screensize === void 0 ? void 0 : screensize.height, "px"),
      minWidth: "".concat(screensize === null || screensize === void 0 ? void 0 : screensize.width, "px")
    }
  }, !signedIn && __jsx(_containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setSending: setSending,
    setSignedIn: setSignedIn
  }), signedIn && __jsx(_containers_Admin_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], null), sending && __jsx(Loading, null));
};

var Loading = function Loading() {
  return __jsx("div", {
    className: css.Loading
  }, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["CubeSpinner"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ })

})
//# sourceMappingURL=admin.js.7296e63d10f7938004e8.hot-update.js.map