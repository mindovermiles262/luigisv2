const about = () => {
  const div = document.createElement('div');
  div.classList.add('tab');
  div.innerHTML = "<h3 id='about'>About</h3>";

  return div;
}

export default about;
