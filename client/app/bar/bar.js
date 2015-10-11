'use strict';

angular.module('angularjsBandsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bar', {
        url: '/bar',
        templateUrl: 'app/bar/bar.html',
        controller: 'BarCtrl'
      });
  });
