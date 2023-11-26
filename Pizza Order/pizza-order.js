/// <reference path="./global.d.ts" />
//
// @ts-check

const values = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
    ExtraSauce: 1,
    ExtraToppings: 2
  };
  
  var count = 0;
  
  /**
   * Determine the prize of the pizza given the pizza and optional extras
   *
   * @param {Pizza} pizza name of the pizza to be made
   * @param {Extra[]} extras list of extras
   *
   * @returns {number} the price of the pizza
   */
  export function pizzaPrice(pizza, ...extras) {
    let result = values[pizza];
  
    for (let extra of extras) {
      result += values[extra];
    }
  
    return result;
  }
  
  /**
   * Calculate the prize of the total order, given individual orders
   *
   * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
   * @returns {number} the price of the total order
   */
  export function orderPrice(pizzaOrders) {
    let result = 0;
  
    for (let order of pizzaOrders) {
      result += pizzaPrice(order.pizza, ...order.extras);         
    }
  
    return result;
  }
  