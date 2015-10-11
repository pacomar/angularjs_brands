'use strict';

describe('Controller: FooCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsBandsApp'));

  var FooCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooCtrl = $controller('FooCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
