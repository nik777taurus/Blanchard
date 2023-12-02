// Gallery Select

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  sorter: () => {false},
});

// Gallery Slider

let swiper1 = new Swiper('.gallery__swiper', {
  // Default parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },
    // when window width is >= 960px
    960: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    // when window width is >= 1280px
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
  navigation: {
    nextEl: '.gallery__next-button',
    prevEl: '.gallery__prev-button',
  },
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
    clickable: true,
  },
  loop: false,
  a11y: {
    paginationBulletMessage: 'Переключиться на слайд {{index}}',
  },
});
