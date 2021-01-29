var mySwiper = new Swiper('.swiper-container', {
    
    slidesPerView: 3,
    spaceBetween: 20,
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

function myFunction(x) {
  let menu = document.querySelector('.menu');
  // let mnuMobile =  document.querySelector('.menu-mobile');

  // if (mnuMobile.style.display === "block") {
  //   mnuMobile.style.display = "none";
  // } else {
  //   mnuMobile.style.display = "block";
  // }

  x.classList.toggle("change");
  
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}