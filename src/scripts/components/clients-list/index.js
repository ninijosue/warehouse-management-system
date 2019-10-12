import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientListData from "../../client-hostory-list";


class ListSection extends LitElement{

    static get properties(){
        return{
            clientList: {type: Array}
        }
    }
        
    constructor(){
        super();
        this.clientList = clientListData.clientList;
        
        
    }

    _goBack(){
        window.location = "#inventory";
    }
   
    getListOfClientsInCompany(data){
        window.location = "#inventory/choooseClient/clientInfo";
    }
    render(){
        return html`
        <div class="content">
        <img class="back" src="/static/images/icons/icons8-login-100-3.png" @click=${this._goBack}>
        <h1>150</h1>
        <h5>Total Client</h5>
        <img class="search" src="/static/images/icons/Group 58.png">

        <div class="list_section">
        <div class="header">
        <h4>List Of Clients</h4>
        <img src="/static/images/icons/Group_65.png">
        </div>
        <div class="lists">
        <ul>
        ${this.clientList.map(client => {
            return html`<li @click=${this.getListOfClientsInCompany} >${client.client} </li>`
        })}
        </ul>
        </div>
        </div>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ListSection};

// <li>HNH RADING Ltd</li>
//         <li>HNH RADING Ltd</li>