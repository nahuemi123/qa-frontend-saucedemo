
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// PASO 1: Abrir Sauce Demo
Given('que el usuario está en la página de inicio de sesión', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.abrirPagina();
});

// PASO 2: Ingresar credenciales
When('ingresa el usuario {string} y la contraseña {string}', async function (usuario, password) {
  await this.loginPage.ingresarCredenciales(usuario, password);
});

// PASO 3: Presionar Login
When('hace clic en el botón Login', async function () {
  await this.loginPage.hacerLogin();
});

// PASO 4: Verificar el login
Then('debe visualizar la página de productos', async function () {
  await expect(this.page).toHaveURL(/inventory\.html/);
  await expect(this.page.locator('.inventory_list')).toBeVisible();
});

Then('debe visualizar un mensaje de credenciales incorrectas',
  async function () {
    const mensaje = await this.loginPage.obtenerMensajeError();
    expect(mensaje).toContain(
      'Username and password do not match'
    );
  }
);

Then('debe visualizar un mensaje de usuario bloqueado',
  async function () {
    const mensaje = await this.loginPage.obtenerMensajeError();
    expect(mensaje).toContain(
      'Sorry, this user has been locked out'
    );
  }
);
