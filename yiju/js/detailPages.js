var map = new BMap.Map("map");
map.centerAndZoom(new BMap.Point(113.631349,34.753488), 11);  //初始化展示中心的经纬度（中心点位置、坐标）
map.enableScrollWheelZoom(true);   //实现地图的缩放功能
//map.disableDragging();     //禁止拖拽
var local = new BMap.LocalSearch(map, {
    renderOptions:{map: map}
});
local.search("郑州大学");

$.ajax({
    type:'post',
    url:'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType:'jsonp',
    success:function(data){
        console.log(data.success)
        if(data.success){
            $('.header_main_ul a').eq(0).html('昵称 '+data.data[0].lname).attr('href','http://192.168.0.105/html/personal.html')
            $('.header_main_ul a').eq(1).html('退出').attr({
                'onclick':'quitLogin()',
                'href':'###'
            })
        }
    }
});
function quitLogin(){
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success:function(data){
            if(data.resultCode=='0000'){
                $('.header_main_ul a').eq(0).html('登录').attr('href','http://192.168.0.105/html/Login.html');
                $('.header_main_ul a').eq(1).html('注册').attr('href','http://192.168.0.105/html/register.html').removeAttr('onclick');
            }
        }
    })
}

var href = window.location.href;
console.log(href);
console.log(href.indexOf('?'));
console.log(href.substring(href.indexOf('?') + 1, href.length));
var item = '';
$.ajax({
    type:'get',
    url:'http://www.zhijunxing.com/yiju/queryHousesByid.action',
    data:{
            id:74
          },
    dataType:'jsonp',
    success:function(data){
        if(data.success) {
            for(var i ; i<data.data.length; i++){
                item += '<div class="banner_bot"><img src="http://www.zhijunxing.com/yiju/upload/ '+data.data[i].photo.split(',')[0]+'"/>' +
                    '<ul><li><img src="http://www.zhijunxing.com/yiju/upload/ '+data.data[i].photo.split(',')[0]+'"/></li>' +
                    '<li><img src="http://www.zhijunxing.com/yiju/upload/ '+data.data[i].photo.split(',')[1]+'"/></li>' +
                    '<li><img src="http://www.zhijunxing.com/yiju/upload/ '+data.data[i].photo.split(',')[2]+'"/></li>' +
                    '<li><img src="http://www.zhijunxing.com/yiju/upload/ '+data.data[i].photo.split(',')[3]+'"/></li></ul><div/>' +
                    '<ul class="banner_main"><span class="banner_main_1">'+data.data[i].tittle+'</span>' +
                    '<li><span>租金：</span><a><span>'+data.data[i].price+'</span>元/月</a></li>' +
                    '<li><span>面积：</span>'+data.data[i].area+'</li><li class="room"><span>户型：</span>'+data.data[i].room+'</li>' +
                    '<li><span>朝向：</span>'+data.data[i].direction+'</li><li class="rentway"><span>租赁方式：</span>'+data.data[i].rentway+'</li>' +
                    '<li><span>租金压付：</span>'+data.data[i].paymethod+'</li><li class="hlevel"><span>装修：</span>'+data.data[i].hlevel+'</li>' +
                    '<li><span>特色：</span>'+data.data[i].features+'</li>' +
                    '<li><span>地址：</span>'+data.data[i].address+'</li></ul><button><img src="../img/call.png"/>'+data.data[i].linkphone+''+data.data[i].linkman+'</button>'

            }
            $('#dv').html(item)
        }
    }
});










