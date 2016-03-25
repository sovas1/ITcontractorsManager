// customDirectives.js

(function () {

    var app = angular.module('custom-directives', []);

    app.directive('allButtons', function () {
        return {
            restrict: 'E',
            templateUrl: "pages/index_content/allButtons.html"
        };
    });
    
    app.directive('headerAndNavBar', function () {
        return {
            restrict: 'E',
            templateUrl: "pages/index_content/headerAndNavBar.html"
        };
    });

    app.directive('animatedClouds', function () {
        return {
            restrict: 'E',
            templateUrl: "pages/index_content/animatedClouds.html"
        };
    });

})();