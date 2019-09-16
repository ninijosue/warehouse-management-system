import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";

class topNavSection extends LitElement{
   
     constructor(){
        super();
        
    }
    render(){
        return html`
        <div class="top_section">
        <div class="btn_slider">
        <span class="btn_bar_1"></span>
        <span class="btn_bar_2"></span>
        <span class="btn_bar_3"></span>
        </div>
        </div>
        
        `;
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {topNavSection};