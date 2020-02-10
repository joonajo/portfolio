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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Admin/AddNewItem/AddNewItem.module.css":
/*!***********************************************************!*\
  !*** ./components/Admin/AddNewItem/AddNewItem.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"AddItemContainer": "AddItemContainer___1GG9k",
	"AddItemButton": "AddItemButton___1-OMe",
	"ItemsContainer": "ItemsContainer___1KZV_",
	"ItemContainer": "ItemContainer___mZH2b",
	"ItemMainContent": "ItemMainContent___2fc0F",
	"ItemHoverContent": "ItemHoverContent___1efAC",
	"AddItemIcon": "AddItemIcon___97Fbs"
};

/***/ }),

/***/ "./components/Admin/AddNewItem/AddNewItem.tsx":
/*!****************************************************!*\
  !*** ./components/Admin/AddNewItem/AddNewItem.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _NewItemForm_NewItemForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NewItemForm/NewItemForm */ "./components/Admin/NewItemForm/NewItemForm.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];







const css = __webpack_require__(/*! ./AddNewItem.module.css */ "./components/Admin/AddNewItem/AddNewItem.module.css");

const AddPortfolioItem = () => {
  const [showForm, setShowForm] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  const [sending, setSending] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  const authContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  const portfolioContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["PortfolioContext"]);

  const addItemToDatabase = item => {
    if (authContext.state.signedIn) {
      setSending(true);
      const baseURL = 'https://joonajo-portfolio.firebaseio.com/items/';
      const title = item.title + ".json";
      const tokenParam = `?auth=${authContext.state.idToken}`;
      fetch(baseURL + title + tokenParam, {
        method: 'put',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(item)
      }).then(response => response.json().then(data => {
        setSending(false);
        setShowForm(false);
      }));
      portfolioContext.dispatch({
        type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["TPortfolioActionTypes"].ADD_ITEM,
        payload: item
      });
    }
  };

  const clickHandler = () => {
    setShowForm(true);
  };

  return __jsx("div", {
    className: css.AddItemContainer
  }, __jsx("span", {
    className: css.AddItemButton,
    onClick: clickHandler
  }, "add item ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_3__["icons"].faPlus,
    className: css.AddItemIcon
  })), __jsx(_NewItemForm_NewItemForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showForm,
    close: () => setShowForm(false),
    add: addItemToDatabase,
    sending: sending
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AddPortfolioItem);

/***/ }),

/***/ "./components/Admin/NewItemForm/NewItemForm.module.css":
/*!*************************************************************!*\
  !*** ./components/Admin/NewItemForm/NewItemForm.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ItemForm": "ItemForm___LRco4",
	"show": "show___2BZzO",
	"FormBackdrop": "FormBackdrop___3r6-V",
	"FormCloseButton": "FormCloseButton___2k04O",
	"FormInputContainer": "FormInputContainer___3IElP",
	"FormInput": "FormInput___1yAUy",
	"FormSelect": "FormSelect___zVfw4",
	"SelectOption": "SelectOption___1LN1j",
	"FormAddButton": "FormAddButton___3ZUoj",
	"Loading": "Loading___3ErFs",
	"fadein": "fadein___3T6WZ"
};

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../icons/icons */ "./icons/icons.tsx");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const css = __webpack_require__(/*! ./NewItemForm.module.css */ "./components/Admin/NewItemForm/NewItemForm.module.css");

const initialForm = {
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
    options: [..._babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(_context_portfolioContext__WEBPACK_IMPORTED_MODULE_8__["Languages"])],
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

const NewItemForm = ({
  show,
  close,
  add,
  sending
}) => {
  const [form, setForm] = react__WEBPACK_IMPORTED_MODULE_7__["useState"](initialForm);
  const portfolioContext = react__WEBPACK_IMPORTED_MODULE_7__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_8__["PortfolioContext"]);

  const changeHandler = (id, event) => {
    const updatedForm = _objectSpread({}, form, {
      [id]: _objectSpread({}, form[id], {
        value: event.target.value
      })
    });

    setForm(updatedForm);
  };

  const addHandler = () => {
    const newItem = {
      title: form.title.value,
      language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_8__["Languages"].React, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_8__["Languages"].TypeScript],
      description: form.description.value,
      link: form.link.value,
      githubLink: form.github.value,
      video_src: form.video_src.value,
      gif_src: form.gif_src.value,
      desktop: form.desktop.value === 'Yes',
      mobile: form.mobile.value === 'Yes,'
    };
    add(newItem);
  };

  const itemFormStyles = [css.ItemForm, show && css.show].join(' ');
  const backdropStyles = [css.FormBackdrop, show && css.show].join(' ');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, __jsx("form", {
    className: itemFormStyles
  }, sending && __jsx("div", {
    className: css.Loading
  }, __jsx(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_9__["CubeSpinner"], null)), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    className: css.FormCloseButton,
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_11__["icons"].faTimes,
    onClick: close
  }), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(form).map(element => {
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

const FormInput = react__WEBPACK_IMPORTED_MODULE_7__["memo"](({
  item,
  change
}) => {
  let content = undefined;

  switch (item.elemType) {
    case 'input':
      content = __jsx("input", {
        value: item.value,
        placeholder: item.placeholder,
        onChange: e => change(item.id, e),
        className: css.FormInput
      });
      break;

    case 'textarea':
      content = __jsx("textarea", {
        value: item.value,
        onChange: e => change(item.id, e),
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
      }, item.options.map(option => {
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

/***/ }),

/***/ "./components/Admin/PortfolioManagement/Portfolio.module.css":
/*!*******************************************************************!*\
  !*** ./components/Admin/PortfolioManagement/Portfolio.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ItemsContainer": "ItemsContainer___1jQY5",
	"ItemContainer": "ItemContainer___2B_CX",
	"ItemMainContent": "ItemMainContent___3u7q7",
	"ItemHoverContent": "ItemHoverContent___13SmG",
	"fadein": "fadein___2CRjw"
};

/***/ }),

/***/ "./components/Admin/PortfolioManagement/Portfolio.tsx":
/*!************************************************************!*\
  !*** ./components/Admin/PortfolioManagement/Portfolio.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/icons */ "./icons/icons.tsx");
/* harmony import */ var _AddNewItem_AddNewItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AddNewItem/AddNewItem */ "./components/Admin/AddNewItem/AddNewItem.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/portfolioContext */ "./context/portfolioContext.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


const css = __webpack_require__(/*! ./Portfolio.module.css */ "./components/Admin/PortfolioManagement/Portfolio.module.css");







const PortfolioItems = ({
  items
}) => {
  return __jsx("div", {
    className: css.ItemsContainer
  }, items && items.map(item => {
    return __jsx(PortfolioItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.title
    }, item));
  }), __jsx(_AddNewItem_AddNewItem__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

const PortfolioItem = props => {
  const authContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  const portfolioContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["PortfolioContext"]);

  const deleteHandler = () => {
    if (authContext.state.signedIn) {
      const baseURL = "https://joonajo-portfolio.firebaseio.com/items/";
      const itemParam = `${props.title}.json`;
      const tokenParam = `?auth=${authContext.state.idToken}`;
      fetch(baseURL + itemParam + tokenParam, {
        method: 'delete'
      }).then(response => response.json()).then(data => {
        console.log('succesfully deleted', props.title);
      });
      portfolioContext.dispatch({
        type: _context_portfolioContext__WEBPACK_IMPORTED_MODULE_6__["TPortfolioActionTypes"].DELETE_ITEM,
        payload: props.title
      });
    }
  };

  return __jsx("div", {
    className: css.ItemContainer
  }, __jsx("div", {
    className: css.ItemMainContent
  }, __jsx("p", null, props.title)), __jsx("div", {
    className: css.ItemHoverContent
  }, __jsx("span", null, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_3__["icons"].faEdit
  }), " ", __jsx("p", null, "edit"), " "), __jsx("span", {
    onClick: deleteHandler
  }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_3__["icons"].faTrash
  }), " ", __jsx("p", null, "delete"), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioItems);

/***/ }),

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
	"Main": "Main___FMecM",
	"Loading": "Loading___3SvGT",
	"AdminWrapper": "AdminWrapper____z5UW",
	"AddItemContainer": "AddItemContainer___Vk9ke",
	"AddItemButton": "AddItemButton___amRAU",
	"ItemsContainer": "ItemsContainer___3qfZP",
	"ItemContainer": "ItemContainer___3yL2D",
	"ItemMainContent": "ItemMainContent___SWG0n",
	"ItemHoverContent": "ItemHoverContent___38wnR",
	"fadein": "fadein___2NOMh",
	"AdminContentWrapper": "AdminContentWrapper___l39FI"
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Auth/Auth */ "./containers/Auth/Auth.tsx");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./components/UI/Spinner/Spinner.tsx");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/authContext */ "./context/authContext.tsx");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/portfolioContext */ "./context/portfolioContext.tsx");
/* harmony import */ var _components_Admin_PortfolioManagement_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Admin/PortfolioManagement/Portfolio */ "./components/Admin/PortfolioManagement/Portfolio.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];







const css = __webpack_require__(/*! ./Admin.module.css */ "./containers/Admin/Admin.module.css");

const Admin = () => {
  const authContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_authContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const authState = authContext.state;
  const authDispatch = authContext.dispatch;
  const [sending, setSending] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true);
  const [screensize, setScreensize] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
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
      const expireTime = localStorage.getItem('expireTime');

      if (expireTime) {
        // if auth token has not expired yet
        if (new Date().getTime() < +expireTime) {
          const authInfo = {
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

  const signInHandler = (email, password, idToken) => {
    const authInfo = {
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
      minHeight: `${screensize === null || screensize === void 0 ? void 0 : screensize.height}px`,
      minWidth: `${screensize === null || screensize === void 0 ? void 0 : screensize.width}px`
    }
  }, !authState.signedIn && __jsx(_containers_Auth_Auth__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setSending: setSending,
    signIn: signInHandler
  }), sending && __jsx(Loading, null), authState.signedIn && __jsx(AdminContent, {
    token: authState.idToken
  }));
};

const AdminContent = ({
  token
}) => {
  const portfolioContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context_portfolioContext__WEBPACK_IMPORTED_MODULE_5__["PortfolioContext"]);
  const portfolioState = portfolioContext.state;
  const portfolioDispatch = portfolioContext.dispatch;
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    if (portfolioState && portfolioDispatch) {
      if (portfolioState.items.length === 0) {
        const baseURL = 'https://joonajo-portfolio.firebaseio.com/items.json';
        const newItems = [];
        fetch(baseURL, {
          method: 'get'
        }).then(response => response.json()).then(data => {
          if (data) {
            _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data).forEach(item => {
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
    }
  }, [portfolioState]);
  return __jsx("div", {
    className: css.AdminContentWrapper
  }, loading ? __jsx("div", {
    className: css.Loading
  }, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["CubeSpinner"], null)) : __jsx(_components_Admin_PortfolioManagement_Portfolio__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: portfolioState.items
  }));
};

const Loading = () => __jsx("div", {
  className: css.Loading
}, __jsx(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["CubeSpinner"], null));

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
  signIn
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
        // console.log(data)
        const idToken = data === null || data === void 0 ? void 0 : data.idToken;
        const refreshToken = data === null || data === void 0 ? void 0 : data.refreshToken;
        const email = data === null || data === void 0 ? void 0 : data.email;
        const password = data === null || data === void 0 ? void 0 : data.password;
        const expireTime = String(new Date().getTime() + (data === null || data === void 0 ? void 0 : data.expiresIn) * 1000);
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        localStorage.setItem('expireTime', expireTime);
        setSending(false);
        setError({
          error: false
        });
        signIn(email, password, idToken);
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
    placeholder: !isFocused ? props.placeholder : '',
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

/***/ "./context/authContext.tsx":
/*!*********************************!*\
  !*** ./context/authContext.tsx ***!
  \*********************************/
/*! exports provided: initialAuthState, AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialAuthState = {
  signedIn: false
};

const signIn = (state, action) => {
  var _action$payload, _action$payload2, _action$payload3;

  if (action.type !== 'signin') return _objectSpread({}, state);

  const updatedState = _objectSpread({}, state, {
    signedIn: true,
    email: (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.email,
    password: (_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.password,
    idToken: (_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.idToken
  });

  return _objectSpread({}, updatedState);
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'signin':
      return signIn(state, action);

    case 'signout':
      return {
        signedIn: false
      };

    default:
      return _objectSpread({}, state);
  }
};

const AuthContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext({
  state: initialAuthState
});
const AuthProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useReducer(authReducer, initialAuthState);
  return __jsx(AuthContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

/***/ }),

/***/ "./context/portfolioContext.tsx":
/*!**************************************!*\
  !*** ./context/portfolioContext.tsx ***!
  \**************************************/
/*! exports provided: Languages, TPortfolioActionTypes, initialPortfolioState, portfolioReducer, PortfolioContext, PortfolioProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPortfolioActionTypes", function() { return TPortfolioActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPortfolioState", function() { return initialPortfolioState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioReducer", function() { return portfolioReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioContext", function() { return PortfolioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioProvider", function() { return PortfolioProvider; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const Languages = {
  React: 'React',
  TypeScript: 'TypeScript',
  JavaScript: 'JavaScript',
  Cpp: 'C++',
  NextJS: 'NextJS'
};
let TPortfolioActionTypes;

(function (TPortfolioActionTypes) {
  TPortfolioActionTypes["SET_ITEMS"] = "SET_ITEMS";
  TPortfolioActionTypes["EDIT_ITEM"] = "EDIT_ITEM";
  TPortfolioActionTypes["DELETE_ITEM"] = "DELETE_ITEM";
  TPortfolioActionTypes["ADD_ITEM"] = "ADD_ITEM";
})(TPortfolioActionTypes || (TPortfolioActionTypes = {}));

const initialPortfolioState = {
  items: []
};

const setItems = (state, action) => {
  if (action.type !== TPortfolioActionTypes.SET_ITEMS) return _objectSpread({}, state);
  return _objectSpread({}, state, {
    items: action.payload
  });
};

const addItem = (state, action) => {
  if (action.type !== TPortfolioActionTypes.ADD_ITEM) return _objectSpread({}, state);
  const updatedItems = [...state.items];
  updatedItems.push(action.payload);
  return _objectSpread({}, state, {
    items: updatedItems
  });
};

const deleteItem = (state, action) => {
  if (action.type !== TPortfolioActionTypes.DELETE_ITEM) return _objectSpread({}, state);
  const updatedItems = [...state.items].filter(item => item.title !== action.payload);
  return _objectSpread({}, state, {
    items: updatedItems
  });
};

const portfolioReducer = (state = initialPortfolioState, action) => {
  switch (action.type) {
    case TPortfolioActionTypes.SET_ITEMS:
      return setItems(state, action);

    case TPortfolioActionTypes.DELETE_ITEM:
      return deleteItem(state, action);

    case TPortfolioActionTypes.EDIT_ITEM:
      return _objectSpread({}, state);

    case TPortfolioActionTypes.ADD_ITEM:
      return addItem(state, action);

    default:
      return _objectSpread({}, state);
  }
};
const PortfolioContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext({
  state: initialPortfolioState
});
const PortfolioProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useReducer(portfolioReducer, initialPortfolioState);
  return __jsx(PortfolioContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

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
  faSignInAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignInAlt"],
  faSignOutAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignOutAlt"],
  faPlus: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"],
  faTrash: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"],
  faEdit: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"]
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
/* harmony import */ var _containers_Admin_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Admin/Admin */ "./containers/Admin/Admin.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const css = __webpack_require__(/*! ./index.module.css */ "./pages/admin/index.module.css");

const AdminPage = () => {
  return __jsx(_containers_Admin_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ }),

/***/ 3:
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