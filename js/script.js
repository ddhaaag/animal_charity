'use strict';

var mySwiper = new Swiper('.swiper-container', {
    
    slidesPerView: 3,
    spaceBetween: 20,

    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    340: {
      slidesPerView: 1,
      spaceBetween: 6,
      // centeredSlidesBounds: true,
      centerInsufficientSlides: true,
      // autoHeight: true,
      width: 300
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 1,
    //   spaceBetween: 6
    // },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
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