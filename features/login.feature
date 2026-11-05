
Feature: Inicio de sesión en Sauce Demo

  Scenario: Inicio de sesión exitoso
    Given que el usuario está en la página de inicio de sesión
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And hace clic en el botón Login
    Then debe visualizar la página de productos

  Scenario: Inicio de sesión con credenciales inválidas
    Given que el usuario está en la página de inicio de sesión
    When ingresa el usuario "usuario_invalido" y la contraseña "incorrecta"
    And hace clic en el botón Login
    Then debe visualizar un mensaje de credenciales incorrectas

  Scenario: Inicio de sesión con usuario bloqueado
    Given que el usuario está en la página de inicio de sesión
    When ingresa el usuario "locked_out_user" y la contraseña "secret_sauce"
    And hace clic en el botón Login
    Then debe visualizar un mensaje de usuario bloqueado
