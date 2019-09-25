import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class search extends LitElement{
    constructor(){
        super();
    }
   
    
    render(){
        return html`
      <div class="search_section">
      <input class="search" type="search" />
      <img src="/static/images/icons/search.png" alt=""> 
      <hr> 
      </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {search};