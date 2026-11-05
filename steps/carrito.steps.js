
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

// INICIAR SESIÓN
Given('que el usuario ha iniciado sesión correctamente',
  async function () {

    this.loginPage = new LoginPage(this.page);
    this.productsPage = new ProductsPage(this.page);
    this.cartPage = new CartPage(this.page);

    await this.loginPage.abrirPagina();

    await this.loginPage.ingresarCredenciales(
      'standard_user',
      'secret_sauce'
    );

    await this.loginPage.hacerLogin();

    await expect(this.page).toHaveURL(/inventory\.html/);
  }
);

// AGREGAR PRODUCTO
When('agrega el producto {string} al carrito',
  async function (nombreProducto) {

    await this.productsPage.agregarProducto(nombreProducto);
  }
);

// VERIFICAR CANTIDAD
Then('el carrito debe mostrar {int} producto',
  async function (cantidad) {

    await expect(
      this.productsPage.contadorCarrito
    ).toHaveText(String(cantidad));
  }
);

// ABRIR CARRITO
When('ingresa al carrito de compras',
  async function () {

    await this.productsPage.abrirCarrito();
  }
);

// VERIFICAR PRODUCTO
Then('debe visualizar el producto {string}',
  async function (nombreProducto) {

    await this.cartPage.verificarProducto(nombreProducto);
  }
);
