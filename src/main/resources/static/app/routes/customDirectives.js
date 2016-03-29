// customDirectives.js

(function () {

    angular.module('custom-directives', [])

    .directive('allButtons', function () {
        return {
            restrict: 'E',
            templateUrl: "pages/index_content/allButtons.html"
        };
    })
    
    .directive('headerAndNavBar', function () {
        return {
            restrict: 'E',
            templateUrl: "pages/index_content/headerAndNavBar.html"
        };
    })

    .directive('animatedClouds', function () {
        return {
            restrict: 'E',
            templateUrl: "pages/index_content/animatedClouds.html"
        };
    });

})();