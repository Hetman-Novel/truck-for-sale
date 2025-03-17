const ourOffersSlider = document.getElementById('our-offers-slider')
if (ourOffersSlider) {

   new Swiper(ourOffersSlider, {
      navigation: {
         prevEl: '#our-offers-button-prev',
         nextEl: '#our-offers-button-next',
      },
      slidesPerView: 3,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 15,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1,
            loop: true,
         },
         768: {
            slidesPerView: 2,
            loop: true,
         },
         992: {
            slidesPerView: 3,
            loop: false,
         }
      }
   });
}