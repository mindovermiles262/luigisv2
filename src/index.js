import header from "./header";
import { menuTab, menuBody } from "./menu";
import about from "./about";
import { contactTab, contactBody } from "./contact";
import footer from "./footer";

const content = document.querySelector(".content");

const headerComponent = header();
const menuComponent = menuTab();
const menuBodyComponent = menuBody();
const aboutComponent = about();
const contactComponent = contactTab();
const contactBodyComponent = contactBody();
const footerComponent = footer();

content.appendChild(headerComponent);
content.appendChild(menuComponent);
content.appendChild(aboutComponent);
content.appendChild(contactComponent);
content.appendChild(menuBodyComponent);
content.appendChild(footerComponent);

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
 tab.addEventListener('click', () => {
   const body = document.querySelector('.body');
   body.remove();
   const tabID = tab.id;
 }) 
})
