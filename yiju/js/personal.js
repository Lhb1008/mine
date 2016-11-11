

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


$('.nav_main_top li').click(function () {
    $(this).addClass('curr').siblings().removeClass('curr');
    if ($(this).index() == 0) {
        $('.choose-sctx').show();
        $('.choose-sznc').hide();
        $('.choose-xgmm').hide();
        $('.nav_main_top-1 a').css('background-color','#cccccc');
        $('.nav_main_top-2 a').css('background-color','#eeeeee');
        $('.nav_main_top-3 a').css('background-color','#eeeeee')
    }
    if ($(this).index() == 1) {
        $('.choose-sznc').show();
        $('.choose-xgmm').hide();
        $('.choose-sctx').hide();
        $('.nav_main_top-2 a').css('background-color','#cccccc');
        $('.nav_main_top-1 a').css('background-color','#eeeeee');
        $('.nav_main_top-3 a').css('background-color','#eeeeee')

    }
    if ($(this).index() == 2) {
        $('.choose-xgmm').show();
        $('.choose-sctx').hide();
        $('.choose-sznc').hide();
        $('.nav_main_top-3 a').css('background-color','#cccccc');
        $('.nav_main_top-1 a').css('background-color','#eeeeee');
        $('.nav_main_top-2 a').css('background-color','#eeeeee')
    }
});


/*-----------------------------------------我的收藏---------------------------------------*/

$('.rimg-t li').eq(0).click(function () {
    var pageNo = 1;
    $(this).addClass('bj').siblings().removeClass('bj');
    $('.first-Sc').show();
    $('.myPublish').hide();
    $('.b-history').hide();
    $('.nav_main').hide();
    Collect(pageNo);
    $('.yema').on('click', 'a', function () {
        // console.log($('.page-box a').last().prev().html());
        if ($(this).html() == '上一页') {
            if (!(pageNo == 1)) {
                pageNo -= 1;
                Collect(pageNo);
            }
        } else if ($(this).html() == '下一页') {
            if (!(pageNo == $('.yema a').last().prev().html())) {
                pageNo += 1;
                Collect(pageNo);
            }
        } else {
            pageNo = parseInt($(this).html());
            Collect(pageNo);
        }
    });
});
$('.rimg-t li').eq(1).click(function(){
    $(this).addClass('bj').siblings().removeClass('bj');
    $('.myPublish').show();
    $('.first-Sc').hide();
    $('.b-history').hide();
    $('.nav_main').hide();
});
$('.rimg-t li').eq(2).click(function(){
    $(this).addClass('bj').siblings().removeClass('bj');
    $('.b-history').show();
    $('.first-Sc').hide();
    $('.myPublish').hide();
    $('.nav_main').hide();
});
$('.rimg-t li').eq(3).click(function(){
    $(this).addClass('bj').siblings().removeClass('bj');
    $('.nav_main').show();
    $('.first-Sc').hide();
    $('.myPublish').hide();
    $('.b-history').hide();
});

/*
 for(var  i=100;i<200;i++){
 $.ajax({
 type: 'get',
 url: 'http://www.zhijunxing.com/yiju/addCollect.action',
 dataType: 'jsonp',
 data: {
 hid: i
 },
 success: function (data) {
 console.log(data);
 }
 });
 }
 */

function Collect(pageNo) {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryCollectHouses.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo
        },
        success: function (data) {
            if (data.success) {
                var a;
                if (Math.ceil(data.rowCount / 2) <= 5) {
                    a = '<a href="###">上一页</a>';
                    for (var i = 1; i <= Math.ceil(data.rowCount / 2); i++) {
                        if (i == pageNo) {
                            a += '<a href="###" class="page-checked">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                } else if (pageNo <= 3) {
                    a = '<a href="###">上一页</a>';
                    for (var i = 1; i <= 4; i++) {
                        if (i == pageNo) {
                            a += '<a href="###" class="page-checked">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<b> ··· </b><a href="###">' + Math.ceil(data.rowCount / 2) + '</a><a href="###">下一页</a>';
                } else if (pageNo + 2 >= Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<b> ··· </b>';
                    for (var i = 3; i >= 0; i--) {
                        if (Math.ceil(data.rowCount / 2) - i == pageNo) {
                            a += '<a href="###" class="page-checked">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        } else {
                            a += '<a href="###">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                } else if (pageNo + 2 < Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<b> ··· </b>' +
                        '<a href="###">' + (parseInt(pageNo) - 1) + '</a>' +
                        '<a href="###" class="page-checked">' + pageNo + '</a>' +
                        '<a href="###">' + (parseInt(pageNo) + 1) + '</a>' +
                        '<b> ··· </b>' +
                        '<a href="###">' + Math.ceil(data.rowCount / 2) + '</a>' +
                        '<a href="###">下一页</a>';
                }
                $('.yema').html(a);

                var item = '';
                for(var i = 0 ;i< data.data.length ; i++){
                    item +='<div class="first-Sc-Nc" id="' + data.data[i].id + '"><img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '"/><ul>' +
                        '<li class="first-Sc-Nc-1"><span>'+data.data[i].tittle+' '+data.data[i].room+' ('+data.data[i].type+')<img src="../img/gr.png" class="gr"/><img src="../img/inte.png" class="inde"/></span></li>' +
                        '<li class="first-Sc-Nc-2"><a>'+data.data[i].room+'|'+data.data[i].rentway+'|'+data.data[i].hlevel+'|'+data.data[i].floor+'/'+data.data[i].countfloor+'层</a></li>' +
                        '<li class="first-Sc-Nc-3"><img src="../img/地图.png" class="ditu"/><p>'+data.data[i].address+'</p></li>' +
                        '<li class="first-Sc-Nc-4"><button class="color_1">'+data.data[i].rentway+'</button><button class="color_2">'+data.data[i].paymethod+'</button></li>' +
                        '<li class="first-Sc-price"><a><span>'+data.data[i].price+'</span>/月</a><div>'+data.data[i].addtime+'</div><div class="delect">删除X</div></li>' +
                        '</ul></div>';
                }
                $('.box').html(item);
            }else{
                alert('您没有收藏房源')
            }
        }
    })
}

$('.delect').click(function(){

    var del = '';
    $.ajax({
        type:'get',
        url:'http://www.zhijunxing.com/yiju/delCollect.action',
        dataType:'jsonp',
        data: {
            hid: del.attr('id')
        },
        success:function(data){
            if(data.resultCode){
                $('.zhezhao').show();
                $('.but-1').click(function(){
                    $('.zhezhao').hide();
                })
            }
        }
    })
});


/*-----------------------------------------修改昵称---------------------------------------*/

$('.choose-sznc input').eq(0).on({
    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        if (/[\w]{6,20}$/.test(val)) {
            $('.choose-sznc input').eq(1).click(function () {
                $.ajax({
                    type: 'post',
                    url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
                    dataType: 'jsonp',
                    data: {
                        lname: val
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.resultCode == '0000') {
                            login();
                            alert('修改昵称成功')
                        }
                    }
                })
            })
        }else{
            alert('请重新输入')
        }
    }
});

/* ---------------------------------------修改昵称成功 弹出框-------------------------------------*/



/*-----------------------------------------修改密码---------------------------------------*/

$('.choose-xgmm input').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    }
});
$('.choose-xgmm input').eq(0).blur(function () {
    var val = $(this).val();
    console.log(val==pass);

    if (!(val == pass)) {
        $(this).css({
            'border-color': '#981616'
        });
    }
});
$('.choose-xgmm input').eq(1).blur(function () {
    var val = $(this).val();
    if(!(/^[a-zA-Z0-9][\w]{5,19}/.test(val))){
        $(this).css({
            'border-color': '#981616'
        });
    }
});
$('.choose-xgmm input').eq(2).blur(function () {
    var val = $(this).val();
    if(!(val == '' ? false : val === $('.choose-xgmm input').eq(1).val())){
        $(this).css({
            'border-color': '#981616'
        });
    }
});
$('.choose-xgmm .keep').click(function () {
    if(
        $('.choose-xgmm input').eq(0).val() == pass &&
        /^[a-zA-Z0-9][\w]{5,19}/.test( $('.choose-xgmm input').eq(1).val()) &&
        $('.choose-xgmm input').eq(2).val() === $('.choose-xgmm input').eq(1).val()
    ){
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
            dataType: 'jsonp',
            data: {
                lpassword: $('.choose-xgmm input').eq(2).val()
            },
            success: function (data) {
                /*console.log(data);*/
                $('.choose-xgmm .keep').click(function () {
                    $('.zhezhao').show();
                })
                $('.zccg p').click(function(){
                    $('.zhezhao').hide();
                })
                if (data.resultCode == '0000') {
                   login();
                }
            }
        })
    }
})
/*-----------------------------------------修改密码 弹出框---------------------------------------*/


/*-----------------------------------------ajax---------------------------------------*/
var pass;
login();
//获取登录信息
function login() {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/loginSession.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if (data.success) {
                pass = data.data[0].lpassword;
                var a = '<a href="###">' + data.data[0].lname + '</a>|<a href="###" onclick="quitLogin()" >退出</a>';
                $('.header_main_ul').html(a);
                $('.nav_left span').html(data.data[0].lname);
                if (data.data[0].lphoto) {
                    $('.nav_left img').attr('src', 'http://www.zhijunxing.com/yiju/upload/' + data.data[0].lphoto)
                } else {
                    alert('没有图片');
                }
            } else {
                location.href = '../html/Login.html';
            }
        }
    });
}
//上传图片按钮
$('.choose-sctx').on('change', 'input', function () {
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持FileReader对象！");
    }
    var reader = new FileReader(),
        val = this.files[0];
    reader.readAsDataURL(val);
    reader.onload = function () {
        $('.choose-sctx img').attr('src', reader.result);
    }
});

//点击保存，开始上传图片文件
$('.choose-sctx .keep').click(function () {
    $.ajaxFileUpload({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
        secureuri: false,
        fileElementId: 'uploadPhoto',
        async: true,
        cache: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
    });
    setTimeout(function () {
        login();
    }, 1000);//一秒后在从新获取一次登录信息
});

//退出
function quitLogin() {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if (data.resultCode == '0000') {
                location.href = '../html/homePage.html';
            }
        }
    });
}

