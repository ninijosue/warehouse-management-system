import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class receiving extends LitElement{
    constructor(){
        super();
    }
   
    
    render(){
        return html`
        <div class="receiving">
        <h4>Receiving</h4>
        <div class="top_black"></div>
        <div class="body_section">
        <div class="scroll_section"></div>
        <div class="scroll_bar"></div>

        <h5>Client's Name</h5>
        <input type="text" class="client_name" />
       

        
        <h5>Good's Name</h5>
        <input type="text" class="good_name" />
        

      
        <h5>Qantity</h5>
        <input type="text" class="quantity" />
        

        
        <h5>Bond Value</h5>
        <input type="text" class="bond_value" />
    
        
        
        <h5>Entry Date</h5>
        <input type="text" class="date" />
        
        
      
        <h5>Period Of Time</h5>
        <input type="text" class="period_time" />
        

        <button class="btn-save">Save</button>

        </div>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {receiving};