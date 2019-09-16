import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";

class volumeOfGoods extends LitElement{
    static get properties(){
        return {
            today: {type: String},
            thisWeek: {type: String},
            lastWeek: {type: String},
            thisMonth: {type: String}


        };
    };

     constructor(today, thisWeek, lastWeek, thisMonth){
        super();
            this.today = today;
            this.thisWeek = thisWeek;
            this.lastWeek = lastWeek;
            this.thisMonth = thisMonth;
    }
    render(){
        return html`
        <div class="volume_goods">
        
        <div class="today">
        <h5>Today</h5>
        <h4>${this.today}</h4>
        <img src="/static/images/icons/icons8-increase-100@2x.png" alt="icon">
        </div>

        <div class="this_week">
        <h5>This week</h5>
        <h4>${this.thisWeek}</h4>
        <img src="/static/images/icons/icons8-increase-100@2x.png" alt="icon">
        </div>

        <div class="last_week">
        <h5>Last Week</h5>
        <h4>${this.lastWeek}</h4>
        <img src="/static/images/icons/icons8-increase-100@2x.png" alt="icon">
        </div>

        <div class="this_month">
        <h5>This month</h5>
        <h4>${this.thisMonth}</h4>
        <img src="/static/images/icons/icons8-increase-100@2x.png" alt="icon">
        </div>
        
        </div>
        
        `;
    }
    static get styles(){
        return css`${unsafeCSS(styles)}`;
    }
}

export {volumeOfGoods};