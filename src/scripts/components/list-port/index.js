import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class ClientList extends LitElement{
   constructor(){
       super();
       
       
     

        
   }

   static get properties(){
       return{
           active: {type: String, reflect: true, attribute: "display"}
       }
   }

   inventoryLists(){
  
        window.location = "#inventory/chooseClient"
        
   }
    
   inventoryLocation(){
       window.location = "#inventory/location"
   }
    
    render(){
        return html`
        <div class="invertory"  >
       <div class="list" @click=${this.inventoryLists}>
       <h2>List</h2>
       <img src="/static/images/icons/icons8-list-96.png">
       </div>

       <div class="location" @click=${this.inventoryLocation}>
       <h2>Put Away</h2>
       <img src="/static/images/icons/depot.png">
       </div>
       </div>
        `

    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ClientList};