
$('#togglebutton').click(function() {
    if ($(window).width() > 500) { //your chosen mobile res
      $('.text').toggle(300);
    } else {
      $('.menu').animate({
        width: 'toggle'
      }, 350);
    }
});