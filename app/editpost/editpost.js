'use strict';

angular.module('webApp.editpost',['ngRoute'])


.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/editpost',{

        templateUrl:'editpost/editpost.html',
        controller:'editpostCtrl'
     } );


}])

.controller('editpostCtrl',['$scope',function($scope){

}])