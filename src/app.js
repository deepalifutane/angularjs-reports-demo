var app = angular.module('atuApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: 'src/views/reportList.html',
      controller: 'reportListCtrl',
      controllerAs: 'vm'
    })
    .when('/view', {
      templateUrl: 'src/views/viewReport.html',
      controller: 'viewReportCtrl',
      controllerAs: 'vm'
    })
    .otherwise('/list');
});