import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class Deliver extends LitElement{

  
        
    constructor(){
        super();
        
    }
 

    deliverGoods(){
        window.location = "#deliver/delivergoods";
    }

    deliveredList(){
        window.location = "#deliver/deliveredlist";
    }
    
    render(){
        return html`
        <div class="buttons">
        <div class="report" @click=${this.deliverGoods}>
        <h2 class="h2_report">DELIVER GOODS</h2>
        <img class="img_report" src="/static/images/icons/icons8-delivered-96.png"/>
        </div>

        <div class="space">
        <h2 class="h2_space">DELIVERED LIST</h2>
        <img class="img_space" src="/static/images/icons/deliver-list.png"/>
        </div>
   
        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {Deliver};

