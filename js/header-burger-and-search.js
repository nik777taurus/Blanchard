// Header Burger

let burgerOpened = document.querySelector('.header__burger');
let burgerClosed = document.querySelector('.header__burger-closed');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');
let entrance = document.querySelector('.header__entrance');

let searchOpened = document.querySelector('.header__search');
let searchClosed = document.querySelector('.header-form__search-closed');
let searchForm = document.querySelector('.header-form');
let searchInput = document.querySelector('.header-form__input');


burgerOpened.addEventListener('click', () => {
  burgerOpened.classList.toggle('header__burger--active');

  burgerClosed.classList.toggle('header__burger-closed--active');

  menu.classList.toggle('header__nav--active');
  menu.style.transition = 'all .3s ease';

  document.body.classList.toggle('stop-scroll');

  searchForm.classList.remove('header-form--active');

  searchOpened.classList.remove('header__search--active');
});

menu.addEventListener('transitionend', () => {
  if (!menu.classList.contains('header__nav--active')) {
    menu.removeAttribute('style');
  }
});

burgerClosed.addEventListener('click', () => {
  burgerOpened.classList.remove('header__burger--active');

  burgerClosed.classList.remove('header__burger-closed--active');

  menu.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');
});

menuLinks.forEach(
  (el) => {
    el.addEventListener('click', () => {
      burgerOpened.classList.remove('header__burger--active');

      burgerClosed.classList.remove('header__burger-closed--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    });
  }
);

entrance.addEventListener('click', () => {
  burgerOpened.classList.remove('header__burger--active');

  burgerClosed.classList.remove('header__burger-closed--active');

  menu.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');
});

// Header Search

searchOpened.addEventListener('click', () => {
  searchForm.classList.toggle('header-form--active');
  searchForm.style.transition = 'all .3s ease';

  searchOpened.classList.toggle('header__search--active');

  document.body.classList.toggle('stop-scroll');

  searchInput.value = '';
});

searchForm.addEventListener('transitionend', () => {
  if (!searchForm.classList.contains('header-form--active')) {
    searchForm.removeAttribute('style');
  }
});

searchClosed.addEventListener('click', () => {
  searchForm.classList.remove('header-form--active');

  searchOpened.classList.remove('header__search--active');

  document.body.classList.remove('stop-scroll');
});
