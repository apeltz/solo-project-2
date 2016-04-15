"use strict";
angular
  .module('Myapp.MainController', ['ngRoute', 'MyApp.UserFactory'])
  .controller('MainController', MainController);


console.log("MainController running!!!");

function MainController($scope, $http, $location, UserFactory) {

  //new user creation
  $scope.createUsername = '';
  $scope.createPassword = '';
  $scope.signupResult = '';
  $scope.createUser = () => {
    var newUserData = JSON.stringify({
      un: $scope.createUsername,
      pw: $scope.createPassword,
      color1: 'blue'
    })

    $http.post('http://localhost:3000/signup', newUserData)
         .success((result)=>{
           console.log("RESULT: ", result);
           if(result==="Success"){
            UserFactory.name = $scope.createUsername;
            $location.path('/draw');
           } else {
               console.log("before: ", $scope.signupResult);
               $scope.signupResult = "An account with that username already exists... please login or sign up with different user name";
               console.log("after: ", $scope.signupResult);
              //  $scope.$apply($scope.signupResult);// look into ng form elements, look into Q promise library
            }

         });

  }

  //user validation
  $scope.loginUsername = '';
  $scope.loginPassword = '';
  $scope.loginResult = '';
  $scope.loginUser = () => {
    var loginUserData = JSON.stringify({
      un: $scope.loginUsername,
      pw: $scope.loginPassword,
      color1: 'green'
    })
    $http.post('http://localhost:3000/login', loginUserData)
        .success((result)=>{
          if(result==="Success"){
           UserFactory.name = $scope.loginUsername;
           $location.path('/draw');
          } else {
              console.log("before: ", $scope.loginResult);
              $scope.loginResult = "Password did not match user records... please login with a different password or sign up with a new user name";
              console.log("after: ", $scope.loginResult);
              $scope.$apply($scope.loginResult); // look into ng form elements, look into Q promise library
           }
        });
  }
}
