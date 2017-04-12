myApp.controller('OrderController',['PizzaService', function(PizzaService) {
  console.log('OrderController');
  var order = this;

  order.pizzaOrderObject = PizzaService.pizzaOrderObject;
  order.remove = function(order){
console.log('Order in controllerOder' , order);
    PizzaService.deleteItem(order);
  };

}]);
