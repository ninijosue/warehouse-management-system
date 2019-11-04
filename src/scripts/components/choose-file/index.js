import{LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";

class ChooseFile extends LitElement{
    constructor(){
        super();
    }
    firstUpdated(){
        this.profil = this.shadowRoot.querySelector("input");
    }
    check(){
        if (!this.profil.value) {
            console.log("not a file");
            
        } else {
            console.log("file is there");
        }
    }
    render(){
        return html`
        <div class="container">
        <img src="/static/images/profilePic.jpg">
        <input type="file">
        <button @click=${this.check}>Upload</button>
        </div>
        `;
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export{ChooseFile}