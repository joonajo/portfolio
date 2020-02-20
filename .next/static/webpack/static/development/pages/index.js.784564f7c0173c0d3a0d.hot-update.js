webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


var Languages = {
  React: 'React',
  TypeScript: 'TypeScript',
  JavaScript: 'JavaScript',
  Cpp: 'C++',
  NextJS: 'NextJS'
};
var TPortfolioActionTypes;

(function (TPortfolioActionTypes) {
  TPortfolioActionTypes["SET_ITEMS"] = "SET_ITEMS";
  TPortfolioActionTypes["EDIT_ITEM"] = "EDIT_ITEM";
  TPortfolioActionTypes["DELETE_ITEM"] = "DELETE_ITEM";
  TPortfolioActionTypes["ADD_ITEM"] = "ADD_ITEM";
})(TPortfolioActionTypes || (TPortfolioActionTypes = {}));

var initialPortfolioState = {
  items: []
};

var sortItems = function sortItems(itemA, itemB) {
  return itemA.order - itemB.order;
};

var setItems = function setItems(state, action) {
  if (action.type !== TPortfolioActionTypes.SET_ITEMS) return _objectSpread({}, state);

  var sortedItems = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(action.payload).sort(sortItems);

  return _objectSpread({}, state, {
    items: sortedItems
  });
};

var addItem = function addItem(state, action) {
  if (action.type !== TPortfolioActionTypes.ADD_ITEM) return _objectSpread({}, state);

  var updatedItems = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(state.items);

  updatedItems.push(action.payload);
  updatedItems.sort(sortItems);
  return _objectSpread({}, state, {
    items: updatedItems
  });
};

var deleteItem = function deleteItem(state, action) {
  if (action.type !== TPortfolioActionTypes.DELETE_ITEM) return _objectSpread({}, state);

  var updatedItems = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(state.items).filter(function (item) {
    return item.title !== action.payload;
  });

  return _objectSpread({}, state, {
    items: updatedItems
  });
};

var editItem = function editItem(state, action) {
  if (action.type !== TPortfolioActionTypes.EDIT_ITEM) return _objectSpread({}, state);
  return _objectSpread({}, state);
};

var portfolioReducer = function portfolioReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPortfolioState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TPortfolioActionTypes.SET_ITEMS:
      return setItems(state, action);

    case TPortfolioActionTypes.DELETE_ITEM:
      return deleteItem(state, action);

    case TPortfolioActionTypes.EDIT_ITEM:
      return editItem(state, action);

    case TPortfolioActionTypes.ADD_ITEM:
      return addItem(state, action);

    default:
      return _objectSpread({}, state);
  }
};
var PortfolioContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext({
  state: initialPortfolioState
});
var PortfolioProvider = function PortfolioProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_9___default.a.useReducer(portfolioReducer, initialPortfolioState),
      _React$useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return __jsx(PortfolioContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=index.js.784564f7c0173c0d3a0d.hot-update.js.map