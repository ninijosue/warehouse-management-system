import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class SaveQuestion extends LitElement{

  
        
    constructor(){
        super();
        
    }
   
    
    render(){
        return html`
        <div class="delete_section">
        <h4>Do you want deliver this reccord ?</h4>
        <h5 class="cancel">Cancel</h5>
        <h5 class="delete">Ok</h5>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {SaveQuestion};

