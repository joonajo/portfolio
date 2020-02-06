module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UI/Spinner/Spinner.module.css":
/*!**************************************************!*\
  !*** ./components/UI/Spinner/Spinner.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"CubeContainer": "CubeContainer___xRbCz",
	"Cube": "Cube___1nEuA",
	"sk-foldCubeAngle": "sk-foldCubeAngle___1EoSl",
	"Cube2": "Cube2___2samt",
	"Cube3": "Cube3___2db_B",
	"Cube4": "Cube4___1rpEr"
};

/***/ }),

/***/ "./components/UI/Spinner/Spinner.tsx":
/*!*******************************************!*\
  !*** ./components/UI/Spinner/Spinner.tsx ***!
  \*******************************************/
/*! exports provided: CubeSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeSpinner", function() { return CubeSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const css = __webpack_require__(/*! ./Spinner.module.css */ "./components/UI/Spinner/Spinner.module.css");

const CubeSpinner = () => {
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

/***/ "./containers/Admin/Admin.module.css":
/*!*******************************************!*\
  !*** ./containers/Admin/Admin.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"AdminWrapper": "AdminWrapper____z5UW",
	"fadein": "fadein___2NOMh"
};

/***/ }),

/***/ "./containers/Admin/Admin.tsx":
/*!************************************!*\
  !*** ./containers/Admin/Admin.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const css = __webpack_require__(/*! ./Admin.module.css */ "./containers/Admin/Admin.module.css");

const Admin = () => {
  return __jsx("div", {
    className: css.AdminWrapper
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./containers/Auth/Auth.module.css":
/*!*****************************************!*\
  !*** ./containers/Auth/Auth.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"AuthFormContainer": "AuthFormContainer___2vfy7",
	"AuthForm": "AuthForm___1YkBf",
	"IconContainer": "IconContainer___3sYgW",
	"SubmitButton": "SubmitButton___2M9gB",
	"Container": "Container___jNmLd",
	"FormTitle": "FormTitle___32r4e",
	"InputContainer": "InputContainer___3sEIi",
	"focus": "focus___XaTcu",
	"EmailInput": "EmailInput___1IERV",
	"PasswordInput": "PasswordInput___8Y41p",
	"Span": "Span___lakW3",
	"InputIcon": "InputIcon___fxg8C",
	"ErrorText": "ErrorText___2C0br",
	"fadein": "fadein___xaCDG"
};

/***/ }),

/***/ "./containers/Auth/Auth.tsx":
/*!**********************************!*\
  !*** ./containers/Auth/Auth.tsx ***!
  \**********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../keys */ "./keys.ts");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const css = __webpack_require__(/*! ./Auth.module.css */ "./containers/Auth/Auth.module.css");

const Auth = ({
  setSending,
  setSignedIn
}) => {
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_9__["useState"]({
    error: false
  });

  const signInHandler = (email, password) => {
    setSending(true);
    const baseURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
    const apiKey = `?key=${_keys__WEBPACK_IMPORTED_MODULE_10__["googleKey"]}`;

    const payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()({
      email: email,
      password: password,
      returnSecureToken: true
    });

    fetch(baseURL + apiKey, {
      method: 'post',
      body: payload
    }).then(response => response.json()).then(data => {
      if (data.error) {
        setError({
          error: true,
          errorInfo: {
            code: data.error.code,
            message: data.error.message
          }
        });
        setSending(false);
      } else {
        const idToken = data === null || data === void 0 ? void 0 : data.idToken;
        const refreshToken = data === null || data === void 0 ? void 0 : data.refreshToken;
        const email = data === null || data === void 0 ? void 0 : data.email;
        const expireTime = String(new Date().getTime() + data.expiresIn * 1000);
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('email', email);
        localStorage.setItem('expireTime', expireTime);
        setSending(false);
        setError({
          error: false
        });
        setSignedIn(true);
      }
    });
  };

  return __jsx("div", {
    className: css.Container
  }, __jsx(AuthForm, {
    submit: signInHandler,
    error: error
  }));
};

const initialAuthFormState = {
  email: {
    id: 'email',
    inputType: 'email',
    placeholder: 'email',
    require: true,
    value: '',
    className: css.EmailInput,
    icon: {
      focus: _icons_icons__WEBPACK_IMPORTED_MODULE_11__["icons"].faEnvelopeOpen,
      unfocus: _icons_icons__WEBPACK_IMPORTED_MODULE_11__["icons"].faEnvelope
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
      focus: _icons_icons__WEBPACK_IMPORTED_MODULE_11__["icons"].faUnlock,
      unfocus: _icons_icons__WEBPACK_IMPORTED_MODULE_11__["icons"].faLock
    }
  }
};

const AuthForm = ({
  submit,
  error
}) => {
  var _error$errorInfo;

  const [formState, setFormState] = react__WEBPACK_IMPORTED_MODULE_9__["useState"](initialAuthFormState);
  react__WEBPACK_IMPORTED_MODULE_9__["useEffect"](() => {
    const keyHandler = event => {
      if (event.key === 'Enter') {
        signInHandler();
      }
    };

    window.addEventListener('keydown', keyHandler, true);
    return () => window.removeEventListener('keydown', keyHandler, true);
  }, [formState]);

  const changeHandler = (elemKey, event) => {
    const updatedFormState = _objectSpread({}, formState, {
      [elemKey]: _objectSpread({}, formState[elemKey], {
        value: event.target.value
      })
    });

    setFormState(updatedFormState);
  };

  const signInHandler = () => {
    submit(formState.email.value, formState.password.value);
  };

  return __jsx("div", {
    className: css.AuthFormContainer
  }, __jsx("form", {
    className: css.AuthForm
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(formState).map(elementKey => {
    return __jsx(InputComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      key: elementKey
    }, formState[elementKey], {
      changed: changeHandler
    }));
  })), (error === null || error === void 0 ? void 0 : error.error) && __jsx("p", {
    className: css.ErrorText
  }, (_error$errorInfo = error.errorInfo) === null || _error$errorInfo === void 0 ? void 0 : _error$errorInfo.message), __jsx("div", {
    className: css.SubmitButton,
    onClick: signInHandler
  }, __jsx("p", null, "Sign In"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_11__["icons"].faSignInAlt
  })));
};

const InputComponent = props => {
  var _props$icon;

  const [isFocused, setIsFocused] = react__WEBPACK_IMPORTED_MODULE_9__["useState"](false);
  const containerClasses = [css.InputContainer, isFocused && css.focus].join(' ');
  const iconClasses = [css.InputIcon, isFocused && css.focus].join(' ');
  const spanClasses = [css.Span, isFocused && css.focus].join(' ');
  return __jsx("div", {
    className: containerClasses
  }, props.icon && __jsx("div", {
    className: css.IconContainer
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: iconClasses,
    icon: (_props$icon = props.icon) === null || _props$icon === void 0 ? void 0 : _props$icon.unfocus
  })), __jsx("input", {
    className: props.className,
    placeholder: props.placeholder,
    value: props.value,
    type: props.inputType,
    onChange: e => props.changed(props.id, e),
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false)
  }), __jsx("span", {
    className: spanClasses
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./icons/icons.tsx":
/*!*************************!*\
  !*** ./icons/icons.tsx ***!
  \*************************/
/*! exports provided: icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__);


const icons = {
  faEnvelope: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEnvelope"],
  faGithub: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"],
  faInstagram: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"],
  faFlickr: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFlickr"],
  faStrava: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStrava"],
  faExternalLinkSquareAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faExternalLinkSquareAlt"],
  faMobileAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMobileAlt"],
  faDesktop: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faDesktop"],
  faCheck: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"],
  faTimes: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"],
  faChevronDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChevronDown"],
  faExpand: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faExpand"],
  faLock: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLock"],
  faUnlock: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUnlock"],
  faEnvelopeOpen: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEnvelopeOpen"],
  faSignInAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignInAlt"]
};

/***/ }),

/***/ "./keys.ts":
/*!*****************!*\
  !*** ./keys.ts ***!
  \*****************/
/*! exports provided: googleKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleKey", function() { return googleKey; });
const googleKey = "AIzaSyDoQDgiY3LCUaOApRN_800QwvR8qKm3u94";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/admin/index.module.css":
/*!**************************************!*\
  !*** ./pages/admin/index.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Main": "Main___151kN",
	"Loading": "Loading___3rzPY",
	"fadein": "fadein___4IAf2"
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Auth/Auth */ "./containers/Auth/Auth.tsx");
/* harmony import */ var _containers_Admin_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/Admin/Admin */ "./containers/Admin/Admin.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





const css = __webpack_require__(/*! ./index.module.css */ "./pages/admin/index.module.css");

const AdminPage = () => {
  const [signedIn, setSignedIn] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [sending, setSending] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [screensize, setScreensize] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
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
      if (new Date().getTime() < +localStorage.getItem('expireTime')) {
        console.log('use old auth info');
        localStorage.clear();
      } else {
        console.log('clear local storage');
        localStorage.clear();
      }
    }
  }, []);
  return __jsx("div", {
    className: css.Main,
    style: {
      minHeight: `${screensize === null || screensize === void 0 ? void 0 : screensize.height}px`,
      minWidth: `${screensize === null || screensize === void 0 ? void 0 : screensize.width}px`
    }
  }, !signedIn && __jsx(_containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setSending: setSending,
    setSignedIn: setSignedIn
  }), signedIn && __jsx(_containers_Admin_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], null), sending && __jsx(Loading, null));
};

const Loading = () => __jsx("div", {
  className: css.Loading
}, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_1__["CubeSpinner"], null));

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/admin/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jouna\code\portfolio\pages\admin\index.tsx */"./pages/admin/index.tsx");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map