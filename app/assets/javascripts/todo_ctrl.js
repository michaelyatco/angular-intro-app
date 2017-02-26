/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope)  {
    // $scope.purpleHippo = "Buy coffee";
    // $scope.yellowHippo = "Grind coffee";
    // $scope.coffeeHippo = "Drink coffee!"
    $scope.hippos = ["Buy coffee", "Grind coffee", "Drink coffee"];

    $scope.addHippo = function(hippo) {
      if (hippo) {
        $scope.hippos.push(hippo);
        $scope.newHippo = null;
      }
    };

    $scope.removeHippo = function(index) {
      $scope.hippos.splice(index, 1);
    };
  });
}());