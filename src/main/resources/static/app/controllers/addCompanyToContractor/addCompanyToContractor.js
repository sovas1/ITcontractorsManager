(function () {

    angular.module('models-controller')
        .controller('addContractorToCompany', function ($scope, addCompanyToContractorService) {
            $scope.message = 'Adding Contractor To Company will be here soon';

            $scope.addContractorToCompany = function addContractorToCompany() {

                var companyId    = $scope.companyId;
                var contractorId = $scope.contractorId;

                addCompanyToContractorService.AddCompanyToContractor(companyId, contractorId)
                .success(function () {
                    alert("Assign attempted, check your company to see the result");
                }).error(function () {
                    alert("Invalid Id");
                });

            };
        })

})();

