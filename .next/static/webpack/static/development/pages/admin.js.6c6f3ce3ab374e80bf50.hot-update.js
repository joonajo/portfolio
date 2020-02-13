webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Admin/ItemForm/ItemForm.tsx":
/*!************************************************!*\
  !*** ./components/Admin/ItemForm/ItemForm.tsx ***!
  \************************************************/
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
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../form/form */ "./form/form.ts");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var css = __webpack_require__(/*! ./ItemForm.module.css */ "./components/Admin/ItemForm/ItemForm.module.css");

var ItemForm = function ItemForm(_ref) {
  var show = _ref.show,
      sending = _ref.sending,
      item = _ref.item,
      close = _ref.close,
      add = _ref.add,
      type = _ref.type;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8__["useState"](_form_form__WEBPACK_IMPORTED_MODULE_12__["initialForm"]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$useState, 2),
      form = _React$useState2[0],
      setForm = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_8__["useEffect"](function () {
    if (item) {
      // update each field manually cus we bad
      var updatedForm = _objectSpread({}, form, {
        title: _objectSpread({}, form.title, {
          value: item.title
        }),
        description: _objectSpread({}, form.description, {
          value: item.description
        }),
        language: _objectSpread({}, form.language, {
          options: _objectSpread({}, form.language.options)
        }),
        link: _objectSpread({}, form.link, {
          value: item.link
        }),
        github: _objectSpread({}, form.github, {
          value: item.githubLink
        }),
        video_src: _objectSpread({}, form.video_src, {
          value: item.video_src
        }),
        gif_src: _objectSpread({}, form.gif_src, {
          value: item.gif_src
        }),
        desktop: _objectSpread({}, form.desktop, {
          options: {
            Yes: {
              selected: item.desktop
            },
            no: {
              selected: item.desktop
            }
          }
        }),
        mobile: _objectSpread({}, form.mobile, {
          options: {
            Yes: {
              selected: item.mobile
            },
            No: {
              selected: item.mobile
            }
          }
        })
      });

      setForm(updatedForm);
    }
  }, [item]);

  var optionClickHandler = function optionClickHandler(id, name) {
    var updatedForm = _objectSpread({}, form);

    if (id === 'languages') {
      updatedForm = _objectSpread({}, form, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, id, _objectSpread({}, form[id], {
        options: _objectSpread({}, form[id].options, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, _objectSpread({}, form[id].options[name], {
          selected: !form[id].options[name].selected
        })))
      })));
    } else {
      updatedForm = _objectSpread({}, form, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, id, _objectSpread({}, form[id], {
        options: {
          Yes: {
            selected: name === 'Yes'
          },
          No: {
            selected: name === 'No'
          }
        }
      })));
    }

    setForm(updatedForm);
  };

  var changeHandler = function changeHandler(id, event) {
    var updatedForm = _objectSpread({}, form);

    updatedForm = _objectSpread({}, form, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, id, _objectSpread({}, form[id], {
      value: event.target.value
    })));
    setForm(updatedForm);
  };

  var addHandler = function addHandler() {
    var selectedLanguages = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(form.languages.options).filter(function (option) {
      return form.languages.options[option].selected;
    });

    var newItem = {
      title: form.title.value,
      language: selectedLanguages,
      description: form.description.value,
      link: form.link.value,
      githubLink: form.github.value,
      video_src: form.video_src.value,
      gif_src: form.gif_src.value,
      desktop: form.desktop.options.Yes.selected,
      mobile: form.mobile.options.Yes.selected
    };
    add(newItem);
  };

  var itemFormStyles = [css.ItemForm, show && css.show].join(' ');
  var backdropStyles = [css.FormBackdrop, show && css.show].join(' ');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, __jsx("form", {
    className: itemFormStyles
  }, sending && __jsx("div", {
    className: css.Loading
  }, __jsx(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_9__["CubeSpinner"], null)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    className: css.FormCloseButton,
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_11__["icons"].faTimes,
    onClick: close
  }), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(form).map(function (element) {
    return __jsx(FormInput, {
      key: element,
      item: form[element],
      change: changeHandler,
      clickOption: optionClickHandler
    });
  }), __jsx("div", {
    className: css.FormAddButton,
    onClick: addHandler
  }, __jsx("p", null, type))), __jsx("div", {
    className: backdropStyles
  }));
};

var FormInput = react__WEBPACK_IMPORTED_MODULE_8__["memo"](function (_ref2) {
  var item = _ref2.item,
      change = _ref2.change,
      clickOption = _ref2.clickOption;
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
      content = __jsx("div", {
        className: css.Select
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(item.options).map(function (option) {
        var selected = item.options[option].selected;
        return __jsx("div", {
          key: item.id + option,
          className: [css.Option, selected && css.selected].join(' '),
          onClick: function onClick() {
            return clickOption(item.id, option);
          }
        }, option);
      }));
      break;
  }

  return __jsx("div", {
    className: css.FormInputContainer
  }, __jsx("p", {
    className: css.FormInputTitle
  }, item.id), content);
});
/* harmony default export */ __webpack_exports__["default"] = (ItemForm);

/***/ })

})
//# sourceMappingURL=admin.js.6c6f3ce3ab374e80bf50.hot-update.js.map