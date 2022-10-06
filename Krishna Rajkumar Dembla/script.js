$(document).ready(function() {
    $(window).scroll(function() {
        // STICKY NAVBAR
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // SCROLL BUTTON
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // SLIDE ANIMATION
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // NAVBAR
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // TYPING TEXT ANIMATION
    var typed = new Typed(".typing", {
        strings: ["Developer", "Gamer", "Athelete", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Gamer", "Athelete", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //OWL CAROUSEL ANIMATION
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});