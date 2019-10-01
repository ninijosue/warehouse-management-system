import {UserAccount} from "./components/user-account/index"; 
import {html, render} from "lit-html";
import {UserProfil}  from "./components/userProfit/index";
import {topBar} from "./components/top-bar/index";
import {bottomBar} from "./components/bottom-bar/index";
import {dashboardInfo} from "./components/dashboard-info/index";
import {volumeOfGoods} from "./components/volume-Goods/index";
import {topNavSection} from "./components/top-nav-section/index";
import {navigation} from "./components/navigation-section/index";
import {ListItem} from "./components/list-item/index";
import {fixeRightInfo} from "./components/fixe-right/index";
import {receiving} from "./components/receiving/index";
import {bottomFixeGoodsVolume} from "./components/bottom-fixed/index";
import {wellSaved} from "./components/well-saved/index";
import {ClientList} from "./components/list-port/index";
import {PutAway} from "./components/put-away-port/index";
import {ListSection} from "./components/clients-list/index";
import {search} from "./components/search-client/index";
import {ClientInfoFromList} from "./components/clients-info-detail/index";
import {ClientListEdit} from "./components/client-list-edit/index";
import {Delete} from "./components/delete/index";
import {Location} from "./components/put-away-location/index";
import {Report} from "./components/report/index";
import {ReportClicked} from "./components/report-cliked/index";
import {SammaryClientName} from "./components/sammary-client-name/index";
import {ClientSammaryReport} from "./components/client-sammary-report/index";
import {SpaceUsedClientSearch} from "./components/space-used-client-search";
import {ClientMonthlyReccord} from "./components/expense-month-search/index";
import {Income} from "./components/income/index";
import {ClientSpaceUsedReccord} from "./components/client-space-used-record";
import {CampanyExpenseReport} from "./components/campany-expense-report/index";
import { Deliver } from "./components/deliver-clicked";
import { DeliveringForm } from "./components/deliver-form";
import { SaveQuestion } from "./components/save-question";
import { DeliveredList } from "./components/delivered-list";
import { Setting } from "./components/setting";
import { Users } from "./components/setting-user-Acceil";
import { UserCustomization } from "./components/user-customization";
import { CreateUser } from "./components/create-user";
import { UserWellCreated } from "./components/user-well-created";
import { LitElement } from "lit-element";









































customElements.define('user-account', UserAccount);
customElements.define('list-item', ListItem);
customElements.define('user-profil', UserProfil);
customElements.define('top-bar', topBar);
customElements.define('bottom-bar', bottomBar);
customElements.define('dashboard-info', dashboardInfo);
customElements.define('volume-goods', volumeOfGoods); 
customElements.define('top-section', topNavSection);
customElements.define('nav-section', navigation);
customElements.define('fixe-right', fixeRightInfo);
customElements.define('receive-goods', receiving);
customElements.define('bottom-fixed', bottomFixeGoodsVolume);
customElements.define('well-saved', wellSaved);
customElements.define('client-list', ClientList);
customElements.define('put-away', PutAway);
customElements.define('list-content', ListSection);
customElements.define('search-client', search);
customElements.define('client-info-detail', ClientInfoFromList);
customElements.define('client-list-edit', ClientListEdit);
customElements.define('delete-section', Delete);
customElements.define('putaway-location', Location);
customElements.define('main-report', Report);
customElements.define('report-clicked', ReportClicked);
customElements.define('sammary-client-name', SammaryClientName);
customElements.define('client-sammary-report', ClientSammaryReport);
customElements.define('space-used-client-search', SpaceUsedClientSearch);
customElements.define('expense-monthly-reccord-client', ClientMonthlyReccord);
customElements.define('company-income', Income);
customElements.define('client-space-used-reccord', ClientSpaceUsedReccord);
customElements.define('campany-expense-report', CampanyExpenseReport);
customElements.define('deliver-cliked', Deliver);
customElements.define('deliver-form', DeliveringForm);
customElements.define('save-question', SaveQuestion);
customElements.define('delivered-list', DeliveredList);
customElements.define('setting-clicked', Setting);
customElements.define('users-clicked', Users);
customElements.define('user-customization', UserCustomization);
customElements.define('create-user', CreateUser);
customElements.define('user-well-created', UserWellCreated);




















window.onpopstate = function(evt){
  const _mainSection = document.querySelector('main-section');
  _mainSection.activeSection = !!window.location.hash ? window.location.hash.substring(1) : _mainSection.activeSection;
  
  
}
class MainSection extends LitElement{
  constructor(){
    super();
    this.activeSection = !!window.location.hash ? window.location.hash.substring(1) : "dashboard"
  }
  static get properties(){
    return {
      activeSection: {type: String, reflect: true, attribute: "current-section"}
    };
  }
  createRenderRoot() { 
    return this;
  }
  render(){
    return html`
    
    <top-bar>
    <!-- <user-profil profileName="Justin BAHATI" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg" ></user-profil> -->
        
    <user-account class="user-account" name="BAHATI" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg"></user-account>
    </top-bar>
    
    <nav-section></nav-section>
 
    
   <!---- <client-list></client-list>
    <put-away></put-away> --->

    <!---<report-clicked></report-clicked>-->

    <!---<sammary-client-name></sammary-client-name>-->

    <!-- <receive-goods></receive-goods>  -->
    <div id="main_section" current-section="${this.activeSection}">
      <dashboard-info class="main-section" active=${"dashboard" == this.activeSection} totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></dashboard-info>
      <receive-goods class="main-section" active=${"receiving" == this.activeSection}></receive-goods> 
      <!-- <list-content class="main-section" active = ${"inventory" == this.activeSection}></list-content> -->
      <putaway-location class="main-section" active =${"inventory" == this.activeSection}></putaway-location>

    </div>
    
  
     <!---<main-report></main-report> --->
    <!--- <client-info-detail></client-info-detail>--->


  <!---- <search-client></search-client> --->

     <!-- <fixe-right totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></fixe-right>  -->

  <bottom-bar></bottom-bar>
     
    
    `;
  }
}













customElements.define('main-section', MainSection);

render(html`<main-section></main-section>`, document.body);

    
      // ------------- finished that might be hiden----------------------
      // <well-saved></well-saved> 
// <dashboard-info totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></dashboard-info>
//<volume-goods today="1,567,340" thisWeek="1,567,340" lastWeek="1,289,455" thisMonth="23,067,502"></volume-goods>
//<list-content></list-content>
//<delete-section></delete-section>
//<client-list-edit></client-list-edit>
//<putaway-location></putaway-location>
// <space-used-client-search></space-used-client-search>
//<expense-monthly-reccord-client></expense-monthly-reccord-client>
//<company-income></company-income>
//<client-sammary-report></client-sammary-report> 
//<client-space-used-reccord></client-space-used-reccord>
//<campany-expense-report></campany-expense-report>
//<deliver-cliked></deliver-cliked>
//<deliver-form></deliver-form>
//<save-question></save-question>
//<delivered-list></delivered-list>
//<setting-clicked></setting-clicked>    
//<users-clicked></users-clicked>
//<user-customization></user-customization>
//<user-well-created></user-well-created>
//<create-user></create-user>
