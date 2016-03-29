(function () {

    angular.module('models-controller')
        .factory('companyGetService', function ($http) {
            return {
                GetAll : function () {
                    return $http.get("/company");
                }
            }
        });
})();