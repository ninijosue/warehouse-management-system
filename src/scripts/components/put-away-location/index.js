import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientListData from "../../client-hostory-list";


class Location extends LitElement{

  
        
    constructor(){
        super();
        
    }
   
    
    render(){
        return html`
            <div class="location_bg">
            <h3>The Place Of ( Client's Name) Is</h3>
            <div class="location">
             <h2>201</h2>
            <img src="/static/images/icons/location.png"
            </div>
            </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Location};

