define(function (require) {
    require('bootstrap');
    require('CDNTools');
    var $ = require('jquery'),
        ajax = require('../util/ajax'),
        axios = require('axios'),
        validM_Tel = /^[09]{2}[0-9]{8}$/,
        validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        validChinese = /[^\u4e00-\u9fa5]/;
    $(function () {
        $('.formArea-item-formBtn[type=submit]').click(function (event) {
        //$("#send").click(function (event) {
            var dataString = $("#send").serialize();
            $.blockUI({
                css: {
                    border: 'none',
                    padding: '15px',
                    backgroundColor: '',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    opacity: .5,
                    color: '#fff'
                },
                message: '<img src="../DeviceRedirect/images/loader_64.gif" />'
            });

            if ($("input[name=Friend_Name]").val() == '' || validChinese.test($("input[name=Friend_Name]").val())) {
                $('input[name="Friend_Name"]').focus();
                alert('請填寫中文姓名!');
                $.unblockUI();
                return false;
            }
            if ($("input[name=M_Tel]").val() == '' || !validM_Tel.test($("input[name=M_Tel]").val())) {
                $("input[name=M_Tel]").focus();
                alert('請填寫行動電話!');
                $.unblockUI();
                return false;
            }
            if ($("input[name=Email]").val() == '' || !validEmail.test($("input[name=Email]").val())) {
                $("input[name=Email]").focus();
                alert('請填寫電子郵件!');
                $.unblockUI();
                return false;
            }
            //if ($("input[name=memo]").val() == '') {
            //    $("input[name=memo]").focus();
            //    alert('請填寫想說的話!');
            //    $.unblockUI();
            //    return false;
            //}
            if (!$("input[name=IsAgree]").is(":checked"))
            {
                alert('請勾選同意個資告知!');
                $.unblockUI();
                return false;
            }
            axios({
                method: 'post',
                url: ajax.getURL() + '/WF09/oneapi',
                data: dataString+CDNTools.GetOpenService(),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Cache-Control": "no-cache"
                },
                crossDomain: true
            }).then(function (response) {
                if (response.data.status == 1) {
                    $.unblockUI();
                    $("#send")[0].reset();
                    //window.location.href = "https://line.naver.jp/R/msg/text/中秋快樂！快下載富蘭克林免費新貼圖→//line.me/S/sticker/12363，還可以抽LINE Points 30點耶→ //bit.ly/2MesUbX，我已經完成活動囉！你也趕快參加吧！";
                    window.location.href = "https://line.naver.jp/R/msg/text/中秋快樂！快下載富蘭克林免費新貼圖→line.me/S/sticker/12363，還可以抽LINE Points 30點耶→ bit.ly/2MesUbX，我已經完成活動囉！你也趕快參加吧！";
                    //$("#form").show();
                }
                else {
                    if (response.data.memo = "您已重複填寫了唷!") {
                        $.unblockUI();
                        alert("您已經參加過，請將機會留給別人唷！");
                    }
                    else {
                        $.unblockUI();
                        alert(response.data.memo);
                    }
                }
            })
          .catch(function (error) { flag = true; $.unblockUI(); });
            event.preventDefault();
        });
        //var data = ajax.getSFBNews();
        //data.then(function (data) {
        //    var b = data.Content.split(',')
        //    $("#amstock").html(b[0]);
        //    $("#ambond").html(b[1]);
        //    $("#eur").html(b[2]);
        //    $("#eur").html(b[2]);
        //    $("#asia").html(b[3]);
        //    $("#china").html(b[4]);
        //    $("#latin").html(b[5]);
        //    $("#russ").html(b[6]);
        //    $("#gold").html(b[7]);
        //});
    });
});