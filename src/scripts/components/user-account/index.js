import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";

class UserAccount extends LitElement{
    static get properties(){
        return {
            name: {type: String},
            avatar: {type: String}
        };
    };

     constructor(name, avatar){
        super();
        this.name = name || "";
        this.avatar = avatar;
    }
    render(){
        return html`
        <div class="profil_bar">
        <span class="account-name"><em>Welcome</em> <b>${this.name}</b></span>
        <img class="account-avatar" src="${this.avatar}" alt="user profile picture"/>
        </div>
        
        `;
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {UserAccount};