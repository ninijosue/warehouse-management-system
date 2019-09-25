import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";
import clientData from "../../client-list-info-data";

class ClientInfoFromList extends LitElement{
    static get properties(){
        return {
         clientInfo: {type: Array}
        };
    };

    constructor(){
        super();
        this.data = clientData.clientReccords;
        
    };

    render(){
        return html` 
        <div class="client_info_section">

        <div class="top">
        <img class="edit" src="/static/images/icons/edit.png"/>
        <img class="delete" src="/static/images/icons/delete.png"/>
        </div>

        <div class="info_dashboard">
        <img class="back" src="/static/images/icons/icons8-login-100-3.png" alt="back"/>
        <h3>Tradiline & Subira INVESTMENT</h3>
        <table>
        <tr class="header">
        <th>number </th>
        <th>product <img src="/static/images/icons/down-white.png"/></th>
        <th>quantity <img src="/static/images/icons/down-white.png"/></th>
        <th>bond <img src="/static/images/icons/down-blue.png"/></th>
        <th>entry date <img src="/static/images/icons/down-white.png"/></th>
        <th>time <img src="/static/images/icons/down-yellow.png"/></th>
        </tr>
        
        <div class="data">
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        

        ${this.data.map(reccords => {
                       return html`
                       <tr class="scroll">
                       <td>${reccords.number}</td>
                       <td>${reccords.product}</td>
                       <td>${reccords.bags} bags</td>
                       <td>${reccords.bond}</td>
                       <td>${reccords.entryDate}</td>
                       <td>${reccords.time}</td>
                       </tr>
                       `
                   })}

                   
  
        </div>
        </table>
        </div>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ClientInfoFromList};


//  ${this.data.map(reccords => {
//            return html`
//            <tr>
//            <td>${reccords.number}</td>
//            <td>${reccords.product}</td>
//            <td>${reccords.bags}</td>
//            <td>${reccords.bond}</td>
//            <td>${reccords.entryDate}</td>
//            <td>${reccords.time}</td>
//            </tr>
//            `
//        })}