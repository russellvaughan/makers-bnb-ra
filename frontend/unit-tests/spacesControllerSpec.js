describe('SpacesCtrl', function(){
  var ctrl, scope
  beforeEach(function(){
    module('makersbnb.index');
    inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller('SpacesCtrl', {$scope:scope})
    });
  });
  it('has a method called getSpace', function(){
    expect(ctrl.getSpace()).toBeDefined();
  });
  it('has a method called getSpace that returns spaces', function(){
    expect(ctrl.getSpace()).toEqual([{id: 1, name: "lovely space"}, {id: 2, name: "horrid space"}])
  })
  it('has a attribute called $scope.spaces', function(){
    expect(scope.spaces[0].name).toEqual('lovely space')
  })
});
