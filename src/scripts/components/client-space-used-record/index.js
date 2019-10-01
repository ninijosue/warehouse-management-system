import {LitElement, html, css, unsafeCSS} from 'lit-element';
import styles from './style.scss';
import clientRecordData from '../../client-space-used-data'



class ClientSpaceUsedReccord extends LitElement{

  
        
    constructor(){
        super();
        this.client = clientRecordData.client
    }
 
    
    render(){
        return html`
        <div class="section">
        <div class="blue_top"></div>
        <img src="/static/images/icons/icons8-login-100-3.png">
        <h2>SUMMARY</h2>
        <div class="open">
        <h3 class="h3_open">subura ltd</h3>
        <table>
        <tr>
        <th>good's name</th>
        <th>used space</th>
        <th>location</th>
        </tr>
        ${this.client.map(data=>{
            return html`
            <tr>
        <td class="left">${data.goodName}</td>
        <td>${data.spaceUsed} (sqm)</td>
        <td>${data.location}</td>
        </tr>
            `
        })}
      
        </table>
        </div>




        </div>
        `
    };

    static get styles(){
        return css`${unsafeCSS(styles)}`
    };
};

export {ClientSpaceUsedReccord};

