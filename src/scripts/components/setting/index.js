import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class Setting extends LitElement{

  
        
    constructor(){
        super();
        
    }
    _users(){
        window.location = "#system/users"
    }
    
    render(){
        return html`
        <div class="buttons">
        <div class="report" @click=${this._users}>
        <h2 class="h2_report">USERS</h2>
        <img class="img_report" src="/static/images/icons/user.png"/>
        </div>

   
        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Setting};

