(function () {

    angular.module('models-controller')
        .controller('contractorDeleteController', function ($scope, contractorDeleteService) {
            $scope.message = 'delete contractor';

            $scope.deleteContractor = function deleteContractor() {

                var id = $scope.contractorId;

                contractorDeleteService.DeleteContractor(id)
                    .success(function () {
                        alert("Contractor deleted");
                    }).error(function () {
                    alert("Error occurred");
                })
            };
        });

})();

