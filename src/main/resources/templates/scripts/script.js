// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        // route for the company get page
        .when('/company/get', {
            templateUrl : 'pages/company/get.html',
            controller  : 'companyGetController'
        })
        .when('/company/post', {
            templateUrl : 'pages/company/post.html',
            controller  : 'companyPostController'
        })
        .when('/company/put', {
            templateUrl : 'pages/company/put.html',
            controller  : 'companyPutController'
        })
        .when('/company/delete', {
            templateUrl : 'pages/company/delete.html',
            controller  : 'companyDeleteController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

// COMPANY CONTROLLERS

scotchApp.controller('companyGetController', function($scope) {
    $scope.message = 'get company';
});

scotchApp.controller('companyPostController', function($scope) {
    $scope.message = 'post company';
});

scotchApp.controller('companyPutController', function($scope) {
    $scope.message = 'put company';
});

scotchApp.controller('companyDeleteController', function($scope) {
    $scope.message = 'delete company';
});