/*Report view compoents to load table dynamically*/

app.controller('viewReportCtrl', function($scope, reportFactory, $routeParams, globalValues) {
    var vm = this;
    vm.globalValues = globalValues;
    var reportId = $routeParams.reportId;
    vm.showError = false;
    reportFactory.getReportComponents(reportId).then(function(res) {
        if (res && res.data && res.data !== globalValues.errorMsgStr) {
            vm.reportComponents = res.data;
            reportFactory.getReportData(reportId).then(function(resData) {
                if (resData && resData.data && resData.data !== globalValues.errorMsgStr) {
                    vm.reportData = resData.data;
                } else {
                    vm.showError = true;
                }
            });
        } else {
            vm.showError = true;
        }
    });
});