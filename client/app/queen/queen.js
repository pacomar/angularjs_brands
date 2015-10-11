'use strict';

angular.module('angularjsBandsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('queen', {
        url: '/queen',
        templateUrl: 'app/queen/queen.html',
        controller: 'QueenCtrl'
      });
  });
