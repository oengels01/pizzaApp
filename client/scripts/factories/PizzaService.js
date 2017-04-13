myApp.factory('PizzaService', function() {

  smallPrice = 6;
  mediumPrice = 7;
  largePrice = 8;
  toppingsPrice = 1;

  var pizzaOrderObject = {
    orders : [],

  };
  var confirmedPizzaObject = {
    orders: [],
    total: Number
  };
  confirmedPizzaObject.total= 0;

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

var confirmItem = function(order){
  console.log('confirm item' , order.price);
  confirmedPizzaObject.orders.push(order);
  confirmedPizzaObject .total += order.price;
  console.log('total' + confirmedPizzaObject.total);
};

  return {
    pizzaOrderObject: pizzaOrderObject,
    confirmedPizzaObject: confirmedPizzaObject,
    submitOrder: submitOrder,
    deleteItem : deleteItem,
    confirmItem: confirmItem
  };
});
