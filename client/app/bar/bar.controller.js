'use strict';

angular.module('angularjsBandsApp')
  .controller('BarCtrl', function ($scope, $rootScope) {
  	$rootScope.metadataTitle = 'Angular Rocks';
    $rootScope.metadataDescription = 'Esto es la descripción por defecto';
    $rootScope.metadataKeywords = 'angular rocks default';
    $rootScope.metadataUrl = 'https://angularjs-bands.herokuapp.com/?_escaped_fragment_=';
    $rootScope.metadataImage = 'http://blog.israelcardenas.com/wp-content/uploads/2015/05/angularjs.png';
  });
