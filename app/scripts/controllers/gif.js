'use strict';

/**
 * @ngdoc function
 * @name angularjsGiphyAppApp.controller:GifCtrl
 * @description
 * # GifCtrl
 * Controller of the angularjsGiphyAppApp
 */
angular.module('angularjsGiphyAppApp')
  .controller('GifCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q){

    //checks if fields are full, then calls function
    //trigger foreach func?
    $scope.change = function(){
      if($scope.search !== undefined && $scope.limit !== undefined && $scope.method !== undefined) {
        $scope.userShow();
      }
    };

    $scope.getMatches = function(){
      var deferred = $q.defer();
        $http.get('http://solveme.herokuapp.com/matches')
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }

    // more api calls below
    // $scope.something to access params => id, etc.
    $scope.deleteMatches = function(){
      var deferred = $q.defer();
        $http.delete('http://solveme.herokuapp.com/matches')
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }

    $scope.userShow = function(){
      var deferred = $q.defer();
        $http.get('localhost:3000/users/1')
      .then(function successCallback(response) {
        console.log(response)
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }

    $scope.createUsers = function(){
      var deferred = $q.defer();
        $http.post('http://solveme.herokuapp.com/users')
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }

    $scope.questionaireIndex = function(){
      var deferred = $q.defer();
        $http.get('http://solveme.herokuapp.com/questionaires')
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }

    $scope.questionaireShow = function(){
      var deferred = $q.defer();
        $http.get('http://solveme.herokuapp.com/questionaires/' + questionaire_id)
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }

    $scope.createQuestionaire = function(){
      var deferred = $q.defer();
        $http.post('http://solveme.herokuapp.com/questionaires')
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }

    $scope.editQuestionaire = function(){
      var deferred = $q.defer();
        $http.put('http://solveme.herokuapp.com/questionaires' + questionaire_id)
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    }



  }]);








