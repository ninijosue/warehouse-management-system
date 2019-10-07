import {MainSectionState} from './helpers/utils';


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
import {expenseMmonthSeatch} from "./components/expense-month-search/index";
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
import { Print } from './components/search-date-info-to-print';









































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
customElements.define('expense-month-search', expenseMmonthSeatch);
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
customElements.define('print-list-of-entredata-inventory', Print);


const mainPageSection = document.querySelector('#main_page_section');


















window.onpopstate = function(evt){
  if(!mainPageSection) return;
  mainPageSection.activeSection = !!window.location.hash ? window.location.hash.substring(1) : mainPageSection.activeSection;
}
class MainSection extends LitElement{
  constructor(){
    super();
    this.activeSection = !!window.location.hash ? window.location.hash.substring(1) : "dashboard";
    this.state = new MainSectionState({currentSection: this.activeSection});
    this._oncurrentsectionchange = this._oncurrentsectionchange.bind(this);
    this.state.subscribe(this._oncurrentsectionchange);
    this.getInventoryLists = !!window.location.hash ? window.location.hash.substring(1) : "dashboard";
    this.displayOn = "on";
    this.displayOff = "off";
    
    
    
    
    
    
  }
  _oncurrentsectionchange(){
    this.activeSection = this.state.currentSection;
    window.location = "#"+this.state.currentSection;
  }
  static get properties(){
    return {
      activeSection: {type: String, reflect: true, attribute: "current-section"},
      fixed : {type: String, reflect: true}

    };
  }
  createRenderRoot() { 
    return this;
  }

  

  render(){
    const dashboard = "dashboard";
    const clientInfo = "inventory/choooseClient/clientInfo";
    const choooseClientInventory = "inventory/chooseClient";
    const sectionOn = this.activeSection;
     if (sectionOn == dashboard ) {
      var turnOff = this.displayOff;
      
     }else if (sectionOn == dashboard ) {
      var turnOffFixedRight = this.displayOff
     }
     else if (sectionOn == clientInfo) {
      var turnOffFixedRight = this.displayOff
      var turnOn = this.displayOn
     }
     else if (sectionOn == choooseClientInventory ) {
      var turnOff = this.displayOff;
      var turnOnFixedRigth = this.displayOn;
     }
    else{
      var turnOn = this.displayOn
      var turnOnFixedRigth = this.displayOn;
    }

    
    return html`
    
    <top-bar>
    <!-- <user-profil profileName="Justin BAHATI" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg" ></user-profil> -->
        
    <user-account class="user-account" name="BAHATI" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg"></user-account>
    </top-bar>
    
    <nav-section></nav-section>
 
    
   <!---- 
    <put-away></put-away> --->

    <!-- <report-clicked></report-clicked> -->

    <!---<sammary-client-name></sammary-client-name>-->

    <!-- <receive-goods></receive-goods>  -->
    <div id="main_section" current-section="${this.activeSection}">
      <dashboard-info class="main-section" active=${"dashboard" == this.activeSection} totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></dashboard-info>
      <receive-goods class="main-section" active=${"receiving" == this.activeSection}></receive-goods> 
      <!-- <list-content class="main-section" active = ${"inventory" == this.activeSection}></list-content> -->
      <!-- <putaway-location class="main-section" active =${"inventory" == this.activeSection}></putaway-location> -->
      <client-list class="main-section" active =${"inventory" == this.activeSection}></client-list>
      <fixe-right class="main-section" fixed=${"on" == turnOnFixedRigth || turnOffFixedRight } totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></fixe-right>
      <bottom-fixed class="main-section" fixed=${"on"== turnOn || turnOff} today="1,567,340" thisWeek="1,567,340" lastWeek="1,289,455" thisMonth="23,067,502"></bottom-fixed>
      <list-content class="main-section" active = ${"inventory/chooseClient" == this.activeSection}></list-content>
      <putaway-location class="main-section" active=${"inventory/location" == this.activeSection}></putaway-location>
      <deliver-cliked class="main-section" active=${"deliver" == this.activeSection}></deliver-cliked>
      <report-clicked class="main-section" active=${"expense" == this.activeSection}></report-clicked>
      <client-info-detail class="main-section" active=${"inventory/choooseClient/clientInfo" == this.activeSection}></client-info-detail>
      <print-list-of-entredata-inventory class="main-section"  active=${"inventory/choooseClient/clientInfo/print_inventory_list" == this.activeSection}></print-list-of-entredata-inventory>
      <deliver-form class="main-section" active=${"deliver/delivergoods" == this.activeSection}></deliver-form>
      <main-report class="main-section" fixed=${"report" == this.activeSection}></main-report> 
      <report-clicked class="main-section" fixed=${"report/get" == this.activeSection}></report-clicked> 
      <sammary-client-name class="main-section" fixed=${'report/get/summary' == this.activeSection}></sammary-client-name>
      <client-sammary-report class="main-section" fixed=${'report/get/summary/list' == this.activeSection}></client-sammary-report> 
      <space-used-client-search class="main-section" fixed=${'report/space-used' == this.activeSection}></space-used-client-search>
      <client-space-used-reccord class="main-section" fixed=${"report/space-used/info" == this.activeSection}></client-space-used-reccord>
      <campany-expense-report class="main-section" fixed=${'report/expense-month/expense-detail' == this.activeSection}></campany-expense-report>
      <expense-month-search class="main-section" fixed=${'report/expense-month' == this.activeSection}></expense-month-search>
      <company-income class="main-section" fixed=${'report/income' == this.activeSection}></company-income>
      <setting-clicked class="main-section" active=${"system" == this.activeSection}></setting-clicked> 
      <users-clicked class="main-section" active=${"system/users" == this.activeSection}></users-clicked>
      <user-customization class="main-section" active=${"system/users/profil" == this.activeSection}></user-customization>
      <create-user class="main-section" active=${"system/users/new-user" == this.activeSection}></create-user>
    </div>
    <!-- class="main-section" fixed=${"expense" == this.activeSection} -->
  
    <!--- <client-info-detail></client-info-detail>--->


  <!---- <search-client></search-client> --->

    

  <bottom-bar></bottom-bar>
     
    
    `;
  }
}













customElements.define('main-section', MainSection);

// render(html`<main-section id="main_page_section"></main-section>`, document.body);

    
      // ------------- finished that might be hiden----------------------
      // <well-saved></well-saved> 
// <dashboard-info totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></dashboard-info>
//<volume-goods today="1,567,340" thisWeek="1,567,340" lastWeek="1,289,455" thisMonth="23,067,502"></volume-goods>
//<list-content></list-content>
//<delete-section></delete-section>
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

