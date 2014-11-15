(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

    function logger($log, toastr) {
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
            toastr.error('<strong>'+title+'</strong>'+message);
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            toastr.info('<strong>'+title+'</strong>'+message);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success('<strong>'+title+'</strong>'+message);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            toastr.warning('<strong>'+title+'</strong>'+message);
            $log.warn('Warning: ' + message, data);
        }
    }
}());
