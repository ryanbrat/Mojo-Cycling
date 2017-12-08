

  $(function() {
      var header = $(".nav-logo");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 100) {
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

// INFO SLIDE

$('#btnFittingToggle').on('click', function() {
    $('#fittingInfo').slideToggle();
})

$('#btnServiceToggle').on('click', function() {
    $('#serviceInfo').slideToggle();
})
