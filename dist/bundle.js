/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    box-sizing: border-box;\\n    background-color: #ffd9c5;\\n}\\n  \\n*, *::before, *::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: inherit;\\n}\\n\\n#restaurant-name-div {\\n    font-family: 'Dancing Script', cursive;\\n    text-align: center;\\n    margin: 15px 0px;\\n}\\n\\n#restaurant-name-div h1 {\\n    font-size: 62px;\\n    padding-bottom: 10px;\\n    color: #277da1;\\n}\\n\\n#restaurant-name-div h2 {\\n    font-size: 32px;\\n    color: #90BE6D;\\n}\\n\\nnav {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n    margin: 0 auto;\\n    width: 95%;\\n}\\n\\nnav button {\\n    flex: 1;\\n    text-align: center;\\n    margin: 0.25em;\\n    padding: 0.25em;\\n    border: thin solid #277da1;\\n    color: #277da1;\\n    font-size: 22px;\\n    text-decoration: none;\\n    font-family: 'Dancing Script', cursive;\\n}\\n\\nnav button.active {\\n    background-color: #90BE6D;\\n}\\n\\n.banner-image-div {\\n    text-align: center;\\n}\\n\\n.banner-image-div img {\\n    height: auto;\\n    width: 95%;\\n    border-radius: 8px;\\n    margin: 15px auto;\\n    max-height: 400px;\\n    object-fit: cover;\\n}\\n\\n.home-paragraphs {\\n    width: 95%;\\n    margin: 0px auto 15px auto;\\n    font-family: 'Dancing Script', cursive;\\n    font-size: 28px;\\n    color: #277da1;\\n}\\n\\n@media only screen and (min-width: 760px) {\\nnav {\\n    flex-direction: row;\\n}\\n}\\n\\n.menu-card {\\n    display: flex;\\n    padding: 20px;\\n    background-color: #90BE6D;\\n    width: 95%;\\n    margin: 0px auto 22px auto;\\n    font-family: 'Dancing Script', cursive;\\n    font-size: 28px;\\n    text-align: center;\\n    align-items: center;\\n    color: #277da1;\\n    border-radius: 8px;\\n}\\n\\n.card-p {\\n    flex: 2;\\n}\\n\\n.card-img {\\n    padding-right: 20px;\\n    flex: 1;\\n}\\n\\n.card-img img {\\n    max-width: 100%;\\n    border-radius: 8px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-header.js */ \"./src/module-header.js\");\n/* harmony import */ var _module_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-home.js */ \"./src/module-home.js\");\n/* harmony import */ var _module_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-menu.js */ \"./src/module-menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconsole.log(\"Webpack is working\");\n\nwindow.onload = function() {\n    (0,_module_header_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();\n    (0,_module_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n    document.getElementById(\"home-button\").addEventListener('click', homeClick);\n    document.getElementById(\"menu-button\").addEventListener('click', menuClick);\n    document.getElementById(\"locations-button\").addEventListener('click', locationsClick);\n}\n\nfunction homeClick() {\n    const homeButton = document.getElementById(\"home-button\");\n    console.log(\"homeClick() ran\");\n    if (homeButton.className === \"active\") {\n        console.log('home page already active');\n        return;\n    }\n    else {\n        eraseContent();\n        (0,_module_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n        clearClass();\n        homeButton.classList = \"active\";\n    }\n}\n\nfunction menuClick() {\n    const menuButton = document.getElementById(\"menu-button\");\n    console.log(\"menuClick() ran\");\n    if (menuButton.className === \"active\") {\n        console.log('menu page already active');\n        return;\n    }\n    else {\n        eraseContent();\n        (0,_module_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n        clearClass();\n        menuButton.classList = \"active\";\n    }\n}\n\nfunction locationsClick() {\n    const locationsButton = document.getElementById(\"locations-button\");\n    console.log(\"locationsClick() ran\");\n    if (locationsButton.className === \"active\") {\n        console.log('locations page already active');\n        return;\n    }\n    else {\n        eraseContent();\n        loadLocations();\n        clearClass();\n        locationsButton.classList = \"active\";\n    }\n}\n\nfunction eraseContent() {\n    const contentDiv = document.getElementById(\"content\");\n    contentDiv.innerHTML = \"\";\n}\n\nfunction clearClass() {\n    document.getElementById(\"home-button\").className = \"\";\n    document.getElementById(\"menu-button\").className = \"\";\n    document.getElementById(\"locations-button\").className = \"\";\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/module-header.js":
/*!******************************!*\
  !*** ./src/module-header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHeader\": () => (/* binding */ loadHeader)\n/* harmony export */ });\nconst loadHeader = () => {\n    // get main div\n    const contentDiv = document.getElementById(\"static-header\");\n    \n    // load header\n    const homeHeader = document.createElement(\"header\");\n    contentDiv.appendChild(homeHeader);\n    \n    const restaurantNameDiv = document.createElement(\"div\");\n    restaurantNameDiv.id = \"restaurant-name-div\";\n    homeHeader.appendChild(restaurantNameDiv);\n    \n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Rice & Spice\";\n    \n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Authentic Lao Cuisine\";\n    \n    restaurantNameDiv.appendChild(h1);\n    restaurantNameDiv.appendChild(h2);\n\n    // load nav\n    const nav = document.createElement(\"nav\");\n    homeHeader.appendChild(nav);\n\n    const buttonHome = document.createElement(\"button\");\n    buttonHome.setAttribute = ('type', 'button');\n    buttonHome.id = \"home-button\";\n    buttonHome.textContent = \"Home\";\n    buttonHome.className = \"active\";\n\n    const buttonMenu = document.createElement(\"button\");\n    buttonMenu.setAttribute = ('type', 'button');\n    buttonMenu.id = \"menu-button\";\n    buttonMenu.textContent = \"Menu\";\n\n    const buttonLocations = document.createElement(\"button\");\n    buttonLocations.setAttribute = ('type', 'button');\n    buttonLocations.id = \"locations-button\";\n    buttonLocations.textContent = \"Locations\";\n\n    // append buttons\n    nav.appendChild(buttonHome);\n    nav.appendChild(buttonMenu);\n    nav.appendChild(buttonLocations);\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/module-header.js?");

/***/ }),

/***/ "./src/module-home.js":
/*!****************************!*\
  !*** ./src/module-home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst loadHome = () => {\n    // get main div\n    const contentDiv = document.getElementById(\"content\");\n    \n    /* load header\n    const homeHeader = document.createElement(\"header\");\n    contentDiv.appendChild(homeHeader);\n    \n    const restaurantNameDiv = document.createElement(\"div\");\n    restaurantNameDiv.id = \"restaurant-name-div\";\n    homeHeader.appendChild(restaurantNameDiv);\n    \n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Rice & Spice\";\n    \n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Authentic Lao Cuisine\";\n    \n    restaurantNameDiv.appendChild(h1);\n    restaurantNameDiv.appendChild(h2);\n\n    // load nav\n    const nav = document.createElement(\"nav\");\n    homeHeader.appendChild(nav);\n\n    const buttonHome = document.createElement(\"button\");\n    buttonHome.setAttribute = ('type', 'button');\n    buttonHome.className = \"active\";\n    buttonHome.id = \"home-button\";\n    buttonHome.textContent = \"Home\";\n\n    const buttonMenu = document.createElement(\"button\");\n    buttonMenu.setAttribute = ('type', 'button');\n    buttonMenu.id = \"menu-button\";\n    buttonMenu.textContent = \"Menu\";\n\n    const buttonLocations = document.createElement(\"button\");\n    buttonLocations.setAttribute = ('type', 'button');\n    buttonLocations.id = \"locations-button\";\n    buttonLocations.textContent = \"Locations\";\n\n    nav.appendChild(buttonHome);\n    nav.appendChild(buttonMenu);\n    nav.appendChild(buttonLocations);\n    */\n\n    // load banner image div and img\n    const bannerImageDiv = document.createElement(\"div\");\n    bannerImageDiv.className = \"banner-image-div\";\n    contentDiv.appendChild(bannerImageDiv);\n\n    const homeImg = document.createElement(\"img\");\n    homeImg.src = \"../static/laos-background.jpg\";\n    homeImg.alt = \"Rice fields in Laos\";\n    bannerImageDiv.appendChild(homeImg);\n\n    // load main paragraphs\n    const homeParagraphsDiv = document.createElement(\"div\");\n    homeParagraphsDiv.className = \"home-paragraphs\";\n    contentDiv.appendChild(homeParagraphsDiv);\n\n    const p1 = document.createElement(\"p\");\n    p1.innerHTML = `For thirty years, Rice and Spice has served up the finest culinary creations in the land, \n    from our minty <i>laap</i> to our fiery papaya salad. Cool off with a fresh smoothie and one\n    of our famous desserts.`;\n\n    const paraBreak = document.createElement('br');\n\n    const p2 = document.createElement(\"p\");\n    p2.innerHTML = `All of our ingredients are sourced fresh locally, with rice harvested from the very fields\n    you'll overlook from our breezy veranda. With a relaxing atmosphere and the best food around,\n    Rice & Spice is a memory you won't soon forget.`;\n\n    homeParagraphsDiv.appendChild(p1);\n    homeParagraphsDiv.appendChild(paraBreak);\n    homeParagraphsDiv.appendChild(p2);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/module-home.js?");

/***/ }),

/***/ "./src/module-menu.js":
/*!****************************!*\
  !*** ./src/module-menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = () => {\n    // get main div\n    const contentDiv = document.getElementById(\"content\");\n    \n    /* load header\n    const homeHeader = document.createElement(\"header\");\n    contentDiv.appendChild(homeHeader);\n    \n    const restaurantNameDiv = document.createElement(\"div\");\n    restaurantNameDiv.id = \"restaurant-name-div\";\n    homeHeader.appendChild(restaurantNameDiv);\n    \n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Rice & Spice\";\n    \n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Authentic Lao Cuisine\";\n    \n    restaurantNameDiv.appendChild(h1);\n    restaurantNameDiv.appendChild(h2);\n\n    // load nav\n    const nav = document.createElement(\"nav\");\n    homeHeader.appendChild(nav);\n\n    const buttonHome = document.createElement(\"button\");\n    buttonHome.setAttribute = ('type', 'button');\n    buttonHome.id = \"home-button\";\n    buttonHome.textContent = \"Home\";\n    buttonHome.classList.remove(\"active\");\n\n    const buttonMenu = document.createElement(\"button\");\n    buttonMenu.setAttribute = ('type', 'button');\n    buttonMenu.className = \"active\";\n    buttonMenu.id = \"menu-button\";\n    buttonMenu.textContent = \"Menu\";\n\n    const buttonLocations = document.createElement(\"button\");\n    buttonLocations.setAttribute = ('type', 'button');\n    buttonLocations.id = \"locations-button\";\n    buttonLocations.textContent = \"Locations\";\n\n    nav.appendChild(buttonHome);\n    nav.appendChild(buttonMenu);\n    nav.appendChild(buttonLocations);\n    */\n\n    // load banner image div and img\n    const bannerImageDiv = document.createElement(\"div\");\n    bannerImageDiv.className = \"banner-image-div\";\n    contentDiv.appendChild(bannerImageDiv);\n\n    const homeImg = document.createElement(\"img\");\n    homeImg.src = \"../static/food-banner.jpg\";\n    homeImg.alt = \"A Lao feast\";\n    bannerImageDiv.appendChild(homeImg);\n\n    // load menu cards div\n    const menuCardsDiv = document.createElement(\"div\");\n    menuCardsDiv.className = \"menu-cards-div\";\n    contentDiv.appendChild(menuCardsDiv);\n\n    // function to create menu cards\n    let menuFactory = (source, alt, description) => {\n        // create and append card div\n        const menuCard = document.createElement('div');\n        menuCard.className = \"menu-card\";\n        menuCardsDiv.appendChild(menuCard);\n        // create card img div\n        const imgDiv = document.createElement('div');\n        imgDiv.className = \"card-img\";\n        menuCard.appendChild(imgDiv);\n        // add image\n        const cardImg = document.createElement('img');\n        cardImg.src = source;\n        cardImg.alt = alt;\n        imgDiv.appendChild(cardImg);\n        // create and append para div\n        const paraDiv = document.createElement('div');\n        paraDiv.className = \"card-p\";\n        menuCard.appendChild(paraDiv);\n        // add paragraph and content\n        const para = document.createElement('p');\n        para.textContent = description;\n        paraDiv.appendChild(para);\n    }\n\n    let src1 = \"../static/pho.jpg\";\n    let alt1 = \"A bowl of pho\";\n    let desc1 = \"Spiced with an array of herbs and flavors, this steaming traditional dish warms the very soul.\";\n    menuFactory(src1, alt1, desc1);\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/module-menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;