import {getDate, getTemplate, insertTemplate} from "../common";

export class AdminPage extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.data = await getDate(`posts.json`);
        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/admin/admin.html'));
        this.data.initialValue = {
            body: `<p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.</p>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>`,
            tag: 'Article Tag',
            title: 'New Article Title'

        };

        [this.pageTitle, this.saveBtn, this.cancelBtn, this.articleTag, this.articleTitle, this.articleText, this.articles, this.image, this.imagesContainer ] =
            ['admin-title', 'admin-save-btn', 'admin-cancel-btn', 'admin-article-tag', 'admin-article-title', 'admin-article-text', 'admin-articles', 'admin-image', 'article-images-container']
                .map( item => document.getElementById(item));

        for( let article in this.data) {
            let art = article !== 'initialValue' ? createEl(this.articles, 'div', {
                innerHTML: `${this.data[article].title}`,
                className: 'admin-article__list-item',
                onclick: this.addAtricle.bind(this, article)
            }) : null
            art ? art.setAttribute('data-id', this.data[article].id) : null
        }

        this.saveBtn.onclick = this.saveArticle.bind(this);
        this.image.onchange = this.imagePreview.bind(this)
    }

    imagePreview(event) {
        this.readFile(event.target.files[0])
            .then(img => !this.articleImage ? this.articleImage = createEl(
                createEl(this.imagesContainer, 'div', {
                    className: 'article__img-container'
                }),
                'img',
                {
                    src: img
                }) : this.ArticleImage.src = img
            )
    }

    readFile(file) {
        return new Promise(resolve => {
            let reader = new FileReader ();
            reader.onload = (event) => {
                resolve(event.target.result)
            }
            reader.readAsDataURL(file);
        })
    }

    addAtricle(article) {
        this.pageTitle.innerText =
            article === 'initialValue' ?
                'Add Article' : 'Edit Article'
        this.articleTag.innerText = this.data[article].tag
        this.articleTitle.innerText = this.data[article].title
        this.articleText.innerHTML = this.data[article].body
        this.saveBtn.onclick = function(event) {
            this.saveArticle(event, article);
        }.bind(this)
    }

    async saveArticle(event, article) {
        console.log(article)
        let url = article ? `posts/${article}.json` : 'posts.json';
        await getDate(url, {
            method: article ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: this.articleTitle.innerText,
                body: this.articleText.innerHTML,
                tag: this.articleTag.innerText,
                image: this.articleImage ? this.articleImage.src : null
            })
        }).then( response => console.log(response));
    }
}