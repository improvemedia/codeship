let devices       = require('puppeteer/DeviceDescriptors');
let env           = require('../env');
let skipResources = require('./skipResources');

async function setDevice(page, device) {
  if (device === 'mobile') {
    await page.emulate(devices['iPhone 6'])
  }
}

module.exports = (title, { links, auth, device }) => {
  describe(title, () => {
    let page;
    let errors = [];

    let onError = (error) => {
      errors.push(error);
    }

    beforeAll(async () => {
      page = await browser.newPage();

      await page.authenticate(env.credentials);

      await skipResources(page, ['image', 'font', 'stylesheet']);

      await setDevice(page, device);

      if (auth) {
        await page.goto(`${env.host}/${env.authUrl}`);
      }

      page.on('pageerror', onError);
      page.on('error',     onError);
    });

    beforeEach(() => {
      errors = [];
    })

    afterAll(async () => {
      await page.close();

      page = null;
    });

    links.forEach(url => {
      it(url, async () => {
        let response = await page.goto(`${env.host}/${url}`, {
          waitUntil: 'networkidle2',
          timeout: 60000
        });

        expect(response.ok()).toBeTruthy();
        expect(errors).toHaveLength(0);
      });
    });
  });
}
