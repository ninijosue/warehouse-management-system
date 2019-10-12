import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import usersData from '../../users-data';




class UserCustomization extends LitElement{

  
        
    constructor(){
        super();
        this.users = usersData.users

        
        
    }

    firstUpdated(){
        this.name = this.shadowRoot.querySelector("input[name='name']");
        this.action = this.shadowRoot.querySelector("input[name='action']");
        this.status = this.shadowRoot.querySelector("input[name='status']"); 
        this.advice = this.shadowRoot.querySelector(".advice")       
    }
    _savechange(){
        
       
        
        if (this.name.value == "" || this.action.value == "" || this.status.value == "") {
            setTimeout(() => {
                this.advice.style.display = "block";
            }, 0);

            setTimeout(() => {
                this.advice.style.display = "none";
            }, 6000);
        }
        else{
            window.location = "#system/users";
            this.name.value = "";
            this.action.value = "";
            this.status.value = "";
        }
    }
    
    _goBack(){
        window.location = "#system/users"
    }
    
    render(){
        return html`
        <div class="advice">
       <h2>No one table that can be empty. <br> Please fill all tables!!!</h2>
       </div>
        <div class="save_section">
       <h4>Record Well Saved!!</h4>
       </div>
        <div class="section">
            <h3>system users</h3>
            <h2>
            <img class="back" src="/static/images/icons/icons8-login-100-3.png" alt="back" @click=${this._goBack}/>                
            Users</h2>
            <h5>Customise the user’s administrative group.</h5>
            <div class="form_section">
            <form action="">
                <h4 class="h4_username">Username</h4>
                <input class="name" type="text" name="name" value="${this.users[0].Name}">
                <h4 class="h4_action">Administrative Group</h4>
                <input class="action" type="text" name="action" value="${this.users[0].action}">
                <h4 class="h4_status">Status</h4>
                <input class="status" type="text" name="status" value="${this.users[0].status}">
            </form>
            <button class="save" @click=${this._savechange}>save</button>
            </div>

           

        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {UserCustomization};

