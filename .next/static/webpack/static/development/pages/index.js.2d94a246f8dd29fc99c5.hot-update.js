webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Content/Content.tsx":
/*!****************************************!*\
  !*** ./components/Content/Content.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _portfolio_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../portfolio/portfolio */ "./portfolio/portfolio.ts");
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/portfolioContext */ "./context/portfolioContext.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Item = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../Item/Item */ "./components/Item/Item.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Item/Item */ "./components/Item/Item.tsx")];
    },
    modules: ['../Item/Item']
  }
});

var css = __webpack_require__(/*! ./Content.module.css */ "./components/Content/Content.module.css");

var Content = function Content() {
  var portfolioContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_portfolioContext__WEBPACK_IMPORTED_MODULE_4__["PortfolioContext"]);
  var portfolioState = portfolioContext.state;
  return __jsx("div", {
    className: css.Content
  }, __jsx("h2", {
    className: css.Title
  }, "Portfolio"), _portfolio_portfolio__WEBPACK_IMPORTED_MODULE_3__["portfolioItems"].map(function (item) {
    return __jsx(Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.title
    }, item));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./portfolio/portfolio.ts":
/*!********************************!*\
  !*** ./portfolio/portfolio.ts ***!
  \********************************/
/*! exports provided: items, portfolioItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioItems", function() { return portfolioItems; });
/* harmony import */ var _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/portfolioContext */ "./context/portfolioContext.tsx");

var items = {
  ClassicGames: {
    title: 'Classic Games',
    language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].React, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].TypeScript, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].NextJS],
    link: 'https://classics-next.joonajo.now.sh',
    githubLink: 'https://github.com/joonajo/classics-next',
    description: "Built with React + TypeScript + NextJS. A web app with all-time classic games Minesweeper and Snake (Tetris WIP). Own leaderboard for each game and each difficulty, stored in a Firebase database.",
    video_src: '/videos/classics.mp4',
    gif_src: '/gifs/classics.gif',
    desktop: true,
    mobile: false
  },
  NasaHub: {
    title: 'Nasa Portal',
    language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].React, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].TypeScript, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].NextJS],
    link: 'https://nasa-portal.now.sh',
    githubLink: 'https://github.com/joonajo/nasa-portal',
    description: 'Built with React + TypeScript + Redux + NextJS. Utilizes open NASA APIs. Check out the Astronomy Picture of the Day (APOD), latest Mars rover images as well as Earth from the space with the EPIC API. PWA & Lighthouse optimized.',
    video_src: '/videos/nasahub.mp4',
    gif_src: '/gifs/nasahub.gif',
    desktop: true,
    mobile: true
  },
  WeatherApp: {
    title: 'Weather App',
    language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].React, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].TypeScript],
    link: 'https://weatherr.web.app',
    githubLink: 'https://github.com/joonajo/Weather-app',
    description: 'Built with React + TypeScript + Redux. Utilizes three different APIs (OpenWeatherMap, TimezoneDB & Geonames) to seamlessly check the weather all over the world, with timezones adjusted accordingly.',
    video_src: '/videos/weather.mp4',
    gif_src: '/gifs/weatherapp.gif',
    desktop: true,
    mobile: true
  },
  BurgerBuilder: {
    title: 'Burger Builder',
    language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].React, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].JavaScript],
    link: 'https://react-burgerapp-d2ef8.web.app',
    githubLink: 'https://github.com/joonajo/Burger-Builder',
    description: 'Built with ReactJS + Redux. Utilizes Firebase account authorization and realtime database. Build your own burger and order it!',
    video_src: '/videos/burger.mp4',
    gif_src: '/gifs/burgerbuilder.gif',
    desktop: true,
    mobile: true
  },
  TodoList: {
    title: 'To-Do List',
    language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].React, _context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].TypeScript],
    link: 'https://todo-reactts.web.app',
    githubLink: 'https://github.com/joonajo/Todo-ReactTS',
    description: 'Built with React + TypeScript. Utilizes Firebase Cloud database (Firestore) and account authorization. Make a todo-list, check/remove items, and keep it saved in the database!',
    video_src: '/videos/todo.mp4',
    gif_src: '/gifs/todo.gif',
    desktop: true,
    mobile: true
  },
  CannonGame: {
    title: 'Cannon Game',
    language: [_context_portfolioContext__WEBPACK_IMPORTED_MODULE_0__["Languages"].Cpp],
    link: 'https://www.youtube.com/watch?v=6rbhqyCm97E',
    githubLink: 'https://github.com/joonajo/CannonGame',
    description: 'Built purely with C++ and the SFML graphics library. A simple Cannon Game against a basic AI.',
    video_src: 'https://media.giphy.com/media/ftB8xRdaDJHzk2v6Ur/giphy.gif',
    gif_src: '/gifs/cannongame.gif',
    desktop: true,
    mobile: false
  }
}; // makes it easy to switch up the order if needed

var portfolioItems = [items.ClassicGames, items.NasaHub, items.WeatherApp, items.TodoList, items.BurgerBuilder, items.CannonGame];

/***/ })

})
//# sourceMappingURL=index.js.2d94a246f8dd29fc99c5.hot-update.js.map