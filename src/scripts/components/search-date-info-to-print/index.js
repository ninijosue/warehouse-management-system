import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class Print extends LitElement{

  
        
    constructor(){
        super();
        
    }

    firstUpdated(){
        this.advice = this.shadowRoot.querySelector(".advice");
        this.input = this.shadowRoot.querySelector("input[name='Client-Name']")
    }

    
 
    _get(){
        if (this.input.value == "") {
            setTimeout(() => {
               this.advice.style.display = "block" 
            }, 0);
            setTimeout(() => {
               this.advice.style.display = "none" 
                
            }, 6000);
        }
        else{
            this.input.value = ""
        }
    }

    render(){
        return html`
        <div class="advice" style="display: none;">
       <h2>Please enter . <br> The date, the month and the year of the record that You want</h2>
       </div>
       <div class="sammary_input_section">
       <h3>
       <img src="/static/images/icons/icons8-login-100-3.png">
        LIST</h3>
       <h6>enter the date  <br> 
       of the month that you want to print
       </h6>
        <hr class="top_line">
        <h4>Client's Name</h4>
        <input name="Client-Name" type="date" placeholder="">
        <hr class="under_input">
        <button class="get" @click=${this._get}>GET</button>
       </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Print};

