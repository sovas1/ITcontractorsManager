(function () {
    
    angular.module('models-controller')
        .factory('contractorDeleteService', function ($http) {
            return {
                DeleteContractor: function (id) {
                    return $http({
                        method: "DELETE",
                        url: "/contractor/" + id
                    })
                }
            }
        });

})();