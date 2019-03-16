
angular.module('ngRepeat', []).controller('repeatController', function($scope) {
  
    $scope.friends = [];

    $scope.incCount = function(index){
      $scope.friends[index].value++;
    }
    
    $scope.decCount = function(index){
      $scope.friends[index].value--;
    }

     $scope.addText = function()
    {
      var has = {
        value: 0
      }
    $scope.friends.push(has);
    }
     
  });

