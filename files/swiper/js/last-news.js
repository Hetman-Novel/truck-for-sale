const lastNews = document.getElementById('last-news-slider')
if (lastNews) {

   new Swiper(lastNews, {
      navigation: {
         prevEl: '#last-news-button-prev',
         nextEl: '#last-news-button-next',
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