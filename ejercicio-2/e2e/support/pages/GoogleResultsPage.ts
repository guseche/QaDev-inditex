import { uiElements } from "../ui-elements/Elements";

class GoogleResultsPage {
    
    clickInTheResultWikipedia() {
        uiElements.googleResultsPage.resultWebsite('wikipedia').click();
    }

}

export const googleResultsPage =  new GoogleResultsPage();