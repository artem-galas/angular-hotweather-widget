import { Homework01Page } from './app.po';

describe('homework01 App', function() {
  let page: Homework01Page;

  beforeEach(() => {
    page = new Homework01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
