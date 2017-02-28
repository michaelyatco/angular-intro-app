/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope)  {
    // $scope.purpleHippo = "Buy coffee";
    // $scope.yellowHippo = "Grind coffee";
    // $scope.coffeeHippo = "Drink coffee!"
    $scope.hippos = [{task: "Buy coffee", 
                      completed: false},
                      {task: "Grind coffee", 
                      completed: false},
                      {task: "Drink coffee",
                      completed: false}
                      ];

    $scope.addHippo = function(newTask) {
      var hippo = {task: newTask, completed: false};
      if (newTask) {
        $scope.hippos.push(hippo);
        $scope.newTask = null;
      }
    };

    $scope.toggleTask = function(hippo) {
      hippo.completed = !hippo.completed;
    };

    $scope.countTasks = function() {
      var counter = 0;
      for (var i = 0; i < $scope.hippos.length; i++) {
        if ($scope.hippos[i].completed === false) {
          counter += 1;
        }
      }
      return counter;
    };

    $scope.removeCompleted = function() {
      for (var i = 0; i < $scope.hippos.length; i++) {
        if ($scope.hippos[i].completed === true) {
          $scope.hippos.splice(i, 1);
        }
      }
    };
  });
}());