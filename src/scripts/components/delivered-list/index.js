import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import monthlyDeliveredListData from '../../monthly-delivered-list-data';



class DeliveredList extends LitElement{

  
        
    constructor(){
        super();
        this.client = monthlyDeliveredListData.listData
    }
 
    
    render(){
        return html`
        <div class="section">
        <div class="blue_top"></div>
        <img src="/static/images/icons/icons8-login-100-3.png">
        <h2>DELIVER</h2>
        <div class="open">
        <h3 class="h3_open">delivered detail in march</h3>
        <table>
        <tr>
        <th>client's name</th>
        <th>good's name</th>
        <th>quantity</th>
        <th>deliverd data</th>
        
        </tr>
        ${this.client.map(data=>{
            return html`
        <tr>
        <td class="left">${data.clientName}</td>
        <td>${data.goodName}</td>
        <td>${data.quantity}</td>
        <td>${data.deliveredDate}</td>
        </tr>
            `
        })}
      
        </table>
        </div>


      


        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {DeliveredList};

