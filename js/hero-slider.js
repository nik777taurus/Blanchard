document.addEventListener('DOMContentLoaded', () => {
  // Hero Slider

  let swiper4 = new Swiper('.hero__swiper', {
    // Default parameters
    allowTouchMove: false,
    pagination: {
      el: '.events__pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    },
  });

  let header = document.querySelector('.header');
  let headerBottom = document.querySelector('.header-bottom');
  let slider = document.querySelector('.hero__wrapper');
  let height = header.offsetHeight;
  let bottomHeight = headerBottom.offsetHeight;

  slider.style.top = `-${height}px`;
  slider.style.marginBottom = `-${bottomHeight}px`;
})
