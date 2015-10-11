'use strict';

angular.module('angularjsBandsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('foo', {
        url: '/foo',
        templateUrl: 'app/foo/foo.html',
        controller: 'FooCtrl'
      });
  });
