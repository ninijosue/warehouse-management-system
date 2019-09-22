import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class PutAway extends LitElement{
   
    
    render(){
        return html`
       <div class="list">
       <h2>Put Away</h2>
       <img src="/static/images/icons/depot.png"
       </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {PutAway};