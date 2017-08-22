import { Angular4TutorialsPage } from './app.po';

describe('angular4-tutorials App', () => {
  let page: Angular4TutorialsPage;

  beforeEach(() => {
    page = new Angular4TutorialsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
