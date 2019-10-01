import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientListData from "../../client-hostory-list";


class Delete extends LitElement{

  
        
    constructor(){
        super();
        
        
        
    }
   
    
    render(){
        return html`
        <div class="delete_section">
        <h4>Delete this record?</h4>
        <h5 class="cancel">Cancel</h5>
        <h5 class="delete">Delete</h5>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Delete};

