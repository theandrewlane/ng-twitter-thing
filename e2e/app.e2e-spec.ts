import { NgTwitterThingPage } from './app.po';

describe('ng-twitter-thing App', function() {
  let page: NgTwitterThingPage;

  beforeEach(() => {
    page = new NgTwitterThingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
