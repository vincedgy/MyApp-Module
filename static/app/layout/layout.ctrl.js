(function () {
    'use strict';

    /* controllers for layout */
    angular.module('app.layout')
        .controller('HeaderCtrl', HeaderCtrl)
        .controller('FooterCtrl', FooterCtrl)
        .controller('MainCtrl', MainCtrl)
        .controller('HelloCtrl', HelloCtrl);

    // --------------------------------------------------------------------------
    // headerCtrl
    /* @ngInject */
    HeaderCtrl.$inject = ['$location'];
    function HeaderCtrl($location) {
        var vm = this;
        vm.currentLocation = null;
        vm.isActive = function (viewLocation) {
            if (!vm.currentLocation) {
                vm.currentLocation = $location;
            }
            var simpleLocation = vm.currentLocation.path().split('/')[1] || '';
            return simpleLocation.toLowerCase().indexOf(viewLocation) >= 0;
        }
    }

    // --------------------------------------------------------------------------
    // FooterCtrl    
    /* @ngInject */
    FooterCtrl.$inject = ['$location', '$rootScope'];
    function FooterCtrl($location,$rootScope) {
        var vm = this;
        $rootScope.$on('$locationChangeSuccess', function (event) {
            vm.actualLocation = $location.path();
        });
    }

    // --------------------------------------------------------------------------
    // mainCtrl
    /* @ngInject */
    MainCtrl.$inject = ['toastr', 'SessionSrv', 'AttendeeSrv', '$scope'];
    function MainCtrl(toastr, SessionSrv, AttendeeSrv, $scope) {
        var vm = this;
        vm.helloMessage = 'Hello World !';
        vm.message = 'Please welcome to session management';

        // Nb Sessions
        vm.nbSessions = 0;
        vm.eventRefreshNBSession = false;
        $scope.$watch('vm.eventRefreshNBSession', function () {
            if (vm.eventRefreshNBSession) {
                SessionSrv.query().$promise.then(function (data) {
                    vm.nbSessions = data.length;
                });
            }
            vm.eventRefreshNBSession = false;
        });
        vm.eventRefreshNBSession = true;

        // Nb Attendees
        vm.nbAttendees = 0;
        vm.eventRefreshNBAttendees = false;
        $scope.$watch('vm.eventRefreshNBAttendees', function () {
            if (vm.eventRefreshNBAttendees) {
                AttendeeSrv.query().$promise.then(function (data) {
                    vm.nbAttendees = data.length;
                });
            }
            vm.eventRefreshNBAttendees = false;
        });
        vm.eventRefreshNBAttendees = true;
    }

    // --------------------------------------------------------------------------
    // helloCtrl
    /* @ngInject */
    HelloCtrl.$inject = ['config'];
    function HelloCtrl(config) {
        var vm = this;
        vm.helloMessage = 'Hello World !';
        vm.title = config.name + ' v' + config.version;
    }

})();