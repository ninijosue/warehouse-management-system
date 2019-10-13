import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientClickList from '../../client-cliked-list-data'

class ClientListEdit extends LitElement{
    constructor(){
        super();
        this.clientClickedList = clientClickList.clientClikedListData
    };

    static get properties(){
        return {
            clientClickList: {type: Object}
        }
    };
   
    
    render(){
        return html`
        <div class="receiving">
        <h4>Receiving</h4>
        <div class="top_black">
        <img class="edit" src="/static/images/icons/icons8-edit-100.png"/>
        <img class="delete" src="/static/images/icons/delete.png"/>
        </div>
        <div class="body_section">
        <div class="scroll_section"></div>
        <div class="scroll_bar"></div>
        <form action="">
        <h5 class="name">Client's Name</h5>
        <input type="text" placeholder="" value="${this.clientClickedList.clientName}" class="client_name" />
       

        
        <h5 class="good">Good's Name</h5>
        <input type="text" placeholder="" value="${this.clientClickedList.goodName}" class="good_name" />
        

      
        <h5 class="quantit">Bags</h5>
        <input type="text" placeholder="" value="${this.clientClickedList.bags} bags"  class="quantity" />
        

        
        <h5 class="bond">Bond Value</h5>
        <input type="text" placeholder="" value="${this.clientClickedList.bond}"  class="bond_value" />
    
        
        
        <h5 class="entry">Entry Date</h5>
        <input type="text" placeholder="" value="${this.clientClickedList.entryDate}" class="date" />
        
        
      
       <h5 class="time">Period Of Time</h5>
        <input type="text" placeholder="" value="${this.clientClickedList.time}" class="period_time" />
        </form>
        <button class="btn_cancel">Cancel</button>
        <button class="btn_save">Save</button>
        

        </div>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ClientListEdit};