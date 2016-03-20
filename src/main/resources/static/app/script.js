// script.js

var sowaApp = angular.module('sowaApp', ['ngRoute']);

var urlBase = "";

// configure our routes
sowaApp.config(function($routeProvider, $locationProvider) {
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

sowaApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

sowaApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

sowaApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

sowaApp.controller('addContractorToCompany', function($scope, $http) {
    $scope.message = 'Adding Contractor To Company will be here soon';

    $scope.addContractorToCompany = function addContractorToCompany() {

        if($scope.companyId <= 0 || $scope.contractorId <= 0 ||
            $scope.companyId == null || $scope.contractorId == null) {
            alert("Invalid Id")
        }
        else {
            $http({
                method: "PUT",
                url: urlBase + "/company/" + $scope.companyId + "/contractor/" + $scope.contractorId
            }).
            success(function () {
                alert("Assigned Contractor to Company");
            }).
            error(function(){
                alert("Invalid Id");
            });
        }

    };
});


// COMPANY CONTROLLERS

sowaApp.controller('companyGetController', function($scope, $http) {
    $scope.message = 'get company';

    $scope.getCompany = function getCompany() {
        $http.get("/company")
            .success(function(response) {
                $scope.company = response;
            })
            .error(function () {
                alert("Error occurred");
            });
    }
});

sowaApp.controller('companyPostController', function($scope, $http) {
    $scope.message = 'post company';

    $scope.postCompany = function postCompany() {
        if($scope.companyName == null || $scope.companyName == ""){
            alert("Insufficient Data! Please provide values for Company name.");
        }
        else{
            $http.post('company/', {
                companyName: $scope.companyName
            }).
            success(function() {
                alert("Company added to database");
            }).
            error(function() {
                alert("Failed to add company");
            });
        }
    };

});

sowaApp.controller('companyPutController', function($scope, $http) {
    $scope.message = 'put company';

    $scope.putCompany = function putCompany() {
        if($scope.companyName == null || $scope.companyName == "" || $scope.companyId < 1 || $scope.companyId == null){
            alert("Insufficient Data! Please provide values for Company.");
        }
        else{
            $http.put('company/', {
                companyId: $scope.companyId,
                companyName: $scope.companyName
            }).
            success(function() {
                alert("Company name updated");
            }).
            error(function() {
                alert("Invalid Id");
            });
        }
    };
});

sowaApp.controller('companyDeleteController', function($scope, $http) {
    $scope.message = 'delete company';

    $scope.deleteCompany = function deleteCompany() {
        if($scope.companyId > 0) {
            $http({
                method : "DELETE",
                url : urlBase + "/company/" + $scope.companyId
            }).
            success(function () {
                alert("Company has been deleted");
            }).
            error(function () {
                alert("Invalid Id");
            })
        }
        else alert("Invalid Id");
    };
});

// CONTRACTOR CONTROLLERS

sowaApp.controller('contractorGetController', function($scope, $http) {
    $scope.message = 'get contractor';

    $scope.getContractor = function getContractor() {
        $http.get("/contractor")
            .success(function(response) {
                $scope.contractors = response;
            })
            .error(function () {
                alert("Error occurred");
            });
        }
});

sowaApp.controller('contractorPostController', function($scope, $http) {
    $scope.message = 'post contractor';

    $scope.postContractor = function postContractor() {
        if($scope.contractorName=="" || $scope.contractorName==null ||
            $scope.technology=="" || $scope.technology==null ||
            $scope.yearsOfExperience < 0 || $scope.monthlySalary < 0 ||
            $scope.yearsOfExperience == null || $scope.monthlySalary == null){
            alert("Insufficient Data! Please provide values for Contractor.");
        }
        else{
            $http.post('contractor/', {
                contractorName: $scope.contractorName,
                technology: $scope.technology,
                yearsOfExperience: $scope.yearsOfExperience,
                monthlySalary: $scope.monthlySalary
            }).
            success(function() {
                alert("Contractor added to database");
            }).
            error(function() {
                alert("Invalid data");
            });
        }
    };

});

sowaApp.controller('contractorPutController', function($scope, $http) {
    $scope.message = 'put contractor';

    $scope.putContractor = function putContractor() {
        if($scope.contractorName=="" || $scope.contractorName==null ||
            $scope.technology=="" || $scope.technology==null ||
            $scope.yearsOfExperience < 0 || $scope.monthlySalary < 0 ||
            $scope.yearsOfExperience == null || $scope.monthlySalary == null ||
            $scope.contractorId < 0){
            alert("Insufficient Data! Please provide values for Contractor.");
        }
        else{
            $http.put('contractor/', {
                contractorId: $scope.contractorId,
                contractorName: $scope.contractorName,
                technology: $scope.technology,
                yearsOfExperience: $scope.yearsOfExperience,
                monthlySalary: $scope.monthlySalary
            }).
            success(function() {
                alert("Contractor added to database");
            }).
            error(function() {
                alert("Invalid data input");
            });
        }
    };
});

sowaApp.controller('contractorDeleteController', function($scope, $http) {
    $scope.message = 'delete contractor';

    $scope.deleteContractor = function deleteContractor() {
        if($scope.contractorId <= 0) {
            alert("Invalid Id");
        }
        else {
            $http({
                method : "DELETE",
                url : urlBase + "/contractor/" + $scope.contractorId
            }).
            success(function () {
                alert("Contractor deleted");
            }).
            error(function () {
                alert("Error occurred");
            })
        }
    };
});