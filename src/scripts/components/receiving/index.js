import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class receiving extends LitElement{
    constructor(){
        super();
    }

    firstUpdated(){
        this.clientName = this.shadowRoot.querySelector(".client_name");
        this.goodName = this.shadowRoot.querySelector(".good_name");
        this.quantity = this.shadowRoot.querySelector(".quantity");
        this.bondValue = this.shadowRoot.querySelector(".bond_value");
        this._date = this.shadowRoot.querySelector(".date");
        this.periodTime = this.shadowRoot.querySelector(".period_time");
        this.advice = this.shadowRoot.querySelector(".advice");


    }
   
    _recieve(){
        if (this.clientName.value == ""|| this.goodName.value == ""|| this.quantity.value == ""|| this.bondValue.value == ""  || this._date.value == "" || this.periodTime.value == "") {
            setTimeout(() => {
                this.advice.style.display = "block"
            }, 0);
            setTimeout(() => {
                this.advice.style.display = "none"
            }, 6000);
        }
        else{

        }
    }


    render(){
        return html`
        <div class="advice">
       <h2>No one table that can be empty. <br> Please fill all tables!!!</h2>
       </div>
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
        

        <button class="btn-save" @click=${this._recieve}>Recieve</button>

        </div>
        </div>
   

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {receiving};