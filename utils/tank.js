let env           = require('../env');
let skipResources = require('./skipResources');

module.exports = (title, { links, auth }) => {
  describe(title, () => {
    let page;

    beforeAll(async () => {
      page = await browser.newPage();

      await page.authenticate(env.credentials);

      await skipResources(page, ['image', 'font', 'stylesheet']);

      if (auth) {
        await page.goto(`${env.host}/${env.authUrl}`);
      }

      page.on('pageerror', (error) => {
        throw new Error(error)
      });
    });

    afterAll(async () => {
      await page.close();
    });

    links.forEach(url => {
      it(url, async () => {
        let response = await page.goto(`${env.host}/${url}`);

        expect(response.ok()).toBe(true);
      });
    });
  });
}
