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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTemplate\", function() { return getTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDate\", function() { return getDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertTemplate\", function() { return insertTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEl\", function() { return createEl; });\nconst getTemplate = async (url) => {\n    return (\n        await fetch(url)\n    ).text()\n};\n\nconst getDate = async (url, options) => {\n    return (\n        await fetch(`https://a-level-final.firebaseio.com/${url}`, options)\n    ).json()\n};\n\nfunction insertTemplate(str) {\n    return str.split(/\\{([^<|>]+)\\}/g).map((item, index) => {\n        return index % 2 === 1 || index === 1 ? eval(item): item\n    }).join('')\n}\n\nfunction createEl(container, tag = \"div\", attrs) {\n    const newEl =  container.appendChild(\n        document.createElement(tag)\n    );\n    if(attrs) for(let attr in attrs) {\n        newEl[attr] = attrs[attr]\n    }\n    return newEl\n}\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: appRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appRoot\", function() { return appRoot; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n/* harmony import */ var _modules_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/root */ \"./src/modules/root.js\");\n/* harmony import */ var _modules_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/main-page */ \"./src/modules/main-page.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_app_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/app-link */ \"./src/modules/app-link.js\");\n/* harmony import */ var _modules_aside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/aside */ \"./src/modules/aside.js\");\n/* harmony import */ var _modules_article_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/article-page */ \"./src/modules/article-page.js\");\n/* harmony import */ var _modules_admin_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/admin-page */ \"./src/modules/admin-page.js\");\n\n\n\n\n\n\n\n\n\n\ncustomElements.define (\n    'app-root',\n    _modules_root__WEBPACK_IMPORTED_MODULE_1__[\"RootElem\"]\n);\n\ncustomElements.define (\n    'app-header',\n    _modules_header__WEBPACK_IMPORTED_MODULE_3__[\"Header\"]\n);\n\ncustomElements.define (\n    'app-footer',\n    _modules_footer__WEBPACK_IMPORTED_MODULE_4__[\"Footer\"]\n);\n\ncustomElements.define (\n    'app-link',\n    _modules_app_link__WEBPACK_IMPORTED_MODULE_5__[\"AppLink\"]\n);\n\ncustomElements.define (\n    'app-aside',\n    _modules_aside__WEBPACK_IMPORTED_MODULE_6__[\"Aside\"]\n);\n\ncustomElements.define (\n    'article-page',\n    _modules_article_page__WEBPACK_IMPORTED_MODULE_7__[\"ArticlePage\"]\n);\n\ncustomElements.define (\n    'admin-page',\n    _modules_admin_page__WEBPACK_IMPORTED_MODULE_8__[\"AdminPage\"]\n);\n\ncustomElements.define (\n    'main-page',\n    _modules_main_page__WEBPACK_IMPORTED_MODULE_2__[\"MainPage\"]\n);\n\nconst root = document.getElementById('root');\n\nconst appRoot = root.appendChild(\n    document.createElement('app-root')\n);\n\nwindow.onpopstate = (event) => {\n    _modules_root__WEBPACK_IMPORTED_MODULE_1__[\"RootElem\"].setRoot(appRoot);\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/admin-page.js":
/*!***********************************!*\
  !*** ./src/modules/admin-page.js ***!
  \***********************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdminPage\", function() { return AdminPage; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n\n\n\nclass AdminPage extends HTMLElement {\n    constructor() {\n        super();\n        this.dataPromise = this.fetchData()\n    }\n    connectedCallback() {\n        _footer__WEBPACK_IMPORTED_MODULE_1__[\"currentUser\"] && _footer__WEBPACK_IMPORTED_MODULE_1__[\"currentUser\"].admin ? this.render(): this.notAdminUser()\n    }\n\n    fetchData() {\n        return Promise.all([\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/admin/admin.html'),\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('posts.json')\n        ])\n    }\n    async render() {\n        [ this.template, this.data ] =\n            await this.dataPromise;\n\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\n\n        this.data.initialValue = {\n            body: `<p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.</p>\n                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>`,\n            tag: 'Article Tag',\n            title: 'New Article Title'\n\n        };\n\n        [this.pageTitle, this.saveBtn, this.cancelBtn, this.articleTag, this.articleTitle, this.articleText, this.articles, this.image, this.imagesContainer ] =\n            ['admin-title', 'admin-save-btn', 'admin-cancel-btn', 'admin-article-tag', 'admin-article-title', 'admin-article-text', 'admin-articles', 'admin-image', 'article-images-container']\n                .map( item => document.getElementById(item));\n\n        this.articles && this.articles.children.length === 0 ? this.showArticlesTitles() : null;\n    }\n\n    notAdminUser() {\n        this.innerHTML = `\n            <div class=\"no-access\">You don't have access rights</br> Or you aren't authorize</div>\n        `\n    }\n\n    showArticlesTitles() {\n        for( let article in this.data) {\n            let art = article !== 'initialValue' ? Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.articles, 'div', {\n                innerHTML: `${this.data[article].title}`,\n                className: 'admin-article__list-item',\n                onclick: this.addAtricle.bind(this, article)\n            }) : null\n            art ? art.setAttribute('data-id', this.data[article].id) : null\n        }\n        this.saveBtn.onclick = this.saveArticle.bind(this);\n        this.image.onchange = this.imagePreview.bind(this);\n        this.cancelBtn.onclick = this.addAtricle.bind(this, 'initialValue')\n    }\n\n    imagePreview(event) {\n        this.readFile(event.target.files[0])\n            .then(img => !this.articleImage ? this.articleImage = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\n                Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.imagesContainer, 'div', {\n                    className: 'article__img-container'\n                }),\n                'img',\n                {\n                    src: img\n                }) : this.ArticleImage.src = img\n            )\n    }\n\n    readFile(file) {\n        return new Promise(resolve => {\n            let reader = new FileReader ();\n            reader.onload = (event) => {\n                resolve(event.target.result)\n            }\n            reader.readAsDataURL(file);\n        })\n    }\n\n    addAtricle(article) {\n        this.pageTitle.innerText =\n            article === 'initialValue' ?\n                'Add Article' : 'Edit Article'\n        this.articleTag.innerText = this.data[article].tag\n        this.articleTitle.innerText = this.data[article].title\n        this.articleText.innerHTML = this.data[article].body\n        this.saveBtn.onclick = function(event) {\n            this.saveArticle(event, article);\n        }.bind(this)\n    }\n\n    async saveArticle(event, article) {\n        let url = article ? `posts/${article}.json` : 'posts.json';\n        await Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])(url, {\n            method: article ? \"PUT\" : \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title: this.articleTitle.innerText,\n                body: this.articleText.innerHTML,\n                tag: this.articleTag.innerText,\n                image: this.articleImage ? this.articleImage.src : null\n            })\n        }).then( response => console.log(response));\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/admin-page.js?");

/***/ }),

/***/ "./src/modules/app-link.js":
/*!*********************************!*\
  !*** ./src/modules/app-link.js ***!
  \*********************************/
/*! exports provided: AppLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppLink\", function() { return AppLink; });\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ \"./src/modules/root.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\nclass AppLink extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.onclick = (event) => {\n            window.history.pushState({}, '', event.target.getAttribute('href'));\n            _root__WEBPACK_IMPORTED_MODULE_0__[\"RootElem\"].setRoot(_index__WEBPACK_IMPORTED_MODULE_1__[\"appRoot\"]);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/app-link.js?");

/***/ }),

/***/ "./src/modules/article-page.js":
/*!*************************************!*\
  !*** ./src/modules/article-page.js ***!
  \*************************************/
/*! exports provided: ArticlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArticlePage\", function() { return ArticlePage; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\n\nclass ArticlePage extends HTMLElement {\n    constructor() {\n        super();\n        this.dataPromise = this.fetchData()\n    }\n    connectedCallback() {\n        this.render()\n    }\n\n    fetchData() {\n        return Promise.all([\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/article/article.html'),\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])(\n                `${window.location.pathname\n                    .split('/posts-')\n                    .join('/posts/')}.json`\n            )\n        ])\n    }\n\n    async render() {\n        [ this.template, this.data ] =\n            await this.dataPromise;\n\n        this.className = 'article-page';\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\n        this.imageContainer = document.getElementById('article-img-container');\n\n        this.data.image && this.imageContainer ? Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.imageContainer, 'div', { className: 'article__img-container' }),\n            'img',\n            {\n                src: this.data.image\n            }) : null\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/article-page.js?");

/***/ }),

/***/ "./src/modules/aside.js":
/*!******************************!*\
  !*** ./src/modules/aside.js ***!
  \******************************/
/*! exports provided: Aside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Aside\", function() { return Aside; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\n\nclass Aside extends HTMLElement {\n    constructor() {\n        super();\n        this.dataPromise = this.fetchData()\n    }\n    connectedCallback() {\n        this.render()\n    }\n    fetchData() {\n        return Promise.all([\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/layout/aside.html'),\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])(`posts.json`)\n        ])\n    }\n    showLinks() {\n        for(let post in this.data) {\n            let postLink = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.aside, 'app-link', {\n                className: 'aside__item',\n                innerText: this.data[post].title,\n            });\n            postLink.setAttribute('href', `posts-${post}`)\n        }\n        this.btn.onclick = function (event) {\n            this.classList.toggle('--opened')\n        }.bind(this)\n    }\n    async render() {\n        [ this.template, this.data ] =\n            await this.dataPromise;\n\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\n\n        [this.btn, this.aside] = ['aside__btn', 'aside']\n            .map(item => document.getElementById(item));\n\n        this.aside ? this.showLinks() : null;\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/aside.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/*! exports provided: currentUser, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentUser\", function() { return currentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\nlet currentUser = null;\n\nclass Footer extends HTMLElement {\n    constructor() {\n        super();\n        this.dataPromise = this.fetchData();\n        this.registerCred = {\n            login: null,\n            password: null,\n            passwordConf: false,\n            photo: null\n        }\n    }\n\n    connectedCallback() {\n        this.render()\n    }\n\n    fetchData() {\n        return Promise.all([\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/layout/footer.html'),\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('users.json')\n        ])\n    }\n    async render() {\n        [ this.template, this.data ] =\n            await this.dataPromise;\n\n        this.data[ Symbol.iterator ] = function* () {\n            for( let user in this.data) {\n                yield {...this.data[user], ...{id: user}}\n            }\n        }.bind(this);\n\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template);\n\n        this.form = this.querySelector('#form');\n\n        this.form.onsubmit = function (event) {\n            event.preventDefault();\n            this.validateUserCred() ? this.showRegistration() : this.postUserData()\n        }.bind(this);\n\n        this.formTitle = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'div', {\n            className: 'login__title font-accent',\n            innerText: 'Enter your login'\n        });\n\n        this.inputs = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'div', {\n            className: 'login__inputs-box',\n        });\n\n        this.isAuthorized(this.data) ?\n            null : this.showForm()\n    }\n\n    showForm() {\n        this.liginInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\n            type: 'text',\n            className: 'login__input font-accent',\n            placeholder: 'login',\n            name: 'login',\n            onchange: function (event) {\n                for ( let user in this.data) {\n                    this.data[user].login === event.target.value ?\n                        this.showPassInput(this.data[user]) : null\n                }\n            }.bind(this)\n        });\n        this.logInbtn = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'button', {\n            className: 'article__link font-accent',\n            innerText: 'Log in',\n        })\n    }\n\n    isAuthorized(users) {\n\n        let userLogin = document.cookie.match(new RegExp(/(login=[a-zA-Z0-9]*)/)) ?\n            document.cookie.match(new RegExp(/(login=[a-zA-Z0-9]*)/))[0].split('=')[1] : null;\n\n        let userHash = document.cookie.match(new RegExp(/;?(hash=[a-zA-Z0-9]*)/)) ?\n            document.cookie.match(new RegExp(/(hash=[a-zA-Z0-9]*)/))[0].split('=')[1] : null;\n\n        if (currentUser) {\n            this.userAuthorized(currentUser);\n            return true\n        }\n        for ( let user in users) {\n            if (users[user].login === userLogin && users[user].hash === userHash && !users[user].admin) {\n                this.userAuthorized(users[user]);\n                return true\n            }\n        }\n        return false\n    }\n\n    validateUserCred() {\n        for(let key in this.registerCred) {\n            if(!this.registerCred[key]) return true\n        }\n        return false\n    }\n\n    showRegistration() {\n        this.formTitle.innerText = 'There is no such user. Would like to register?';\n        this.logInbtn.disabled = true;\n        this.logInbtn.innerText = 'Sign In';\n        this.registerCred.login = this.liginInput.value;\n\n        this.liginInput.onchange = null;\n        this.liginInput.oninput = function (event) {\n            let test = Array.from(this.data).filter (\n                login => login.login === event.target.value ||\n                    event.target.value.match(new RegExp(/[^A-Za-z0-9]+/))\n            ).length > 0;\n            event.target.style.borderColor = test ? \"red\" : \"\";\n            event.target.title = test ? \"Use only letters or numbers or user is already exist\" : \"\";\n            this.registerCred.login = test ? null : event.target.value;\n            this.logInbtn.disabled = this.validateUserCred();\n        }.bind(this);\n\n        this.passRegistrationInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\n            type: 'password',\n            className: 'login__input font-accent',\n            placeholder: 'password',\n            name: 'register-pass',\n            oninput: function (event) {\n                let test = event.target.value.length < 6;\n                event.target.style.borderColor = test ? \"red\" : \"\";\n                event.target.title = test ? \"Password should contain at least 6 characters\" : \"\";\n                this.registerCred.password = test ? null : event.target.value;\n                this.logInbtn.disabled = this.validateUserCred();\n            }.bind(this)\n        });\n\n        this.passConfirmInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\n            type: 'password',\n            className: 'login__input font-accent',\n            placeholder: 'confirm password',\n            name: 'register-pass',\n            oninput: function (event) {\n                let test = event.target.value !== this.registerCred.password;\n                event.target.style.borderColor = test ? \"red\" : \"\";\n                event.target.title = test ? \"Should be same as password\" : \"\";\n                this.registerCred.passwordConf = !test;\n                this.logInbtn.disabled = this.validateUserCred();\n            }.bind(this)\n        });\n        this.fileLable = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'label', {\n            className: 'login__input font-accent file-label',\n            textContent: 'Choose photo'\n        });\n        this.fileInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.fileLable, 'input', {\n            type: 'file',\n            className: 'login__input font-accent file-input',\n            name: 'file',\n            id: 'avatar',\n            onchange: function (event) {\n                event.target.files &&\n                event.target.files[0].type.indexOf('image') === 0 &&\n                event.target.files[0].size <= 300000 ?\n                    this.showPhoto(event.target.files[0]).then(img => {\n                        this.registerCred.photo = img;\n                        this.imgPreview ? null : this.imgPreview = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'img', {\n                            className: 'image-preview',\n                            alt: 'avatar'\n                        });\n                        this.imgPreview.src = img;\n\n                        if(this.fileLable.classList.contains('error')) {\n                            this.fileLable.classList.remove('error');\n                            this.errorFileMsg.remove();\n                        }\n                        this.logInbtn.disabled = this.validateUserCred();\n                    }) :\n                    this.showPhotoError(event.target);\n            }.bind(this)\n        });\n    }\n\n    showPhoto(file) {\n        return new Promise(resolve => {\n            let reader = new FileReader ();\n            reader.onload = event => {\n                resolve(event.target.result)\n            }\n            reader.readAsDataURL(file);\n        })\n    }\n\n    showPhotoError(target) {\n        this.registerCred.photo = null;\n        this.fileLable.classList.add('error');\n        this.errorFileMsg = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'span', {\n            innerText: 'Only for images less then 100 kb'\n        });\n        this.logInbtn.disabled = this.validateUserCred();\n    }\n\n    showPassInput(user) {\n        this.formTitle.innerText = 'Enter your password';\n        this.liginInput.remove();\n        this.passInput = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'input', {\n            type: 'password',\n            class: 'login__input font-accent',\n            placeholder: 'password',\n            name: 'password',\n            autofocus: 'true',\n            oninput: function (event) {\n                user.hash === Sha256.hash ( event.target.value )?\n                    this.userAuthorized(user, true) : null\n            }.bind(this)\n        });\n    }\n\n    async postUserData() {\n        let userData = {\n            login: this.registerCred.login,\n            hash: Sha256.hash ( this.registerCred.password ),\n            photo: this.registerCred.photo\n        }\n        await Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('users.json', {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(userData)\n        }).then(userId => {\n            this.userAuthorized(userData, true)\n        }, error => {\n            this.formTitle.innerText = `Oops, something went wrong :(`;\n            this.passInput.remove();\n            this.logInbtn.remove();\n            console.log(error);\n        })\n    }\n\n    saveUserCredCookie(login, pass) {\n        let expDate = new Date (\n            new Date(new Date().setMonth(new Date().getMonth() + 1))\n        );\n        document.cookie = `login=${login}; expires=${expDate}`;\n        document.cookie = `hash=${pass}; expires=${expDate}`;\n    }\n\n    userAuthorized(user, saveToCookie) {\n        saveToCookie ?\n            this.saveUserCredCookie( user.login, user.hash ) : null;\n        currentUser = user;\n        this.formTitle.innerText = `Hi, ${user.login} !`;\n        this.inputs ? this.inputs.innerHTML = '' : null;\n        this.logInbtn ? this.logInbtn.remove() : null;\n        this.authorizedPhotoShow = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'img', {\n            src: user.photo,\n            alt: 'avatar',\n            className: 'image-preview'\n        });\n\n        const loggedUserActions = JSON.parse(localStorage.getItem ( \"user\" ));\n\n        loggedUserActions && loggedUserActions.login === user.login && saveToCookie ?\n            this.redirectToLastPage(loggedUserActions) :\n                null;\n\n        user.admin ? this.showAdminLink() : null;\n\n        if(!this.logOutBtn) {\n            this.logOutBtn = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.form, 'span', {\n            className: 'article__link font-accent',\n            innerText: 'Log out',\n            onclick: function (event) {\n                this.logOut()\n            }.bind(this)\n            })\n        }\n    }\n\n    logOut() {\n        currentUser = null;\n        this.authorizedPhotoShow.remove();\n        this.logOutBtn.remove();\n        this.showForm();\n        this.formTitle.innerText = 'Enter your login';\n        this.adminPageLink ? this.adminPageLink.remove() : null;\n\n        document.cookie = \"login=; expires=\" +\n            new Date ( 0 ).toUTCString ();\n\n        document.cookie = \"hash=; expires=\" +\n            new Date ( 0 ).toUTCString ()\n    }\n\n    redirectToLastPage(loggedUserActions) {\n        window.history.pushState({}, '', loggedUserActions.lastPage);\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"appRoot\"].setAttribute('root', loggedUserActions.lastPage)\n    }\n\n    showAdminLink() {\n        this.adminPageLink = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(this.inputs, 'app-link', {\n            className: 'font-accent article__link',\n            textContent: 'Go to Admin Page'\n        })\n        this.adminPageLink.setAttribute('href', '/admin');\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\n\nclass Header extends HTMLElement {\n    constructor() {\n        super();\n    }\n    async connectedCallback() {\n        this.innerHTML = `\n        <header class=\"header\">\n            <app-link href=\"/\" class=\"header__title\">Marcy...</app-link>\n            <h1 class=\"header__sub-title font-accent\">Story</h1>\n        </header>`\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/main-page.js":
/*!**********************************!*\
  !*** ./src/modules/main-page.js ***!
  \**********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainPage\", function() { return MainPage; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\n\nclass MainPage extends HTMLElement {\n    constructor() {\n        super();\n        this.posts = [];\n        this.dataPromise = this.fetchData()\n    }\n    connectedCallback() {\n        this.render()\n    }\n    fetchData() {\n        return Promise.all([\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getTemplate\"])('/modules/main-page/main-page.html'),\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('posts/0.json'),\n            Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getDate\"])('posts/1.json'),\n        ])\n    }\n    async render() {\n        [ this.template, this.posts[0], this.posts[1] ] =\n            await this.dataPromise;\n\n        this.innerHTML = _common__WEBPACK_IMPORTED_MODULE_0__[\"insertTemplate\"].call(this, this.template)\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/main-page.js?");

/***/ }),

/***/ "./src/modules/root.js":
/*!*****************************!*\
  !*** ./src/modules/root.js ***!
  \*****************************/
/*! exports provided: RootElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RootElem\", function() { return RootElem; });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n\n\nconst routs = {\n    '/' : '<main-page></main-page>',\n    '/posts' : `<article-page></article-page>`,\n    '/admin' : `<admin-page></admin-page>`\n}\n\nclass RootElem extends HTMLElement {\n    constructor() {\n        super();\n        constructor.instance = this\n    }\n    connectedCallback() {\n        this.innerHTML = this.getInnerHtml();\n        this.setAttribute('root', window.location.pathname);\n\n    }\n    getInnerHtml(redirect) {\n        let elem = redirect ? redirect.split('-')[0] :\n            window.location.pathname.split('-')[0];\n\n        return `\n        <app-aside></app-aside>\n        <app-header></app-header>\n        ${routs[elem]}\n        <app-footer></app-footer>`;\n    }\n\n    logUserAction() {\n        _footer__WEBPACK_IMPORTED_MODULE_0__[\"currentUser\"] && _footer__WEBPACK_IMPORTED_MODULE_0__[\"currentUser\"].login ?\n            localStorage.setItem (\n                \"user\",\n                JSON.stringify ( {\n                    login: _footer__WEBPACK_IMPORTED_MODULE_0__[\"currentUser\"].login,\n                    lastPage: window.location.pathname\n                } )\n            ) : null\n    }\n\n    static get observedAttributes() {\n        return [ 'root']\n    }\n\n    attributeChangedCallback( attrName, oldVal, newVal ) {\n        this.innerHTML = this.getInnerHtml(newVal);\n        this.logUserAction();\n    }\n\n    static setRoot(elem) {\n        elem.setAttribute('root', window.location.pathname)\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/root.js?");

/***/ })

/******/ });