/**
 * Created by nemade_g on 12-07-2015.
 */
'use strict';

angular.module('testApp')
  .controller('gRepeatTestCtrl', ['$scope', 'data',function ($scope, data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];

$scope.model = $scope.model || {};

    data.getData().then(function(res){
      $scope.model.data = res.data;
      //console.log('data', $scope.model.data);
    })
  }]);
