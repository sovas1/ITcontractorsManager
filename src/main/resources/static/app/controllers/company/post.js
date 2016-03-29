(function () {

    angular.module('models-controller')
        .controller('companyPostController', function ($scope, companyPostService) {
            $scope.message = 'post company';

            $scope.postCompany = function postCompany() {

                var name = $scope.companyName;

                companyPostService.PostCompany(name)
                    .success(function () {
                        alert("Company added to database");
                    }).error(function () {
                    alert("Failed to add company");
                });
                
            };
        })

})();

