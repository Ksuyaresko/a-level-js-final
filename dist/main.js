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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: getTemplate, getDate, insertTemplate, createEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTemplate\", function() { return getTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDate\", function() { return getDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertTemplate\", function() { return insertTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEl\", function() { return createEl; });\nconst getTemplate = async (url) => {\r\n    return (\r\n        await fetch(url)\r\n    ).text()\r\n};\r\n\r\nconst getDate = async (url, options) => {\r\n    return (\r\n        await fetch(`https://a-level-final.firebaseio.com/${url}`, options)\r\n    ).json()\r\n};\r\n\r\nfunction insertTemplate(str) {\r\n    return str.split(/\\{([^<|>]+)\\}/g).map((item, index) => {\r\n        return index % 2 === 1 || index === 1 ? eval(item): item\r\n    }).join('')\r\n}\r\n\r\nfunction createEl(container, tag = \"div\", attrs) {\r\n    const newEl =  container.appendChild(\r\n        document.createElement(tag)\r\n    );\r\n    if(attrs) for(let attr in attrs) {\r\n        newEl[attr] = attrs[attr]\r\n    }\r\n    return newEl\r\n}\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: appRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appRoot\", function() { return appRoot; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n/* harmony import */ var _modules_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/root */ \"./src/modules/root.js\");\n/* harmony import */ var _modules_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/main-page */ \"./src/modules/main-page.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_app_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/app-link */ \"./src/modules/app-link.js\");\n/* harmony import */ var _modules_aside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/aside */ \"./src/modules/aside.js\");\n/* harmony import */ var _modules_article_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/article-page */ \"./src/modules/article-page.js\");\n/* harmony import */ var _modules_admin_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/admin-page */ \"./src/modules/admin-page.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ncustomElements.define (\r\n    'app-root',\r\n    _modules_root__WEBPACK_IMPORTED_MODULE_1__[\"RootElem\"]\r\n);\r\n\r\ncustomElements.define (\r\n    'app-header',\r\n    _modules_header__WEBPACK_IMPORTED_MODULE_3__[\"Header\"]\r\n);\r\n\r\ncustomElements.define (\r\n    'app-footer',\r\n    _modules_footer__WEBPACK_IMPORTED_MODULE_4__[\"Footer\"]\r\n);\r\n\r\ncustomElements.define (\r\n    'app-link',\r\n    _modules_app_link__WEBPACK_IMPORTED_MODULE_5__[\"AppLink\"]\r\n);\r\n\r\ncustomElements.define (\r\n    'app-aside',\r\n    _modules_aside__WEBPACK_IMPORTED_MODULE_6__[\"Aside\"]\r\n);\r\n\r\ncustomElements.define (\r\n    'article-page',\r\n    _modules_article_page__WEBPACK_IMPORTED_MODULE_7__[\"ArticlePage\"]\r\n);\r\n\r\ncustomElements.define (\r\n    'admin-page',\r\n    _modules_admin_page__WEBPACK_IMPORTED_MODULE_8__[\"AdminPage\"]\r\n);\r\n\r\ncustomElements.define (\r\n    'main-page',\r\n    _modules_main_page__WEBPACK_IMPORTED_MODULE_2__[\"MainPage\"]\r\n);\r\n\r\nconst root = document.getElementById('root');\r\n\r\nconst appRoot = root.appendChild(\r\n    document.createElement('app-root')\r\n);\r\n\r\nwindow.onpopstate = (event) => {\r\n    _modules_root__WEBPACK_IMPORTED_MODULE_1__[\"RootElem\"].setRoot(appRoot);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/admin-page.js":
/*!***********************************!*\
  !*** ./src/modules/admin-page.js ***!
  \***********************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdminPage\", function() { return AdminPage; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n\r\n\r\n\r\nclass AdminPage extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.dataPromise = this.fetchData()\r\n    }\r\n    connectedCallback() {\r\n        _footer__WEBPACK_IMPORTED_MODULE_1__[\"currentUser\"] && _footer__WEBPACK_IMPORTED_MODULE_1__[\"currentUser\"].admin ? this.render(): this.notAdminUser()\r\n    }\r\n\r\n    fetchData() {\r\n        return Promise.all([\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/admin/admin.html'),\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('posts.json')\r\n        ])\r\n    }\r\n    async render() {\r\n        [ this.template, this.data ] =\r\n            await this.dataPromise;\r\n\r\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\r\n\r\n        this.data.initialValue = {\r\n            body: `<p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.</p>\r\n                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>`,\r\n            tag: 'Article Tag',\r\n            title: 'New Article Title'\r\n\r\n        };\r\n\r\n        [this.pageTitle, this.saveBtn, this.cancelBtn, this.articleTag, this.articleTitle, this.articleText, this.articles, this.image, this.imagesContainer ] =\r\n            ['admin-title', 'admin-save-btn', 'admin-cancel-btn', 'admin-article-tag', 'admin-article-title', 'admin-article-text', 'admin-articles', 'admin-image', 'article-images-container']\r\n                .map( item => document.getElementById(item));\r\n\r\n        this.articles && this.articles.children.length === 0 ? this.showArticlesTitles() : null;\r\n    }\r\n\r\n    notAdminUser() {\r\n        this.innerHTML = `\r\n            <div class=\"no-access\">You don't have access rights</br> Or you aren't authorize</div>\r\n        `\r\n    }\r\n\r\n    showArticlesTitles() {\r\n        for( let article in this.data) {\r\n            let art = article !== 'initialValue' ? Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.articles, 'div', {\r\n                innerHTML: `${this.data[article].title}`,\r\n                className: 'admin-article__list-item',\r\n                onclick: this.addAtricle.bind(this, article)\r\n            }) : null\r\n            art ? art.setAttribute('data-id', this.data[article].id) : null\r\n        }\r\n        this.saveBtn.onclick = this.saveArticle.bind(this);\r\n        this.image.onchange = this.imagePreview.bind(this);\r\n        this.cancelBtn.onclick = this.addAtricle.bind(this, 'initialValue')\r\n    }\r\n\r\n    imagePreview(event) {\r\n        this.readFile(event.target.files[0])\r\n            .then(img => !this.articleImage ? this.articleImage = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\r\n                Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.imagesContainer, 'div', {\r\n                    className: 'article__img-container'\r\n                }),\r\n                'img',\r\n                {\r\n                    src: img\r\n                }) : this.ArticleImage.src = img\r\n            )\r\n    }\r\n\r\n    readFile(file) {\r\n        return new Promise(resolve => {\r\n            let reader = new FileReader ();\r\n            reader.onload = (event) => {\r\n                resolve(event.target.result)\r\n            }\r\n            reader.readAsDataURL(file);\r\n        })\r\n    }\r\n\r\n    addAtricle(article) {\r\n        this.pageTitle.innerText =\r\n            article === 'initialValue' ?\r\n                'Add Article' : 'Edit Article'\r\n        this.articleTag.innerText = this.data[article].tag\r\n        this.articleTitle.innerText = this.data[article].title\r\n        this.articleText.innerHTML = this.data[article].body\r\n        this.saveBtn.onclick = function(event) {\r\n            this.saveArticle(event, article);\r\n        }.bind(this)\r\n    }\r\n\r\n    async saveArticle(event, article) {\r\n        let url = article ? `posts/${article}.json` : 'posts.json';\r\n        await Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])(url, {\r\n            method: article ? \"PUT\" : \"POST\",\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify({\r\n                title: this.articleTitle.innerText,\r\n                body: this.articleText.innerHTML,\r\n                tag: this.articleTag.innerText,\r\n                image: this.articleImage ? this.articleImage.src : null\r\n            })\r\n        }).then( response => console.log(response));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/admin-page.js?");

/***/ }),

/***/ "./src/modules/app-link.js":
/*!*********************************!*\
  !*** ./src/modules/app-link.js ***!
  \*********************************/
/*! exports provided: AppLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppLink\", function() { return AppLink; });\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ \"./src/modules/root.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n\r\nclass AppLink extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n    }\r\n    connectedCallback() {\r\n        this.onclick = (event) => {\r\n            window.history.pushState({}, '', event.target.getAttribute('href'));\r\n            _root__WEBPACK_IMPORTED_MODULE_0__[\"RootElem\"].setRoot(_index__WEBPACK_IMPORTED_MODULE_1__[\"appRoot\"]);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/app-link.js?");

/***/ }),

/***/ "./src/modules/article-page.js":
/*!*************************************!*\
  !*** ./src/modules/article-page.js ***!
  \*************************************/
/*! exports provided: ArticlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArticlePage\", function() { return ArticlePage; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\r\n\r\nclass ArticlePage extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.dataPromise = this.fetchData()\r\n    }\r\n    connectedCallback() {\r\n        this.render()\r\n    }\r\n\r\n    fetchData() {\r\n        return Promise.all([\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/article/article.html'),\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])(\r\n                `${window.location.pathname\r\n                    .split('/posts-')\r\n                    .join('/posts/')}.json`\r\n            )\r\n        ])\r\n    }\r\n\r\n    async render() {\r\n        [ this.template, this.data ] =\r\n            await this.dataPromise;\r\n\r\n        this.className = 'article-page';\r\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\r\n        this.imageContainer = document.getElementById('article-img-container');\r\n\r\n        this.data.image && this.imageContainer ? Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.imageContainer, 'div', { className: 'article__img-container' }),\r\n            'img',\r\n            {\r\n                src: this.data.image\r\n            }) : null\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/article-page.js?");

/***/ }),

/***/ "./src/modules/aside.js":
/*!******************************!*\
  !*** ./src/modules/aside.js ***!
  \******************************/
/*! exports provided: Aside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Aside\", function() { return Aside; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\r\n\r\nclass Aside extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.dataPromise = this.fetchData()\r\n    }\r\n    connectedCallback() {\r\n        this.render()\r\n    }\r\n    fetchData() {\r\n        return Promise.all([\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/layout/aside.html'),\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])(`posts.json`)\r\n        ])\r\n    }\r\n    showLinks() {\r\n        for(let post in this.data) {\r\n            let postLink = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.aside, 'app-link', {\r\n                className: 'aside__item',\r\n                innerText: this.data[post].title,\r\n            });\r\n            postLink.setAttribute('href', `posts-${post}`)\r\n        }\r\n        this.btn.onclick = function (event) {\r\n            this.classList.toggle('--opened')\r\n        }.bind(this)\r\n    }\r\n    async render() {\r\n        [ this.template, this.data ] =\r\n            await this.dataPromise;\r\n\r\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\r\n\r\n        [this.btn, this.aside] = ['aside__btn', 'aside']\r\n            .map(item => document.getElementById(item));\r\n\r\n        this.aside ? this.showLinks() : null;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/aside.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/*! exports provided: currentUser, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentUser\", function() { return currentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n\r\nlet currentUser = {};\r\n\r\nclass Footer extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.dataPromise = this.fetchData();\r\n        this.registerCred = {\r\n            login: null,\r\n            password: null,\r\n            passwordConf: false,\r\n            photo: null\r\n        }\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render()\r\n    }\r\n\r\n    fetchData() {\r\n        return Promise.all([\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/layout/footer.html'),\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('users.json')\r\n        ])\r\n    }\r\n    async render() {\r\n        [ this.template, this.data ] =\r\n            await this.dataPromise;\r\n\r\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\r\n\r\n        this.form = this.querySelector('#form');\r\n\r\n        this.form.onsubmit = function (event) {\r\n            event.preventDefault();\r\n            this.validateUserCred() ? this.showRegistration() : this.postUserData()\r\n        }.bind(this);\r\n\r\n        this.formTitle = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'div', {\r\n            className: 'login__title font-accent',\r\n            innerText: 'Enter your login'\r\n        });\r\n\r\n        this.inputs = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'div', {\r\n            className: 'login__inputs-box',\r\n        });\r\n\r\n        this.isAuthorized(this.data) ?\r\n            null : this.showForm()\r\n    }\r\n\r\n    showForm() {\r\n        this.liginInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\r\n            type: 'text',\r\n            className: 'login__input font-accent',\r\n            placeholder: 'login',\r\n            name: 'login',\r\n            onchange: function (event) {\r\n                for ( let user in this.data) {\r\n                    this.data[user].login === event.target.value ?\r\n                        this.showPassInput(this.data[user]) : null\r\n                }\r\n            }.bind(this)\r\n        });\r\n        this.logInbtn = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'button', {\r\n            className: 'article__link font-accent',\r\n            innerText: 'Log in',\r\n        })\r\n    }\r\n\r\n    isAuthorized(users) {\r\n\r\n        let userLogin = document.cookie.match(new RegExp(/(login=[a-zA-Z0-9]*)/)) ?\r\n            document.cookie.match(new RegExp(/(login=[a-zA-Z0-9]*)/))[0].split('=')[1] : null;\r\n\r\n        let userHash = document.cookie.match(new RegExp(/;?(hash=[a-zA-Z0-9]*)/)) ?\r\n            document.cookie.match(new RegExp(/(hash=[a-zA-Z0-9]*)/))[0].split('=')[1] : null;\r\n\r\n        for ( let user in users) {\r\n            if (users[user].login === userLogin && users[user].hash === userHash) {\r\n                this.userAuthorized(users[user]);\r\n                return true\r\n            }\r\n        }\r\n        return false\r\n    }\r\n\r\n    validateUserCred() {\r\n        for(let key in this.registerCred) {\r\n            if(!this.registerCred[key]) return true\r\n        }\r\n        return false\r\n    }\r\n\r\n    showRegistration() {\r\n        this.formTitle.innerText = 'There is no such user. Would like to register?';\r\n        this.logInbtn.disabled = true;\r\n        this.logInbtn.innerText = 'Sign In';\r\n        this.registerCred.login = this.liginInput.value;\r\n\r\n        this.liginInput.oninput = function (event) {\r\n            let test = this.data.users.filter (\r\n                login => login.login === event.target.value\r\n            ).length > 0;\r\n            event.target.style.borderColor = test ? \"red\" : \"\";\r\n            event.target.title = test ? \"User is already exist\" : \"\";\r\n            this.registerCred.login = test ? null : event.target.value;\r\n            this.logInbtn.disabled = this.validateUserCred();\r\n        }.bind(this);\r\n\r\n        this.passRegistrationInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\r\n            type: 'password',\r\n            className: 'login__input font-accent',\r\n            placeholder: 'password',\r\n            name: 'register-pass',\r\n            oninput: function (event) {\r\n                let test = event.target.value.length < 6;\r\n                event.target.style.borderColor = test ? \"red\" : \"\";\r\n                event.target.title = test ? \"Password should contain at least 6 characters\" : \"\";\r\n                this.registerCred.password = test ? null : event.target.value;\r\n                this.logInbtn.disabled = this.validateUserCred();\r\n            }.bind(this)\r\n        });\r\n        this.passConfirmInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\r\n            type: 'password',\r\n            className: 'login__input font-accent',\r\n            placeholder: 'confirm password',\r\n            name: 'register-pass',\r\n            oninput: function (event) {\r\n                let test = event.target.value !== this.registerCred.password;\r\n                event.target.style.borderColor = test ? \"red\" : \"\";\r\n                event.target.title = test ? \"Should be same as password\" : \"\";\r\n                this.registerCred.passwordConf = !test;\r\n                this.logInbtn.disabled = this.validateUserCred();\r\n            }.bind(this)\r\n        });\r\n        this.fileLable = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'label', {\r\n            className: 'login__input font-accent file-label',\r\n            textContent: 'Choose photo'\r\n        });\r\n        this.fileInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.fileLable, 'input', {\r\n            type: 'file',\r\n            className: 'login__input font-accent file-input',\r\n            name: 'file',\r\n            id: 'avatar',\r\n            onchange: function (event) {\r\n                event.target.files[0].type.indexOf('image') === 0 && event.target.files[0].size <= 100000 ?\r\n                    this.showPhoto(event.target.files[0]).then(img => {\r\n                        this.registerCred.photo = img;\r\n                        this.imgPreview ? null : this.imgPreview = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'img', {\r\n                            className: 'image-preview',\r\n                            alt: 'avatar'\r\n                        });\r\n                        this.imgPreview.src = img;\r\n\r\n                        if(this.fileLable.classList.contains('error')) {\r\n                            this.fileLable.classList.remove('error');\r\n                            this.errorFileMsg.remove();\r\n                        }\r\n                        this.logInbtn.disabled = this.validateUserCred();\r\n                    }) :\r\n                    this.showPhotoError(event.target);\r\n            }.bind(this)\r\n        });\r\n    }\r\n\r\n    showPhoto(file) {\r\n        return new Promise(resolve => {\r\n            let reader = new FileReader ();\r\n            reader.onload = event => {\r\n                resolve(event.target.result)\r\n            }\r\n            reader.readAsDataURL(file);\r\n        })\r\n    }\r\n\r\n    showPhotoError(target) {\r\n        this.registerCred.photo = null;\r\n        this.fileLable.classList.add('error');\r\n        this.errorFileMsg = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'span', {\r\n            innerText: 'Only for images less then 100 kb'\r\n        });\r\n        this.logInbtn.disabled = this.validateUserCred();\r\n    }\r\n\r\n    showPassInput(user) {\r\n        this.formTitle.innerText = 'Enter your password';\r\n        this.liginInput.remove();\r\n        this.passInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\r\n            type: 'password',\r\n            class: 'login__input font-accent',\r\n            placeholder: 'password',\r\n            name: 'password',\r\n            oninput: function (event) {\r\n                user.hash === Sha256.hash ( event.target.value )?\r\n                    this.userAuthorized(user, true) : null\r\n            }.bind(this)\r\n        });\r\n    }\r\n\r\n    async postUserData() {\r\n        let userData = {\r\n            login: this.registerCred.login,\r\n            hash: Sha256.hash ( this.registerCred.password ),\r\n            photo: this.registerCred.photo\r\n        }\r\n        await Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('users.json', {\r\n            method: \"POST\",\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify(userData)\r\n        }).then(userId => {\r\n            this.userAuthorized(userData, true)\r\n        }, error => {\r\n            this.formTitle.innerText = `Oops, something went wrong :(`;\r\n            this.passInput.remove();\r\n            this.logInbtn.remove();\r\n            console.log(error);\r\n        })\r\n    }\r\n\r\n    saveUserCredCookie(login, pass) {\r\n        let expDate = new Date (\r\n            new Date(new Date().setMonth(new Date().getMonth() + 1))\r\n        );\r\n        document.cookie = `login=${login}; expires=${expDate}`;\r\n        document.cookie = `hash=${pass}; expires=${expDate}`;\r\n    }\r\n\r\n    userAuthorized(user, saveToCookie) {\r\n        saveToCookie ?\r\n            this.saveUserCredCookie( user.login, user.hash ) : null;\r\n        currentUser = user;\r\n        this.formTitle.innerText = `Hi, ${user.login} !`;\r\n        this.inputs ? this.inputs.innerHTML = '' : null;\r\n        this.logInbtn ? this.logInbtn.remove() : null;\r\n        this.authorizedPhotoShow = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'img', {\r\n            src: user.photo,\r\n            alt: 'avatar',\r\n            className: 'image-preview'\r\n        });\r\n\r\n        const loggedUserActions = JSON.parse(localStorage.getItem ( \"user\" ));\r\n\r\n        loggedUserActions && loggedUserActions.login === user.login && saveToCookie ?\r\n            this.redirectToLastPage(loggedUserActions) :\r\n                null;\r\n\r\n        user.admin ? this.showAdminLink() : null;\r\n\r\n        this.logOutBtn = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'span', {\r\n            className: 'article__link font-accent',\r\n            innerText: 'Log out',\r\n            onclick: function (event) {\r\n                this.logOut()\r\n            }.bind(this)\r\n        });\r\n    }\r\n\r\n    logOut() {\r\n        currentUser = {};\r\n        this.authorizedPhotoShow.remove();\r\n        this.logOutBtn.remove();\r\n        this.showForm();\r\n        this.formTitle.innerText = 'Enter your login';\r\n        this.adminPageLink ? this.adminPageLink.remove() : null;\r\n\r\n        document.cookie = \"login=; expires=\" +\r\n            new Date ( 0 ).toUTCString ();\r\n\r\n        document.cookie = \"hash=; expires=\" +\r\n            new Date ( 0 ).toUTCString ()\r\n    }\r\n\r\n    redirectToLastPage(loggedUserActions) {\r\n        window.history.pushState({}, '', loggedUserActions.lastPage);\r\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"appRoot\"].setAttribute('root', loggedUserActions.lastPage)\r\n    }\r\n\r\n    showAdminLink() {\r\n        this.adminPageLink = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'app-link', {\r\n            className: 'font-accent article__link',\r\n            textContent: 'Go to Admin Page'\r\n        })\r\n        this.adminPageLink.setAttribute('href', '/admin');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\r\n\r\nclass Header extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n    }\r\n    async connectedCallback() {\r\n        this.innerHTML = `\r\n        <header class=\"header\">\r\n            <app-link href=\"/\" class=\"header__title\">Marcy...</app-link>\r\n            <h1 class=\"header__sub-title font-accent\">Story</h1>\r\n        </header>`\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/main-page.js":
/*!**********************************!*\
  !*** ./src/modules/main-page.js ***!
  \**********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainPage\", function() { return MainPage; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\r\n\r\nclass MainPage extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.posts = [];\r\n        this.dataPromise = this.fetchData()\r\n    }\r\n    connectedCallback() {\r\n        this.render()\r\n    }\r\n    fetchData() {\r\n        return Promise.all([\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/main-page/main-page.html'),\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('posts/0.json'),\r\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('posts/1.json'),\r\n        ])\r\n    }\r\n    async render() {\r\n        [ this.template, this.posts[0], this.posts[1] ] =\r\n            await this.dataPromise;\r\n\r\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/main-page.js?");

/***/ }),

/***/ "./src/modules/root.js":
/*!*****************************!*\
  !*** ./src/modules/root.js ***!
  \*****************************/
/*! exports provided: RootElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RootElem\", function() { return RootElem; });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n\r\n\r\nconst routs = {\r\n    '/' : '<main-page></main-page>',\r\n    '/posts' : `<article-page></article-page>`,\r\n    '/admin' : `<admin-page></admin-page>`\r\n}\r\n\r\nclass RootElem extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        constructor.instance = this\r\n    }\r\n    connectedCallback() {\r\n        this.innerHTML = this.getInnerHtml();\r\n        this.setAttribute('root', window.location.pathname);\r\n\r\n    }\r\n    getInnerHtml(redirect) {\r\n        let elem = redirect ? redirect.split('-')[0] :\r\n            window.location.pathname.split('-')[0];\r\n\r\n        return `\r\n        <app-aside></app-aside>\r\n        <app-header></app-header>\r\n        ${routs[elem]}\r\n        <app-footer></app-footer>`;\r\n    }\r\n\r\n    logUserAction() {\r\n        _footer__WEBPACK_IMPORTED_MODULE_0__[\"currentUser\"].login ?\r\n            localStorage.setItem (\r\n                \"user\",\r\n                JSON.stringify ( {\r\n                    login: _footer__WEBPACK_IMPORTED_MODULE_0__[\"currentUser\"].login,\r\n                    lastPage: window.location.pathname\r\n                } )\r\n            ) : null\r\n    }\r\n\r\n    static get observedAttributes() {\r\n        return [ 'root']\r\n    }\r\n\r\n    attributeChangedCallback( attrName, oldVal, newVal ) {\r\n        this.innerHTML = this.getInnerHtml(newVal);\r\n        this.logUserAction();\r\n    }\r\n\r\n    static setRoot(elem) {\r\n        elem.setAttribute('root', window.location.pathname)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/root.js?");

/***/ })

/******/ });