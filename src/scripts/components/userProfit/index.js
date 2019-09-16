import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";
// import UserAccount from "./components/user-account/index"; 

class UserProfil extends LitElement{

    static get properties(){
        return {
            profileName: {type: String},
            avatar: {type: String}
        };
    };
    constructor(profileName, avatar){
        super();
        this.name = profileName || "";
        this.avatar = avatar;
      
    };
    

    render(){
        return html`
            <div class="user_profile" >
            <img class="change_photo" src="./static/images/icons/photo.png"/>
            <img class="profil_img" src="${this.avatar}" alt="image of profile"/>
            <h3>${this.profileName}</h3>
            <h5>bajustone@gmail.com</h5>
            <button class="sign out">Sign Out</button>
            </div>
        `
        
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {UserProfil};