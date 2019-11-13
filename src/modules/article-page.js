import {getDate, getTemplate, insertTemplate, createEl} from "../common";

export class ArticlePage extends HTMLElement {
    constructor() {
        super();
        this.dataPromise = this.fetchData()
    }
    connectedCallback() {
        this.render()
    }

    fetchData() {
        return Promise.all([
            getTemplate('/modules/article/article.html'),
            getDate(
                `${window.location.pathname
                    .split('/posts-')
                    .join('/posts/')}.json`
            )
        ])
    }

    async render() {
        [ this.template, this.data ] =
            await this.dataPromise;

        this.className = 'article-page';
        this.innerHTML = insertTemplate.call(this, this.template);
        this.imageContainer = document.getElementById('article-img-container');

        this.data.image && this.imageContainer ? createEl(
            createEl(this.imageContainer, 'div', { className: 'article__img-container' }),
            'img',
            {
                src: this.data.image
            }) : null
    }
}