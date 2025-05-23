import { cucumberPage } from "../../hooks/CucumberPage";

const elements = {

        searchParragraph: (text) => cucumberPage.page.locator('p', { hasText: text }),
        

}

export const WikipediaPageUi = elements;