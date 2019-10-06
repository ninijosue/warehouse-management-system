import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';


class DeliveringForm extends LitElement{
    constructor(){
        super();
 
    }
    firstUpdated(){
        this.clientName = this.shadowRoot.querySelector("input[name ='client_name']");
        this.goodName = this.shadowRoot.querySelector("input[name ='good_name']");
        this.quantity = this.shadowRoot.querySelector("input[name ='quantity']");
        this.deliverDate = this.shadowRoot.querySelector("input[name ='bond_value'");
        this.advice = this.shadowRoot.querySelector(".advice");
    }

    static get properties(){
        return {
            clientClickList: {type: Object}
        }
    }
    
    _deliver(){
 
        if (this.clientName.value == "" || this.goodName.value == "" || this.quantity.value === "" || this.deliverDate.value =="") {
            setTimeout(() => {
              this.advice.style.display = "block";
            },0);
            
            setTimeout(() => {
                this.advice.style.display = "none"
            }, 5000);
        }
        else{
           

        }
        

    }
    
    render(){
        return html`
        

        

        <h4>Delivering</h4>
        <div class="advice">
       <h2>No one table that can be empty. <br> Please fill all tables!!!</h2>
       </div>
        <div class="receiving">
        <div class="top_black">
        </div>
        <div class="body_section">
        <div class="scroll_section"></div>
        <div class="scroll_bar"></div>
        <form action="">
        <h5 class="name">Client's Name</h5>
        <input type="text" placeholder="client's name"  class="client_name" name="client_name" />
       

        
        <h5 class="good">Good's Name</h5>
        <input type="text" placeholder="good's name"  class="good_name"  name="good_name"/>
        

      
        <h5 class="quantit">quantity</h5>
        <input type="text" placeholder="quantity"   class="quantity" name="quantity"/>
        

        
        <h5 class="bond">Delivering Date</h5>
        <input type="text" placeholder="delivering date"  class="bond_value" name="bond_value"/>
  
        </form>
        
        <button class="btn_save" @click=${this._deliver}>Deliver</button>
        

        </div>
        </div>
        `;
    }

    static get styles(){
        return css`${unsafeCSS(styles)}`
    }


}

export {DeliveringForm};