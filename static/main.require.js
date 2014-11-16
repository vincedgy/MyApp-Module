/**
 * Created by Vincent on 16/11/2014.
 */
requirejs.config({
    context: 'main',
    baseUrl: 'components',
    paths: {
// the libraries we use
        jquery: 'jquery/dist/jquery.min.js',
        bootstrap: 'bootstrap/dist/js/bootstrap.min.js',

// AngularJS
        angularjs: 'angular/angular.js',
        angularRoute: 'angular-route/angular-route.min.js',
        angularResource: 'angular-resource/angular-resource.js',
        angularSanitize: 'angular-sanitize/angular-sanitize.min.js',
        angularAnimate: 'angular-animate/angular-animate.min.js',
        ngplus: 'extras.angular.plus/ngplus-overlay.js',

// 3rd party lib
        toastr: 'toastr/toastr.js'

    }


});

