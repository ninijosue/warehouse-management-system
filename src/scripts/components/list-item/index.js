import styles from "./styles.scss";
import {LitElement, html, css, unsafeCSS } from "lit-element";
class ListItem extends LitElement{
    constructor(){
        super();
    }
    static get properties(){
        return {
            icon: {type: String},
        }
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
    render(){
        return html`<li class="dashboard"> <img src="${this.icon}" alt="icon"/>
            <slot></slot>
        </li>`;
    }
}
export {ListItem};