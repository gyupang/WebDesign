$(function () {
    $('.gnb').hover(function () {
        $('.lnb', this).fadeToggle();

    });

    //슬라이드

    setInterval(mySlide, 3000);
    function mySlide() {
        $('.slidein').animate({
            'left': '-1200px'

        }, 500, function () {
            //슬라이드인 안에 있는 첫번째 이미지를 복제 clone 해서 슬라이드인의 뒤 append 에 붙여라
            $('.slidein img:first-child').clone().appendTo('.slidein');
            $('.slidein img:first-child').remove();
            $('.slidein').css('left', 0);

        });
    }
    /* $('.box').before('악'); append 뒤에다 //prepend 앞에다
    $('.slidein').append('img');
    $('.img').appendTo('.slidein')
    
     */
    $('.tab a').click(function (e) {
        e.preventDefault();
        // 기능을 없앰 공부

        $('.tab a').removeClass('active');
        $(this).addClass('active');
        //탭의 액티브를 지우고 누른탭에 액티브를 추가

        const myid = $(this).data('idx');
        //누른탭에 data-idx 값을 가져온다
        $('.tab-content>div').removeClass('active');
        $(myid).addClass('active');
        //tab-content의 모든 액티브를 지운다
        //가져온 data-idx값과 같은 탭콘텐츠에 액티브를 추가

    });

//공지사항 팝업
$('.pop').click(function(e){
e.preventDefault();
$('.popup').fadeIn(300)

});
$('.close').click(function(e){
    e.preventDefault();
    $('.popup').fadeOut(300)

});





}); //jq
