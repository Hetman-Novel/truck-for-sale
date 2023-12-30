if (window.matchMedia("(min-width: 576px)").matches) {
   const gallery_wrap_slider_arrow = document.querySelector('.gallery__wrap-slider-arrow')
   if (gallery_wrap_slider_arrow) {
      gallery_wrap_slider_arrow.remove()
   }
}
if (window.matchMedia("(max-width: 575.98px)").matches) {
   const gallery_slider = document.querySelector('.gallery-slider')
   if (gallery_slider) {
      new Swiper(gallery_slider, {
         navigation: {
            prevEl: '#gallery-button-prev',
            nextEl: '#gallery-button-next',
         },
         simulateTouch: false,
         slideToClickedSlide: true,
         slidesPerView: 1,
         watchOverflow: true,
         spaceBetween: 14,
         //loop: true,
         speed: 800,
         effect: 'slide',
      });
   }
}