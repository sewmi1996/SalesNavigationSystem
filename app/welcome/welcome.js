'use strict';

angular.module('webApp.welcome',['ngRoute','firebase'])


.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/welcome',{

        templateUrl:'welcome/welcome.html',
        controller:'welcomeCtrl'
     } );


}])

.controller('welcomeCtrl',function($scope,$firebaseArray){


      // $scope.username=CommonProp.getUser();
     // var database = firebase.database();
      //var ref=firebase.database().ref().child('Articles');
       
      $scope.viewpost = function(){
        $scope.article.title = "";
        $scope.article.post= "";
        $scope.article= {};
        $scope.mydata = new firebaseArray("https://webapp-b8cdc.firebaseio.com/Articles");

        $scope.mydata.on('value', function(snapshot){
            $scope.article = snapshot.val();
           // console.log('inside: ' +$scope.article); 
           });

        
        }
       /* $scope.records = [
            "Alfreds Futterkiste",
            "Berglunds snabbköp",
            "Centro comercial Moctezuma",
            "Ernst Handel",
        ]*/
   // });
    

        

});
/*app.controller('myCtrl', function($scope, $interval) {
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
  });
/*.controller('welcomeCtrl', ['$scope','$firebaseArray' ,       function($scope,$firebaseArray) {
    $scope.message = 'Hello World';
    $scope.viewPost = function(){
        $scope.article.title = "";
        $scope.article.post = "";
        $scope.article= {};
        $scope.Articles = new Firebase("https://webapp-b8cdc.firebaseio.com/Articles/-LMV6o1xnbmv0ogABM66");
    };
    
    $scope.Articles.on('value', function(snapshot){
        $scope.article = snapshot.val();
    
       });
    }]);*/

