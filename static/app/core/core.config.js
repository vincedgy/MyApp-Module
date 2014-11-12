/**
 * Created by Training on 21/10/2014.
 */

(function () {

    'user strict';

    /* configurations */

    angular
        .module('app.core')

        // ngToast general config
        .config(['ngToastProvider', function (ngToast) {
            ngToast.configure({
                verticalPosition: 'middle',
                horizontalPosition: 'center',
                timeout: 2000,
                dismissOnTimeout: true
            });
        }]);

})();