
class LoginPage {

  constructor(page) {
    this.page = page;

    this.inputUsuario = page.locator('#user-name');
    this.inputPassword = page.locator('#password');
    this.botonLogin = page.locator('#login-button');
  this.mensajeError = page.locator('[data-test="error"]');
  }

  // Abrir Sauce Demo
  async abrirPagina() {
    await this.page.goto('https://www.saucedemo.com/');
  }
  
  async obtenerMensajeError() {
  return await this.mensajeError.textContent();
}
  // Ingresar usuario y contraseña
  async ingresarCredenciales(usuario, password) {
    await this.inputUsuario.fill(usuario);
    await this.inputPassword.fill(password);
  }

  // Presionar Login
  async hacerLogin() {
    await this.botonLogin.click();
  }
}

module.exports = { LoginPage };
