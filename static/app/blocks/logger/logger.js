(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'ngToast'];

    function logger($log, ngToast) {
        var service = {
            showToasts: true,

            error   : error,
            info    : info,
            success : success,
            warning : warning,

            // straight to console; bypass toastr
            log     : $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            ngToast.create({
                    'content': '<strong>'+title+'</strong>'+message
                    , 'dismissButton': false
                    , 'class': 'danger' // warning, danger, success
                }
            );

            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            ngToast.create({
                    'content': '<strong>'+title+'</strong>'+message
                    , 'dismissButton': false
                    , 'class': 'info' // warning, danger, success
                }
            );

            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            ngToast.create({
                    'content': '<strong>'+title+'</strong>'+message
                    , 'dismissButton': false
                    , 'class': 'success' // warning, danger, success
                }
            );

            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            ngToast.create({
                    'content': '<strong>'+title+'</strong>'+message
                    , 'dismissButton': false
                    , 'class': 'warning' // warning, danger, success
                }
            );

            $log.warn('Warning: ' + message, data);
        }
    }
}());
