const puppeteer = require('puppeteer-extra');
const Stealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(Stealth());

module.exports = async (cookie, message, groupUrl) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setCookie(...cookie);

  await page.goto(groupUrl, { waitUntil: 'networkidle2' });
  await page.waitForTimeout(5000);

  await page.keyboard.type(message);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);

  await browser.close();
  return 'Posted';
};
