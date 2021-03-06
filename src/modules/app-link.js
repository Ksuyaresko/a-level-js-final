import {RootElem} from "./root";
import {appRoot} from "../index";

export class AppLink extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.onclick = (event) => {
            window.history.pushState({}, '', event.target.getAttribute('href'));
            RootElem.setRoot(appRoot);
        }
    }
}