'use strict';

describe('Controller: QueenCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsBandsApp'));

  var QueenCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueenCtrl = $controller('QueenCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
