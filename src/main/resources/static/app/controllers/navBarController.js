// navBarController.js

(function () {

    angular.module('nav-controller', [])

    .controller('mainController', function ($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    })

    .controller('aboutController', function ($scope) {
        $scope.message = 'Look! I am an about page.';
    })

    .controller('contactController', function ($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

})();

