(function() {
    'use strict';
    angular.module('hibiskiss').run(runner)
    runner.$inject = ['GApi', 'GAuth'] // DEPENDENCY INJECTION INTO CONFIG

    function runner(GApi, GAuth) {
        var BASE = 'https://mygoogleappengine.appspot.com/_ah/api';
        // GApi.setApiKey('AIzaSyD83Cx9YaXt6JiiC7iq4NcVXBs3ZBhtI7U')
        GApi.load('calender', 'v1', BASE).then(function(resp) {
          console.log(resp);
            console.log('api: ' + resp.api + ', version: ' + resp.version + ' loaded');
        }, function(resp) {
            console.log('an error occured during loading api: ' + resp.api + ', resp.version: ' + version);
        });
    } // END RUNNER FUNCTION
})()
