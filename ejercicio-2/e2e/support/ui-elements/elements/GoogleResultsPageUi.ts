import { cucumberPage } from "../../hooks/CucumberPage";
 
const elements = {

        resultWebsite: (url) => cucumberPage.page.locator(`a[href*="${url}"]`).first(),

}

export const GoogleResultsPageUi = elements;