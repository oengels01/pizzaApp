myApp.controller('ConfirmController',['PizzaService', function(PizzaService) {
   console.log('ConfirmController');
  var confirm = this;
  confirm.confirmedPizzaObject = PizzaService.confirmedPizzaObject;
  //
  // order.pizzaOrderObject = PizzaService.pizzaOrderObject;
  // order.remove = function(order){
  //   console.log('Order in controllerOder' , order);
  //   PizzaService.deleteItem(order);
  // };
  //
  // order.confirm = function(order){
  //   console.log('Confirm in controllerOder' , order);
  //   PizzaService.confirmItem(order);
  // };

}]);
