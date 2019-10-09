import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import usersData from '../../users-data';




class Users extends LitElement{

  
        
    constructor(){
        super();
        this.users = usersData.users
    }
    static get properties(){
        return {
            name: {type: String, reflect: true}
        }
    }

    firstUpdated(){
        this.image = this.shadowRoot.querySelector(".remove");
        this._go = this.shadowRoot.querySelectorAll(".go");
        this.advice = this.shadowRoot.querySelector(".advice");
        this.deleteQuestion = this.shadowRoot.querySelector(".delete_section");
        
    }

    _userProfil(){
       
        window.location = "#system/users/profil"
        
    }

    _addNew(){
        window.location = "#system/users/new-user";
        
    }

    _delete(){
        if (this.image) {
            this.image.removeAttribute("src");
        this.image.setAttribute("src", "/static/images/icons/delete-selected.png");
        this._go.forEach((elements)=>{
            elements.removeAttribute("src");
            elements.setAttribute("src", "/static/images/icons/delete-icon.png");
           
            
        })

        this._go.forEach((elements)=>{
            elements.addEventListener("click", ()=>{
                this.deleteQuestion.style.display = "block";
            })
        })
        
        }
       
        
        
    }

    _deleteUser(){
        this.deleteQuestion.style.display = "none";
        setTimeout(() => {
            this.advice.style.display = "block"
        }, 0);
        setTimeout(() => {
            this.advice.style.display = "none"
        }, 6000);
        this.image.removeAttribute("src");
        this.image.setAttribute("src", "/static/images/icons/remove.png");
        this._go.forEach((elements)=>{
            elements.removeAttribute("src");
            elements.setAttribute("src", "/static/images/icons/go.png");
        })
    }

    _cancel(){
        this.deleteQuestion.style.display = "none";
        this.image.removeAttribute("src");
        this.image.setAttribute("src", "/static/images/icons/remove.png");
        this._go.forEach((elements)=>{
            elements.removeAttribute("src");
            elements.setAttribute("src", "/static/images/icons/go.png");
        })
    }
   
    
    render(){
        return html`
        <div class="advice" >
       <h4>User well deleted</h4>
       </div>
        <div class="delete_section">
        <h1>Delete this record?</h1>
        <h6 class="cancel" @click=${this._cancel}>Cancel</h5>
        <h6 class="delete" @click=${this._deleteUser}>Delete</h5>
        </div>
        <div class="section">
            <h3>system users</h3>
            <h2>Users</h2>
            <h5>Customise the user’s administrative group.</h5>
            
            <img @click=${this._addNew} class="add_new" src="/static/images/icons/add-new.png" alt="add new"/>
            <img @click=${this._delete} class="remove" src="/static/images/icons/remove.png" alt="remove"/>

            <table>
                <tr>
                    <th>Username</th>
                    <th>Administrative Group</th>
                </tr>
                ${this.users.map(user => {
                    return html`
                    
                    <tr>
                    <td  @click=${this._userProfil}>${user.Name}</td>
                    <td>${user.action}
                    <img class="go" src="/static/images/icons/go.png" alt="go"/>
                    </td>
                </tr>
                    `
                })}
                
            </table>

        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Users};

