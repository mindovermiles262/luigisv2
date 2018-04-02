const menuTab = () => {
  const div = document.createElement('div');
  div.classList.add('tab');
  div.innerHTML = "<h3>Menu</h3>";

  return div;
}

const menuBody = () => {
  const body = document.createElement('div');
  body.classList.add('body');
  body.innerHTML = "This entire site was made using JavaScript";

  return body;
}

export { menuTab, menuBody };
