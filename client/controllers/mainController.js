angular
  .module('Myapp.MainController', ['ngRoute'])
  .controller('MainController', MainController);


console.log("MainController running!!!");

function MainController($scope, $location) {

  $scope.createUsername = '';
  $scope.createPassword = '';
  $scope.createUser = () => {
    $location.path('/login');
  }

  $scope.loginUsername = '';
  $scope.loginPassword = '';
  $scope.loginUser = () => {
    console.log($scope.loginUsername, $scope.loginPassword);
  }
}
