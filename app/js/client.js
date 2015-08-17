'use strict';

require('angular/angular');
require('angular-route');

var tasksApp = angular.module('tasksApp', ['ngRoute']);

//services
require('./services/resource_service')(tasksApp);

//controllers
require('./tasks/controllers/tasks_controller')(tasksApp);

//directives
require('./directives/dummy_directive')(tasksApp);
require('./directives/create_resource_directive')(tasksApp);
require('./tasks/directives/create_task_directive_one')(tasksApp);

tasksApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/tasks', {
    templateUrl: 'templates/tasks/tasks_template.html',
    controller: 'tasksController'
  })
  .when('/about', {
    templateUrl: 'templates/about.html'
  })
  .when('/', {
    redirectTo: '/tasks'
  })
  .otherwise({
    templateUrl: 'templates/four_oh_four.html'
  })
}]);