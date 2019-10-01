import {LitElement, html, css, unsafeCSS} from "lit-element";
import {render} from "lit-html";
import styles from "./style.scss";
import navigationItems from "../../navigation-list";
import { dashboardInfo } from "../dashboard-info";


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
    checkWhat(item){
        
        if(item.title == "DashBoard"){
           
        console.log('dashboard clicked');
        
           
        }
       
       
        
    }
    
    render(){
        
        return html`
       <ul>
           ${this.items.map((item) =>{
               return html`<list-item @click="${() => this.checkWhat(item)}" icon="${item.icon}">${item.title}</list-item>`;


           })}
       
       </ul>
        
        `
    }

   

    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {navigation};