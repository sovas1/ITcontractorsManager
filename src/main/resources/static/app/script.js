// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

var urlBase = "";

// configure our routes
scotchApp.config(function($routeProvider, $locationProvider) {
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

        .when('/addContractorToCompany', {
            templateUrl : 'pages/addContractorToCompany.html',
            controller  : 'addContractorToCompany'
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
        });
    // use the HTML5 History API for no # addressing
    $locationProvider.html5Mode(true);
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

scotchApp.controller('addContractorToCompany', function($scope, $http) {
    $scope.message = 'Adding Contractor To Company will be here soon';

    $scope.addContractorToCompany = function addContractorToCompany() {

        $http({
            method: "PUT",
            url: urlBase + "/company/" + $scope.companyId + "/contractor/" + $scope.contractorId
        }).success(function (data, status, headers) {
            alert("Assigned Contractor to Company");
        });
    };
});


// COMPANY CONTROLLERS

scotchApp.controller('companyGetController', function($scope, $http) {
    $scope.message = 'get company';

    $scope.getCompany = function getCompany() {
        $http.get("/company")
            .success(function(response) {
                $scope.company = response;
            });
    }
});

scotchApp.controller('companyPostController', function($scope, $http) {
    $scope.message = 'post company';

    $scope.postCompany = function postCompany() {
        if($scope.companyName==""){
            alert("Insufficient Data! Please provide values for Company name.");
        }
        else{
            $http.post('company/', {
                companyName: $scope.companyName
            }).
            success(function(data, status, headers, config) {
                alert("Company added to database");
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
            });
        }
    };

});

scotchApp.controller('companyPutController', function($scope, $http) {
    $scope.message = 'put company';

    $scope.putCompany = function putCompany() {
        if($scope.companyName==""){
            alert("Insufficient Data! Please provide values for Company name.");
        }
        else{
            $http.put('company/', {
                companyId: $scope.companyId,
                companyName: $scope.companyName
            }).
            success(function(data, status, headers, config) {
                alert("Company name updated");
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
            });
        }
    };
});

scotchApp.controller('companyDeleteController', function($scope, $http) {
    $scope.message = 'delete company';

    $scope.deleteCompany = function deleteCompany() {
        if($scope.companyId != 0) {
            $http({
                method : "DELETE",
                url : urlBase + "/company/" + $scope.companyId
            }).then( _success, _error );
        }
    };
});

// CONTRACTOR CONTROLLERS

scotchApp.controller('contractorGetController', function($scope, $http) {
    $scope.message = 'get contractor';

    $scope.getContractor = function getContractor() {
        $http.get("/contractor")
            .success(function(response) {
                $scope.contractors = response;
            });
        }
});

scotchApp.controller('contractorPostController', function($scope, $http) {
    $scope.message = 'post contractor';

    $scope.postContractor = function postContractor() {
        if($scope.contractorName==""){
            alert("Insufficient Data! Please provide values for Contractor name.");
        }
        else{
            $http.post('contractor/', {
                contractorName: $scope.contractorName,
                technology: $scope.technology,
                yearsOfExperience: $scope.yearsOfExperience,
                monthlySalary: $scope.monthlySalary
            }).
            success(function(data, status, headers, config) {
                alert("Contractor added to database");
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
            });
        }
    };

});

scotchApp.controller('contractorPutController', function($scope, $http) {
    $scope.message = 'put contractor';

    $scope.putContractor = function putContractor() {
        if($scope.contractorName==""){
            alert("Insufficient Data! Please provide values for Contractor name.");
        }
        else{
            $http.put('contractor/', {
                contractorId: $scope.contractorId,
                contractorName: $scope.contractorName,
                technology: $scope.technology,
                yearsOfExperience: $scope.yearsOfExperience,
                monthlySalary: $scope.monthlySalary
            }).
            success(function(data, status, headers, config) {
                alert("Contractor added to database");
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
            });
        }
    };
});

scotchApp.controller('contractorDeleteController', function($scope, $http) {
    $scope.message = 'delete contractor';

    $scope.deleteContractor = function deleteContractor() {
        if($scope.contractorId != 0) {
            alert("Contractor deleted");
            $http({
                method : "DELETE",
                url : urlBase + "/contractor/" + $scope.contractorId
            }).then( _success, _error );
        }
    };
});