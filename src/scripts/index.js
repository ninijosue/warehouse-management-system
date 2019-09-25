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






















render(html`
    
    <top-bar>
    <!-- <user-profil profileName="Justin BAHATI" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg" ></user-profil> -->
        
    <user-account class="user-account" name="BAHATI" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg"></user-account>
    </top-bar>
    <!--- <receive-goods></receive-goods> --->
    <nav-section></nav-section>

    
   <client-list></client-list>
    <put-away></put-away> 
     
    <!--- <client-info-detail></client-info-detail>--->

  <!---- <search-client></search-client> --->

     <fixe-right totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></fixe-right> 
    <top-section></top-section>
   <bottom-fixed today="1,567,340" thisWeek="1,567,340" lastWeek="1,289,455" thisMonth="23,067,502"></bottom-fixed>
  <bottom-bar></bottom-bar>
    
    
    `
    , document.body);

    
      // ------------- finished that might be hiden----------------------
      // <well-saved></well-saved> 
// <dashboard-info totalSpace="1000" spaceUsed="700" remaingSpace="300" clients="150" expiredBonds="50" ></dashboard-info>
//<volume-goods today="1,567,340" thisWeek="1,567,340" lastWeek="1,289,455" thisMonth="23,067,502"></volume-goods>
//<list-content></list-content>