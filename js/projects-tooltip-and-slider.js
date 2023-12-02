// Projects Tooltip

(() => {
  tippy('.projects__marker-button', {
    theme: 'blanchard-theme',
    maxWidth: 240,
  });
})();

// Projects Slider

let swiper3 = new Swiper('.projects__swiper', {
  // Default parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 125,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34
    },
    // when window width is >= 960px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50
    },
    // when window width is >= 1280px
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50
    },
  },
  navigation: {
    nextEl: '.projects__next-button',
    prevEl: '.projects__prev-button',
  },
  loop: false,
});
