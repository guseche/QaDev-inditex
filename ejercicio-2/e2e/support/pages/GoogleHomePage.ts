import { cucumberPage } from "../hooks/CucumberPage";
import { uiElements } from "../ui-elements/Elements";

class HomePageGoogle{   

    async load(){
        await cucumberPage.page.goto("https://google.com/");
        await uiElements.googleHomePage.acceptCookiesButton().click();
    }

    async search(text) {
        await uiElements.googleHomePage.searchBar().fill(text);
        await uiElements.googleHomePage.searchBar().press('Enter');
    }

    async searchWithLuckyButton(text) {
        await uiElements.googleHomePage.searchBar().fill(text);
        await uiElements.googleHomePage.searchBar().press('Tab');
        await uiElements.googleHomePage.luckyButton().click();
    }
    

}

export const googleHomePage = new HomePageGoogle();