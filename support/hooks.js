
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

// Tiempo máximo de ejecución por paso
setDefaultTimeout(30000);

// Antes de cada escenario
Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

// Después de cada escenario
After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
