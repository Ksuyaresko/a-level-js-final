import { getDate, getTemplate, insertTemplate} from "../common";

export class MainPage extends HTMLElement {
    constructor() {
        super();
        this.posts = [];
        this.dataPromise = this.fetchData()
    }
    connectedCallback() {
        this.render()
    }
    fetchData() {
        return Promise.all([
            getTemplate('/modules/main-page/main-page.html'),
            getDate('posts/0.json'),
            getDate('posts/1.json'),
        ])
    }
    async render() {
        [ this.template, this.posts[0], this.posts[1] ] =
            await this.dataPromise;

        this.innerHTML = insertTemplate.call(this, this.template)
    }
}