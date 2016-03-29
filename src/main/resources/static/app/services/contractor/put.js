(function () {
    
    angular.module('models-controller')
        .factory('contractorPutService', function ($http) {
            return {
                PutContractor : function (id, name, tech, exp, salary) {
                    return $http.put('contractor/', {
                        contractorId: id,
                        contractorName: name,
                        technology: tech,
                        yearsOfExperience: exp,
                        monthlySalary: salary
                    })
                }
            }
        });

})();