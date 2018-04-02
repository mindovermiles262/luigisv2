const contactTab = () => {
  const div = document.createElement('div');
  div.classList.add('tab');
  div.id = "contact"
  div.innerHTML = "<h3>Contact</h3>";

  return div;
}
const contactBody = () => {
  const body = document.createElement('div');
  body.classList.add('body');
  body.innerHTML = "Contact Us By via Telegram for fastest results";

  return body;
}

export {contactTab, contactBody};
