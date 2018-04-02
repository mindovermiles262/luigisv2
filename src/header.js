const header = () => {
  const div = document.createElement('div');
  div.classList.add('header')
  div.innerHTML = "<h1>Luigi's Restaurant</h1>";
  return div
}

export default header;
