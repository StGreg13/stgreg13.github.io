$(function(){ 
    $('[placeholder]').placeholder();    
});  

$(function() {
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });  

   $('.slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  nav:false,
  cssEase: 'linear',
  
});
});  

