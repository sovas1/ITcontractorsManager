(function () {

    angular.module('models-controller')
        .factory('contractorGetService', function ($http) {
            return {
                GetAll : function () {
                    return $http.get("/contractor");
                }
            }
        });
})();