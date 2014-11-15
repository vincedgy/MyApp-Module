(function () {
    'use strict';

    /* controllers */

    angular.module('app.session')
        .controller('SessionsListCtrl', SessionsListCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    SessionsListCtrl.$inject = ['$scope', '$location', 'SessionSrv'];
    function SessionsListCtrl($scope, $location, SessionSrv) {
        var vm = this;

        vm.sessions = [];

        var init = function () {
            vm.sessions = SessionSrv.query() || [];
            $scope.$parent.eventRefreshNBSession = true;
        };


        // Validate is taken directly from the scope too
        vm.select = function (session) {
            if (session._id) {
                $location.url('/session/' + session._id);
            }
        };

        // Validate is taken directly from the scope too
        vm.newSession = function () {
            $location.url('/newSession/');
        };

        // Init controller
        init();
    }

})
();