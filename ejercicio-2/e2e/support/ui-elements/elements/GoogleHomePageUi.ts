import { cucumberPage } from "../../hooks/CucumberPage";
 
const elements = {

        acceptCookiesButton: () => cucumberPage.page.getByRole('button', { name: 'Aceptar todo' }),
        searchBar: () => cucumberPage.page.locator('[title="Buscar"]'),
        luckyButton: () => cucumberPage.page.getByRole('button', { name: 'Voy a tener suerte' })

}

export const GoogleHomePageUi = elements;