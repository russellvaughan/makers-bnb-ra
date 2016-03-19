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
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/1 Makers/);
    });

    it('should render space id when user navigates to the index', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/\d+/);
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
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Makers/)
    });
  });
  describe('/spaces/index', function() {

    beforeEach(function() {
      browser.get('index.html');
      element(by.id("create_space")).click("Create Space")
    });

    it('should allow user to input a description', function(){
      element(by.id("name")).sendKeys("Makers");
      element(by.id("description")).sendKeys("lovely!");
      element(by.id("submit")).click("Submit");
      expect(element.all(by.css('[ng-view] p')).getText()).
        toMatch(/lovely!/)
    });
  });
});
