require(['./require.config', './axios.config'], function (config, axios) {
    requirejs(['app/page']);
});