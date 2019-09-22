import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class ListSection extends LitElement{
    constructor(){
        super();
    }
   
    
    render(){
        return html`
        <div class="content">
        <img class="back" src="/static/images/icons/icons8-login-100-3.png">
        <h1>150</h1>
        <h5>Total Client</h5>
        <img class="search" src="/static/images/icons/Group 58.png">

        <div class="list_section">
        <div class="header">
        <h4>List Of Clients</h4>
        <img src="/static/images/icons/Group 65@2x.png">
        </div>
        <div class="lists">
        <ul>
        <li>HNH RADING Ltd</li>
        <li>HNH RADING Ltd</li>

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