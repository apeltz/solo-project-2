angular
  .module('Myapp.HeroController', ['ngRoute'])
  .controller('HeroController', HeroController);

console.log("HeroController running!!!");
function HeroController($scope) {

  $scope.user = 'Aaron';

}
