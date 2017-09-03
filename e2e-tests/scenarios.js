'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /homepage when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/homepage");
  });


  describe('homepage', function() {

    beforeEach(function() {
      browser.get('index.html#!/homepage');
    });


    it('should render homepage when user navigates to /homepage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('booksOverview', function() {

    beforeEach(function() {
      browser.get('index.html#!/booksOverview');
    });


    it('should render booksOverview when user navigates to /booksOverview', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
