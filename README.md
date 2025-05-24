# QaDev-inditex

Este repositorio contiene la resolución de la prueba técnica para el proceso de selección de QA en Inditex.

## Autor
Gabriel Jaime Useche Ossa

## Resumen de la prueba

1. **Prueba exploratoria y reporte**
   - Se analizaron los requerimientos relacionados al Ejercicio 1, incluyendo:
     - Definición de criterios de aceptación para la HU de modificación del proceso de login
     - Escritura de casos de prueba en BDD Gherkin
     - Propuesta de herramientas para validación manual en backend y frontend
     - Descripción de ceremonias y reuniones durante el sprint
     - Recomendaciones de herramientas para automatización y CI/CD
     - Estrategias para manejar cambios de alcance tardíos en el sprint

2. **Automatización de una web**
   - Se desarrolló un script de automatización para validar funcionalidades clave de una web.
   - Se usó el siguiente stack para las creación de la automatización (playwright - cucumber)
   - Se incluyó la ejecución de pruebas automáticas y la generación de reportes.

3. **Tratamiento de datos en APIs**
   - Se diseñaron y ejecutaron pruebas para validar el correcto funcionamiento de una API.
   - Se verificaron los distintos endpoints, métodos y respuestas esperadas.
   - Se documentaron los resultados y se propusieron casos de prueba adicionales para asegurar la calidad del servicio.

## Estructura del repositorio

El repositorio está organizado en tres carpetas principales:

### ejercicio_1: Prueba exploratoria y reporte
Para este ejecicio de encontrar la soluicion en [Solucion](ejercicio-1/solucion-1.md).

### ejercicio_2: Automatización de una web
Para este ejercicio se utilizó el framework de Playwright.

**Instrucciones de ejecución:**
1. Ubicarse desde la consola dentro del fichero `ejercicio_2`
2. Ejecutar `npm i` para obtener las dependencias necesarias
3. Ejecutar `npm run test`

Al finalizar, se generará un archivo `index.html` en la ruta `reports/` del proyecto con el reporte de ejecución, que incluye el paso a paso y la captura final de la página.

### ejercicio_3: Tratamiento de datos en APIs
Para este ejecicio se utilizo el framework de Karate.

**Instrucciones de ejecución:**
1. Ubicarse desde la consola dentro del fichero `ejercicio_3`
2. Ejecutar `mvn clean test`

Al finalizar, se generará un archivo `karate-summary.html` en la ruta `target/karate-reports/` del proyecto con el reporte de ejecución, que incluye el paso a paso y los resultados pedidos en los tres puntos de este ejercicio
