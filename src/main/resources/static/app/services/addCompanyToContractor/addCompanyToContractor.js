(function () {
    
    angular.module('models-controller')
        .factory('addCompanyToContractorService', function ($http) {
            return {
                AddCompanyToContractor : function (companyId, contractorId) {
                    return $http({
                        method: "PUT",
                        url: "/company/" + companyId + "/contractor/" + contractorId
                    })
                }
            }
        });

})();