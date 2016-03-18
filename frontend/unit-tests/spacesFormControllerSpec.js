describe('CreateSpaceCtrl', function(){
  var ctrl, scope
  beforeEach(function(){
    module('makersbnb.createspace');
    inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller('CreateSpaceCtrl', {$scope:scope})
    });
  });
  it('has a method called createSpace', function(){
    expect(scope.createSpace(1)).toBeDefined();

  });
});
