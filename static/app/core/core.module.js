/**
 # core.module.js
 ------------------------------------------------------------------------
 * Author  : A6252532
 * Date    : 12/11/2014 10:58
 * Project : MyApp-master
 * IDE     : WebStorm
 *
 */


(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate'
        , 'ngRoute'
        , 'ngSanitize'
        , 'ngResource'

        /*
         * Our reusable cross app code modules
         */
        , 'blocks.exception'
        , 'blocks.logger'
//        , 'blocks.router'

        /*
         * 3rd Party modules
         */
        , 'ngplus'
        , 'ui.bootstrap'

    ]);
})();
 
 
