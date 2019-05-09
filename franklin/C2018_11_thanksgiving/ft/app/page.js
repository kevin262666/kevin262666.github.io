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
        $('.Signon').click(function (event) {
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

                if (!$("input[name=Sex]").is(":checked"))
                {
                    alert('請勾選性別!');
                    $.unblockUI();
                    return false;
                }
                if (!$("input[name=IsAgree]").is(":checked"))
                {
                    alert('請勾選同意個資告知!');
                    $.unblockUI();
                    return false;
                }
    
                 axios.post(ajax.getURL() + '/WF09/tinyformapi', dataString + "&Event_Id=D2421&IsRepeatable=N&Open_Service=" + CDNTools.GetOpenService())
                .then(function (response) {
					console.log(response);
                    if (response.data.status == 1) {
					//alert('YES');
                    //window.location.href = 'index_ok.html';
                        $('#formLightBox').removeClass('show');
                        $('#success').addClass('show');
                        $.unblockUI();
                        $("#send")[0].reset();
                        
                        //window.location.href = "https://line.naver.jp/R/msg/text/中秋快樂！快下載富蘭克林免費新貼圖→//line.me/S/sticker/12363，還可以抽LINE Points 30點耶→ //bit.ly/2MesUbX，我已經完成活動囉！你也趕快參加吧！";
                        //window.location.href = "https://line.naver.jp/R/msg/text/中秋快樂！快下載富蘭克林免費新貼圖→line.me/S/sticker/12363，還可以抽LINE Points 30點耶→ bit.ly/2xg6mCS，我已經完成活動囉！你也趕快參加吧！";
                        //$("#form").show();
                    }
                    else {
                        if (response.data.memo = "您已重複填寫了唷!") {
                            $.unblockUI();
                            alert("您已參加過囉！");
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

        $('.Signup').click(function (event) {
        //$("#send").click(function (event) {
            var dataString = $("#contactfrm").serialize();
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
            
            if (!$("input[name=Sex]").is(":checked"))
            {
                alert('請勾選性別!');
                $.unblockUI();
                return false;
            }
            if (!$("input[name=isAgree]").is(":checked"))
            {
                alert('請勾選同意個資告知!');
                $.unblockUI();
                return false;
            }

             axios.post(ajax.getURL() + '/WF09/quickapi', dataString + "&Event_Id=D2419&IsRepeatable=N&Open_Service=" + CDNTools.GetOpenService())
            .then(function (response) {
			console.log(response);
                if (response.data.status == 1) {
					window.location.href = 'msg_ok.html';
                    $.unblockUI();
                    $("#contactfrm")[0].reset();                   
                }
                else {
                    if (response.data.memo = "您已重複填寫了唷!") {
                        $.unblockUI();
                        alert("您已重覆索取提醒簡訊囉！");
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
    });
});