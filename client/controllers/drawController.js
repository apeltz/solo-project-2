angular
  .module('Myapp.DrawController', ['ngRoute', 'MyApp.UserFactory'])
  .controller('DrawController', DrawController);

console.log("DrawController running!!!");
function DrawController($scope, UserFactory) {

  $scope.user = UserFactory.name;
  $scope.selectedColor = 'black';
  $scope.mousedown = false;
  $scope.paint = function(){
    if($scope.mousedown) {
      this.square.color = $scope.selectedColor;
      console.log(this.element.style);
      // this.square.border = '1px solid inherit';
    }
  }
  $scope.canvas = function(numSquares){
    var output = [];
    while(numSquares>0){
      output.push(
        { id: numSquares,
          color: '#e7e7e7'
        });
        numSquares--;
    }
    return output;
  }(493); // update to change number of squares

} // end of DrawConroller
