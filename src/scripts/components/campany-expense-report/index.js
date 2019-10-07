import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import campanyExpensesData from '../../campany-expense-data'



class CampanyExpenseReport extends LitElement{

  
        
    constructor(){
        super();
        this.client = campanyExpensesData.expenses
    }
 
    
    render(){
        return html`
        <div class="section">
        <div class="blue_top"></div>
        <h2>
        <img src="/static/images/icons/icons8-login-100-3.png">
        EXPENSES</h2>
        <div class="open">
        <h3 class="h3_open">CAMPANY EXPENSES IN SEPTEMBER</h3>
        <button class="print">Print</button>
        <table>
        <tr>
        <th>names of expenses</th>
        <th>amount of mony for expense</th>
        
        </tr>
        ${this.client.map(data=>{
            return html`
            <tr>
        <td class="left">${data.expenseName}</td>
        <td>${data.amountOfMony} Frw</td>
        
        </tr>
            `
        })}
      
        </table>
        </div>




        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {CampanyExpenseReport};

