webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./form/form.ts":
/*!**********************!*\
  !*** ./form/form.ts ***!
  \**********************/
/*! exports provided: formTypes, initialForm, updateEditForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formTypes", function() { return formTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialForm", function() { return initialForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEditForm", function() { return updateEditForm; });
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








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

var formTypes;

(function (formTypes) {
  formTypes["ADD"] = "add";
  formTypes["EDIT"] = "edit";
})(formTypes || (formTypes = {}));

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
  language: {
    id: 'language',
    elemType: 'select',
    options: {
      React: {
        selected: false
      },
      TypeScript: {
        selected: false
      },
      JavaScript: {
        selected: false
      },
      Cpp: {
        selected: false
      },
      NextJS: {
        selected: false
      }
    },
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
  preview_src: {
    id: 'preview_src',
    elemType: 'input',
    type: 'text',
    placeholder: 'preview video link',
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
    options: {
      Yes: {
        selected: false
      },
      No: {
        selected: false
      }
    },
    require: true
  },
  mobile: {
    id: 'mobile',
    elemType: 'select',
    options: {
      Yes: {
        selected: false
      },
      No: {
        selected: false
      }
    },
    require: true
  }
};
var updateEditForm = function updateEditForm(item) {
  var updatedForm = _objectSpread({}, initialForm, {
    title: _objectSpread({}, initialForm.title, {
      value: item.title
    }),
    description: _objectSpread({}, initialForm.description, {
      value: item.description
    }),
    language: _objectSpread({}, initialForm.language, {
      options: {
        React: {
          selected: item.language.includes('React')
        },
        TypeScript: {
          selected: item.language.includes('TypeScript')
        },
        JavaScript: {
          selected: item.language.includes('JavaScript')
        },
        Cpp: {
          selected: item.language.includes('Cpp')
        },
        NextJS: {
          selected: item.language.includes('NextJS')
        }
      }
    }),
    link: _objectSpread({}, initialForm.link, {
      value: item.link
    }),
    github: _objectSpread({}, initialForm.github, {
      value: item.githubLink
    }),
    video_src: _objectSpread({}, initialForm.video_src, {
      value: item.video_src
    }),
    preview_src: _objectSpread({}, initialForm.preview_src, {
      value: item.preview_src
    }),
    gif_src: _objectSpread({}, initialForm.gif_src, {
      value: item.gif_src
    }),
    desktop: _objectSpread({}, initialForm.desktop, {
      options: {
        Yes: {
          selected: item.desktop
        },
        No: {
          selected: !item.desktop
        }
      }
    }),
    mobile: _objectSpread({}, initialForm.mobile, {
      options: {
        Yes: {
          selected: item.mobile
        },
        No: {
          selected: !item.mobile
        }
      }
    })
  });

  return updatedForm;
};

/***/ })

})
//# sourceMappingURL=admin.js.3effa4df8cfefce8eb3b.hot-update.js.map