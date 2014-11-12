(function () {
    'use strict';

    /* controllers */

    angular.module('app.session')
            .controller('SessionsListCtrl', ['$scope', '$location', 'SessionSrv',
                function ($scope, $location, SessionSrv) {

                $scope.sessions = [];

                var init = function () {
//                    $scope.listSessionsGrid.data = SessionSrv.query() || [];
                    $scope.sessions = SessionSrv.query() || [];
                    $scope.$parent.eventRefreshNBSession = true;
                };


                // Validate is taken directly from the scope too
                $scope.select = function (session) {
                    if (session._id) {
                        $location.url('/session/' + session._id);
                    }
                };

                // Validate is taken directly from the scope too
                $scope.newSession = function () {
                    $location.url('/newSession/');
                };

                // Init controller
                init();
            }]);

})
();