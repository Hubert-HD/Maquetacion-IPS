var navbar = document.getElementsByClassName('fijo')[0];
var login = document.getElementsByClassName('modal__login')[0];
var idioma = document.getElementsByClassName('modal__idioma')[0];

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('fijo--scroll');
  } else {
    navbar.classList.remove('fijo--scroll');
  }
}

function loginDesplegable() {
  if (login.style.display === 'none') {
    login.style.display = 'block';
  } else {
    login.style.display = 'none';
  }
}

function idiomaDesplegable() {
  if (idioma.style.display === 'none') {
    idioma.style.display = 'block';
  } else {
    idioma.style.display = 'none';
  }
}