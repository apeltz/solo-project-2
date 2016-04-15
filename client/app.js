var app = angular
  .module('myApp', ['ngRoute', 'Myapp.MainController', 'Myapp.DrawController', 'Myapp.UniverseController']);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/main.html',
      controller: 'MainController'
    })
    .when('/draw', {
      templateUrl: './views/draw.html',
      controller: 'DrawController'
    })
    .when('/universe', {
     templateUrl: './views/universe.html',
     controller: 'UniverseController'
   });
}
