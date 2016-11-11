
$('#shown').hover(function(){
    $('#hidden').show();
},function(){
    $('#hidden').hide();
});
$('#hidden').hover(function () {
    $(this).show();
}, function () {
    $(this).hide();
});
$('#hidden p').click(function(){
    $('#shown').html($(this).html());
    $('#hidden').hide()
});

$('#need').click(function(){
    $('.rent').show();
    $('.lend').hide();
});

$('#keep').click(function(){
    $('.lend').show();
    $('.rent').hide();
});

$.ajax({
    type:'post',
    url:'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType:'jsonp',
    success:function(data){
        console.log(data.success)
        if(data.success){
            $('.header_upload a').eq(0).html('昵称 '+data.data[0].lname).attr('href','http://192.168.0.105/html/personal.html')
            $('.header_upload a').eq(1).html('退出').attr({
                'onclick':'quitLogin()',
                'href':'###'
            })
        }
    }
})
function quitLogin(){
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success:function(data){
            if(data.resultCode=='0000'){
                $('.header_upload a').eq(0).html('登录').attr('href','http://192.168.0.105/html/Login.html');
                $('.header_upload a').eq(1).html('注册').attr('href','http://192.168.0.105/html/register.html').removeAttr('onclick');
            }
        }
    })
}
$.ajax({
    type:'post',
    url:'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType:'jsonp',
    success:function(data){
        if(data.success){
            var item='';
            for(var i in data.data){
            item += ' <li class="banner_top_li"><div class="banner_div">' +
                '<a href="http://192.168.0.105/html/detailPages.html?id='+data.data[i].id+'"><img src="http://www.zhijunxing.com/yiju/upload/'+
                data.data[i].photo.split(',')[0]+'"/><h1>'+data.data[i].villageName+'</h1><p href="###">'+data.data[i].room+'<span>'+data.data[i].price+'</span>元/月</p></a></div></li>'
            }
            $('.banner_top_ul').append(item);
            $('#banner').carousel({
                element: $('#banner'),
                time: 4000,
                left: $('.prev'),
                right: $('.next'),
                oli: 1
            }, false, false);
        }
    }
});






