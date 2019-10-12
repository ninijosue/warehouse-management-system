import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class SammaryClientName extends LitElement{

  
        
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
            window.location = "#report/get/summary/list";
            this.clientNameSearch.value = "";
        }
        
    }
    _goBack(){
        window.location = "#report/get";
    }
    render(){
        return html`
         <div class="advice">
       <h2>Please fill the table <br>in other to get client's summary!!!</h2>
       </div>
       <div class="sammary_input_section">
       <h3>
       <img src="/static/images/icons/icons8-login-100-3.png" @click=${this._goBack}>       
       SAMMARY</h3>
       <h6>enter the name <br> 
       of any client and get its monthly summary report
       </h6>
        <hr class="top_line">
        <h4>Client's Name</h4>
        <input name="Client_Name_search" type="text" placeholder="Client's Name">
        <hr class="under_input">
        <button class="get" @click=${this._getClient}>GET</button>
       </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {SammaryClientName};

