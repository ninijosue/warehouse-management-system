import {LitElement, html, css, unsafeCSS} from "lit-element";
import styles from "./style.scss";

class fixeRightInfo extends LitElement{
    static get properties(){
        return {
            totalSpace : {type: Number },
            spaceUsed : {type: Number},
            remaingSpace: {type: Number},
            clients: {type: Number},
            expiredBonds: {type: Number}
        };
    };

    constructor(totalSpace, spaceUsed, remaingSpace, clients, expiredBonds){
        super();
        this.totalSpace = totalSpace;
        this.spaceUsed = spaceUsed;
        this.remaingSpace = remaingSpace;
        this.clients = clients;
        this.expiredBonds = expiredBonds;
    };

    render(){
        return html` 
        <div class="container">
        <div class="row">

        
     
        <div class="info total_space">
        <h2>${this.totalSpace}m</h2>
        <img src="/static/images/icons/total-space.png" alt="icon"/>
        <h5>Total Space</h5>
        </div>
      

        
        <div class="info space_used">
        <h2>${this.spaceUsed}m</h2>
        <img src="/static/images/icons/used-space.png" alt="icon"/>
        <h5>Space Used</h5>
        </div>
        

        
        <div class="info remaining_space">
        <h2>${this.remaingSpace}m</h2>
        <img src="/static/images/icons/remain-space.png" alt="icon"/>
        <h5>Space Remain</h5>
        </div>
       

      
        <div class="info clients">
        <h2>${this.clients}</h2>
        <img src="/static/images/icons/client.png" alt="icon"/>
        <h5>Clients</h5>
        </div>
        

  
        <div class="info expired_bonds">
        <h2>${this.expiredBonds}</h2>
        <img src="/static/images/icons/expired.png" alt="icon"/>
        <h5>Expired Bonds</h5>
        </div>
 

        </div>
        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {fixeRightInfo};