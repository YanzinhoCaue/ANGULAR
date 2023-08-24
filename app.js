var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.nomes = ["João", "Pedro", "Marcos"]
  $scope.addItem = function() {
    if($scope.nomes.indexOf($scope.item) == -1) {
      $scope.nomes.push($scope.item);
    } else {
      $cope.errortext = "The item is already in your shopping list.";
    }
  }
  $scope.removeItem = function(n) {
    $scope.nomes.splice(n,1)
  }
});