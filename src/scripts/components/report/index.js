import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientListData from "../../client-hostory-list";


class Report extends LitElement{
        constructor(){
            super();
            
        }

  
        
    
    _report(){
        window.location = "#report/get";
    }
 
    _usedSpace(){
        window.location = "#report/space-used"
    }

    _expensesReport(){
        window.location = "#report/expense-month"
    }
    
    _campanyIncome(){
        window.location = "#report/income";
    }

    render(){
        return html`
        <div class="buttons">
        <div class="report" @click=${this._report}>
        <h2 class="h2_report">report</h2>
        <img class="img_report" src="/static/images/icons/report-click.png">
        </div>

        <div class="space" @click=${this._usedSpace}>
        <h2 class="h2_space">space</h2>
        <img class="img_space" src="/static/images/icons/icons8-list-96.png">
        </div>

        <div class="expenses" @click=${this._expensesReport}>
        <h2 class="h2_expense">expenses</h2>
        <img class="img_expense" src="/static/images/icons/expense.png">
        </div>

        <div class="income" @click=${this._campanyIncome}>
        <h2 class="h2_income">income</h2>
        <img class="img_income" src="/static/images/icons/income.png">
        </div>
        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Report};

