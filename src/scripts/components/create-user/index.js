import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';





class CreateUser extends LitElement{

  
        
    constructor(){
        super();
    
    }

    firstUpdated(){
        this.name = this.shadowRoot.querySelector("input[name='name']");
        this.action = this.shadowRoot.querySelector("input[name='action']");
        this.advice = this.shadowRoot.querySelector(".advice")
    }
 
    _createUser(){
        if (this.name.value == "" || this.action.value == "") {
            setTimeout(() => {
                this.advice.style.display = "block"
            }, 0);

            setTimeout(() => {
                this.advice.style.display = "none"
            }, 6000);
        }
        else{
            window.location = "#system/users";
            this.name.value = "";
            this.action.value = "";
        }
    }

    render(){
        return html`
        <div class="advice" >
       <h1 class="advice_h2">No one table that can be empty. <br> Please fill all tables!!!</h1>
       </div>
        <div class="section">
            <img class="back" src="/static/images/icons/icons8-login-100-3.png" alt="back"/>
            <h3>system users</h3>
            <h2>Add New User</h2>
            <h5>Create a new user account.</h5>
            <div class="form_section">
            <form action="">
                <h4 class="h4_username">Username</h4>
                <input class="name" type="text" name="name" placeholder="Employee Name Or Email" >
                <hr class="hr1">
                <h4 class="h4_action">Administrative Group</h4>
                <input class="action" type="text" name="action" placeholder="Action" >
                <hr class="hr2">
            </form>
            <button class="save" @click=${this._createUser}>save</button>
            </div>

           

        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {CreateUser};

