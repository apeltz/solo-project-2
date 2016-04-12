angular
  .module('Myapp.HeroController', ['ngRoute'])
  .controller('HeroController', HeroController);

console.log("Herocontroller running!!!");
function HeroController($scope) {

  $scope.user = 'Aaron';

}
