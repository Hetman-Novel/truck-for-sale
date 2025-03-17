const our_partners_slider = document.querySelector('.our-partners-slider')
if (our_partners_slider) {
    new Swiper(our_partners_slider, {
        navigation: {
        prevEl: '#our-partners-btnn-prev',
        nextEl: '#our-partners-btnn-next',
        },
        slidesPerView: 6,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 50,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
                slidesPerView: 1.7,
                spaceBetween: 20,
            },
            541: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1100: {
                slidesPerView: 6,
                spaceBetween: 50,
            }
        }
    })
}