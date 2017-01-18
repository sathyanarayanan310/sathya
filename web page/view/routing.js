var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : "http://www.cricbuzz.com/cricket-scorecard-archives",
    })
    .when('/movies', {
        templateUrl : "",
    })
    .when('/trailers', {
        templateUrl : "",
    });
});
