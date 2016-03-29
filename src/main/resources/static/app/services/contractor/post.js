(function () {

    angular.module('models-controller')
        .factory('contractorPostService', function ($http) {
            return {
                PostContractor : function (name, tech, exp, salary) {
                    return $http.post('contractor/', {
                        contractorName: name,
                        technology: tech,
                        yearsOfExperience: exp,
                        monthlySalary: salary
                    })
                }
            }
        });

})();