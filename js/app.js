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

    // Find height of Navbar
    var navHeight = function () {
        var menu0 = $('.menu').eq(0).height();
        var menu1 = $('.menu').eq(1).height();
        if ($('.menu').eq(0).height() > $('.menu').eq(1).height()) {
            return $('.menu').eq(0).height()
        } else {return $('.menu').eq(1).height();}
    }

    // Smooth Scroll to hashtag anchors, minus height of Navbar
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - navHeight()
        }, 250);
        return false;
    });

    // Find scroll position of section elements
    var sections = $($('section'));
    var sectionIds = ['top'];
    var sectionPositions = [0];
    for (i = 0; i < sections.length; i++) {
        sectionPositions.push(sections.eq(i).offset().top - 40);
        sectionIds.push(sections.eq(i).attr('id'));
    }

    // Highlight relevant menu item
    $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        var navHeightNow = navHeight();
        for (i = 0; i < sections.length + 1; i++) {
            if (sc > sectionPositions[i] - navHeightNow && sc < sectionPositions[i + 1] - navHeightNow) {
                $(`a[href*="#"`).removeClass('highlighted');
                $(`a[href*="#${sectionIds[i]}"`).addClass('highlighted');
                break;
            } else if (sc > sectionPositions[sections.length - 1] - navHeightNow) {
                $(`a[href*="#"`).removeClass('highlighted');
                $(`a[href*="#${sectionIds[sections.length]}"`).addClass('highlighted');
            }
        }
    });

    // Carousel Control
    $(function () {

        $('.carousel-control').click(function (e) {
            e.preventDefault();
            $('#myCarousel').carousel($(this).data());
        });

    });

    // Testimonial animation
    // var counter = 0;
    // var quote = $('#testimonials article');
    // // console.log(quote[counter]);
    // var animation = function (counter) {
    //     while (counter > quote.length)
    //     quote.eq(counter).fadeToggle('slow', 'swing');
    //     counter++
    // }

    // fadeQuote();



    // function fadeQuote(counter) {
    //     quoteBlock.eq(counter).fadeIn(500).html(quotes[counter])
    //     .delay(2000)
    //     .fadeOut(500, function () { incrementAndPass(counter); });
    //     console.log(counter);
    // }

    // function incrementAndPass(counter) {
    //     if (counter === quotes.length - 1) { counter = 0; }
    //     else { counter++; }
    //     console.log("increment is " + counter);
    //     fadeQuote(counter);
    // }

    // let count = 0;
    // const quotes = [
    //     '<h4>"Max is a delight to behold and a credit to his nation."</h4><h4>&mdash; Jane from Occupied Europe</h4>',
    //     '<h4>"Let&apos;s focus on the things Max is not. Max is not a cultist. Max is not a Republican. Max is not a lizard person."</h4><h4>&mdash; Veronica Falls</h4>',
    //     '<h4>"There is no great genius without a touch of madness."</h4><h4>&mdash; Rumours</h4>'
    // ]
    // const quoteBlock = $('#testimonials article');
    // fadeQuote(count);

    function setImageOne() {
        $('#testimonials article').fadeIn(500).html('<h4>"Max is a delight to behold and a credit to his nation."</h4><h4>&mdash; Jane from Occupied Europe</h4>').delay(5000).fadeOut(500, function () { setImageTwo(); });
    }

    function setImageTwo() {
        $('#testimonials article').fadeIn(500).html('<h4>"Let&apos;s focus on the things Max is not. Max is not a cultist. Max is not a Republican. Max is not a lizard person."</h4><h4>&mdash; Veronica Falls</h4>').delay(5000).fadeOut(500, function () { setImageThree(); });
    }

    function setImageThree() {
        $('#testimonials article').fadeIn(500).html('<h4>"There is no great genius without a touch of madness."</h4><h4>&mdash; Rumours</h4>').delay(5000).fadeOut(500, function () { setImageOne(); });
    }

    setImageOne();

    console.log('js running')
});

