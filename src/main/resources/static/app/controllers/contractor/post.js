(function () {

    angular.module('models-controller')
        .controller('contractorPostController', function ($scope, contractorPostService) {
            $scope.message = 'post contractor';

            $scope.postContractor = function postContractor() {

                var name   = $scope.contractorName;
                var tech   = $scope.technology;
                var exp    = $scope.yearsOfExperience;
                var salary = $scope.monthlySalary;

                contractorPostService.PostContractor(name, tech, exp, salary)
                    .success(function () {
                        alert("Contractor added to database");
                    }).error(function () {
                    alert("Invalid data");
                });
                
            };
        })

})();

