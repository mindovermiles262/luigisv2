const bodyDiv = () => {
  const div = document.createElement('div');
  div.classList.add('body');

  return div;
}

const menuContent = () => {
  let menuHTML = "<p>Menu built from scratch</p>";
  return menuHTML;
}

const aboutContent = () => {
  const aboutHTML = "<p>Created using Javascript Only</p>"
  return aboutHTML;
}

const contactContent = () => {
  const contactHTML = "<p>Find me at <a href='https://andyduss.com'>andyduss.com</a></p>";
  return contactHTML;
}

export { bodyDiv, menuContent, aboutContent, contactContent };
