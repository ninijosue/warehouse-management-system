import {UserAccount} from "./components/user-account/index"; 
import {html, render} from "lit-html";

customElements.define('user-account', UserAccount);




render(html`<user-account name="Bahati" avatar="https://lh3.googleusercontent.com/-OMOO6vmnUUs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcchOb7oVd84GIMz9CXHX6PuBGN8A.CMID/s64-c/photo.jpg"></user-account>
<svg xmlns="http://www.w3.org/2000/svg" width="17.549" height="19.5" viewBox="0 0 17.549 19.5">
  <g id="icons8-change-user-100" transform="translate(0.5 0.5)">
    <path id="Path_225" data-name="Path 225" d="M25.434,31.3H9.875l.025-.411c.141-2.352,2.027-3.094,3.542-3.69.911-.358,1.7-.669,1.939-1.214.037-.441.034-.783.031-1.176v-.181a3.9,3.9,0,0,1-.857-1.787A1.571,1.571,0,0,1,13.84,21.5a1.272,1.272,0,0,1,.252-.974c-.474-1.968-.335-3.466.415-4.453a3.757,3.757,0,0,1,3.1-1.3,2.488,2.488,0,0,1,2.01.715,2.187,2.187,0,0,1,1.5,1.006c.794,1.28.33,3.274.1,4.042a1.272,1.272,0,0,1,.242.961c-.1.855-.435,1.2-.716,1.344a3.943,3.943,0,0,1-.835,1.78v.186a11.39,11.39,0,0,0,.031,1.175c.236.545,1.024.856,1.93,1.214,1.51.6,3.388,1.337,3.529,3.69Zm0,0" transform="translate(-9.248 -12.303)" fill="#aaa"/>
    <path id="Path_226" data-name="Path 226" d="M6.641,61.618H9.618V58.641" transform="translate(-6.641 -47.659)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_227" data-name="Path 227" d="M22.092,15.7a8.143,8.143,0,1,0-11.773.131" transform="translate(-7.736 -2)" fill="none" stroke="#aaa" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
  </g>
</svg>`, document.body);
