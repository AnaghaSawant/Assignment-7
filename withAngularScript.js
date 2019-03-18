var app = angular.module('MyApp', [])
  app.controller('MyController', function ($scope) {
    $scope.friends = [];
    $scope.isVisible = false;

    $scope.ShowDiv = function () {
      $scope.isVisible = true;
    }

    $scope.SubmitValue = function()
    {
      var has = {
        value: 0,
        txt:$scope.textValue,
        color: $scope.clr
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
    }

});