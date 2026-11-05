
Feature: Carrito de compras de Sauce Demo

  Scenario: Agregar un producto al carrito
    Given que el usuario ha iniciado sesión correctamente
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then el carrito debe mostrar 1 producto

  Scenario: Verificar un producto en el carrito
    Given que el usuario ha iniciado sesión correctamente
    When agrega el producto "Sauce Labs Backpack" al carrito
    And ingresa al carrito de compras
    Then debe visualizar el producto "Sauce Labs Backpack"
