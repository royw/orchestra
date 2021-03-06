(function () {
  'use strict';

  angular
    .module('orchestra.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/', {
      title: 'Dashboard',
      controller: 'DashboardController',
      controllerAs: 'vm',
      templateUrl: '/static/orchestra/dashboard/partials/dashboard.html'
    })
    .when('/performance/', {
      title: 'Performance',
      controller: 'PerformanceController',
      controllerAs: 'vm',
      templateUrl: '/static/orchestra/dashboard/partials/performance.html'
    })
    .when('/task/:taskId', {
      title: 'Task',
      controller: 'TaskController',
      controllerAs: 'vm',
      templateUrl: '/static/orchestra/task/partials/task.html'
    })
    .otherwise('/');
  }
})();
