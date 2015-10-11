'use strict';

angular.module('angularjsBandsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('the-rolling-stones', {
        url: '/the-rolling-stones',
        templateUrl: 'app/the-rolling-stones/the-rolling-stones.html',
        controller: 'TheRollingStonesCtrl'
      });
  });
