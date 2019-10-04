import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientMonthlyRecord from "../../client-monthly-reccord"



class ClientSammaryReport extends LitElement{

  
        
    constructor(){
        super();
        this.client = clientMonthlyRecord.client
    }

    
 
    
    render(){
        return html`
        <div class="section">
        <div class="blue_top"></div>
        <img src="/static/images/icons/icons8-login-100-3.png"}>
        <h2>SUMMARY</h2>
        <div class="open">
        <h3 class="h3_open">Open</h3>
        <table>
        <tr>
        <th>good's name</th>
        <th>bags</th>
        <th>kg/Bag</th>
        <th>place</th>
        <th>entry date</th>
        </tr>
        ${this.client.map(data=>{
            return html`
            <tr>
        <td class="left">${data.goodName}</td>
        <td>${data.bags}</td>
        <td>${data.kgBg}</td>
        <td>${data.place}</td>
        <td>${data.date}</td>
        </tr>
            `
        })}
      
        </table>
        </div>


        <div class="entry_quantity">
        <h3 class="h3_quantity">entry quantity</h3>
        <table>
        <tr>
        <th>good's name</th>
        <th>bags</th>
        <th>kg/Bag</th>
        <th>place</th>
        <th>entry date</th>
        </tr>
        ${this.client.map(data=>{
            return html`
            <tr>
        <td class="left">${data.goodName}</td>
        <td>${data.bags}</td>
        <td>${data.kgBg}</td>
        <td>${data.place}</td>
        <td>${data.date}</td>
        </tr>
            `
        })}
      
        </table>
        </div>

        <div class="out_quantity">
        <h3 class="h3_out">out quantity</h3>
        <table>
        <tr>
        <th>good's name</th>
        <th>bags</th>
        <th>kg/Bag</th>
        <th>place</th>
        <th>entry date</th>
        </tr>
        ${this.client.map(data=>{
            return html`
            <tr>
        <td class="left">${data.goodName}</td>
        <td>${data.bags}</td>
        <td>${data.kgBg}</td>
        <td>${data.place}</td>
        <td>${data.date}</td>
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

export {ClientSammaryReport};

