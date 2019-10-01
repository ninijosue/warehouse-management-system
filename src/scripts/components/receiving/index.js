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

        <h5 class="name">Client's Name</h5>
        <input type="text" placeholder="Enter The Name Of Client"  class="client_name" />
       

        
        <h5 class="good">Good's Name</h5>
        <input type="text" placeholder="Enter The Name Of Goods" class="good_name" />
        

      
        <h5 class="quantit">Qantity</h5>
        <input type="text" placeholder="Enter The Quantity Of Goods"   class="quantity" />
        

        
        <h5 class="bond">Bond Value</h5>
        <input type="text" placeholder="Enter The Value Of The Bond"  class="bond_value" />
    
        
        
        <h5 class="entry">Entry Date</h5>
        <input type="text" placeholder="Enter The Entry Date"  class="date" />
        
        
      
       <h5 class="time">Period Of Time</h5>
        <input type="text" placeholder="Period Of Time  " class="period_time" />
        

        <button class="btn-save">Save</button>

        </div>
        </div>
   <bottom-fixed today="1,567,340" thisWeek="1,567,340" lastWeek="1,289,455" thisMonth="23,067,502"></bottom-fixed>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {receiving};