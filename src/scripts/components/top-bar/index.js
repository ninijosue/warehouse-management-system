import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class topBar extends LitElement{
   
    
    render(){
        return html`
        <div class="top_bar">
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {topBar};