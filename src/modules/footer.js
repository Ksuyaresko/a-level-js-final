import {getDate, getTemplate, insertTemplate, createEl} from "../common";

export class Footer extends HTMLElement {
    constructor() {
        super();
        this.dataPromise = this.fetchData()
        this.registerCred = {
            login: null,
            password: null,
            passwordConf: false,
            photo: null
        }
    }

    connectedCallback() {
        this.render()
    }

    fetchData() {
        return Promise.all([
            getTemplate('/modules/layout/footer.html'),
            getDate('users.json')
        ])
    }

    async render() {
        [ this.template, this.data ] =
            await this.dataPromise;

        this.innerHTML = insertTemplate.call(this, this.template);

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

        this.isAuthorized(this.data) ?
            null : this.showForm()
    }

    showForm() {
        this.liginInput = createEl(this.inputs, 'input', {
            type: 'text',
            className: 'login__input font-accent',
            placeholder: 'login',
            name: 'login',
            onchange: function (event) {
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

    validateUserCred() {
        for(let key in this.registerCred) {
            if(!this.registerCred[key]) return true
        }
        return false
    }

    showRegistration() {
        this.formTitle.innerText = 'There is no such user. Would like to register?';
        this.logInbtn.disabled = true;
        this.logInbtn.innerText = 'Sign In';
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
        });

        user.admin ? this.showAdminLink() : null
    }

    showAdminLink() {
        const adminPageLink = createEl(this.inputs, 'app-link', {
            className: 'font-accent article__link',
            textContent: 'Go to Admin Page'
        })
        adminPageLink.setAttribute('href', '/admin');
    }
}