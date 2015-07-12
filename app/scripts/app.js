'use strict';

angular.module('testApp', ['ui.bootstrap', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/grepeat', {
        templateUrl:'views/grepeat.html',
        controller:'gRepeatTestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
