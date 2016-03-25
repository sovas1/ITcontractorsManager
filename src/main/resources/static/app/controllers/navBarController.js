// navBarController.js

(function () {

    var app = angular.module('nav-controller', []);

    app.controller('mainController', function ($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('aboutController', function ($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactController', function ($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

})();

