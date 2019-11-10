import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";
import navigationItems from "../../navigation-list";



class Slider extends LitElement{
    
     constructor(){
        super();
        
       
    }
    render(){
        
        return html`
        <div class="slider">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
        </div>
       
        `
    }

   

    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {Slider};