var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "sachin";
    $scope.lastName = "tendulkar";
   $scope.fullName1 = function() {
       return $scope.firstName + " " + $scope.lastName;
   };
   $scope.firstName3 = "Virat";
   $scope.lastName4= "Kohli";
   $scope.fullName2 = function() {
    return $scope.firstName3 + " " + $scope.lastName4;
  };
   $scope.firstName5 = "M.s.";
   $scope.lastName6 = "Dhoni";
   $scope.fullName3 = function() {
     return $scope.firstName5 + " " + $scope.lastName6;
 };
});
