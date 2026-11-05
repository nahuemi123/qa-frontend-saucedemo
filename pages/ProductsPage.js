
class ProductsPage {

  constructor(page) {
    this.page = page;

    this.carrito = page.locator('.shopping_cart_link');
    this.contadorCarrito = page.locator(
      '.shopping_cart_badge'
    );
  }

  async agregarProducto(nombreProducto) {
    const producto = this.page.locator('.inventory_item', {
      has: this.page.locator('.inventory_item_name', {
        hasText: nombreProducto
      })
    });

    await producto.getByRole('button', {
      name: 'Add to cart'
    }).click();
  }

  async abrirCarrito() {
    await this.carrito.click();
  }
}

module.exports = { ProductsPage };
