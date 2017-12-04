

  $(function() {
      var header = $(".nav-logo");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 500) {
              header.removeClass('nav-logo').addClass("small-brand");
          } else {
              header.removeClass("small-brand").addClass('nav-logo');
          }
      });
  });


// BACK TO TOP BUTTON
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
