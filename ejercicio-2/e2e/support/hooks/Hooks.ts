import { cucumberPage } from "./CucumberPage";

const { Before, After } = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");

let page, browser;

Before(async function () {

  browser = await chromium.launch({
    headless: false,
    args: [
      '--start-maximized',
      '--disable-blink-features=AutomationControlled'
    ],
  });
  const context = await browser.newContext({
    viewport: null,
    locale: 'es-ES'
  });
  page = await context.newPage();
  cucumberPage.page = page;



});

After(async function () {
  await browser.close();
});



