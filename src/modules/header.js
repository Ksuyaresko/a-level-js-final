import {getDate, getTemplate, insertTemplate} from "../common";

export class Header extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <app-link href="/" class="header__title">Marcy...</app-link>
            <h1 class="header__sub-title font-accent">Story</h1>
        </header>`
    }
}