require(['blockUI', 'axios', 'lib'], function(blockUI, axios, lib) {
//    axios.defaults.baseURL = lib.setAPIURL();
axios.defaults.baseURL = 'https://www.franklin.com.tw/'
    axios.defaults.headers.common = { 'Content-Type': 'application/json;charset=UTF-8' };
    axios.defaults.timeout = 0;
    //axios.defaults.withCredentials = true;
    //js / lib / jquery.
    axios.interceptors.request.use(function(config) {
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
            message: '<img src="ft/images/loader_64.gif" />'
        });
        return config;
    }, function(error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function(response) {
        $.unblockUI();
        // Do something with response error
        if (response.status === 403 || response.status === 401) {

        } else if (response.status === 404) {


        } else if (response.status == 500) {

        }
        return response;
    }, function(error) {
        $.unblockUI();
        //alert("網路異常錯誤，請稍後再試!");
        return Promise.reject(error);
    });
});