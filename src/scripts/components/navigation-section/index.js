import {LitElement, html, css, unsafeCSS} from "lit-element";
import {render} from "lit-html";
import styles from "./style.scss";
import navigationItems from "../../navigation-list";



class navigation extends LitElement{
    
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
       <ul>
           ${this.items.map((item) =>{
               return html`<list-item  name="${item.name}" icon="${item.icon}">${item.title}</list-item>`;


           })}
       
       </ul>
        
        `
    }

   

    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {navigation};