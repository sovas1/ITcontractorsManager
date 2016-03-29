(function () {

    angular.module('models-controller')
        .controller('companyDeleteController', function ($scope, companyDeleteService) {
            $scope.message = 'delete company';

            $scope.deleteCompany = function deleteCompany() {

                var id = $scope.companyId;
                
                companyDeleteService.DeleteCompany(id)
                    .success(function () {
                        alert("Company has been deleted");
                    }).error(function () {
                    alert("Invalid Id");
                })                
            };
        })

})();

