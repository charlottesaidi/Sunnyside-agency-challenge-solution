$('#mobile_btn').on('click', function() {
    $('#mobile_nav').slideToggle('slow');
    $(this).toggleClass('grey')
})