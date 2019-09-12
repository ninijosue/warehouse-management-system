import {UserAccount} from "./components/user-account/index"; 
import {html, render} from "lit-html";

customElements.define('user-account', UserAccount);




render(html`<user-account name="Bahati" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg"></user-account>
`, document.body);
