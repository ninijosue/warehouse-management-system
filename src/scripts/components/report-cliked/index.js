import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';



class ReportClicked extends LitElement{

  
        
    constructor(){
        super();
        
    }
 
    _summary(){
        window.location = "#report/get/summary"
    }

    render(){
        return html`
        <div class="buttons">
        <div class="report" @click=${this._summary}>
        <h2 class="h2_report">summary</h2>
        <img class="img_report" src="/static/images/icons/report-click.png">
        </div>

        <div class="space">
        <h2 class="h2_space">monthtly report</h2>
        <img class="img_space" src="/static/images/icons/icons8-list-96.png">
        </div>
   
        </div>

        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ReportClicked};

