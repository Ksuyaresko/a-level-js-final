import {getDate, getTemplate, insertTemplate, createEl} from "../common";

export class Aside extends HTMLElement {
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