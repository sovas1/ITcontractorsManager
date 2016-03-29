(function () {
    
    angular.module('models-controller')
        .factory('companyDeleteService', function ($http) {
            return {
                DeleteCompany : function (id) {
                    return $http({
                        method: "DELETE",
                        url: "/company/" + id
                    })
                }
            }
        });

})();