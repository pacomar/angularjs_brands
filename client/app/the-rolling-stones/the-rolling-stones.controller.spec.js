'use strict';

describe('Controller: TheRollingStonesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsBandsApp'));

  var TheRollingStonesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheRollingStonesCtrl = $controller('TheRollingStonesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
