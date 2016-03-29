(function () {
    
    angular.module('models-controller')
        .factory('companyPutService', function ($http) {
            return {
                PutCompany : function (id, name) {
                    return $http.put('company/', {
                        companyId: id,
                        companyName: name
                    })
                }
            }
        });

})();