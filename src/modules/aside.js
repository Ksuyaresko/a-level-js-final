import {getDate, getTemplate, insertTemplate, createEl} from "../common";

export class Aside extends HTMLElement {
    constructor() {
        super();
        this.dataPromise = this.fetchData()
    }
    connectedCallback() {
        this.render()
    }
    fetchData() {
        return Promise.all([
            getTemplate('/modules/layout/aside.html'),
            getDate(`posts.json`)
        ])
    }
    showLinks() {
        for(let post in this.data) {
            let postLink = createEl(this.aside, 'app-link', {
                className: 'aside__item',
                innerText: this.data[post].title,
            });
            postLink.setAttribute('href', `posts-${post}`)
        }
        this.btn.onclick = function (event) {
            this.classList.toggle('--opened')
        }.bind(this)
    }
    async render() {
        [ this.template, this.data ] =
            await this.dataPromise;

        this.innerHTML = insertTemplate.call(this, this.template);

        [this.btn, this.aside] = ['aside__btn', 'aside']
            .map(item => document.getElementById(item));

        this.aside ? this.showLinks() : null;
    }
}