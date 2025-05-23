import { World } from "@cucumber/cucumber";
import { uiElements } from "../ui-elements/Elements";
import { cucumberPage } from "../hooks/CucumberPage";
import { expect } from "@playwright/test";

class WikipediaPage {

    async searchParragraph(text, cucumber: World) {

        const parragraph = await uiElements.wikipediaPage.searchParragraph(text)
        await parragraph.scrollIntoViewIfNeeded();

        const textContent = await uiElements.wikipediaPage.searchParragraph('primer proceso industrial completamente automatizado').textContent();
        const fechas = textContent.match(/\d{4}/g);
        const ultimaFecha = fechas?.at(-1);

        parragraph.evaluate((element) => {
            element.style.border = '2px solid red';
        })

        cucumber.attach(`el primero proceso totalmente automatizado fue creado en ${ultimaFecha}`, 'text/plain');
        const screenshot = await cucumberPage.page.screenshot();
        cucumber.attach(screenshot, 'image/png');

    }

    async verifyWikipediaPage() {
        const url = await cucumberPage.page.url();
        const containsWikipedia = url.includes('wikipedia');
        await expect(containsWikipedia).toBeTruthy();
    }

}

export const wikipediaPage = new WikipediaPage();