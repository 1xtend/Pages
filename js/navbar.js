const navRefs = {
  navbar: document.querySelector('.navbar'),
  navbarToggler: document.querySelector('#navbarToggler'),
  body: document.querySelector('body'),
};

navRefs.navbarToggler.addEventListener('click', (e) => {
  navRefs.navbar.classList.toggle('is-active');
  navRefs.navbarToggler.classList.toggle('is-active');
  navRefs.body.classList.toggle('is-fixed');
});

navRefs.navbar.addEventListener('click', (e) => {
  if (e.target.classList.contains('navbar__link')) {
    navRefs.navbar.classList.remove('is-active');
    navRefs.navbarToggler.classList.remove('is-active');
    navRefs.body.classList.remove('is-fixed');
  }
});
