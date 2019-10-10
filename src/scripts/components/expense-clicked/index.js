import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class ExpenseClicked extends LitElement{
    constructor(){
        super();
    }

    firstUpdated(){
        this.expense1 = this.shadowRoot.querySelector("input[name='expense1']");
        this.expense2 = this.shadowRoot.querySelector("input[name='expense2']");
        this.expense3 = this.shadowRoot.querySelector("input[name='expense3']");
        this.amount1 = this.shadowRoot.querySelector("input[name='amount1']");
        this.amount2 = this.shadowRoot.querySelector("input[name='amount2']");
        this.amount3 = this.shadowRoot.querySelector("input[name='amount3']");
        this.saveQuestion = this.shadowRoot.querySelector(".save_section");


    }

   _save(){
       this.saveQuestion.style.display = "block";
   }
    _cancel(){
       this.saveQuestion.style.display = "none";
    }
    _delete(){
       this.saveQuestion.style.display = "none";
       this.expense1.value = "";
       this.expense2.value = "";
       this.expense3.value = "";
       this.amount1.value = "";
       this.amount2.value = "";
       this.amount3.value = "";
    }


    render(){
        return html`
        <div class="save_section">
        <h1>Do you want save this expenses?</h1>
        <h6 class="cancel" @click=${this._cancel}>Cancel</h6>
        <h6 class="delete" @click=${this._delete}>Delete</h6>
        </div>
        <div class="advice">
       <h2>No one table that can be empty. <br> Please fill all tables!!!</h2>
       </div>
        <div class="expense">
        <h4>Expense</h4>
        <div class="top_black"></div>
        <div class="body_section">
        <div class="scroll_section"></div>
        <div class="scroll_bar"></div>
        <h3>
       <img src="/static/images/icons/icons8-login-100-3.png">       
       SAMMARY</h3>
       <h6>enter the name <br> 
       of any client and get its monthly summary report
       </h6>
        <form action="">
        <div class="input_section input_section1">
        <input name="expense1" type="text" placeholder="expense' name">
        <hr class="under_input">
        </div>
        <div class="input_section input_section2">
        <input name="amount1" type="number" placeholder="amount of money">
        <hr class="under_input">
        </div>
        <div class="input_section input_section3">
        <input name="expense2" type="text" placeholder="expense' name">
        <hr class="under_input">
        </div>
        <div class="input_section input_section4">
        <input name="amount2" type="number" placeholder="amount of money">
        <hr class="under_input">
        </div>
        <div class="input_section input_section5">
        <input name="expense3" type="text" placeholder="expense' name">
        <hr class="under_input">
        </div>
        <div class="input_section input_section6">
        <input name="amount3" type="number" placeholder="amount of money">
        <hr class="under_input">
        </div>
        
        </form>
        <button class="get" @click=${this._save}>Save</button>
        </div>
        </div>
   

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ExpenseClicked};