'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


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
        toMatch(/lovely space/);
    });

    it('should render space id when user navigates to the index', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/\d+/);
    });

  });

});
