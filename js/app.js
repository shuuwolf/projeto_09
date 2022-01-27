$('nav a').hover(function(){
    $('nav li').removeClass('selected');
    $(this).parent().addClass('selected');
})

$('.mobile h3').on('click', function(){
    $('.nav-mobile').slideToggle();
});