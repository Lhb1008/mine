


$('.nav_main_top-1').click(function(){
    $('.choose .choose-sctx').show();
    $('.choose .choose-sznc').hide();
    $('.choose .choose-xgmm').hide();
    $('.nav_main_top-2').children().css('background-color', '')
    $('.nav_main_top-3').children().css('background-color', '')
    $(this).children().css('background-color', '#cccccc')
    $('.keep').css('background-color', '#75a749');
    $('.delete').css('background-color', '#cccccc');
})

$('.nav_main_top-2').click(function(){
    $('.choose .choose-sznc').show();
    $('.choose .choose-sctx').hide();
    $('.choose .choose-xgmm').hide();
    $('.nav_main_top-1').children().css('background-color', '#eeeeee')
    $('.nav_main_top-3').children().css('background-color', '')
    $(this).children().css('background-color', '#cccccc')
    $('.keep').css('background-color', '#75a749');
    $('.delete').css('background-color', '#cccccc');
})

$('.nav_main_top-3').click(function(){
    $('.choose .choose-xgmm').show();
    $('.choose .choose-sctx').hide();
    $('.choose .choose-sznc').hide();
    $('.nav_main_top-1').children().css('background-color', '#eeeeee')
    $('.nav_main_top-2').children().css('background-color', '')
    $(this).children().css('background-color', '#cccccc')
    $('.keep').css('background-color', '#75a749');
    $('.delete').css('background-color', '#cccccc');
})

$('.keep').hover(function(){
    $('.delete').css('background-color', '#cccccc');
    $(this).css('background-color', '#75a749');
})

$('.delete').hover(function(){
    $('.keep').css('background-color', '#cccccc');
    $(this).css('background-color', '#75a749');
})


