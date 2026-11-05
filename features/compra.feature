
Feature: Proceso de compra en Sauce Demo

  Scenario: Completar una compra exitosamente
    Given que el usuario ha iniciado sesión correctamente
    When agrega el producto "Sauce Labs Backpack" al carrito
    And ingresa al carrito de compras
    And inicia el proceso de compra
    And ingresa los datos del comprador
    And finaliza la compra
    Then debe visualizar la confirmación de compra exitosa
