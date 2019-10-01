import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import usersData from '../../users-data';




class UserCustomization extends LitElement{

  
        
    constructor(){
        super();
        this.users = usersData.users

        console.log(this.users);
        
    }
 
    
    render(){
        return html`
        <div class="section">
            <img class="back" src="/static/images/icons/icons8-login-100-3.png" alt="back"/>
            <h3>system users</h3>
            <h2>Users</h2>
            <h5>Customise the user’s administrative group.</h5>
            <div class="form_section">
            <form action="">
                <h4 class="h4_username">Username</h4>
                <input class="name" type="text" name="user name" value="${this.users[0].Name}">
                <h4 class="h4_action">Administrative Group</h4>
                <input class="action" type="text" name="user name" value="${this.users[0].action}">
                <h4 class="h4_status">Status</h4>
                <input class="status" type="text" name="user name" value="${this.users[0].status}">
            </form>
            <button class="save">save</button>
            </div>

           

        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {UserCustomization};

