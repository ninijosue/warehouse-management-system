import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class Income extends LitElement{

  
        
    constructor(){
        super();
        
    }
 
    
    render(){ 
        return html`
        <div class="buttons">
        <div class="report">
        <img class="img_back" src="/static/images/icons/icons8-login-100-3.png">
       <h3>iNCOME</h3>
        <h2 class="h2_report">20 000 000</h2>
        <img class="img_report" src="/static/images/icons/income2.png"/>
        </div>

        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Income};

