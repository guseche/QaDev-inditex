import { cucumberPage } from "../support/hooks/CucumberPage";
import { googleHomePage } from "../support/pages/GoogleHomePage";
import { googleResultsPage } from "../support/pages/GoogleResultsPage";
import { wikipediaPage } from "../support/pages/WikipediaPage";

const { When, Then } = require('@cucumber/cucumber');

When('I do a google search on {string}', async function (string) {
  await googleHomePage.load();
  await googleHomePage.search(string);
});

When('I do a google search on {string} using Im Feeling Lucky', async function (string) {
  await googleHomePage.load();
  await googleHomePage.searchWithLuckyButton(string);
});


When('I click on the Wikipedia result', async function () {
  await googleResultsPage.clickInTheResultWikipedia();
});

Then('I should verify I am on the Wikipedia page', async function () {
  await wikipediaPage.verifyWikipediaPage();
});

Then('I should verify the first automatic process was in {string}', async function (string) {
  let ultimaFecha = await wikipediaPage.searchParragraph(string, this);
});