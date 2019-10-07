import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class expenseMmonthSeatch extends LitElement{

  
        
    constructor(){
        super();
        
    }

    firstUpdated(){
        this.input = this.shadowRoot.querySelector("input[name='Client-Name']");
        this.advice = this.shadowRoot.querySelector(".advice");
    }
 
    _getExpenses(){
        if (this.input.value == "") {
            setTimeout(() => {
                this.advice.style.display = "block"
            }, 0);

            setTimeout(() => {
                this.advice.style.display = "none"

            }, 6000);
        }
        else{
            window.location = "#report/expense-month/expense-detail"
        }

    }
    
    render(){
        return html`
        <div class="advice">
       <h2>Please fill the table <br>in other to get client's summary!!!</h2>
       </div>
       <div class="sammary_input_section">
       <h3>
       <img src="/static/images/icons/icons8-login-100-3.png">    
       EXPENSE</h3>
       <h6>enter the Month  <br> 
       and Year in other to the its records
       </h6>
        <hr class="top_line">
        <h4>Client's Name</h4>
        <input name="Client-Name" type="date" placeholder="">
        <hr class="under_input">
        <button class="get" @click=${this._getExpenses}>GET</button>
       </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {expenseMmonthSeatch};

