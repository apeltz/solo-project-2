angular
  .module('Myapp.MainController', ['ngRoute'])
  .controller('MainController', MainController);

console.log("Maincontroller running!!!");
function MainController($scope) {

  $scope.user3 = 'AaronRob';

}
