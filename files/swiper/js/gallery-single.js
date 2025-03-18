const gallery_slider = document.querySelector('.gallery-slider')
if (gallery_slider) {

   new Swiper(gallery_slider, {
      navigation: {
         prevEl: '#gallery-button-prev',
         nextEl: '#gallery-button-next',
      },
      slidesPerView: 4,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 0,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1.04,
            loop: true,
         },
         576: {
            slidesPerView: 2,
            loop: true,
         },
         768: {
            slidesPerView: 3,
            loop: true,
         },
         992: {
            slidesPerView: 4,
            loop: false,
         }
      }
   });
}