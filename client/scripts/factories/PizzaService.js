myApp.factory('PizzaService', function() {

  smallPrice = 6;
  mediumPrice = 7;
  largePrice = 8;
  toppingsPrice = 1;

  var pizzaOrderObject = {
    orders : []
  };

  var getPrice = function(order) {
    var price = 0;
    console.log('in getPrice');
    console.log("order is", order);
    switch (order.size) {
      case 'small':
          price += smallPrice;
        break;
      case 'medium':
          price += mediumPrice;
        break;
      case 'large':
          price += largePrice;
        break;
      default:
    }

    if (order.topping) {
      price += toppingsPrice;
    }
    console.log('price is',price);

    return price;
  };

  var submitOrder = function(order) {
    order.price = getPrice(order);
    console.log("pushing ",order);
    pizzaOrderObject.orders.push(order);
    console.log("Array of orders is: ", pizzaOrderObject.orders);
  };

var deleteItem = function(order){
  console.log('Delete item' , order);
  var index = pizzaOrderObject.orders.indexOf(order);
  console.log(index);
  pizzaOrderObject.orders.splice(index,1);
  console.log(pizzaOrderObject.orders);
};


  return {
    pizzaOrderObject: pizzaOrderObject,
    submitOrder: submitOrder,
    deleteItem : deleteItem
  };
});
