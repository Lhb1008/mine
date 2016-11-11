
var off = {};
$('form input[name=lname]').on({
    focus:function(){
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur:function(){
        var val = $(this).val();
        isinput(/[\w]{6,20}/.test(val),this)
    }
}).focus();
$('form input[name=lpassword]').on({
    focus:function(){
        console.log($(this).tagName);
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val),this)
    }
});
function isinput(put, _this){
    if(put){
        $(_this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
        off[_this.className]=true;
    }else{
        $(_this).css({
            'border-color': '#981616'
        });
        off[_this.className]=false;
    }
}
$('.put').click(function(){
    var isform=true;
    for(var i in off){
        if(!off[i]){
            isform=false;
        }
    }
    if(!($('.check').attr('checked') == 'checked')){
        isform=false;
    }
    if (isform) {
            //alert('检测')
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                if (data.resultCode == '0000') {
                    location.href = 'http://192.168.0.105/html/homePage.html'
                } else {
                    alert('登录失败，用户名或密码不正确')
                }
            }
        })
    }
});