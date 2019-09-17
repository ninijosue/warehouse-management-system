import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";
import navigationItems from "../../navigation-list";

class Navigation extends LitElement{
    
     constructor(){
        super();
        this.items = navigationItems.listItems;
       
    }
    static get properties(){
        return {
            items: {type: Array, attribute: true}
        }
    }
    render(){
        return html`
       <div class="navigation">
       <ul>
           ${this.items.map(item=>{
               return html`<list-item icon="${item.icon}">${item.title}</list-item>`
           })}
       
       </ul>
       </div>
        
        `;
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {Navigation};