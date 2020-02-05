webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/UI/Spinner/Spinner.tsx":
/*!*******************************************!*\
  !*** ./components/UI/Spinner/Spinner.tsx ***!
  \*******************************************/
/*! exports provided: CubeSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeSpinner", function() { return CubeSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var css = __webpack_require__(/*! ./Spinner.module.css */ "./components/UI/Spinner/Spinner.module.css");

var CubeSpinner = function CubeSpinner() {
  return __jsx("div", {
    className: css.CubeContainer
  }, __jsx("div", {
    className: [css.Cube1, css.Cube].join(' ')
  }), __jsx("div", {
    className: [css.Cube2, css.Cube].join(' ')
  }), __jsx("div", {
    className: [css.Cube3, css.Cube].join(' ')
  }), __jsx("div", {
    className: [css.Cube4, css.Cube].join(' ')
  }));
};

/***/ }),

/***/ "./pages/admin/index.tsx":
/*!*******************************!*\
  !*** ./pages/admin/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../keys */ "./keys.ts");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");










var __jsx = react__WEBPACK_IMPORTED_MODULE_10__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var css = __webpack_require__(/*! ./index.module.css */ "./pages/admin/index.module.css");

var AdminPage = function AdminPage() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_10__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$useState, 2),
      isSignedIn = _React$useState2[0],
      setIsSignedIn = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_10__["useState"](false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$useState3, 2),
      sending = _React$useState4[0],
      setSending = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_10__["useEffect"](function () {
    document.title = 'Portfolio // Admin';

    if (localStorage.length !== 0) {
      var _localStorage;

      // check for auth info in local storage
      // compare current time in milliseconds to time in storage
      // if current time is LESS, use the auth info from storage to refresh
      // else, clear local storage
      if (new Date().getTime() < +((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem('expireTime'))) {
        console.log('use old auth info');
      } else {
        console.log('clear local storage');
        localStorage.clear();
      }
    }
  }, []);

  var signInHandler = function signInHandler(email, password) {
    setSending(true);
    var baseURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
    var apiKey = "?key=".concat(_keys__WEBPACK_IMPORTED_MODULE_12__["googleKey"]);

    var payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()({
      email: email,
      password: password,
      returnSecureToken: true
    });

    fetch(baseURL + apiKey, {
      method: 'post',
      body: payload
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      var idToken = data === null || data === void 0 ? void 0 : data.idToken;
      var refreshToken = data === null || data === void 0 ? void 0 : data.refreshToken;
      var email = data === null || data === void 0 ? void 0 : data.email;
      var expireTime = String(new Date().getTime() + data.expiresIn * 1000);
      localStorage.setItem('idToken', idToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('email', email);
      localStorage.setItem('expireTime', expireTime);
      setSending(false);
    });
  };

  return __jsx("div", {
    className: css.Main
  }, !isSignedIn && __jsx(AuthForm, {
    signIn: signInHandler
  }), sending && __jsx("div", {
    className: css.Loading
  }, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_14__["CubeSpinner"], null)));
};

var initialAuthFormState = {
  email: {
    id: 'email',
    inputType: 'email',
    placeholder: 'email',
    require: true,
    value: '',
    className: css.EmailInput,
    icon: {
      focus: _icons_icons__WEBPACK_IMPORTED_MODULE_13__["icons"].faEnvelopeOpen,
      unfocus: _icons_icons__WEBPACK_IMPORTED_MODULE_13__["icons"].faEnvelope
    }
  },
  password: {
    id: 'password',
    inputType: 'password',
    placeholder: 'password',
    require: true,
    value: '',
    className: css.PasswordInput,
    icon: {
      focus: _icons_icons__WEBPACK_IMPORTED_MODULE_13__["icons"].faUnlock,
      unfocus: _icons_icons__WEBPACK_IMPORTED_MODULE_13__["icons"].faLock
    }
  }
};

var AuthForm = function AuthForm(_ref) {
  var signIn = _ref.signIn;

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_10__["useState"](initialAuthFormState),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$useState5, 2),
      formState = _React$useState6[0],
      setFormState = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_10__["useEffect"](function () {
    var keyHandler = function keyHandler(event) {
      if (event.key === 'Enter') {
        signInHandler();
      }
    };

    window.addEventListener('keydown', keyHandler, true);
    return function () {
      return window.removeEventListener('keydown', keyHandler, true);
    };
  }, [formState]);

  var changeHandler = function changeHandler(elemKey, event) {
    var updatedFormState = _objectSpread({}, formState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, elemKey, _objectSpread({}, formState[elemKey], {
      value: event.target.value
    })));

    setFormState(updatedFormState);
  };

  var signInHandler = function signInHandler() {
    signIn(formState.email.value, formState.password.value);
  };

  return __jsx("div", {
    className: css.AuthFormContainer
  }, __jsx("form", {
    className: css.AuthForm
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(formState).map(function (elementKey) {
    return __jsx(InputComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      key: elementKey
    }, formState[elementKey], {
      changed: changeHandler
    }));
  })), __jsx("div", {
    className: css.SubmitButton,
    onClick: signInHandler
  }, __jsx("p", null, "Sign In"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_13__["icons"].faSignInAlt
  })));
};

var InputComponent = function InputComponent(props) {
  var _props$icon;

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_10__["useState"](false),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$useState7, 2),
      isFocused = _React$useState8[0],
      setIsFocused = _React$useState8[1];

  var containerClasses = [css.InputContainer, isFocused && css.focus].join(' ');
  var iconClasses = [css.InputIcon, isFocused && css.focus].join(' ');
  var spanClasses = [css.Span, isFocused && css.focus].join(' ');
  return __jsx("div", {
    className: containerClasses
  }, props.icon && __jsx("div", {
    className: css.IconContainer
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    className: iconClasses,
    icon: (_props$icon = props.icon) === null || _props$icon === void 0 ? void 0 : _props$icon.unfocus
  })), __jsx("input", {
    className: props.className,
    placeholder: props.placeholder,
    value: props.value,
    type: props.inputType,
    onChange: function onChange(e) {
      return props.changed(props.id, e);
    },
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: function onBlur() {
      return setIsFocused(false);
    }
  }), __jsx("span", {
    className: spanClasses
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ })

})
//# sourceMappingURL=admin.js.01215fe0eff6ce391a60.hot-update.js.map