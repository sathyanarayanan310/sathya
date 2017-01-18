var app=angular.module('myapp',[]);
app.controller('myCtrl',function($scope)
{
  $scope.FirstName="Hari";
  $scope.LastName="Ram";
  $scope.fullname=function(){
    return $scope.FirstName+""+$scope.LastName;
  }
});
