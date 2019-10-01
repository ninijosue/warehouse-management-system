import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class ClientMonthlyReccord extends LitElement{

  
        
    constructor(){
        super();
        
    }
 
    
    render(){
        return html`
       <div class="sammary_input_section">
       <img src="/static/images/icons/icons8-login-100-3.png">
       <h3>EXPENSE</h3>
       <h6>enter the Month  <br> 
       and Year in other to the its records
       </h6>
        <hr class="top_line">
        <h4>Client's Name</h4>
        <input name="Client's Name" type="date" placeholder="">
        <hr class="under_input">
        <button class="get">GET</button>
       </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ClientMonthlyReccord};

