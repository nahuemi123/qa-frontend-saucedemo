
const { When, Then } = require('@cucumber/cucumber');

const { CheckoutPage } = require('../pages/CheckoutPage');

// INICIAR CHECKOUT
When('inicia el proceso de compra', async function () {
  await this.cartPage.iniciarCheckout();

  this.checkoutPage = new CheckoutPage(this.page);
});

// INGRESAR DATOS DEL COMPRADOR
When('ingresa los datos del comprador', async function () {
  await this.checkoutPage.ingresarDatos(
    'Juan',
    'Perez',
    '15001'
  );
});

// FINALIZAR COMPRA
When('finaliza la compra', async function () {
  await this.checkoutPage.finalizarCompra();
});

// VERIFICAR CONFIRMACIÓN
Then('debe visualizar la confirmación de compra exitosa',
  async function () {
    await this.checkoutPage.verificarCompraExitosa();
  }
);
