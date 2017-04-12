var myApp=angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/menu',{
      templateUrl : 'views/templates/menu.html',
      controller : 'MenuController',
      controllerAs : 'menu'
    })
    .when('/order',{
      templateUrl : 'views/templates/order.html',
      controller : 'OrderController',
      controllerAs : 'order'
    })
    .otherwise({
      redirectTo: 'menu'
    });
  }]);
