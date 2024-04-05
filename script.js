(function () {
  "use strict";

  var carousels = function () {
    var owl = $(".owl-carousel1");
    owl.owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
    5;
    // Previous slide button click event
    $(".Sec3_btn .btn-outline:nth-child(1)").on("click", function () {
      owl.trigger("prev.owl.carousel");
    });

    // Next slide button click event
    $(".Sec3_btn .btn-outline:nth-child(2)").on("click", function () {
      owl.trigger("next.owl.carousel");
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
