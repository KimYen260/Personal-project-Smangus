// var hamburger = document.querySelector(".hamburger");
// // On click
//     hamburger.addEventListener("click", function() {
//   // Toggle class "is-active"
//     hamburger.classList.toggle("is-active");
//   // Do something else, like open/close menu
// });
/* HAMBURGER BUTTON*/
$(function () {
  $("button.hamburger").on("click", function () {
    $("button.hamburger").toggleClass("is-active");
    $("nav.main_nav").toggle(1000);
    // console.log($("button.hamburger"));
  });
});

/* SLICK CAROUSEL: LAZY LOADING;*/

// To use lazy loading, set a data-lazy attribute
// on your img tags and leave off the src

{
  /* <img data-lazy="img/lazyfonz1.png"/> */
}

$(document).ready(function () {
  // $('.your-class').slick({
  //   setting-name: setting-value
  $('.wrap').slick({
    infinite: true,
    centerMode:false,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        
        }
      }
    ]
  });

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
   
  });

});

