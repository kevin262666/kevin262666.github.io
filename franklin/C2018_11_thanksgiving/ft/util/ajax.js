define(function (require) {
    var $ = require('jquery'),
        axios = require('axios'),
        lib = require('../util/lib');

    $(function () {
        var baseUrl = window.location.href.toLocaleLowerCase().indexOf('localhost') != -1 ? '//localhost:60112' : '';
        
        $.ajaxSetup({
            beforeSend: function (xhr, options) {
                options.url = baseUrl + options.url;
            },
            crossDomain: true
        })
    });
    var _setAPIURL = function () {
        var url = "https://" + window.location.hostname + "/FAPI";
        url = url.indexOf("event") != -1 ? url.replace("event", "www") : url;

        //var url = "http://localhost:45343";
        return url;
    }
    var _GetSFBNews = function (id) {
        return axios.get('http://localhost:64413/SFBNewsAPI')
          .then(function (response) {
              return response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
    }
    var _EC_Status = function (Id) {
        return axios.get('Tool/ECstatus?Account=' + Id)
          .then(function (response) {
              return response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
    }
    var _Get_SeminarStatus = function (SeminarA) {
        return  axios.get('https://www.franklin.com.tw/Event_Common/Get_SeminarStatus?SeminarId=' + SeminarA)
           .then(function (response) {
               return response.data;
           })
          .catch(function (error) {
              console.log(error);
          });
}
    var _Send_EventToCustom = function (Event_Id, Join_Count, M_Tel, Email, Id, Friend_Name) {
        return axios.post('FAPI/EventToCustom/SaveEventData',
        {
            Event_Id: Event_Id,
            Join_Count: Join_Count,
            M_Tel:M_Tel,
            Email:Email,
            Identification:Id,
            Div: 0, 
            Friend_Name: Friend_Name
        })
.then(function (response) {
    return response.data;
})
.catch(function (error) {
    console.log(error);
});
    }
    var _Send_EventToUserform = function (Event_Id, Join_Count, Friend_Name, M_Tel, Email, Id, imgId) {
        var result = {};
        $.ajax({
            async: false,
            type: "Post",
            url: "https://www.franklin.com.tw/FAPI/WF09/movie",
            dataType: "Json",
            data: {
                Event_Id: Event_Id,
                Join_Count: Join_Count,
                M_Tel:M_Tel,
                Email:Email,
                Identification:Id,
                Friend_Name: Friend_Name,
                IsRepeatable : 'N',
                memo : imgId
            },
            success: function (data) {
                if (data.status == 1) {
                    $("#pendsuccess").show();
                    $('.pendsuccess').text($("#PendDDL option:selected").text());
                    $('#pop1-3').hide();
                    $('#pop1-4').show();
                    $('.closeBtn').hide();
                }
                else if (data.status == 4) {
                    if(data.memo == "您已重複填寫了唷!")
                    {
                        $("#pendrepeat").show();
                        $("#PendDDL").val(data.message);
                        $('.pendrepeat').text($("#PendDDL option:selected").text());
                        $('#pop1-3').hide();
                        $('#pop1-4').show();
                        $('.closeBtn').hide();
                    }
                    else{
                        alert(data.memo)
                    }
                }
                //console.log(result);
            }
        });

        return result;
    }
    var _UploadImage = function (id, formData) {
        return axios.post('//event.franklin.com.tw/fileUpload/UploadBase/Upload/'+id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (res) {
            return res.data;
        }).catch(function (error) {
            return error;
        });
    }
    return {
        getURL: _setAPIURL,
        uploadImage: _UploadImage,
        //getseminarstatus: _Get_SeminarStatus,
        getseminarstatus: _Get_SeminarStatus,
        getSFBNews: _GetSFBNews,
        sendeventtocustom: _Send_EventToCustom,
        sendeventtouserform: _Send_EventToUserform,
        ec_Status:_EC_Status
}});