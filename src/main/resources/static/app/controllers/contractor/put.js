(function () {

    angular.module('models-controller')
        .controller('contractorPutController', function ($scope, contractorPutService) {
            $scope.message = 'put contractor';

            $scope.putContractor = function putContractor() {

                var id     = $scope.contractorId;
                var name   = $scope.contractorName;
                var tech   = $scope.technology;
                var exp    = $scope.yearsOfExperience;
                var salary = $scope.monthlySalary;

                contractorPutService.PutContractor(id, name, tech, exp, salary)
                    .success(function () {
                        alert("Contractor updated");
                    }).error(function () {
                    alert("Invalid data input");
                });                
            };
        })
    
})();

