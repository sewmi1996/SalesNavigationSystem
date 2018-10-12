'use strict';

angular.module('webApp.navigation',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/navigation',{
        templateUrl:'navigation/navigation.html',
        controller:'navCtrl'
    });
}])