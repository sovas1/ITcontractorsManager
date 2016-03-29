(function () {
    
    angular.module('models-controller')
        .factory('companyPostService', function ($http) {
            return {
                PostCompany : function (name) {
                    return $http.post('company/', {
                        companyName : name
                    })
                }
            }
        });

})();