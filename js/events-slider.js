// Events Slider

let swiper2 = new Swiper('.events__swiper', {
    // Default parameters
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      // when window width is >= 960px
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      // when window width is >= 960px
      1280: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 27
      },
      // when window width is >= 1280px
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    },
    navigation: {
      nextEl: '.events__next-button',
      prevEl: '.events__prev-button',
    },
    pagination: {
      el: '.events__pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: false,
    a11y: {
      paginationBulletMessage: 'Переключиться на слайд {{index}}',
    },
  });
