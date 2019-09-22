import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class ClientList extends LitElement{
   
    
    render(){
        return html`
       <div class="list">
       <h2>List</h2>
       <img src="/static/images/icons/icons8-list-96.png"
       </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ClientList};