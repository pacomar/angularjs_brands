'use strict';

angular.module('angularjsBandsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('the-beatles', {
        url: '/the-beatles',
        templateUrl: 'app/the-beatles/the-beatles.html',
        controller: 'TheBeatlesCtrl'
      });
  });
