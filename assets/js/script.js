let swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    loop:true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


