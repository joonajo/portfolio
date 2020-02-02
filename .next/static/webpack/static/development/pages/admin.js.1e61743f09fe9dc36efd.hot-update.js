webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/admin/index.tsx":
/*!*******************************!*\
  !*** ./pages/admin/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];


var css = __webpack_require__(/*! ./index.module.css */ "./pages/admin/index.module.css");

var AdminPage = function AdminPage() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      isSignedIn = _React$useState2[0],
      setIsSignedIn = _React$useState2[1];

  var signInHandler = function signInHandler(email, password) {};

  return __jsx("div", {
    className: css.Main
  }, !isSignedIn && __jsx(AuthForm, {
    signIn: signInHandler
  }));
};

var initialAuthFormState = {
  email: {
    elementType: 'input',
    inputType: 'email',
    placeholder: 'email',
    require: true,
    value: '',
    className: css.EmailInput
  },
  password: {
    elementType: 'input',
    inputType: 'password',
    placeholder: 'password',
    require: true,
    value: ''
  },
  submit: {
    elementType: 'input',
    inputType: 'submit',
    value: 'Sign In'
  }
};

var AuthForm = function AuthForm(_ref) {
  var signIn = _ref.signIn;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](initialAuthFormState),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      formState = _React$useState4[0],
      setFormState = _React$useState4[1];

  return __jsx("div", {
    className: css.AuthFormContainer
  }, __jsx("h2", null, "Sign In"), __jsx("form", {
    className: css.AuthForm
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(formState).map(function (elementKey) {
    var element = formState[elementKey];
    return __jsx("input", element);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ })

})
//# sourceMappingURL=admin.js.1e61743f09fe9dc36efd.hot-update.js.map