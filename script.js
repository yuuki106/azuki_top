$(function(){

    //logoの表示
    $(window).on('load',function(){
        $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
        $("#splash_logo").delay(1000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
    });



    $(".openbtn").click(function () {

        var $menuBar= $('.menu-wrapper').find('.menu-inner');

        if($menuBar.hasClass('open')){
            $menuBar.removeClass('open')
            $menuBar.slideUp('fast');
        }else{
            $menuBar.addClass('open')
            $menuBar.slideDown('fast');
        };

        $(this).toggleClass('active');
    });


    $('.faq').click(function(){

        var $answer =$(this).find('.answer');

        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('.faq-span').text('+');
        }else{
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('.faq-span').text('-');
        };


    });

    $('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:800,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: true,//左右の矢印あり
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    });

    //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
    $('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
    });









});
