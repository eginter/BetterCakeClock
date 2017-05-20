import { CakeClockAppPage } from './app.po';

describe('cake-clock-app App', () => {
  let page: CakeClockAppPage;

  beforeEach(() => {
    page = new CakeClockAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
