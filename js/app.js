console.log("js running");

$(document).ready(function(e) {
    console.log("document ready");

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
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        $('html, body').animate({scrollTop: target.offset().top}, 250, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
                return false;
            } else {
                $target.attr('tabindex', '-1');
                $target.focus();
            }
        });
    });


});

