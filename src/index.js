import header from "./header";
const content = document.querySelector(".content");

const headerComponent = header();

content.appendChild(headerComponent);

console.log(headerComponent)
