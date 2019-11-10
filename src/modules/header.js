import { getTemplate, insertTemplate } from "../common";

export class Header extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/layout/header.html'))
    }
}