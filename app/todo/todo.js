//var todoApp = angular.module('TodoApp', ['firebase']);
'use strict';

angular.module('webApp.todo',['ngRoute','firebase'])


.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/todo',{

        templateUrl:'todo/todo.html',
        controller:'TodoCtrl'
     } );


}])



.controller('TodoCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {

        // CREATE A FIREBASE REFERENCE
       
       var todosRef=firebase.database().ref().child("todos");

        // GET TODOS AS AN ARRAY
        //$scope.todos = $firebaseArray(todosRef);
        $scope.todos = $firebaseArray(todosRef);

        // ADD TODO ITEM METHOD
        $scope.addTodo = function () {

            // CREATE A UNIQUE ID
            var timestamp = new Date().valueOf();

            $scope.todos.$add({
                id: timestamp,
                name: $scope.todoName,
                salesman:$scope.todoSalesman,
                location:$scope.location,
                status: 'pending'
            });

            $scope.todoName = "";

        };

        $scope.viewTodo=function(index,todo){
            if (todo.id === undefined)return;

            $scope.todos
        };

        // REMOVE TODO ITEM METHOD
        $scope.removeTodo = function (index, todo) {

            // CHECK THAT ITEM IS VALID
            if (todo.id === undefined)return;

            // FIREBASE: REMOVE ITEM FROM LIST
            $scope.todos.$remove(todo);

        };

        // MARK TODO AS IN PROGRESS METHOD
        $scope.startTodo = function (index, todo) {

            // CHECK THAT ITEM IS VALID
            if (todo.id === undefined)return;

            // UPDATE STATUS TO IN PROGRESS AND SAVE
            todo.status = 'in progress';
            $scope.todos.$save(todo);

        };

        // MARK TODO AS COMPLETE METHOD
        $scope.completeTodo = function (index, todo) {

            // CHECK THAT ITEM IS VALID
            if (todo.id === undefined)return;

            // UPDATE STATUS TO COMPLETE AND SAVE
            todo.status = 'complete';
            $scope.todos.$save(todo);
        };

    }]);