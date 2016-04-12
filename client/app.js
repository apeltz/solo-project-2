var app = angular
  .module('myApp', ['ngRoute']);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
    	templateUrl: './views/about.html',
    	controller: 'AboutController'
    });
}
