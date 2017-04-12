myApp.factory('PizzaService', function() {

  var pizzaOrderObject = {
    orders : []
  };

  var submitOrder = function(order) {
    console.log("pushing ",order);
    pizzaOrderObject.orders.push(order);
    console.log("Array of orders is: ", pizzaOrderObject.orders);
  };

  return {
    pizzaOrderObject: pizzaOrderObject,
    submitOrder: submitOrder
  };
});
