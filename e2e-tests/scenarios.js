'use strict';

function isSorted(arr){
  var sorted = true;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      sorted = false;
      break;
    }
  }
  return sorted;
}


describe('my app', function() {

  it('should automatically redirect to /homepage when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/homepage");
  });

  describe('homepageTest', function() {
    beforeEach(function() {
      browser.get('index.html#!/homepage');
    });
    it('should render homepage when user navigates to /homepage', function() {
      expect(element.all(by.css('[ng-view] button')).first().getText()).
      toMatch(/See all bestsellers/);
    });

  });

  describe('booksOverviewTest', function() {
    beforeEach(function() {
      browser.get('index.html#!/booksOverview');
    });

    it('should render header Bestsellers when user navigates to /booksOverview', function() {
      expect(element(by.css('h2')).getText()).
      toMatch(/Bestsellers/);
    });
  });


  describe('bookCardsTest', function() {
    beforeEach(function() {
      browser.get('index.html#!/booksOverview');
    });

    it('should verify that the book cards are displayed', function() {
      var books = element.all(by.repeater('book in books'));
      expect(books.count()).not.toEqual(0);
    });
  });



  describe('bookSortedByTitle', function() {
    beforeEach(function() {
      browser.get('index.html#!/booksOverview');
    });

    it('should verify that book cards are sorted by title if clicked on title radiobutton', function() {
      element(by.css("input[value=title]")).click();

      element.all(by.repeater('book in books')).then(function(books) {
        var titles = [];
        for (var i = 0; i < books.length; i++){
          books[i].element(by.css('h3')).getText().then(function(value){
              titles.push(value);
          })
        }
        return titles;
      }).then(function(titles){
        expect(titles.length).not.toEqual(0);
        expect(isSorted(titles)).toEqual(true);
      });


    });
  });


  describe('bookSortedByAuthor', function() {
    beforeEach(function() {
      browser.get('index.html#!/booksOverview');
    });

    it('should verify that book cards are sorted by author if clicked on author radiobutton', function() {
      element(by.css("input[value=author]")).click();

      element.all(by.repeater('book in books')).then(function(books) {
        var authors = [];
        for (var i = 0; i < books.length; i++){
          books[i].element(by.className('author')).getText()
          .then(function(value){
            authors.push(value);
          })
        }

        return authors;
      }).then(function(authors){
        expect(authors.length).not.toEqual(0);
        expect(isSorted(authors)).toEqual(true);
      });

    });
  });


  describe('bookSortedByThisWeekRank', function() {
    beforeEach(function() {
      browser.get('index.html#!/booksOverview');
    });

    it('should verify that book cards are sorted by this week rank if clicked on this week rank radiobutton', function() {
      element(by.css("input[value=rank]")).click();

      element.all(by.repeater('book in books')).then(function(books) {
        var ranks = [];
        for (var i = 0; i < books.length; i++){
          books[i].element(by.id('thisWeekRank')).getText()
          .then(function(value){
            ranks.push(parseInt(value));
          })
        }

        return ranks;
      }).then(function(ranks){
        expect(ranks.length).not.toEqual(0);
        expect(isSorted(ranks)).toEqual(true);
      });
    });
  });


  describe('bookSortedByThisLastWeekRank', function() {
    beforeEach(function() {
      browser.get('index.html#!/booksOverview');
    });

    it('should verify that book cards are sorted by last week rank if clicked on last week rank radiobutton', function() {
      element(by.css("input[value=rank_last_week]")).click();

      element.all(by.repeater('book in books')).then(function(books) {
        var ranks = [];
        for (var i = 0; i < books.length; i++){
          books[i].element(by.id('lastWeekRank')).getText()
          .then(function(value){
            ranks.push(parseInt(value));
          })
        }

        return ranks;
      }).then(function(ranks){
        expect(ranks.length).not.toEqual(0);
        expect(isSorted(ranks)).toEqual(true);
      });
    });
  });

});
