webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/NewItemForm/NewItemForm.tsx":
/*!******************************************************!*\
  !*** ./components/Admin/NewItemForm/NewItemForm.tsx ***!
  \******************************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../icons/icons */ "./icons/icons.tsx");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var css = __webpack_require__(/*! ./NewItemForm.module.css */ "./components/Admin/NewItemForm/NewItemForm.module.css");

var initialForm = {
  title: {
    id: 'title',
    elemType: 'input',
    type: 'text',
    placeholder: 'title',
    require: true,
    value: ''
  },
  description: {
    id: 'description',
    elemType: 'textarea',
    type: 'text',
    placeholder: 'description',
    require: true,
    value: ''
  },
  languages: {
    id: 'languages',
    elemType: 'select',
    options: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(_context_portfolioContext__WEBPACK_IMPORTED_MODULE_10__["Languages"])),
    require: true,
    multiple: true
  },
  link: {
    id: 'link',
    elemType: 'input',
    type: 'text',
    placeholder: 'link to app',
    require: true,
    value: ''
  },
  github: {
    id: 'github',
    elemType: 'input',
    type: 'text',
    placeholder: 'github link',
    require: true,
    value: ''
  },
  video_src: {
    id: 'video_src',
    elemType: 'input',
    type: 'text',
    placeholder: 'video link',
    require: true,
    value: ''
  },
  gif_src: {
    id: 'gif_src',
    elemType: 'input',
    type: 'text',
    placeholder: 'gif link',
    require: true,
    value: ''
  },
  desktop: {
    id: 'desktop',
    elemType: 'select',
    options: ['Yes', 'No'],
    require: true,
    value: 'Yes',
    multiple: false
  },
  mobile: {
    id: 'mobile',
    elemType: 'select',
    options: ['Yes', 'No'],
    require: true,
    value: 'Yes',
    multiple: false
  }
};

var NewItemForm = function NewItemForm(_ref) {
  var show = _ref.show,
      close = _ref.close,
      add = _ref.add,
      sending = _ref.sending;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9__["useState"](initialForm),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_React$useState, 2),
      form = _React$useState2[0],
      setForm = _React$useState2[1];

  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_9__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_10__["PortfolioContext"]);

  var changeHandler = function changeHandler(id, event) {
    var updatedForm = _objectSpread({}, form, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, id, _objectSpread({}, form[id], {
      value: event.target.value
    })));

    setForm(updatedForm);
  };

  var addHandler = function addHandler() {
    console.log(form);
    var newItem = {
      title: form.title.value,
      language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_10__["Languages"].React, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_10__["Languages"].TypeScript],
      description: form.description.value,
      link: form.link.value,
      githubLink: form.github.value,
      video_src: form.video_src.value,
      gif_src: form.gif_src.value,
      desktop: form.desktop.value === 'Yes',
      mobile: form.mobile.value === 'Yes,'
    };

    var newPortfolioItems = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(portfolioContext.state.items);

    newPortfolioItems.push(newItem);
    portfolioContext.dispatch({
      type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_10__["TPortfolioActionTypes"].SET_ITEMS,
      payload: newPortfolioItems
    });
    add(newItem);
  };

  var itemFormStyles = [css.ItemForm, show && css.show].join(' ');
  var backdropStyles = [css.FormBackdrop, show && css.show].join(' ');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, __jsx("form", {
    className: itemFormStyles
  }, sending && __jsx("div", {
    className: css.Loading
  }, __jsx(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_11__["CubeSpinner"], null)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: css.FormCloseButton,
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_13__["icons"].faTimes,
    onClick: close
  }), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(form).map(function (element) {
    return __jsx(FormInput, {
      key: element,
      item: form[element],
      change: changeHandler
    });
  }), __jsx("div", {
    className: css.FormAddButton,
    onClick: addHandler
  }, __jsx("p", null, "add"))), __jsx("div", {
    className: backdropStyles
  }));
};

var FormInput = react__WEBPACK_IMPORTED_MODULE_9__["memo"](function (_ref2) {
  var item = _ref2.item,
      change = _ref2.change;
  var content = undefined;

  switch (item.elemType) {
    case 'input':
      content = __jsx("input", {
        value: item.value,
        placeholder: item.placeholder,
        onChange: function onChange(e) {
          return change(item.id, e);
        },
        className: css.FormInput
      });
      break;

    case 'textarea':
      content = __jsx("textarea", {
        value: item.value,
        onChange: function onChange(e) {
          return change(item.id, e);
        },
        placeholder: item.placeholder,
        className: css.FormInput,
        rows: 5
      });
      break;

    case 'select':
      content = __jsx("select", {
        className: css.FormSelect,
        id: item.id,
        multiple: item.multiple
      }, item.options.map(function (option) {
        return __jsx("option", {
          key: item.id + option,
          value: option,
          className: css.SelectOption
        }, option);
      }));
      break;
  }

  return __jsx("div", {
    className: css.FormInputContainer
  }, __jsx("p", null, item.id), content);
});
/* harmony default export */ __webpack_exports__["default"] = (NewItemForm);

/***/ })

})
//# sourceMappingURL=admin.js.0f89e950eac39caf24e6.hot-update.js.map