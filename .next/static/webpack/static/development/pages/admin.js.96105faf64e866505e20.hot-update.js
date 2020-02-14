webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./containers/Admin/Admin.tsx":
/*!************************************!*\
  !*** ./containers/Admin/Admin.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/Auth/Auth */ "./containers/Auth/Auth.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/portfolioContext */ "./context/portfolioContext.tsx");
/* harmony import */ var _components_Admin_PortfolioManagement_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Admin/PortfolioManagement/Portfolio */ "./components/Admin/PortfolioManagement/Portfolio.tsx");
/* harmony import */ var _components_UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Loading/Loading */ "./components/UI/Loading/Loading.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];







var css = __webpack_require__(/*! ./Admin.module.css */ "./containers/Admin/Admin.module.css");

var Admin = function Admin() {
  var authContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  var authState = authContext.state;
  var authDispatch = authContext.dispatch;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      sending = _React$useState2[0],
      setSending = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      screensize = _React$useState4[0],
      setScreensize = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
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
        // if auth token has not expired yet
        if (new Date().getTime() < +expireTime) {
          var authInfo = {
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
            idToken: localStorage.getItem('idToken')
          };
          authDispatch({
            type: 'signin',
            payload: authInfo
          });
          setSending(false); // if auth has expired
        } else {
          localStorage.clear();
          setSending(false);
        }
      }
    } else {
      setSending(false);
    }
  }, []);

  var signInHandler = function signInHandler(email, password, idToken) {
    var authInfo = {
      email: email,
      password: password,
      idToken: idToken
    };
    authDispatch({
      type: 'signin',
      payload: authInfo
    });
  };

  return __jsx("div", {
    className: css.Main,
    style: {
      minHeight: "".concat(screensize === null || screensize === void 0 ? void 0 : screensize.height, "px"),
      minWidth: "".concat(screensize === null || screensize === void 0 ? void 0 : screensize.width, "px")
    }
  }, !authState.signedIn && __jsx(_containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setSending: setSending,
    signIn: signInHandler
  }), sending && __jsx(_components_UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], null), authState.signedIn && __jsx(AdminContent, {
    token: authState.idToken
  }));
};

var AdminContent = function AdminContent() {
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__["PortfolioContext"]);
  var portfolioState = portfolioContext.state;
  var portfolioDispatch = portfolioContext.dispatch;

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](true),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      loading = _React$useState6[0],
      setLoading = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (portfolioState.items.length === 0) {
      var baseURL = 'https://joonajo-portfolio.firebaseio.com/items.json';
      var newItems = [];
      fetch(baseURL, {
        method: 'get'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data) {
          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data).forEach(function (item) {
            newItems.push(data[item]);
          });

          portfolioDispatch({
            type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__["TPortfolioActionTypes"].SET_ITEMS,
            payload: newItems
          });
        }

        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [portfolioState.items]);
  return __jsx("div", {
    className: css.AdminContentWrapper
  }, loading ? __jsx(_components_UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], null) : __jsx(_components_Admin_PortfolioManagement_Portfolio__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: portfolioState.items
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ })

})
//# sourceMappingURL=admin.js.96105faf64e866505e20.hot-update.js.map