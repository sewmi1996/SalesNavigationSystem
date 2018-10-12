'use strict';

angular.module('webApp.addPost',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/addPost',{
        templateUrl:'addPost/addPost.html',
        controller:'AddPostCtrl'

});

}])

.controller('AddPostCtrl',function($scope,$firebaseArray){

    

     var database=firebase.database().ref().child("Articles");
    $scope.Articles=$firebaseArray(database);

    $scope.createPost=function(){
        var title=$scope.article.titleTxt;
        var post=$scope.article.postTxt;

        $scope.Articles.$add({
            title:title,
            post:post
        }).then(function(ref){
            console.log(ref);
        },function(error){
            console.log(error);
        });
    };

});