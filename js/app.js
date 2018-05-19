console.log("js running");

$(document).ready(function(e) {
    console.log("document ready");

    // Navbar fade in gray backdrop on scroll
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('.menu').css({
            background: function () {
                var alpha = $(window).scrollTop() / 500;
                return `rgba(128,128,128,${alpha})`;
            }
        });
    });

    // credit https://css-tricks.com/snippets/jquery/smooth-scrolling/

    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //     $('html, body').animate({scrollTop: target.offset().top}, 250, function () {
    //         var $target = $(target);
    //         $target.focus();
    //         if ($target.is(":focus")) {
    //             return false;
    //         } else {
    //             $target.attr('tabindex', '-1');
    //             $target.focus();
    //         }
    //     });
    // });

    // Find Height of Navbar
    
    

    var navHeight = function () {
        var menu0 = $('.menu').eq(0).height();
        var menu1 = $('.menu').eq(1).height();
        if ($('.menu').eq(0).height() > $('.menu').eq(1).height()) {
            return $('.menu').eq(0).height()
        } else {return $('.menu').eq(1).height();}
    }

    // Smooth Scroll to hashtag anchors
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - navHeight()
        }, 250);
        return false;
    });



    // Carousel Control
    $(function () {

        $('.carousel-control').click(function (e) {
            e.preventDefault();
            $('#myCarousel').carousel($(this).data());
        });

    });


});

