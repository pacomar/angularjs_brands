'use strict';

angular.module('angularjsBandsApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    },{
      'title': 'Foo',
      'state': 'foo'
    },{
      'title': 'Bar',
      'state': 'bar'
    },{
      'title': 'The Rolling Stones',
      'state': 'the-rolling-stones'
    },{
      'title': 'The Beatles',
      'state': 'the-beatles'
    },{
      'title': 'Queen',
      'state': 'queen'
    }];

    $scope.isCollapsed = true;
  });
