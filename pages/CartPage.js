
const { expect } = require('@playwright/test');

class CartPage {

  constructor(page) {
    this.page = page;
    this.productosCarrito = page.locator(
      '.cart_item'
      
    );

    this.botonCheckout = page.locator('#checkout');
  }

async iniciarCheckout() {
  await this.botonCheckout.click();
}

  async verificarProducto(nombreProducto) {
    await expect(
      this.page.locator('.cart_item .inventory_item_name', {
        hasText: nombreProducto
      })
    ).toBeVisible();
  }
}

module.exports = { CartPage };
