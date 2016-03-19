'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('makersbnb', function() {


  it('should automatically redirect to spaces/index when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/spaces/index");
  });


  describe('/spaces/index', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should render space name when user navigates to the index', function() {
      expect(element.all(by.css('[ng-view] a')).first().getText()).
        toMatch(/lovely space/);
    });

  });

  describe('/spaces/index', function() {

    beforeEach(function() {
      browser.get('index.html');
      element(by.id("create_space")).click("Create Space")
    });

    it('should have a form', function(){
      expect(element(by.id("spaces_form")).isPresent()).toBe(true);
    });

    it('should allow user to input space name', function(){
      element(by.id("name")).sendKeys("Makers");
      element(by.id("submit")).click("Submit");
      expect(element(by.id("Makers")).getText()).toMatch(/Makers/)
    });
  });

  describe('/spaces/index', function(){

    beforeEach(function() {
      browser.get('index.html');
      element(by.id("create_space")).click();
      element(by.id("name")).sendKeys("Ronin");
      element(by.id("submit")).click("Submit");
    });

    it('updates space names', function(){
      element(by.id("Ronin")).click();
      element(by.id("Edit")).click();
      element(by.id("name")).sendKeys("Ronoutted");
      element(by.id("submit")).click("Submit");
      expect(element(by.id("Ronoutted")).getText()).toMatch(/Ronoutted/)
    })
  });
});


// describe('showing the user', function() {
//            var query;
//
//            beforeEach(function() {
//                query = element(by.model('query'));
//                query.sendKeys('Adrian1707');
//                element.all(by.css('a')).click();
//            });
//
//            it("it should change the url", function() {
//                browser.getLocationAbsUrl().then(function(url) {
//                    expect(url).toBe('/users/Adrian1707');
//                });
//            });
//
//            it('should show the user profile', function() {
//                expect(element(by.binding('userLogin')).getText()).toBe('Adrian1707')
//            });
//        });
//    });
// });
