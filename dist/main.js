let user = null;
let getTemplate = async (url) => {
    return (
        await fetch(url)
    ).text()
};

let getDate = async (url, options) => {
    return (
        await fetch(`https://a-level-final.firebaseio.com/${url}`, options)
    ).json()
};


function insertTemplate(str) {
    return str.split(/\{([^<|>]+)\}/g).map((item, index) => {
        return index % 2 === 1 || index === 1 ? eval(item): item
    }).join('')
}

function createEl(container, tag = "div", attrs) {
    const newEl =  container.appendChild(
        document.createElement(tag)
    );
    if(attrs) for(let attr in attrs) {
        newEl[attr] = attrs[attr]
    }
    return newEl
}

const routs = {
    '/' : '<main-page></main-page>',
    '/posts' : `<article-page></article-page>`,
    '/admin' : `<admin-page></admin-page>`
}

const root = document.getElementById('root');

class RootElem extends HTMLElement {
    constructor() {
        super();
        constructor.instance = this
    }
    connectedCallback() {
        this.innerHTML = this.getInnerHtml();
        this.setAttribute('root', window.location.pathname);
    }
    getInnerHtml() {
        let elem = window.location.pathname.split('-')[0];
        return `
        <app-aside></app-aside>
        <app-header></app-header>
        ${routs[elem]}
        <app-footer></app-footer>`;
    }
    static get observedAttributes() {
        return [ 'root']
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        this.innerHTML = this.getInnerHtml();
    }

    static setRoot(elem) {
        elem.setAttribute('root', window.location.pathname)
    }
}


customElements.define (
    'app-root',
    RootElem
);

const appRoot = root.appendChild(
    document.createElement('app-root')
);

class MainPage extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.posts = await Promise.all([
            getDate('posts/0.json'),
            getDate('posts/1.json')
        ])

        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/main-page/main-page.html'))
    }
}

class Header extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/layout/header.html'))
    }
}

customElements.define (
    'app-header',
    Header
);

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.data = await getDate('users.json');

        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/layout/footer.html'));
        this.form = this.querySelector('#form');

        this.form.onsubmit = function (event) {
            event.preventDefault();
            this.validateUserCred() ? this.showRegistration() : this.postUserData()
        }.bind(this);

        this.formTitle = createEl(this.form, 'div', {
            className: 'login__title font-accent',
            innerText: 'Enter your login'
        });

        this.inputs = createEl(this.form, 'div', {
            className: 'login__inputs-box',
        });

        this.isAuthorized(this.data) ? null : this.showForm()
    }

    showForm() {
        this.liginInput = createEl(this.inputs, 'input', {
            type: 'text',
            className: 'login__input font-accent',
            placeholder: 'login',
            name: 'login',
            oninput: function (event) {
                for ( let user in this.data) {
                    this.data[user].login === event.target.value ?
                        this.showPassInput(this.data[user]) : null
                }
            }.bind(this)
        });
        this.logInbtn = createEl(this.form, 'button', {
            className: 'article__link font-accent',
            innerText: 'Log in',
        })
    }

    isAuthorized(users) {

        let userLogin = document.cookie.match(new RegExp(/(login=[a-zA-Z0-9]*)/)) ?
            document.cookie.match(new RegExp(/(login=[a-zA-Z0-9]*)/))[0].split('=')[1] : null;

        let userHash = document.cookie.match(new RegExp(/;?(hash=[a-zA-Z0-9]*)/)) ?
            document.cookie.match(new RegExp(/(hash=[a-zA-Z0-9]*)/))[0].split('=')[1] : null;

        for ( let user in users) {
            if (users[user].login === userLogin && users[user].hash === userHash) {
                this.userAuthorized(users[user]);
                return true
            }
        }
        return false
    }

    registerCred = {
        login: null,
        password: null,
        passwordConf: false,
        photo: null
    }

    validateUserCred() {
        for(let key in this.registerCred) {
            if(!this.registerCred[key]) return true
        }
        return false
    }

    showRegistration() {
        this.formTitle.innerText = 'There is no such user. Would like to register?';
        this.logInbtn.disabled = true;
        this.logInbtn.innerText = 'Sign In'
        this.registerCred.login = this.liginInput.value;

        this.liginInput.oninput = function (event) {
            let test = this.data.users.filter (
                login => login.login === event.target.value
            ).length > 0;
            event.target.style.borderColor = test ? "red" : "";
            event.target.title = test ? "User is already exist" : "";
            this.registerCred.login = test ? null : event.target.value;
            this.logInbtn.disabled = this.validateUserCred();
        }.bind(this);

        this.passRegistrationInput = createEl(this.inputs, 'input', {
            type: 'password',
            className: 'login__input font-accent',
            placeholder: 'password',
            name: 'register-pass',
            oninput: function (event) {
                let test = event.target.value.length < 6;
                event.target.style.borderColor = test ? "red" : "";
                event.target.title = test ? "Password should contain at least 6 characters" : "";
                this.registerCred.password = test ? null : event.target.value;
                this.logInbtn.disabled = this.validateUserCred();
            }.bind(this)
        });
        this.passConfirmInput = createEl(this.inputs, 'input', {
            type: 'password',
            className: 'login__input font-accent',
            placeholder: 'confirm password',
            name: 'register-pass',
            oninput: function (event) {
                let test = event.target.value !== this.registerCred.password;
                event.target.style.borderColor = test ? "red" : "";
                event.target.title = test ? "Should be same as password" : "";
                this.registerCred.passwordConf = !test;
                this.logInbtn.disabled = this.validateUserCred();
            }.bind(this)
        });
        this.fileLable = createEl(this.inputs, 'label', {
            className: 'login__input font-accent file-label',
            textContent: 'Choose photo'
        });
        this.fileInput = createEl(this.fileLable, 'input', {
            type: 'file',
            className: 'login__input font-accent file-input',
            name: 'file',
            id: 'avatar',
            onchange: function (event) {
                event.target.files[0].type.indexOf('image') === 0 && event.target.files[0].size <= 100000 ?
                    this.showPhoto(event.target.files[0]).then(img => {
                        this.registerCred.photo = img;
                        this.imgPreview ? null : this.imgPreview = createEl(this.inputs, 'img', {
                            className: 'image-preview',
                            alt: 'avatar'
                        });
                        this.imgPreview.src = img;

                        if(this.fileLable.classList.contains('error')) {
                            this.fileLable.classList.remove('error');
                            this.errorFileMsg.remove();
                        }
                        this.logInbtn.disabled = this.validateUserCred();
                    }) :
                    this.showPhotoError(event.target);
            }.bind(this)
        });
    }

    showPhoto(file) {
        return new Promise(resolve => {
            let reader = new FileReader ();
            reader.onload = (event) => {
                resolve(event.target.result)
            }
            reader.readAsDataURL(file);
        })
    }

    showPhotoError(target) {
        this.registerCred.photo = null;
        this.fileLable.classList.add('error');
        this.errorFileMsg = createEl(this.inputs, 'span', {
            innerText: 'Only for images less then 100 kb'
        });
        this.logInbtn.disabled = this.validateUserCred();
    }

    showPassInput(user) {
        this.formTitle.innerText = 'Enter your password';
        this.liginInput.remove();
        this.passInput = createEl(this.inputs, 'input', {
            type: 'password',
            class: 'login__input font-accent',
            placeholder: 'password',
            name: 'password',
            oninput: function (event) {
                user.hash === Sha256.hash ( event.target.value )?
                    this.userAuthorized(user, true) : null
            }.bind(this)
        });
    }

    async postUserData() {
        let userData = {
            login: this.registerCred.login,
            hash: Sha256.hash ( this.registerCred.password ),
            photo: this.registerCred.photo
        }
        await getDate('users.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then(userId => {
            this.userAuthorized(userData, true)
        }, error => {
            this.formTitle.innerText = `Oops, something went wrong :(`;
            this.passInput.remove();
            this.logInbtn.remove();
            console.log(error);
        })
    }

    saveUserCredCookie(login, pass) {
        let expDate = new Date (
            new Date(new Date().setMonth(new Date().getMonth() + 1))
        );
        document.cookie = `login=${login}; expires=${expDate}`;
        document.cookie = `hash=${pass}; expires=${expDate}`;
    }

    userAuthorized(user, saveToCookie) {
        saveToCookie ?
            this.saveUserCredCookie( user.login, user.hash ) : null;

        this.formTitle.innerText = `Hi, ${user.login} !`;
        this.inputs ? this.inputs.innerHTML = '' : null;
        this.logInbtn ? this.logInbtn.remove() : null;
        this.authorizedPhotoShow = createEl(this.inputs, 'img', {
            src: user.photo,
            alt: 'avatar',
            className: 'image-preview'
        })
    }
}

customElements.define (
    'app-footer',
    Footer
);

class AppLink extends HTMLElement {
    constructor() {
        super();
        this.onclick = (event) => {
            window.history.pushState({}, '', event.target.getAttribute('href'));
            RootElem.setRoot(appRoot);
        }
    }
}

customElements.define (
    'app-link',
    AppLink
);


class Aside extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.data = await getDate(`posts.json`);
        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/layout/aside.html'));
        this.btn = document.getElementById('aside__btn');
        [this.btn, this.aside] = ['aside__btn', 'aside']
            .map(item => document.getElementById(item))
        for(let post in this.data) {
            createEl(this.aside, 'app-link', {
                className: 'aside__item',
                innerText: this.data[post].title,
                href: post
            })
        }
        this.btn.onclick = function (event) {
            this.classList.toggle('--opened')
        }.bind(this)
    }
}

customElements.define (
    'app-aside',
    Aside
);

class ArticlePage extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.data = await getDate(`${window.location.pathname.split('-').join('/')}.json`);
        this.className = 'article-page'
        console.log(this.data);
        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/article/article.html'));
        this.imageContainer = document.getElementById('article-img-container');

        this.data.image ? createEl(
            createEl(this.imageContainer, 'div', { className: 'article__img-container' }),
            'img',
            {
                src: this.data.image
            }) : null
    }
}

customElements.define (
    'article-page',
    ArticlePage
);

class AdminPage extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.data = await getDate(`posts.json`);
        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/admin/admin.html'));
        this.data.initialValue = {
            body: `<p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.</p>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>`,
            tag: 'Article Tag',
            title: 'New Article Title'

        };

        [this.pageTitle, this.saveBtn, this.cancelBtn, this.articleTag, this.articleTitle, this.articleText, this.articles, this.image, this.imagesContainer ] =
            ['admin-title', 'admin-save-btn', 'admin-cancel-btn', 'admin-article-tag', 'admin-article-title', 'admin-article-text', 'admin-articles', 'admin-image', 'article-images-container']
                .map( item => document.getElementById(item));

        for( let article in this.data) {
            let art = article !== 'initialValue' ? createEl(this.articles, 'div', {
                innerHTML: `${this.data[article].title}`,
                className: 'admin-article__list-item',
                onclick: this.addAtricle.bind(this, article)
            }) : null
            art ? art.setAttribute('data-id', this.data[article].id) : null
        }

        this.saveBtn.onclick = this.saveArticle.bind(this);
        this.image.onchange = this.imagePreview.bind(this)
    }

    imagePreview(event) {
        this.readFile(event.target.files[0])
            .then(img => !this.articleImage ? this.articleImage = createEl(
                    createEl(this.imagesContainer, 'div', {
                        className: 'article__img-container'
                    }),
                    'img',
                    {
                        src: img
                    }) : this.ArticleImage.src = img
            )
    }

    readFile(file) {
        return new Promise(resolve => {
            let reader = new FileReader ();
            reader.onload = (event) => {
                resolve(event.target.result)
            }
            reader.readAsDataURL(file);
        })
    }

    addAtricle(article) {
        this.pageTitle.innerText =
            article === 'initialValue' ?
                'Add Article' : 'Edit Article'
        this.articleTag.innerText = this.data[article].tag
        this.articleTitle.innerText = this.data[article].title
        this.articleText.innerHTML = this.data[article].body
        this.saveBtn.onclick = function(event) {
            this.saveArticle(event, article);
        }.bind(this)
    }

    async saveArticle(event, article) {
        console.log(article)
        let url = article ? `posts/${article}.json` : 'posts.json';
        await getDate(url, {
            method: article ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: this.articleTitle.innerText,
                body: this.articleText.innerHTML,
                tag: this.articleTag.innerText,
                image: this.articleImage ? this.articleImage.src : null
            })
        }).then( response => console.log(response));
    }
}

customElements.define (
    'admin-page',
    AdminPage
);


customElements.define (
    'main-page',
    MainPage
);

window.onpopstate = (event) => {
    RootElem.setRoot(appRoot);
}

