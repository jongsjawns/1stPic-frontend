var navButton = document.getElementById('nav-toggle-button');

function toggleNavDisplay(event) {
  event.preventDefault();

  var responsiveNav = document.getElementById('responsive-nav');

  responsiveNav.classList.toggle('showNav');
}

navButton.addEventListener('click', toggleNavDisplay);
