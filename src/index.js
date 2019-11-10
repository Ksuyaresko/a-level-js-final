import { getDate, getTemplate, insertTemplate } from "./common";
import {  RootElem } from "./modules/root";
import { MainPage } from "./modules/main-page";
import { Header } from "./modules/header";
import { Footer } from "./modules/footer";
import { AppLink } from "./modules/app-link";
import { Aside } from "./modules/aside";
import { ArticlePage } from "./modules/article-page";
import { AdminPage } from "./modules/admin-page"

const root = document.getElementById('root');

customElements.define (
    'app-root',
    RootElem
);

export const appRoot = root.appendChild(
    document.createElement('app-root')
);

customElements.define (
    'app-header',
    Header
);

customElements.define (
    'app-footer',
    Footer
);

customElements.define (
    'app-link',
    AppLink
);

customElements.define (
    'app-aside',
    Aside
);

customElements.define (
    'article-page',
    ArticlePage
);

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

