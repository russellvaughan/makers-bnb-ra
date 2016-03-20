describe('EditSpaceCtrl', function(){
  var ctrl, scope, data, param,location,field
 beforeEach(function(){
    module('makersbnb.editspace');
    inject(function($controller, $rootScope, _$httpBackend_, $location, $routeParams){
      $httpBackend = _$httpBackend_;
      routeParams = $routeParams
      param = {spaceId: "1", name: "upadated space"}
      $httpBackend.expectPUT('http://localhost:3000/spaces/1.json', param).respond(200)
      location = $location
      scope = $rootScope.$new();
      ctrl = $controller('EditSpaceCtrl', {$scope:scope,  $routeParams: param });
      field = "string"
    });
  });

   it('sends a patch to the backend', function(){
    scope.editSpace()
    $httpBackend.flush()
    expect(location.path()).toBe('/spaces/index')
  })

});
