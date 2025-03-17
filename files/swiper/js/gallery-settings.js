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
      loop: true,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1.04,
         },
         576: {
            slidesPerView: 2,
         },
         768: {
            slidesPerView: 3,
         },
         992: {
            slidesPerView: 4,
         }
      }
   });
}