import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';

class topBar extends LitElement{
    constructor(){
        super();
       this._hideNavigation()
    }
    firstUpdated(evt){
       this.sliderBtn = this.shadowRoot.querySelector(".hidding");
       this.navSection = document.querySelector('nav-section');
       this.classNotFound = document.querySelector("slide_on");
    }
    _getNav(evt){
        this.navSection.classList.toggle("slide_on");
        this.navSection.classList.toggle("slide_end");
        this.navSection.classList.remove("hide");
       
    }
    _hideNavigation(){

//         document.addEventListener("click", (evt)=>{
//             if (!evt.target.closest("top-bar")){
//                 // this.navSection.classList.remove("slide_on");
//                 this.navSection.classList.toggle("slide_end")
// 1            }
            
//         })
    }
    
    render(){
        return html`
        <show-nav  @click=${this._getNav} class="hidding"></show-nav>
        <div class="top_bar">
            <slot></slot>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {topBar};