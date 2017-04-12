myApp.controller('MenuController',['PizzaService', function(PizzaService) {
  console.log('MenuController');
  var menu = this;
  menu.pizzaSizes = ['small','medium','large'];
  menu.pizzaToppings = ['pepperoni','cheese','sausage','mushrooms','peppers','pineapple'];
  menu.pizzaSize ='';
  menu.pizzaTopping ='';


  menu.submit = function(size,topping) {
    // console.log("our options are:", size, topping);
    console.log("Size is", size);
    console.log("Topping is", topping);
    var order = {};
    order.size = size;
    order.topping = topping;
    PizzaService.submitOrder(order);
  };

}]);
