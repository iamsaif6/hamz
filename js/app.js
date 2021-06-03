$('.navbar-toggler').click(function () {
     $('.mobile-menu').addClass("active");
     $('.mobile-menu-overlay').addClass("active");
});


$('.close-btn').click(function () {
     $('.mobile-menu').removeClass("active");
     $('.mobile-menu-overlay').removeClass("active");
});

var mixer = mixitup('.mixitUp');