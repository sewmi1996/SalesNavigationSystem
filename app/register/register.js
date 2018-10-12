'use restrict';

angular.module('webApp.register',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/register',{
        templateUrl:'register/Add_sales_man.html',
        controller:'RegisterCtrl'
    });
}])

.controller('RegisterCtrl',['$scope','$firebaseAuth',function($scope,$firebaseAuth){

    $scope.signUp=function(){
        var username=$scope.user.email;
        var password=$scope.user.password;
       // var auth=$firebaseAuth();

       if(username && password){
           var auth=$firebaseAuth();
           auth.$createUserWithUsernameAndPassword(username,password).then(function(){
               console.log("user successfully created");
           }).catch(function(error){
               $scope.errMsg=true;
               $scope.errorMessage=error.message;
           });
       }
    }
    
}])
