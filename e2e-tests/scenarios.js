'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });

  describe('manufacturer', function() {

    beforeEach(function() {
      browser.get('index.html#!/manufacturer');
    });


    it('should render manufacturer when user navigates to /manufacturer', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('distributor', function() {

    beforeEach(function() {
      browser.get('index.html#!/distributor');
    });


    it('should render distributor when user navigates to /distributor', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
  describe('wholesaler', function() {

    beforeEach(function() {
      browser.get('index.html#!/wholesaler');
    });


    it('should render wholesaler when user navigates to /wholesaler', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
  describe('hospital', function() {

    beforeEach(function() {
      browser.get('index.html#!/hospital');
    });


    it('should render hospital when user navigates to /hospital', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});