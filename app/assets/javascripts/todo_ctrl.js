/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {
    $scope.purpleHippo = "Hello World";
    $scope.yellowHippo = "Bye World";
    $scope.coffeeHippo = "I want more coffee!"

    window.$scope = $scope;
  });
}());