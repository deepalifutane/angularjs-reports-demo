/*Report list compoent to list all reports*/

app.controller('reportListCtrl', function($filter, $location, reportFactory, globalValues) {
    var vm = this;
    vm.globalValues = globalValues;
    vm.searchKeyword = '';
    vm.sortBy = 'reportName';
    vm.sortOrder = false;
    vm.orderText = 'Desc';
    var reportId = 1000;
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

    vm.sortTableData = function() {
        vm.reportData = $filter('orderBy')(vm.reportData, vm.sortBy, vm.sortOrder);
    };
    vm.toggleSortOrder = function() {
        vm.sortOrder = !vm.sortOrder;
        if (vm.sortOrder === true) { vm.orderText = vm.globalValues.asc; } else { vm.orderText = vm.globalValues.desc; }
        vm.sortTableData();
    };
    vm.reportActions = function(id) {
        $location.path('view').search({ reportId: id });;
    };

});