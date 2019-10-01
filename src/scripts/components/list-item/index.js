import styles from "./styles.scss";
import {LitElement, html, css, unsafeCSS } from "lit-element";
class ListItem extends LitElement{
    constructor(){
        super();
        this._clicked = this._clicked.bind(this);
        this._mainSection = document.querySelector("main-section");
    }
    static get properties(){
        return {
            icon: {type: String},
            name: {type: String, reflect: true}
        }
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
    _clicked(){
        window.location.hash = this.name;
        window.history.replaceState({section: this.name}, this.name, window.location.href);
        this._mainSection.activeSection = this.name;

        
    }
    render(){
        return html`<li class="dashboard" name="${this.name}" @click = ${this._clicked}> <img src="${this.icon}" alt="icon"/>
            <slot></slot>
        </li>`;
    }
}
export {ListItem};