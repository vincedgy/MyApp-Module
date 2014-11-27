(function () {

    'use strict';

    angular.module('app.session')
        .factory('CoreSrv', CoreSrv);

    ////////////////

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    CoreSrv.$inject = ['$resource'];
    function CoreSrv($resource) {
        return $resource('/api/nb');
    }

})();