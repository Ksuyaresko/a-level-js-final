import {getDate, getTemplate, insertTemplate, createEl} from "../common";

export class ArticlePage extends HTMLElement {
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