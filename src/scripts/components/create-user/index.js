import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';





class CreateUser extends LitElement{

  
        
    constructor(){
        super();
       

        
    }
 
    
    render(){
        return html`
        <div class="section">
            <img class="back" src="/static/images/icons/icons8-login-100-3.png" alt="back"/>
            <h3>system users</h3>
            <h2>Add New User</h2>
            <h5>Create a new user account.</h5>
            <div class="form_section">
            <form action="">
                <h4 class="h4_username">Username</h4>
                <input class="name" type="text" name="user name" placeholder="Employee Name Or Email" >
                <hr class="hr1">
                <h4 class="h4_action">Administrative Group</h4>
                <input class="action" type="text" name="user name" placeholder="Action" >
                <hr class="hr2">
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

export {CreateUser};

