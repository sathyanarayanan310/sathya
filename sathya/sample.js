
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : "s1.html",
    })
    .when('/movies', {
        templateUrl : "s2.html",
    })
    .when('/trailers', {
        templateUrl : "s3.html",
    });
});
