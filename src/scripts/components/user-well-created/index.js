import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class UserWellCreated extends LitElement{
   
    
    render(){
        return html`
       <div class="save_section">
       <h4>Account setup details have been sent to <b>Username@email.com</b></h4>
       </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {UserWellCreated};