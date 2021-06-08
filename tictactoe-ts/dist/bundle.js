/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ \"./src/board.jsx\");\n/* harmony import */ var _restartBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restartBtn */ \"./src/restartBtn.jsx\");\n/* harmony import */ var _gameStateBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameStateBar */ \"./src/gameStateBar.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"app\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_board__WEBPACK_IMPORTED_MODULE_2__[\"Board\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"description t1\"\n      }, \" Player(X) \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"description t2\"\n      }, \" Computer(O) \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_restartBtn__WEBPACK_IMPORTED_MODULE_3__[\"RestartBtn\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gameStateBar__WEBPACK_IMPORTED_MODULE_4__[\"GameStateBar\"], null));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\"content\"));\n\n//# sourceURL=webpack:///./src/app.jsx?");

/***/ }),

/***/ "./src/board.jsx":
/*!***********************!*\
  !*** ./src/board.jsx ***!
  \***********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Board = /*#__PURE__*/function (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  var _super = _createSuper(Board);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _super.call(this, props);\n    _this.state = _this.getInitState();\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"getInitState\",\n    value: function getInitState() {\n      var cells = Array.apply(null, Array(9)).map(function () {\n        return \"\";\n      });\n      return {\n        cells: cells,\n        gameState: \"\"\n      };\n    }\n  }, {\n    key: \"resetState\",\n    value: function resetState() {\n      this.setState(this.getInitState());\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener(\"restart\", function () {\n        return _this2.resetState();\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      var _this3 = this;\n\n      window.removeEventListener(\"restart\", function () {\n        return _this3.resetState();\n      });\n    } // Fire a global event notifying GameState changes\n\n  }, {\n    key: \"handleGameStateChange\",\n    value: function handleGameStateChange(newState) {\n      var event = new CustomEvent(\"gameStateChange\", {\n        \"detail\": this.state.gameState\n      });\n      event.initEvent(\"gameStateChange\", false, true);\n      window.dispatchEvent(event);\n    } // check the game state - use the latest move\n\n  }, {\n    key: \"checkGameState\",\n    value: function checkGameState(cells, latestPos, latestVal) {\n      if (this.state.gameState !== \"\") {\n        return this.state.gameState;\n      } // check row\n\n\n      var result = this.check3Cells(cells, 3 * Math.floor(latestPos / 3), 3 * Math.floor(latestPos / 3) + 1, 3 * Math.floor(latestPos / 3) + 2);\n\n      if (result) {\n        return result;\n      } // check col\n\n\n      result = this.check3Cells(cells, latestPos % 3, latestPos % 3 + 3, latestPos % 3 + 6);\n\n      if (result) {\n        return result;\n      } // check diag\n\n\n      result = this.check3Cells(cells, 0, 4, 8);\n\n      if (result) {\n        return result;\n      }\n\n      result = this.check3Cells(cells, 2, 4, 6);\n\n      if (result) {\n        return result;\n      } // check draw - if all cells are filled\n\n\n      if (this.findAllEmptyCells(cells).length === 0) {\n        return \"Draw\";\n      }\n\n      return \"\";\n    } // check if 3 cells have same non-empty val - return the winner state; otherwise undefined\n\n  }, {\n    key: \"check3Cells\",\n    value: function check3Cells(cells, pos0, pos1, pos2) {\n      if (cells[pos0] === cells[pos1] && cells[pos1] === cells[pos2] && cells[pos0] !== \"\") {\n        if (cells[pos0] === \"X\") {\n          return \"X Wins!\";\n        }\n\n        return \"O Wins!\";\n      } else {\n        return undefined;\n      }\n    } // list all empty cell positions\n\n  }, {\n    key: \"findAllEmptyCells\",\n    value: function findAllEmptyCells(cells) {\n      return cells.map(function (v, i) {\n        if (v === \"\") {\n          return i;\n        } else {\n          return -1;\n        }\n      }).filter(function (v) {\n        return v !== -1;\n      });\n    } // make a move\n\n  }, {\n    key: \"move\",\n    value: function move(pos, val, callback) {\n      var _this4 = this;\n\n      if (this.state.gameState === \"\" && this.state.cells[pos] === \"\") {\n        var newCells = this.state.cells.slice();\n        newCells[pos] = val;\n        var oldState = this.state.gameState;\n        this.setState({\n          cells: newCells,\n          gameState: this.checkGameState(newCells, pos, val)\n        }, function () {\n          if (_this4.state.gameState !== oldState) {\n            _this4.handleGameStateChange(_this4.state.gameState);\n          }\n\n          if (callback) {\n            callback.call(_this4);\n          }\n        });\n      }\n    } // handle a new move from player\n\n  }, {\n    key: \"handleNewPlayerMove\",\n    value: function handleNewPlayerMove(pos) {\n      var _this5 = this;\n\n      this.move(pos, _constants__WEBPACK_IMPORTED_MODULE_1__[\"playerCell\"], function () {\n        // AI make a random move following player's move\n        var emptyCells = _this5.findAllEmptyCells(_this5.state.cells);\n\n        var pos = emptyCells[Math.floor(Math.random() * emptyCells.length)];\n\n        _this5.move(pos, _constants__WEBPACK_IMPORTED_MODULE_1__[\"aiCell\"]);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this6 = this;\n\n      var cells = this.state.cells.map(function (v, i) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, {\n          key: i,\n          pos: i,\n          val: v,\n          handleMove: function handleMove() {\n            return _this6.handleNewPlayerMove(i);\n          }\n        });\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"board\"\n      }, cells);\n    }\n  }]);\n\n  return Board;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar Cell = /*#__PURE__*/function (_React$Component2) {\n  _inherits(Cell, _React$Component2);\n\n  var _super2 = _createSuper(Cell);\n\n  function Cell() {\n    _classCallCheck(this, Cell);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Cell, [{\n    key: \"posToClassName\",\n    value: // position of cell to className\n    function posToClassName(pos) {\n      var className = \"cell\";\n\n      switch (Math.floor(pos / 3)) {\n        case 0:\n          className += \" top\";\n          break;\n\n        case 2:\n          className += \" bottom\";\n          break;\n\n        default:\n          break;\n      }\n\n      switch (pos % 3) {\n        case 0:\n          className += \" left\";\n          break;\n\n        case 2:\n          className += \" right\";\n          break;\n\n        default:\n          break;\n      }\n\n      return className;\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      this.props.handleMove();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this7 = this;\n\n      var name = this.props.val;\n\n      if (this.props.val === \"\") {\n        name = \"\";\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.posToClassName(this.props.pos),\n        onClick: function onClick(e) {\n          return _this7.handleClick(e);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: name\n      }, \" \", this.props.val, \" \"));\n    }\n  }]);\n\n  return Cell;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n//# sourceURL=webpack:///./src/board.jsx?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: playerCell, aiCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerCell\", function() { return playerCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aiCell\", function() { return aiCell; });\nvar playerCell = \"X\";\nvar aiCell = \"O\";\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/gameStateBar.jsx":
/*!******************************!*\
  !*** ./src/gameStateBar.jsx ***!
  \******************************/
/*! exports provided: GameStateBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameStateBar\", function() { return GameStateBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar GameStateBar = /*#__PURE__*/function (_React$Component) {\n  _inherits(GameStateBar, _React$Component);\n\n  var _super = _createSuper(GameStateBar);\n\n  function GameStateBar(props) {\n    var _this;\n\n    _classCallCheck(this, GameStateBar);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      gameState: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(GameStateBar, [{\n    key: \"handleGameStateChange\",\n    value: function handleGameStateChange(e) {\n      this.setState({\n        gameState: e.detail\n      });\n    }\n  }, {\n    key: \"handleRestart\",\n    value: function handleRestart(e) {\n      this.setState({\n        gameState: \"\"\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener(\"gameStateChange\", function (e) {\n        return _this2.handleGameStateChange(e);\n      });\n      window.addEventListener(\"restart\", function (e) {\n        return _this2.handleRestart(e);\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      var _this3 = this;\n\n      window.removeEventListener(\"gameStateChange\", function (e) {\n        return _this3.handleGameStateChange(e);\n      });\n      window.removeEventListener(\"restart\", function (e) {\n        return _this3.handleRestart(e);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"gameStateBar\"\n      }, \" \", this.state.gameState, \" \");\n    }\n  }]);\n\n  return GameStateBar;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n//# sourceURL=webpack:///./src/gameStateBar.jsx?");

/***/ }),

/***/ "./src/restartBtn.jsx":
/*!****************************!*\
  !*** ./src/restartBtn.jsx ***!
  \****************************/
/*! exports provided: RestartBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestartBtn\", function() { return RestartBtn; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar RestartBtn = /*#__PURE__*/function (_React$Component) {\n  _inherits(RestartBtn, _React$Component);\n\n  var _super = _createSuper(RestartBtn);\n\n  function RestartBtn() {\n    _classCallCheck(this, RestartBtn);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(RestartBtn, [{\n    key: \"handleClick\",\n    value: // Fire a global event notifying restart of game\n    function handleClick(e) {\n      var event = document.createEvent(\"Event\");\n      event.initEvent(\"restart\", false, true);\n      window.dispatchEvent(event);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\",\n        className: \"restartBtn\",\n        onClick: function onClick(e) {\n          return _this.handleClick(e);\n        }\n      }, \"Restart\");\n    }\n  }]);\n\n  return RestartBtn;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n//# sourceURL=webpack:///./src/restartBtn.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });