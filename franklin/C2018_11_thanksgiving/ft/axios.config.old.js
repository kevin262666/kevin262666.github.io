require(['axios', 'blockUI'], function (axios, blockUI) {
    axios.defaults.baseURL = window.location.href.toLocaleLowerCase().indexOf('localhost') != -1 ? '//localhost:60112' : '../../';
    axios.defaults.headers.common = {
        //'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        //'Content-Type': 'application/json;charset=UTF-8'
    };
    axios.defaults.timeout = 0;
    axios.defaults.crossDomain = true;
    //js / lib / jquery.
    axios.interceptors.request.use(function (config) {
        $.blockUI({
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff',
                'z-index': 2000,
            },
            message: '<img src="/C2018_06_Camp/ft/images/loader_64.gif" />'
        });
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        $.unblockUI();
        // Do something with response error
        if (response.status === 403 || response.status === 401) {

        } else if (response.status === 404) {


        } else if (response.status == 500) {

        }
        return response;
    }, function (error) {
        console.log(error);
        $.unblockUI();
        alert("網路異常錯誤，請稍後再試!");
        return Promise.reject(error);
    });
});