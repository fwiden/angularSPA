"use strict";var app=angular.module("app",["ngRoute"]);app.controller("main-ctrl",function(t){t.text="min lilla text"}),app.controller("ctrl",function(t,e,o){function n(){alert("Välkommen  Tjäna")}t.books=[],o.getBooks().then(function(e){return t.books=e.data}),t.name="Freddan",t.myFunction=n}),app.controller("Id-Controller",function(t,e,o,n){t.id=o.id,n.getBook(t.id).then(function(e){return t.singlebook=e.data})}),app.service("getTheBooks",function(t){this.getBooks=function(){return t.get("http://epilib.azurewebsites.net/books")},this.getBook=function(e){return t.get("http://epilib.azurewebsites.net/books/"+e)}}),app.config(function(t){t.when("/search",{templateUrl:"search.html"}).when("/about",{templateUrl:"about.html"}).when("/Book/:id",{templateUrl:"Book.html",controller:"Id-Controller"}).otherwise({templateUrl:"Start.html"})});