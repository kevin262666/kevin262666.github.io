define(function() {
    'use strict';
    return {
        setAPIURL: function() {
            var url = "https://" + window.location.hostname + "/";

            if (window.location.href.toLocaleLowerCase().indexOf('localhost') != -1) {
                url = 'http://localhost:13579/';
            } else {
                url = url.indexOf("event") != -1 ? url.replace("event", "www") : url;
            }

            return url;
        }
    }

});