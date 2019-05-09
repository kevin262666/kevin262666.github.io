var IncludeURL = function () {
    var url = window.location.origin;
    url = url.indexOf("event") != -1 ? "/DeviceRedirect/js/" : "/areas/DeviceRedirect/js/";
    return url;
}

require.config({
    //waitSeconds: 6000,
    baseUrl: '/areas/C2018_11_thanksgiving/ft',
    paths: {
        'jquery': 'lib/jquery-1.12.4.min',
        //'jquery.validate': 'lib/validation/jquery.validate.min',
        //'jquery-validation-addon-ft': 'lib/validation/jquery-validation-addon-ft',
        'modernizr': 'lib/modernizr.custom',
        'axios': 'lib/axios.min',
        //'babel': 'lib/babel.min',
        'polyfill': 'lib/polyfill.min',
        'Vue': 'lib/vue.min',
        'blockUI': 'lib/jquery.blockUI.min',
        'app': 'app',
        'bootstrap': 'lib/bootstrap.min',
        'promise': 'lib/es6-promise.min',
        //'jquery.form': IncludeURL() + 'jquery.form',
        'CDNTools': IncludeURL() + 'tools',
        //'FT_Validate': 'lib/FT_Validate',
        //'jquery-ui': 'lib/jquery-ui.min',
    },
    // 設定 Js 相依性
    shim: {
        'axios': ['polyfill','promise'],
        'Vue': ['polyfill'],
        'bootstrap': ['jquery'],
        'blockUI': ['jquery'],
        'CDNTools': ['jquery'],
        //'jquery.validate': ['jquery'],
        //'jquery-validation-addon-ft': ['jquery', 'jquery.validate'],
        //'additional-methods.min': ['jquery', 'jquery-validation-addon-ft', 'jquery.validate'],
        //'jquery.form': ['jquery'],
        //'jquery-ui': ['jquery'],
    },
    urlArgs: "bust=" + (new Date()).getTime()
});