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

    _printMonthClientReccord(){
        window.location = "#inventory/choooseClient/clientInfo/print_inventory_list"
    }

    _goBack(){
        window.location = "#inventory/chooseClient"
    }

    render(){
        return html` 
        <div class="client_info_section">

        <div class="top">
        </div>

        <div class="info_dashboard">
        <img class="back" src="/static/images/icons/icons8-login-100-3.png" alt="back" @click=${this._goBack}/>
        <h3>Tradiline & Subira INVESTMENT</h3>
        <table>
        <tr class="header">
        <th>number </th>
        <th>product's name <img src="/static/images/icons/down-white.png"/></th>
        <th>quantity <img src="/static/images/icons/down-white.png"/></th>
        <th>bond <img src="/static/images/icons/down-blue.png"/></th>
        <th>entry date <img src="/static/images/icons/down-white.png"/></th>
        <th>time <img src="/static/images/icons/down-yellow.png"/></th>
        </tr>
        <button class="print" @click=${this._printMonthClientReccord}>print</button>
  ${this.data.map(reccords => {
      
      
                       return html`
                    <tr>
                        <td>${reccords.number}</td>
                        <td>${reccords.product}</td>
                        <td>${reccords.bags} bags</td>
                        <td>${reccords.bond}</td>
                        <td>${reccords.entryDate}</td>
                        <td>${reccords.time}</td>
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