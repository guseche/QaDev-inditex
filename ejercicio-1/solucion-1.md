# Solución del Ejercicio 1: Pruebas Exploratorias e Informes

## 1. Definición de los criterios de aceptación de esa HU

Dado que tenemos la siguiente historia 

```
Modificar el proceso de inicio de sesión para que, además de introducir un nombre de usuario y una contraseña, sea obligatorio aceptar la política de privacidad
```

Se tendrian los siguentes criterios de aceptacion: 

1. Al momento de visualizar el formulario de inicio de sesión debe ser identificable a simple vista la casilla de aceptar la política de privacidad.
2. Dicha casilla deberá contener un enlace hacia las políticas de privacidad donde podrán ser visualizadas completas.
3. No debe ser posible completar el inicio de sesión sin haber aceptado las políticas de privacidad.
4. Al intentar iniciar sesión sin aceptar las políticas, en pantalla debe aparecer un mensaje de error explicando la obligatoriedad de este campo.
5. Debe tener compatibilidad de accesibilidad.
6. El rendimiento del servicio de inicio de sesión no debe verse afectado por dicho cambio.

## 2. Escritura en BDD Gherkin de los casos de test para validar esa HU

```gherkin
Feature: Inicio de sesión con política de privacidad obligatoria

    Background:
        Given el usuario está en la página de inicio de sesión

    Scenario: Visualización clara de la casilla de política de privacidad
        Then la casilla de aceptar política de privacidad debe ser claramente visible
        And el texto de la casilla debe indicar "Acepto la política de privacidad"

    Scenario: Enlace a la política de privacidad
        When el usuario hace clic en el enlace de "política de privacidad"
        Then el sistema debe mostrar el documento completo de política de privacidad

    Scenario: Impedir inicio de sesión sin aceptar política de privacidad
        Given el usuario ha introducido un nombre de usuario válido
        And ha introducido una contraseña válida
        When el usuario intenta iniciar sesión sin marcar la casilla de política de privacidad
        Then el sistema rechaza el inicio de sesión
        And el usuario permanece en la página de inicio de sesión

    Scenario: Mensaje de error al omitir aceptar política de privacidad
        Given el usuario ha introducido un nombre de usuario válido
        And ha introducido una contraseña válida
        When el usuario intenta iniciar sesión sin marcar la casilla de política de privacidad
        Then se muestra un mensaje de error que indica "Debe aceptar la política de privacidad para continuar"
        And el mensaje de error debe ser claramente visible

    Scenario: Accesibilidad de la casilla de política de privacidad
        Then la casilla de política de privacidad debe ser accesible mediante teclado
        And la casilla debe tener un etiquetado correcto para lectores de pantalla

    Scenario: Rendimiento del inicio de sesión con política de privacidad
        Given el usuario ha introducido un nombre de usuario válido
        And ha introducido una contraseña válida
        When el usuario marca la casilla de política de privacidad
        And hace clic en el botón de inicio de sesión
        Then el tiempo de respuesta debe ser menor a 2 segundos

    Scenario: Inicio de sesión exitoso con política aceptada
        Given el usuario ha introducido un nombre de usuario válido
        And ha introducido una contraseña válida
        When el usuario marca la casilla de política de privacidad
        And hace clic en el botón de inicio de sesión
        Then el sistema permite el acceso al usuario
        And el usuario es redirigido a la página principal

    # Casos alternos
    
    Scenario: Intento de inicio de sesión con datos inválidos y política aceptada
        Given el usuario ha introducido un nombre de usuario inválido
        And ha introducido una contraseña inválida
        When el usuario marca la casilla de política de privacidad
        And hace clic en el botón de inicio de sesión
        Then el sistema muestra un error de credenciales inválidas
        And no hace referencia a la política de privacidad

    Scenario: Recordar preferencia de política de privacidad
        Given el usuario ha iniciado sesión previamente aceptando la política
        When el usuario regresa a la página de inicio de sesión
        Then la casilla de política de privacidad debe aparecer sin marcar

```

## 3. Teniendo en cuenta que esta HU tiene implementación Web para backend y frontend, comenta qué herramientas utilizarías para validar esta HU en cada disciplina de forma manual.

### Validación frontend :

- **DevTools del navegador**
- **Lighthouse**
- **multiples navedores**
- **dispositivo movil**

### Validación del Backend :

- **DevTools del navegador**
- **Postman**
- **jmeter**: de ser posible para validar un antes y despues del performance

## 4. Como QA engineer dentro de un equipo, compártenos que ceremonias y reuniones crees que existirán durante la semana que dura el sprint.

- **Sprint Planning**
- **Daily**
- **Sprint Review** 
- **Sprint Retrospective**
- **Refinamiento** 

## 5. Como último paso, nos gustaría incorporar la validación de este nuevo caso de uso a nuestro plan de regresión automática.

- ¿Qué herramientas usarías para automatizar la parte de Web, iOS, Android y la parte backend? 

    - **Web**: Playwright (Cypress de no ser posible)
    - **Backend**: Karate y Postman
    - **IOS/Android** : Appium + wdio

- ¿Qué herramientas de CI/CD crees que se podrían usar para programar el lanzamiento de la regresión de forma planificada y manual?
    - **Github actions**

## 6. Imagina que nuestro PO nos comenta el jueves por la mañana que hay que meter una nueva HU en este sprint que se cierra viernes a medio día y a ti te faltan aún 1 desarrollo de una HU por recibir de los desarrolladores y probarlo.

- Negociar con el equipo con el fin de dar pesos y ver si es posible mover la nueva HU al siguiente spint. 
- Reducir el alcance de la prueba. dando cobertura minima del proceso dejando analizando y dando claridad de los posibles riesgos
- pruebas hibridas es decir dar cobertura con exploratorias rapidas y ejecucion de la automatizacion para velar que la calidad y estabilidad no fueron afectadas.