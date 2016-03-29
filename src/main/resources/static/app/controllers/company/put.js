(function () {

    angular.module('models-controller')
        .controller('companyPutController', function ($scope, companyPutService) {
            $scope.message = 'put company';

            $scope.putCompany = function putCompany() {

                var id   = $scope.companyId;
                var name = $scope.companyName;

                companyPutService.PutCompany(id, name)
                    .success(function () {
                        alert("Company name updated");
                    }).error(function () {
                    alert("Invalid Id");
                });
            };
        })

})();

