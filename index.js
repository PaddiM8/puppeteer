const puppeteer = require('puppeteer');
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const save = util.promisify(fs.writeFile);

(async function() {
  var browser = await puppeteer.launch({args: ['--no-sandbox']});
  var page = await browser.newPage();
  var url = "https://devrant.com/rants/2948571/i-think-the-fact-that-even-apple-cant-unlock-your-phone-if-you-forget-your-passc";
  await page.goto(url);
  await page.waitFor(3500);
  var content = await page.evaluate(() => {
    return document.body.textContent.toString().toLowerCase().replace(/[^a-zA-Z0-9\s\:]*/g,"");
  });
  console.log(content);
  await browser.close();
})();
