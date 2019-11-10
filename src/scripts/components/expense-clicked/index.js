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
        <div class="expense">
        <h4>Expense</h4>
        <div class="top_black"></div>
        <div class="body_section">
        <h3>    
       EXPENSE</h3>
       <h6>enter the name <br> 
       of any client and get its monthly summary report
       </h6>
        <form action="">
      
        <input class="input1" name="expense1" type="text" placeholder="expense' name">

        <input class="input2" name="amount1" type="number" placeholder="amount of money">

        
        <input class="input3" name="expense2" type="text" placeholder="expense' name">
     
  
        <input class="input4" name="amount2" type="number" placeholder="amount of money">
       
        
        <input class="input5" name="expense3" type="text" placeholder="expense' name">
        
        
        <input class="input6" name="amount3" type="number" placeholder="amount of money">
       
        
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