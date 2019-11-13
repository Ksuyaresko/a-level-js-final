import {getDate, getTemplate, insertTemplate} from "../common";

export class Header extends HTMLElement {
    constructor() {
        super();
        this.dataPromise = this.fetchData()
    }
    connectedCallback() {
        this.fetchData()
    }

    async fetchData() {
        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/layout/header.html'))
    }
}