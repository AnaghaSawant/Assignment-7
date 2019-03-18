var app = angular.module('MyApp', [])
  app.controller('MyController', function ($scope, $window) {
    $scope.friends = [];
    $scope.isVisible = false;

     $scope.colors = [
      {name:'black'},
      {name:'white'},
      {name:'red'},
      {name:'blue'},
      {name:'yellow'}
    ];
    $scope.myColor = $scope.colors[1];

    $scope.ShowDiv = function () {
      $scope.isVisible = true;
       $scope.addVisible = true;
    }

    $scope.SubmitValue = function()
    {

      var has = {
        value: 0,
        txt:$scope.textValue,
        color: $scope.colour

      }
      $scope.friends.push(has);
      Reset();

    }

    $scope.IncCount = function(index){
      $scope.friends[index].value++;
    }

    $scope.DecCount = function(index){
      $scope.friends[index].value--;
    }

    function Reset()
    {
      $scope.isVisible = false;
      $scope.clr = '';
      $scope.textValue = '';
      $scope.addVisible = false;
    }

    $scope.ApplyColor = function(colour){
      $scope.colour = colour;
    }

    $scope.removeButton = function(index){

    // console.log(mine);
  if ($window.confirm("Do you want to delete:")) {
    //Remove the item from Array using Index.
    $scope.friends.splice(index, 1);
  }

  }

});