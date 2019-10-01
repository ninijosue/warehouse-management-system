import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import usersData from '../../users-data';




class Users extends LitElement{

  
        
    constructor(){
        super();
        this.users = usersData.users
    }
 
    
    render(){
        return html`
        <div class="section">
            <h3>system users</h3>
            <h2>Users</h2>
            <h5>Customise the user’s administrative group.</h5>
            
            <img class="add_new" src="/static/images/icons/add.png" alt="add new"/>
            <img class="remove" src="/static/images/icons/remove.png" alt="remove"/>

            <table>
                <tr>
                    <th>Username</th>
                    <th>Administrative Group</th>
                </tr>
                ${this.users.map(user => {
                    return html`
                    
                    <tr>
                    <td>${user.Name}</td>
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

