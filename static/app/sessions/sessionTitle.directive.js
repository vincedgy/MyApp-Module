(function () {
    'use strict';

    angular.module('app.session')
        .directive('sessionTitle', sessionTitle);

    function sessionTitle() {
            return {
                restrict: 'EA',
                template: 'Session [{{vm.session.sessionID}}] : <b>{{vm.session.title}}</b>'
            }
        }
})();