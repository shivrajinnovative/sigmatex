AOS.init();
$(document).ready(function () {
    var owl = $(".products .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            },
        }
    });
    $(".products .custom-prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });
    $(".products .custom-next").click(function () {
        owl.trigger('next.owl.carousel');
    });




    var owl2 = $(".clients .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $(".clients .custom-prev").click(function () {
        owl2.trigger('prev.owl.carousel');
    });
    $(".clients .custom-next").click(function () {
        owl2.trigger('next.owl.carousel');
    });
});