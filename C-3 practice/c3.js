$(document).ready(function () {
    $('.navi>li').mouseenter(function () {
        $(this).find('.submenu').stop().slideDown(400);

    });
    $('.navi>li').mouseleave(function () {
        $(this).find('.submenu').stop().slideUp(400);

    });

    // $('.navi>li').hover(function () {
    //     $('.submenu', this).fadeToggle();

    // });




    setInterval(function () {
        $('.slidelist').delay(3000);
        $('.slidelist').animate({
            marginLeft: -800
        });
        $('.slidelist').delay(3000);
        $('.slidelist').animate({
            marginLeft: -1600
        });
        $('.slidelist').delay(3000);
        $('.slidelist').animate({
            marginLeft: 0
        });

    });

    $('.notice li:first-child').click(function () {
        $('#modal').addClass('active');
    });
    $('.btn').click(function () {
        $('#modal').removeClass('active')
    });


});//jq

