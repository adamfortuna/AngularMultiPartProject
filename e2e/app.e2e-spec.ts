import { MusicSiteRunthroughPage } from './app.po';

describe('music-site-runthrough App', () => {
  let page: MusicSiteRunthroughPage;

  beforeEach(() => {
    page = new MusicSiteRunthroughPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
