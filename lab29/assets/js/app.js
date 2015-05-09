angular.module('lab29', ['ngRoute', 'lab29.controllers', 'lab29.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'js/templates/home.html'
        })
        .when('/data', {
            controller: 'Lab29Controller',
            templateUrl: 'js/templates/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});