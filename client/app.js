var app = angular
  .module('myApp', ['ngRoute', 'Myapp.MainController', 'Myapp.HeroController', 'Myapp.UniverseController']);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/main.html',
      controller: 'MainController'
    })
    .when('/myhero', {
      templateUrl: './views/myhero.html',
      controller: 'HeroController'
    })
    .when('/universe', {
     templateUrl: './views/universe.html',
     controller: 'UniverseController'
   });
}
