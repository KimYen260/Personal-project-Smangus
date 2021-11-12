
  // var hamburger = document.querySelector(".hamburger");
  // // On click
  //     hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //     hamburger.classList.toggle("is-active");
  //   // Do something else, like open/close menu
  // });

  $(function(){
    $("button.hamburger").on("click", function(){
      $("button.hamburger").toggleClass("is-active");
      $("nav.main_nav").toggle(1000);
      // console.log($("button.hamburger"));
    });
  });