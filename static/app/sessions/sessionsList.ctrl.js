(function () {
    'use strict';

    /* controllers */

    angular.module('app.session')
        .controller('SessionsListCtrl', SessionsListCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    SessionsListCtrl.$inject = ['$scope', '$state', 'SessionSrv'];
    function SessionsListCtrl($scope, $state, SessionSrv) {
        var vm = this;

        vm.sessions = [];

        var init = function () {
            vm.sessions = SessionSrv.query() || [];
            $scope.$parent.eventRefreshNBSession = true;
        };


        // Validate is taken directly from the scope too
        vm.select = function (session) {
            if (session._id) {
                $state.go('sessionDetails', {'_id': session._id});
            }
        };

        // Validate is taken directly from the scope too
        vm.newSession = function () {
            $state.go('newSession');
        };

        // Init controller
        init();
    }

})
();