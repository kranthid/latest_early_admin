'use strict';

describe('Directive: menucat', function () {

  // load the directive's module and view
  beforeEach(module('myNewProjectApp'));
  beforeEach(module('app/menucat/menucat.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menucat></menucat>');
    element = $compile(element)(scope);
    scope.$apply();
    element.text().should.equal('this is the menucat directive');
  }));
});
