import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientListData from "../../client-hostory-list";


class Delete extends LitElement{

  
        
    constructor(){
        super();
        
        
        
    }
   
    
    render(){
        return html`
        
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Delete};

