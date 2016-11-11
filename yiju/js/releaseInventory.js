

    function str() {
        $.ajax({
            url: 'http://www.zhijunxing.com/yiju/loginSession.action',
            type: 'POST',
            dataType: 'jsonp',
            success: function (data) {
                if (data.success) {
                    $('.header_main_ul a').eq(0).html('昵称：' + data.data[0].lname).attr({
                        'href': 'http://192.168.0.105/html/personal.html'
                    });
                    $('.header_main_ul a').eq(1).html('退出').attr({
                        'onclick': 'tc()',
                        'href': 'http://192.168.0.105/html/homePage.html'
                    });
                }
            }
        });
        function tc() {
            $.ajax({
                url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
                type: 'POST',
                dataType: 'jsonp',
                success: function (data) {
                    if (data.resultCode == 0000) {
                        $('.header_main_ul a').eq(0).html('登录').attr('href', 'http://192.168.0.105/html/Login.html');
                        $('.header_main_ul a').eq(1).html('退出').attr('href', 'http://192.168.0.105/html/homePage.html');
                    }
                }
            })
        }
    }
str(); //运行上面的str（）函数
        $('.release').click(function (data) {
            data.preventDefault();
            var lrentway = $('input:radio[name=kinds]').val(),
                ltype = $('input:radio[name=people]').val(),
                villageName = $('#villageName').val(),
                shi = $('#Shi').val(),
                ting = $('#Ting').val(),
                wei = $('#Wei').val(),
                room = shi + '室' + ting + '厅' + wei + '卫',
                area = $('#Area').val(),
                floor = $('#floor').val(),
                countfloor = $('#countfloor'),
                direction = $('#direction').val(),
                hlevel = $('#level').val(),
                price = $('#price').val(),
                paymethod = $('#paymethod'),
                linkman = $('#linkman').val(),
                linkphone = $('#linkphone').val();
            var data = {
                type: ltype,
                rentway: lrentway,
                villageName: villageName,
                Shi: shi,
                Ting: ting,
                Wei: wei,
                Area: area,
                floor: floor,
                countfloor: countfloor,
                direction: direction,
                level: hlevel,
                price: price,
                paymethod: paymethod,
                linkman: linkman,
                linphone: linkphone
            };
            console.log(data);

            $.ajax({
                type: 'post',
                url: 'http://www.zhijunxing.com/yiju/addHouses.action',
                dataType: 'jsonp',
                data: '{data}',
                success: function (data) {
                    if (data.resultCode == 0000) {
                        alert('发布成功')
                        /*location.href=url+"/landlord.html";*/
                    } else if (data.resultCode == 9999) {
                        alert('发布失败，检查之后请重新发布')
                    }
                }
            })
        });

        var fileIds = [], num = 1;
        $('.butSc').on('change', 'input[type=file]', function () {
            var reader = new FileReader(), val = $(this).get(0).files[0];
            reader.readAsDataURL(val);
            console.log(typeof reader);
            reader.onload = function () {
                fileIds.push('file' + num);
                $('#' + fileIds[num - 1]).hide();
                num += 1;
                $('#box').append('<img src="' + reader.result + '"/>');
                $('.butSc').append('<input type="file" name="file" id="file' + num + '">');
            }
        });


