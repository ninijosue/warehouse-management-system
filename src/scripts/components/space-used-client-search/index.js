import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class SpaceUsedClientSearch extends LitElement{

  
        
    constructor(){
        super();
        
    }

    firstUpdated(){
        this.inputSearch = this.shadowRoot.querySelector("input[name='Client_Name']");
        this.advice = this.shadowRoot.querySelector(".advice");
        
    }

    _getClientSpace(){
        if (this.inputSearch.value == "") {
            setTimeout(() => {
                this.advice.style.display = "block"
            }, 0);

            setTimeout(() => {
                this.advice.style.display = "none"

            }, 6000);
            
        }
        else{
            window.location = "#report/space-used/info"
        }
    }
 
    _goBack(){
        window.location = "#report";
    }
    render(){
        return html`
        <div class="advice">
       <h2>Please fill the table <br>in other to get client's summary!!!</h2>
       </div>
       <div class="sammary_input_section">
       <h3>
       <img src="/static/images/icons/icons8-login-100-3.png" @click=${this._goBack}> 
       SPACE USED</h3>
       <h6>enter the name <br> 
       client and get the space that is occupied by its goods
       </h6>
        <hr class="top_line">
        <h4>Client's Name</h4>
        <input name="Client_Name" type="text" placeholder="Client's Name">
        <hr class="under_input">
        <button class="get" @click=${this._getClientSpace}>GET</button>
       </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {SpaceUsedClientSearch};

