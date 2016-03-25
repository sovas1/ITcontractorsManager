// routes.js

(function () {

    var app = angular.module('routes', ['ngRoute']);

    // routes configuration
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider

        // route for the home page
            .when('/', {
                templateUrl: 'pages/main_view_content/home.html',
                controller: 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl: 'pages/main_view_content/about.html',
                controller: 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl: 'pages/main_view_content/contact.html',
                controller: 'contactController'
            })

            .when('/addContractorToCompany', {
                templateUrl: 'pages/main_view_content/addContractorToCompany.html',
                controller: 'addContractorToCompany'
            })

            // ROUTE FOR COMPANY
            .when('/company/get', {
                templateUrl: 'pages/company/get.html',
                controller: 'companyGetController'
            })
            .when('/company/post', {
                templateUrl: 'pages/company/post.html',
                controller: 'companyPostController'
            })
            .when('/company/put', {
                templateUrl: 'pages/company/put.html',
                controller: 'companyPutController'
            })
            .when('/company/delete', {
                templateUrl: 'pages/company/delete.html',
                controller: 'companyDeleteController'
            })

            // ROUTE FOR CONTRACTOR
            .when('/contractor/get', {
                templateUrl: 'pages/contractor/get.html',
                controller: 'contractorGetController'
            })
            .when('/contractor/post', {
                templateUrl: 'pages/contractor/post.html',
                controller: 'contractorPostController'
            })
            .when('/contractor/put', {
                templateUrl: 'pages/contractor/put.html',
                controller: 'contractorPutController'
            })
            .when('/contractor/delete', {
                templateUrl: 'pages/contractor/delete.html',
                controller: 'contractorDeleteController'
            });
        // use the HTML5 History API for no # addressing
        $locationProvider.html5Mode(true);
    });

})();