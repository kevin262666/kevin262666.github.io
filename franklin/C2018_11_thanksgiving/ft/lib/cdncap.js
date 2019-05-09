var getCap;

function getcstring() {
    //$.ajaxSetup({ xhrFields: { withCredentials: true } });
    $.ajax({
        async: false,
        type: "GET",
        url: "https://60.199.213.183/Captcha/Index",
        dataType: "Json",
        xhrFields: { withCredentials: true },
        success: function (data) {
            getCap = data;
            //$('<input type="hidden" id="recheckC" name="recheckC" value="' + data + '">').appendTo('#myfrm');
            //$('<input>').attr({
            //    type: 'hidden',
            //    id: 'recheckC',
            //    name: 'recheckC'
            //}).appendTo('form')
        }
    });
}