import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class SammaryClientName extends LitElement{

  
        
    constructor(){
        super();
        
    }
 
    
    render(){
        return html`
       <div class="sammary_input_section">
       <img src="/static/images/icons/icons8-login-100-3.png">
       <h3>SAMMARY</h3>
       <h6>enter the name <br> 
       of any client and get its monthly summary report
       </h6>
        <hr class="top_line">
        <h4>Client's Name</h4>
        <input name="Client's Name" type="text" placeholder="Client's Name">
        <hr class="under_input">
        <button class="get">GET</button>
       </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {SammaryClientName};

