
# Reto de Automatización QA FrontEnd

## Descripción
Proyecto de automatización de pruebas funcionales
de la aplicación web Sauce Demo.

## Tecnologías utilizadas
- JavaScript
- Node.js
- Playwright
- Cucumber
- Gherkin
- Page Object Model (POM)

## Escenarios automatizados
1. Inicio de sesión exitoso.
2. Inicio de sesión con credenciales inválidas.
3. Inicio de sesión con usuario bloqueado.
4. Agregar un producto al carrito.
5. Verificar un producto en el carrito.
6. Completar una compra exitosamente.

## Requisitos
- Node.js y npm instalados.
- Navegador Chromium para Playwright.

## Instalación
Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

Ingresar al proyecto:

cd qa-frontend

Instalar dependencias:

npm install

Instalar Chromium:

npx playwright install chromium

## Ejecución de pruebas
Ejecutar todos los escenarios:

npx cucumber-js

## Reportes
Al finalizar, se genera el archivo:

reporte-frontend.html

## Patrón de diseño
Se implementó Page Object Model (POM)
para separar las interacciones con las páginas
de las definiciones de los escenarios.

## Resultados
6 escenarios aprobados.
26 pasos aprobados.
Tiempo de ejecución: 35.940 segundos.
