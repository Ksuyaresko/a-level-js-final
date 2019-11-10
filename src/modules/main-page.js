import { getDate, getTemplate, insertTemplate} from "../common";

export class MainPage extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        this.posts = await Promise.all([
            getDate('posts/0.json'),
            getDate('posts/1.json')
        ])

        this.innerHTML = insertTemplate.call(this, await getTemplate('/modules/main-page/main-page.html'))
    }
}