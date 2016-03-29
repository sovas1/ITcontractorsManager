(function () {

    angular.module('models-controller')
        .controller('contractorGetController', function ($scope, contractorGetService) {
            $scope.message = 'get contractor';

            $scope.getContractor = function getContractor() {
                contractorGetService.GetAll()
                    .success(function (response) {
                        $scope.contractors = response;
                    })
                    .error(function () {
                        alert("Error occurred");
                    });
            }
        })

})();
