$(function () {
    $('.callback__button').off('click');

    $('.callback__button').on('click', function () {
        console.log('callbackActive');
        $('.callback').toggleClass('callbackActive');
    });

    setInterval(function () {
        $('.client-popup').fadeToggle(200);
    }, 15000);

    function alarmer(selector){
        setTimeout(function(){selector.css('cssText', 'background: #f37575 !important;')},200);
        setTimeout(function(){selector.css('cssText', 'background: #e8e8e8 !important;')},400);
        setTimeout(function(){selector.css('cssText', 'background: #f37575 !important;')},600);
        setTimeout(function(){selector.css('cssText', 'background: #e8e8e8 !important;')},800);
    }

    $('.callback a.btn').click(function () {
        // создание заказа
        if($('#callback__phone').val() === undefined || $('#callback__phone').val() == ''){
            alarmer($('#callback__phone'));
            return false;
        }

        //animation
        $('.callback').toggleClass('callbackActive');
        setTimeout(function(){$('#callback-widget').addClass('fadeOutRight'); $('#callback-widget').addClass('animated'); alert('В ближайшее время наш менеджер свяжется с Вами');},300);


        
        $.post('/', {phone: $('#callback__phone').val(), backCall: true}, function (data) {
            var data = JSON.parse(data);
        });
        return false;
    });
});