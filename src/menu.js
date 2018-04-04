const menuTab = () => {
  const div = document.createElement('div');
  div.classList.add('tab');
  div.innerHTML = "<h3 id='menu'>Menu</h3>";

  return div;
}

export default menuTab;
