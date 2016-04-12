angular
  .module('Myapp.UniverseController', ['ngRoute'])
  .controller('UniverseController', UniverseController);

console.log("UniverseController running!!!");
function UniverseController($scope) {

  $scope.user1 = 'AaronBob';

}
