const contactTab = () => {
  const div = document.createElement('div');
  div.classList.add('tab');
  div.innerHTML = "<h3 id='contact'>Contact</h3>";

  return div;
}

export default contactTab;
