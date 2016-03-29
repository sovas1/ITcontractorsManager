(function () {

    angular.module('models-controller')
        .controller('companyGetController', function ($scope, companyGetService) {
            $scope.message = 'get company';

            $scope.getCompany = function getCompany() {
                companyGetService.GetAll()
                    .success(function (response) {
                        $scope.company = response;
                    }).error(function () {
                    alert("Error occurred");
                });
            }
        })

})();