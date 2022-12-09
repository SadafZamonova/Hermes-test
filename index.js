var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: false,
    //   },
  });



  var swiper = new Swiper(".mySwipers", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });