// modelsController.js
(function () {

    angular.module('models-controller', [])

    // INJECTION CONTROLLER

    .controller('addContractorToCompany', function ($scope, $http) {
        $scope.message = 'Adding Contractor To Company will be here soon';

        $scope.addContractorToCompany = function addContractorToCompany() {

            if ($scope.companyId <= 0 || $scope.contractorId <= 0 ||
                $scope.companyId == null || $scope.contractorId == null) {
                alert("Invalid Id")
            }
            else {
                $http({
                    method: "PUT",
                    url: "/company/" + $scope.companyId + "/contractor/" + $scope.contractorId
                }).success(function () {
                    alert("Attempting to assign, check your company to see the result");
                }).error(function () {
                    alert("Invalid Id");
                });
            }

        };
    })


    // COMPANY CONTROLLERS

    .controller('companyGetController', function ($scope, $http) {
        $scope.message = 'get company';

        $scope.getCompany = function getCompany() {
            $http.get("/company")
                .success(function (response) {
                    $scope.company = response;
                })
                .error(function () {
                    alert("Error occurred");
                });
        }
    })

    .controller('companyPostController', function ($scope, $http) {
        $scope.message = 'post company';

        $scope.postCompany = function postCompany() {
            if ($scope.companyName == null || $scope.companyName == "") {
                alert("Insufficient Data! Please provide values for Company name.");
            }
            else {
                $http.post('company/', {
                    companyName: $scope.companyName
                }).success(function () {
                    alert("Company added to database");
                }).error(function () {
                    alert("Failed to add company");
                });
            }
        };

    })

    .controller('companyPutController', function ($scope, $http) {
        $scope.message = 'put company';

        $scope.putCompany = function putCompany() {
            if ($scope.companyName == null || $scope.companyName == "" || $scope.companyId < 1 || $scope.companyId == null) {
                alert("Insufficient Data! Please provide values for Company.");
            }
            else {
                $http.put('company/', {
                    companyId: $scope.companyId,
                    companyName: $scope.companyName
                }).success(function () {
                    alert("Company name updated");
                }).error(function () {
                    alert("Invalid Id");
                });
            }
        };
    })

    .controller('companyDeleteController', function ($scope, $http) {
        $scope.message = 'delete company';

        $scope.deleteCompany = function deleteCompany() {
            if ($scope.companyId > 0) {
                $http({
                    method: "DELETE",
                    url: "/company/" + $scope.companyId
                }).success(function () {
                    alert("Company has been deleted");
                }).error(function () {
                    alert("Invalid Id");
                })
            }
            else alert("Invalid Id");
        };
    })

    // CONTRACTOR CONTROLLERS

    .controller('contractorGetController', function ($scope, $http) {
        $scope.message = 'get contractor';

        $scope.getContractor = function getContractor() {
            $http.get("/contractor")
                .success(function (response) {
                    $scope.contractors = response;
                })
                .error(function () {
                    alert("Error occurred");
                });
        }
    })

    .controller('contractorPostController', function ($scope, $http) {
        $scope.message = 'post contractor';

        $scope.postContractor = function postContractor() {
            if ($scope.contractorName == "" || $scope.contractorName == null ||
                $scope.technology == "" || $scope.technology == null ||
                $scope.yearsOfExperience < 0 || $scope.monthlySalary < 0 ||
                $scope.yearsOfExperience == null || $scope.monthlySalary == null) {
                alert("Insufficient Data! Please provide values for Contractor.");
            }
            else {
                $http.post('contractor/', {
                    contractorName: $scope.contractorName,
                    technology: $scope.technology,
                    yearsOfExperience: $scope.yearsOfExperience,
                    monthlySalary: $scope.monthlySalary
                }).success(function () {
                    alert("Contractor added to database");
                }).error(function () {
                    alert("Invalid data");
                });
            }
        };

    })

    .controller('contractorPutController', function ($scope, $http) {
        $scope.message = 'put contractor';

        $scope.putContractor = function putContractor() {
            if ($scope.contractorName == "" || $scope.contractorName == null ||
                $scope.technology == "" || $scope.technology == null ||
                $scope.yearsOfExperience < 0 || $scope.monthlySalary < 0 ||
                $scope.yearsOfExperience == null || $scope.monthlySalary == null ||
                $scope.contractorId < 0) {
                alert("Insufficient Data! Please provide values for Contractor.");
            }
            else {
                $http.put('contractor/', {
                    contractorId: $scope.contractorId,
                    contractorName: $scope.contractorName,
                    technology: $scope.technology,
                    yearsOfExperience: $scope.yearsOfExperience,
                    monthlySalary: $scope.monthlySalary
                }).success(function () {
                    alert("Contractor updated");
                }).error(function () {
                    alert("Invalid data input");
                });
            }
        };
    })

    .controller('contractorDeleteController', function ($scope, $http) {
        $scope.message = 'delete contractor';

        $scope.deleteContractor = function deleteContractor() {
            if ($scope.contractorId <= 0) {
                alert("Invalid Id");
            }
            else {
                $http({
                    method: "DELETE",
                    url: "/contractor/" + $scope.contractorId
                }).success(function () {
                    alert("Contractor deleted");
                }).error(function () {
                    alert("Error occurred");
                })
            }
        };
    });
})();
