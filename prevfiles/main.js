"use strict";

/* jshint esversion:6 */

var app = angular.module("app", ["ngRoute"]);

app.controller("main-ctrl", function ($scope) {
  $scope.text = "min lilla text";
});

//get all books
app.controller("ctrl", function ($scope, $http, getTheBooks) {
  $scope.books = [];
  getTheBooks.getBooks().then(function (response) {
    return $scope.books = response.data;
  });

  $scope.name = 'Freddan';
  function myFunction() {
    alert('Välkommen  Tjäna');
  }
  $scope.myFunction = myFunction;
});

//gett single book
app.controller("Id-Controller", function ($scope, $http, $routeParams, getTheBooks) {
  $scope.id = $routeParams.id;
  getTheBooks.getBook($scope.id).then(function (response) {
    return $scope.singlebook = response.data;
  });
});

//Service som innehåller 2 metoder;hämtar alla och en vald bok
app.service("getTheBooks", function ($http) {
  this.getBooks = function () {
    return $http.get('http://epilib.azurewebsites.net/books');
  };
  this.getBook = function (id) {
    return $http.get("http://epilib.azurewebsites.net/books/" + id);
  };
});

//Application Config
app.config(function ($routeProvider) {
  $routeProvider.when("/search", {
    templateUrl: "search.html"
  }).when("/about", {
    templateUrl: "about.html"
  }).when('/Book/:id', {
    templateUrl: "Book.html",
    controller: "Id-Controller"
  }).otherwise({
    templateUrl: "Start.html"
  });
});