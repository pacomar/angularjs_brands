'use strict';

angular.module('angularjsBandsApp')
  .directive('musicGroup', function () {
    return {
      templateUrl: 'app/musicGroup/musicGroup.html',
      restrict: 'EA'
    };
  });
