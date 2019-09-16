import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";

class background extends LitElement{

     constructor(){
        super();

    }
    render(){
        return html`
        <img src="/static/images/background.jpg" alt=""/>
        `;
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {background};