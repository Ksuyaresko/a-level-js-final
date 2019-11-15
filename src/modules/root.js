import { currentUser } from "./footer";

const routs = {
    '/' : '<main-page></main-page>',
    '/posts' : `<article-page></article-page>`,
    '/admin' : `<admin-page></admin-page>`
}

export class RootElem extends HTMLElement {
    constructor() {
        super();
        constructor.instance = this
    }
    connectedCallback() {
        this.innerHTML = this.getInnerHtml();
        this.setAttribute('root', window.location.pathname);

    }
    getInnerHtml(redirect) {
        let elem = redirect ? redirect.split('-')[0] :
            window.location.pathname.split('-')[0];

        return `
        <app-aside></app-aside>
        <app-header></app-header>
        ${routs[elem]}
        <app-footer></app-footer>`;
    }

    logUserAction() {
        currentUser.login ?
            localStorage.setItem (
                "user",
                JSON.stringify ( {
                    login: currentUser.login,
                    lastPage: window.location.pathname
                } )
            ) : null
    }

    static get observedAttributes() {
        return [ 'root']
    }

    attributeChangedCallback( attrName, oldVal, newVal ) {
        this.innerHTML = this.getInnerHtml(newVal);
        this.logUserAction();
    }

    static setRoot(elem) {
        elem.setAttribute('root', window.location.pathname)
    }
}