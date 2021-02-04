'use strict';

var mySwiper = new Swiper('.swiper-container', {
    
    slidesPerView: 1,
    spaceBetween: 6,
    // centeredSlides: true,

    // Responsive breakpoints
  breakpoints: {

    // when window width is >= 320px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
   
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});


/* Hambuger */

$('#toggle').click(function() {
  $(this).toggleClass('on');
  $('.menu').slideToggle();
})