import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";
import avatar from "../../avatar"

class UserAccount extends LitElement{
    static get properties(){
        return {
            name: {type: String},
            avatar: {type: String}
        };
    };

     constructor( ){
        super();
        this.name = avatar.user[0].name || "";
        this.picture = avatar.user[0].photo;
    }

    firstUpdated(){
        this.logSection = this.shadowRoot.querySelector(".user_profile");
        this.profilPc = this.shadowRoot.querySelector(".profil_bar");
        this.main = document.querySelector(".main-one");
    }

    

    _log(){
       this.logSection.style.display = "block";
       this.profilPc.style.display = "none";
        console.log(this.picture);
        this.main.addEventListener("click", ()=>{
            this.logSection.style.display = "none";
            this.profilPc.style.display = "block";
        })
      
    }
    render(){
        return html`
        <div class="user_profile">
            <img class="change_photo" src="/static/images/icons/photochange.png"/>
            <img class="profil_img" src=${this.picture} alt="image of profile"/>
            <h3>${this.name}</h3>
            <h5>bajustone@gmail.com</h5>
            <button class="sign out">Sign Out</button>
            </div>
        <div class="profil_bar">
        <span class="account-name"><em>Welcome</em> <b>${this.name}</b></span>
        <img @click=${this._log} class="account-avatar" src="${this.picture}" alt="user profile picture"/>
        </div>
        
        `;
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {UserAccount};