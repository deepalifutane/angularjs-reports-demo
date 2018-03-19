 /*
 Factory service to load mock report data and cmoponents
*/
app.service('reportFactory', function($http, $q, globalValues) {

    /*Loading report components */
    this.getReportComponents = function(reportId) {
        var deferred = $q.defer();
        $http.get(globalValues.path.dataAPI).success(function(response) {
            if (reportId > 0) {
                var data = response[reportId]['components'];
                deferred.resolve({ data });
            } else {
                deferred.resolve({ data: "error" });
            }
        }).error(function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    /*Loading report data */
    this.getReportData = function(reportId) {
        var deferred = $q.defer();
        $http.get(globalValues.path.dataAPI).success(function(response) {
            if (reportId > 0) {
                var data = response[reportId]['data'];
                deferred.resolve({ data });
            } else {
                deferred.resolve({ data: "error" });
            }
        }).error(function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
});
