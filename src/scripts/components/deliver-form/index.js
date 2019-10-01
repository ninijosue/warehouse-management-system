import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientClickList from '../../client-cliked-list-data'

class DeliveringForm extends LitElement{
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
        <h4>Delivering</h4>
        <div class="top_black">
        <img class="edit" src="/static/images/icons/icons8-edit-100.png"/>
        <img class="delete" src="/static/images/icons/delete.png"/>
        </div>
        <div class="body_section">
        <div class="scroll_section"></div>
        <div class="scroll_bar"></div>
        <form action="">
        <h5 class="name">Client's Name</h5>
        <input type="text" placeholder="client's name"  class="client_name" />
       

        
        <h5 class="good">Good's Name</h5>
        <input type="text" placeholder="good's name"  class="good_name" />
        

      
        <h5 class="quantit">quantity</h5>
        <input type="text" placeholder="quantity"   class="quantity" />
        

        
        <h5 class="bond">Delivering Date</h5>
        <input type="text" placeholder="delivering date"  class="bond_value" />
    
        
        
        
        
      
       
        </form>
        
        <button class="btn_save">Save</button>
        

        </div>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {DeliveringForm};