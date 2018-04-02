const footer = () => {
  const div = document.createElement('div');
  div.classList.add('footer');
  div.innerHTML = '<h3>This is the footer</h3>';

  return div;
}

export default footer;
