webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./containers/Admin/Admin.tsx":
/*!************************************!*\
  !*** ./containers/Admin/Admin.tsx ***!
  \************************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/Auth/Auth */ "./containers/Auth/Auth.tsx");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../context/authContext */ "./context/authContext.tsx");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








var css = __webpack_require__(/*! ./Admin.module.css */ "./containers/Admin/Admin.module.css");

var Admin = function Admin() {
  var authContext = react__WEBPACK_IMPORTED_MODULE_8__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_13__["AuthContext"]);
  var state = authContext.state;
  var dispatch = authContext.dispatch;
  console.log(state);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8__["useState"](true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$useState, 2),
      sending = _React$useState2[0],
      setSending = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8__["useState"](),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$useState3, 2),
      screensize = _React$useState4[0],
      setScreensize = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_8__["useEffect"](function () {
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
          dispatch({
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
    dispatch({
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
  }, !state.signedIn && __jsx(_containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setSending: setSending,
    signIn: signInHandler
  }), sending && __jsx(Loading, null), state.signedIn && __jsx(AdminContent, {
    token: state.idToken
  }));
};

var Loading = function Loading() {
  return __jsx("div", {
    className: css.Loading
  }, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_10__["CubeSpinner"], null));
};

var AdminContent = function AdminContent(_ref) {
  var token = _ref.token;
  return __jsx("div", {
    className: css.AdminContentWrapper
  }, __jsx(PortfolioItems, null));
};

var PortfolioItems = function PortfolioItems(_ref2) {
  var items = _ref2.items;
  return __jsx("div", {
    className: css.ItemsContainer
  }, items && items.map(function (item) {
    return __jsx("div", null, "item");
  }), __jsx(AddPortfolioItem, null));
};

var initialForm = {
  title: {
    id: 'title',
    type: 'text',
    placeholder: 'title',
    require: true,
    value: ''
  },
  description: {
    id: 'description',
    type: 'text',
    placeholder: 'description',
    require: true,
    value: ''
  },
  link: {
    id: 'link',
    type: 'text',
    placeholder: 'link to app',
    require: true,
    value: ''
  },
  github: {
    id: 'github',
    type: 'text',
    placeholder: 'github link',
    require: true,
    value: ''
  },
  video_src: {
    id: 'video_src',
    type: 'text',
    placeholder: 'video link',
    require: true,
    value: ''
  },
  gif_src: {
    id: 'gif_src',
    type: 'text',
    placeholder: 'gif link',
    require: true,
    value: ''
  },
  desktop: {
    id: 'desktop',
    type: 'select',
    require: true
  },
  mobile: {
    id: 'mobile',
    type: 'select',
    require: true
  }
};

var AddPortfolioItem = function AddPortfolioItem() {
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_8__["useState"](false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$useState5, 2),
      showForm = _React$useState6[0],
      setShowForm = _React$useState6[1];

  var addItemToDatabase = function addItemToDatabase() {
    var baseURL = 'https://joonajo-portfolio.firebaseio.com/items.json';
    var idToken = localStorage.getItem('idToken');
    var tokenParam = "?auth=".concat(idToken);
    var newItem = {
      name: 'test'
    };
    fetch(baseURL + tokenParam, {
      method: 'put',
      body: newItem
    }).then(function (response) {
      return response.json().then(function (data) {
        console.log(data);
      });
    });
  };

  var clickHandler = function clickHandler() {
    setShowForm(true);
  };

  return __jsx("div", {
    className: css.AddItemContainer
  }, __jsx("span", {
    className: css.AddItemButton,
    onClick: clickHandler
  }, "add item ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_12__["icons"].faPlus,
    className: css.AddItemIcon
  })), __jsx(NewItemForm, {
    show: showForm
  }));
};

var NewItemForm = function NewItemForm(_ref3) {
  var show = _ref3.show;

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_8__["useState"](initialForm),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$useState7, 2),
      form = _React$useState8[0],
      setForm = _React$useState8[1];

  var changeHandler = function changeHandler(id, event) {
    var updatedForm = _objectSpread({}, form, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, id, _objectSpread({}, form[id], {
      value: event.target.value
    })));

    setForm(updatedForm);
  };

  var itemFormClasses = [css.ItemForm, show && css.show].join(' ');
  return __jsx("div", {
    className: itemFormClasses
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(form).map(function (element) {
    return __jsx("input", {
      key: element,
      className: css.Input,
      type: form[element].type,
      value: form[element].value,
      placeholder: form[element].placeholder,
      onChange: function onChange(e) {
        return changeHandler(form[element].id, e);
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ })

})
//# sourceMappingURL=admin.js.6936f66bf5445c56fc75.hot-update.js.map