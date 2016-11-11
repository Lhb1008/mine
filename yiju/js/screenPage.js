/*
 $('.integrity-top a').eq(0).click(function(){
 var pageNo = 1;
 $(this).addClass('curr').siblings().removeClass('curr');
 collect(pageNo);
 $('.yema').on('click','a',function(){
 if($(this).html() == '上一页'){
 if(!(pageNo == 1)){
 pageNo -= 1;
 collect(pageNo);
 }
 }else if($(this).html() == '下一页'){
 if(!(pageNo == $('.yema a').last().prev().html())){
 pageNo += 1;
 collect(pageNo);
 }
 }else{
 pageNo = parseInt($(this).html());
 collect(pageNo);
 }
 })
 });
 $('.integrity-top a').eq(1).click(function(){
 $(this).addClass('curr').siblings().removeClass('curr')
 });
 $('.integrity-top a').eq(2).click(function(){
 $(this).addClass('curr').siblings().removeClass('curr')
 });


 for(var i = 0 ;i< $('.rentMoney a').length ;i++){
 $('.rentMoney a').eq(i).click(function(){
 $(this).addClass('currn').siblings().removeClass('currn')
 if($(this).html() == '500以下'||$(this).html() == '5000以上'){
 var price =$(this).html().substring(0,$(this).html().length-2)
 money(obj)
 }else{
 var price =$(this).html().substring(0,$(this).html().length-1)
 money(obj)
 }
 })
 }

 /!* ----------------------------------页码---------------------------------------- *!/

 function collect(pageNo){
 $.ajax({
 type:'post',
 url:'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
 dataType:'jsonp',
 data:{
 pageNo:pageNo,
 },
 success:function(data){
 console.log(data.rowCount);
 if(data.success){
 var a;
 if(Math.ceil(data.rowCount/5) <= 5){
 a = '<a href="###">上一页</a>';
 for(var i = 1 ; i <= Math.ceil(data.rowCount/5) ; i++){
 if(i == pageNo){
 a += '<a href="###" class="yema-checked">'+ i +'</a>'
 }else{
 a += '<a href="###">'+ i +'</a>'
 }
 }
 a += '<a href="###">下一页</a>'
 }else if(pageNo <= 3){
 a = '<a href="###">上一页</a>';
 for(var i =1 ; i <= 4 ;i++){
 if(i == pageNo){
 a += '<a href="###" class="yema-checked">'+ i +'</a>'
 }else{
 a += '<a href="###">'+ i +'</a>'
 }
 }
 a += '<b> ··· </b><a href="###">'+ Math.ceil(data.rowCount/5) +'<a/><a href="###">下一页</a>'
 }else if(pageNo + 2 >= Math.ceil(data.rowCount/5)){
 a = '<a href="###">上一页</a>' +
 '<a href="###">1</a>' +
 '<b> ··· </b>';
 for(var i = 3 ; i>=0 ;i--){
 if (Math.ceil(data.rowCount/5) - i == pageNo) {
 a += '<a href="###" class="yema-checked">' + (Math.ceil(data.rowCount/5) - i) + '</a>'
 } else {
 a += '<a href="###">' + (Math.ceil(data.rowCount/5) - i) + '</a>'
 }
 }
 a += '<a href="###">下一页</a>';
 }else if(pageNo + 2 < Math.ceil(data.rowCount/5)){
 a = '<a href="###">上一页</a>' +
 '<a href="###">1</a>' +
 '<b> ··· </b>' +
 '<a href="###">'+ (parseInt(pageNo) - 1) +'</a>' +
 '<a href="###" class="yema-checked">'+ pageNo +'</a>' +
 '<a href="###">'+ (parseInt(pageNo) + 1) +'</a>' +
 '<b>···</b>' +
 '<a href="###">'+ Math.ceil(data.rowCount/5) +'</a>' +
 '<a href="###">下一页</a>'
 }
 $('.yema').html(a);

 var item = '';

 for(var i = 0 ; i < data.data.length ; i++){
 item += '<div class="integrity-1"><img src="http://www.zhijunxing.com/yiju/upload/'+data.data[i].photo.split(',')[0]+'"/><ul>' +
 '<li class="integrity-li-1"><span><a>'+ data.data[i].features +''+data.data[i].room +'</a><img src="../img2/gr.png" class="gr"/><img src="../img2/inte.png" class="inde"/></span></li>' +
 '<li class="integrity-li-2"><a>'+data.data[i].room +' | '+data.data[i].rentway +' | '+data.data[i].hlevel +' | '+ data.data[i].floor +'/'+ data.data[i].countfloor +'层</a></li>' +
 '<li class="integrity-li-3"><img src="../img2/地图.png" class="ditu"/><p>'+ data.data[i].address +'</p></li>' +
 '<li class="integrity-li-4"><button class="color_1">'+data.data[i].hlevel +'</button><button class="color_2">地铁口</button></li>' +
 '<li class="integrity-price"><a><span>'+ data.data[i].price +'</span>元/月</a><div>'+ data.data[i].addtime +'</div></li>' +
 '</ul></div>'
 }
 $('#box').html(item)
 }
 }
 })
 }*/

var obj = {};
    obj.pageNo = 1;
    collect(obj);
$('.integrity-top a').eq(0).click(function(){
    $(this).addClass('curr').siblings().removeClass('curr');
    collect(obj);
    $('.yema').on('click','a',function(){
        if($(this).html() == '上一页'){
            if(!(obj.pageNo == 1)){
                obj.pageNo -= 1;
                collect(obj);
            }
        }else if($(this).html() == '下一页'){
            if(!(obj.pageNo == $('.yema a').last().prev().html())){
                obj.pageNo += 1;
                collect(obj);
            }
        }else{
            obj.pageNo = parseInt($(this).html());
            collect(obj);
        }
    })
});
/* ----------------------------------页码---------------------------------------- */

function collect(obj){
    $.ajax({
        type:'post',
        url:'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
        data:obj,
        dataType:'jsonp',
        success:function(data){
            if(data.success){
                var a;
                if(Math.ceil(data.rowCount/5) <= 5){
                    a = '<a href="###">上一页</a>';
                    for(var i = 1 ; i <= Math.ceil(data.rowCount/5) ; i++){
                        if(i == obj.pageNo){
                            a += '<a href="###" class="yema-checked">'+ i +'</a>'
                        }else{
                            a += '<a href="###">'+ i +'</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>'
                }else if(obj.pageNo <= 3){
                    a = '<a href="###">上一页</a>';
                    for(var i =1 ; i <= 4 ;i++){
                        if(i == obj.pageNo){
                            a += '<a href="###" class="yema-checked">'+ i +'</a>'
                        }else{
                            a += '<a href="###">'+ i +'</a>'
                        }
                    }
                    a += '<b> ··· </b><a href="###">'+ Math.ceil(data.rowCount/5) +'</a><a href="###">下一页</a>'
                }else if(obj.pageNo + 2 < Math.ceil(data.rowCount/5)){
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<b> ··· </b>' +
                        '<a href="###">'+ (parseInt(obj.pageNo) - 1) +'</a>' +
                        '<a href="###" class="yema-checked">'+ obj.pageNo +'</a>' +
                        '<a href="###">'+ (parseInt(obj.pageNo) + 1) +'</a>' +
                        '<b>···</b>' +
                        '<a href="###">'+ Math.ceil(data.rowCount/5) +'</a>' +
                        '<a href="###">下一页</a>'
                }else if(obj.pageNo + 2 >= Math.ceil(data.rowCount/5)){
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<b> ··· </b>';
                    for(var i = 3 ; i>=0 ;i--){
                        if (Math.ceil(data.rowCount/5) - i == obj.pageNo) {
                            a += '<a href="###" class="yema-checked">' + (Math.ceil(data.rowCount/5) - i) + '</a>'
                        } else {
                            a += '<a href="###">' + (Math.ceil(data.rowCount/5) - i) + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                }
                $('.yema').html(a);

                var item = '';
                for(var i = 0 ; i < data.data.length ; i++){
                    item += '<div class="integrity-1"><img src="http://www.zhijunxing.com/yiju/upload/'+data.data[i].photo.split(',')[0]+'"/><ul>' +
                        '<li class="integrity-li-1"><span><a>'+ data.data[i].features +''+data.data[i].room +'</a><img src="../img/gr.png" class="gr"/><img src="../img/inte.png" class="inde"/></span></li>' +
                        '<li class="integrity-li-2"><a>'+data.data[i].room +' | '+data.data[i].rentway +' | '+data.data[i].hlevel +' | '+ data.data[i].floor +'/'+ data.data[i].countfloor +'层</a></li>' +
                        '<li class="integrity-li-3"><img src="../img/地图.png" class="ditu"/><p>'+ data.data[i].address +'</p></li>' +
                        '<li class="integrity-li-4"><button class="color_1">'+data.data[i].hlevel +'</button><button class="color_2">地铁口</button></li>' +
                        '<li class="integrity-price"><a><span>'+ data.data[i].price +'</span>元/月</a><div>'+ data.data[i].addtime +'</div></li>' +
                        '</ul></div>'
                }
                $('#box').html(item)
            }
        }
    })
}



$('#rentMoney a').click(function(){
    /*$(this).addClass('currn').siblings().removeClass('currn');*/
    if($(this).html()=='500以下'||$(this).html()=='5000以上'){
        $(this).addClass('price');
        var str=$(this).html().slice(0,($(this).html().length-2));
        obj[this.className] = str;
        collect(obj)
    }else{
        $(this).addClass('price');
        var str=$(this).html().slice(0,($(this).html().length-1));
        obj[this.className] = str;
        collect(obj)
    }
});
$('#rentMoney a').click(function() {
    $(this).addClass('currn').siblings().removeClass('currn');
})



$('#roomKind a').click(function(){
   /* $(this).addClass('roomShi').siblings().removeClass('roomShi');*/
    $(this).addClass('shi');
    obj[this.className] = $(this).attr('id');
    collect(obj)
});
$('#roomKind a').click(function() {
    $(this).addClass('roomShi').siblings().removeClass('roomShi');
})



$('#choose a').eq(0).hover(function(){
    $('.select-R').show()
},function(){
    $('.select-R').hide()
});
$('.select-R').hover(function(){
    $(this).show()
},function(){
    $(this).hide()
});

$('.select-R p').click(function(){
    $(this).addClass('room');
    $('#choose a').eq(0).html($(this).html());
    $('.select-R').hide();
    obj[this.className] = $(this).attr('class');
    collect(obj)
})


$('#choose a').eq(1).hover(function(){
    $('.select-D').show()
},function(){
    $('.select-D').hide()
});
$('.select-D').hover(function(){
    $(this).show()
},function(){
    $(this).hide()
});
$('.select-D p').click(function(){
    $('#choose a').eq(1).html($(this).html());
    $('.select-D').hide();
    $(this).addClass('level');
    obj[this.className] = $(this).attr('class')
    collect(obj)
});