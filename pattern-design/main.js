function setActive(event) {
  console.log('event.target.tagName : ', event.target.tagName);
  if (event.target.tagName !== 'A') {
    return false;
  }

  addActiveClass(event.target);
}

function addActiveClass(link) {
  var activeLink = document.getElementsByClassName('active');
  console.log('activeLink : ', activeLink);
  if (activeLink) {
    activeLink[0].className = '';
  }

  link.className = 'active';
}

window.onload = function () {
  var nav = document.getElementsByClassName('nav');
  console.log(nav);
  nav[0].addEventListener('click', setActive);
}
