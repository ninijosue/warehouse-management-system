import styles from "./styles.scss";
import {LitElement, html, css, unsafeCSS } from "lit-element";
class ListItem extends LitElement{
    constructor(){
        super();
        this._mainSection = document.querySelector("main-section");
        this._clicked = this._clicked.bind(this);
        this._oncurrentsectionchange = this._oncurrentsectionchange.bind(this);
        this._mainSection.state.subscribe(this._oncurrentsectionchange);
        
        
    }
    _oncurrentsectionchange(){
        if(this._mainSection.state.currentSection != this.name) {
            this.setAttribute('active', false);
        }
        else this.setAttribute('active', true);
        
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
        this._mainSection.state.currentSection = this.name
        
    }
    render(){
        return html`<li class="dashboard" name="${this.name}" @click = ${this._clicked}> <img src="${this.icon}" alt="icon"/>
            <slot></slot>
        </li>`;
    }
}
export {ListItem};