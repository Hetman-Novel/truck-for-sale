if (window.matchMedia("(min-width: 576px)").matches) {
   const gallery_wrap_slider_arrow = document.querySelector('.gallery__wrap-slider-arrow')
   if (gallery_wrap_slider_arrow) {
      gallery_wrap_slider_arrow.remove()
   }
}
if (window.matchMedia("(max-width: 575.98px)").matches) {
   const gallery_slider = document.querySelector('.gallery-slider')
   if (gallery_slider) {
      gallery_slider.classList.add('swiper-conteiner')
      document.querySelector('.gallery__items').classList.add('swiper-wrapper')

      const gallery__items = document.querySelectorAll('.gallery__item')
      gallery__items.forEach(function (galleryItem) {
         galleryItem.classList.add('swiper-slide')
      })

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