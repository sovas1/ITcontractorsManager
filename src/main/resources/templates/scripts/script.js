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

        // ROUTE FOR COMPANY
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
        })

        // ROUTE FOR CONTRACTOR
        .when('/contractor/get', {
            templateUrl : 'pages/contractor/get.html',
            controller  : 'contractorGetController'
        })
        .when('/contractor/post', {
            templateUrl : 'pages/contractor/post.html',
            controller  : 'contractorPostController'
        })
        .when('/contractor/put', {
            templateUrl : 'pages/contractor/put.html',
            controller  : 'contractorPutController'
        })
        .when('/contractor/delete', {
            templateUrl : 'pages/contractor/delete.html',
            controller  : 'contractorDeleteController'
        })
    ;
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

    $scope.postCompany = function postCompany() {
        if($scope.name==""){
            alert("Insufficient Data! Please provide values for task name, description, priortiy and status");
        }
        else{
            $http.post('localhost:8080/company', {
                companyName: $scope.name,
            }).
            success(function(data, status, headers) {
                alert("Task added");
                var newTaskUri = headers()["location"];
                console.log("Might be good to GET " + newTaskUri + " and append the task.");
                // Refetching EVERYTHING every time can get expensive over time
                // Better solution would be to $http.get(headers()["location"]) and add it to the list
                //findAllTasks();
            });
        }
    };

});

scotchApp.controller('companyPutController', function($scope) {
    $scope.message = 'put company';
});

scotchApp.controller('companyDeleteController', function($scope) {
    $scope.message = 'delete company';
});

// CONTRACTOR CONTROLLERS

scotchApp.controller('contractorGetController', function($scope) {
    $scope.message = 'get contractor';
});

scotchApp.controller('contractorPostController', function($scope) {
    $scope.message = 'post contractor';
});

scotchApp.controller('contractorPutController', function($scope) {
    $scope.message = 'put contractor';
});

scotchApp.controller('contractorDeleteController', function($scope) {
    $scope.message = 'delete contractor';
});