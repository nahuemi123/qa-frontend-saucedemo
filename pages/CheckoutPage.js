
const { expect } = require('@playwright/test');

class CheckoutPage {

  constructor(page) {
    this.page = page;

    this.nombre = page.locator('#first-name');
    this.apellido = page.locator('#last-name');
    this.codigoPostal = page.locator('#postal-code');

    this.botonContinuar = page.locator('#continue');
    this.botonFinalizar = page.locator('#finish');

    this.mensajeConfirmacion = page.locator(
      '.complete-header'
    );
  }

  // Completar información del comprador
  async ingresarDatos(nombre, apellido, codigoPostal) {
    await this.nombre.fill(nombre);
    await this.apellido.fill(apellido);
    await this.codigoPostal.fill(codigoPostal);
    await this.botonContinuar.click();
  }

  // Confirmar y finalizar la compra
  async finalizarCompra() {
    await this.botonFinalizar.click();
  }

  // Validar confirmación
  async verificarCompraExitosa() {
    await expect(this.page).toHaveURL(/checkout-complete\.html/);

    await expect(this.mensajeConfirmacion).toHaveText(
      'Thank you for your order!'
    );
  }
}

module.exports = { CheckoutPage };
