(function () {
    'use strict';

    angular
        .module('app.attendee')
        .directive('attendeeTitle', attendeeTitle);

    function attendeeTitle() {
            return {
                restrict: 'EA',
                template: '{{vm.attendee.title}}&nbsp;{{vm.attendee.firstName}}&nbsp;<b>{{vm.attendee.lastName}}</b>'
            }
        }
})();