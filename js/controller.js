var app = angular.module('orderticket', []);
app.controller('orderticketCtrl', function($scope) {
    $scope.rangeView = true;
    $scope.accounts = 1;
    $scope.arrival = new Date();
    $scope.departure = new Date();
    $scope.city = 'London';
    $scope.decreaseAccounts = function(){
      if ($scope.accounts>1) {
        $scope.accounts--;
      }
    }
    $scope.increaseAccount = function(){
      if ($scope.accounts<10) {
        $scope.accounts++;
      }
    }
    $scope.changeRangeView1 = function(ev){
      $scope.rangeView = false;
      $('#range').focus();
    }
    $scope.changeRangeView2 = function(){
      $scope.rangeView = true;
    }

});
