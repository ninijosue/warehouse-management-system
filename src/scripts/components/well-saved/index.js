import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class wellSaved extends LitElement{
   
    
    render(){
        return html`
       <div class="save_section">
       <h4>Record Well Saved!!</h4>
       </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {wellSaved};