import { NaviPage } from './app.po';

describe('navi App', function() {
  let page: NaviPage;

  beforeEach(() => {
    page = new NaviPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
