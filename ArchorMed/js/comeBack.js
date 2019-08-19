$(window).on('beforeunload', function (event) {
    setTimeout(function () {
        $('body').trigger('comeBack');
    }, 3000);
    return "Остаться?";
});

/*
$('a').each(function () {
    $(this).attr('target', '_blank');
});
*/
