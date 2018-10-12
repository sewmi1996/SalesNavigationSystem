'use strict';

angular.module('webApp.home',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'home/home.html',
        controller:'HomeCtrl'
    });
}])
//pass-malki@123
//.controller('HomeCtrl',function($scope,$firebaseAuth,){

   //loginController-js 
var app = angular.module('myApp');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
$rootScope.title = "AngularJS Login Sample";
$scope.formSubmit = function() {
if(LoginService.login($scope.username, $scope.password)) {
$rootScope.userName = $scope.username;
$scope.error = '';
$scope.username = '';
$scope.password = '';
$state.transitionTo('home');
} else {
$scope.error = "Incorrect username/password !";
}   
};    
});
    
//})
//loginService.js
var app = angular.module('myApp');
app.factory('LoginService', function() {
var admin = 'admin';
var pass = 'password';
var isAuthenticated = false;
return {
login : function(username, password) {
isAuthenticated = username === admin && password === pass;
return isAuthenticated;
},
isAuthenticated : function() {
return isAuthenticated;
}
};
});