import header from "./header";
import { bodyDiv, menuContent, aboutContent, contactContent } from "./body";
import menuTab from "./menu";
import about from "./about";
import contactTab from "./contact";
import footer from "./footer";

const content = document.querySelector(".content");
const sections = [header(), menuTab(), about(), contactTab(), bodyDiv(), footer()];

sections.forEach( (DomElement) => {
  content.appendChild(DomElement);
})

const body = document.querySelector('.body');
body.innerHTML = menuContent();

const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
 tab.addEventListener('click', (event) => {

   let bodyFunctions = {
     menu: menuContent(),
     about: aboutContent(),
     contact: contactContent()
   }

   body.innerHTML = "";
   let bodyContent = bodyFunctions[event.target.id]
   body.innerHTML = bodyContent;
 })
})
