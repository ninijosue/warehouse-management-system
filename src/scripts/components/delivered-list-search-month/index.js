import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class DeliveredListSearchMonth extends LitElement{

  
        
    constructor(){
        super();
        
    }

    firstUpdated(){
        this.clientNameSearch = this.shadowRoot.querySelector("input[name = 'Client_Name_search'");
        this.advice = this.shadowRoot.querySelector(".advice");
    }
 
    _getClient(){
    
        if (this.clientNameSearch.value == "") {
            setTimeout(() => {
                this.advice.style.display = "block"
            }, 0);

            setTimeout(() => {
                this.advice.style.display = "none"

            }, 6000);
        }
        else{
            window.location = "#deliver/delivered-month-search/list";
            this.clientNameSearch.value = "";
        }
    }
    _goBack(){
        window.location = "#deliver";
    }

    render(){
        return html`
         <div class="advice">
       <h2>Please fill the table <br>in other to get the list of the month!!!</h2>
       </div>
       <div class="sammary_input_section">
       <h3>
       <img src="/static/images/icons/icons8-login-100-3.png" @click=${this._goBack}>       
       DELIVER</h3>
       <h6>Enter the month in number <br> 
       and get the list of the month that You wrotte
       </h6>
        <hr class="top_line">
        <h4>Enter The Month</h4>
        <input name="Client_Name_search" type="text" placeholder="Enter the month in number">
        <hr class="under_input">
        <button class="get" @click=${this._getClient}>GET</button>
       </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {DeliveredListSearchMonth};

