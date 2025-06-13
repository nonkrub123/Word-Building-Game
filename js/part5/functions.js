/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea){
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Lemon tea");
// console.log(teaOrder);
/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType){
  function confirmOrder(order){
    console.log(`Order confirmed for ${order}`);
  }
  return confirmOrder(teaType);
}

// orderTea("Cheap tea")
/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/
// function greet () {}
// const greet = () => {}

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// }

// const calculateTotal = (price, quantity) => return price * quantity;


// let totalCost = calculateTotal(499, 100)
// console.log(totalCost);
/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea){
  return `maketea:  ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
  return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea);
// console.log(order);
/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker(name){
    console.log(score);
  return function (teaType){
    return `making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("hitesh");
let result = teaMaker("Black tea");
console.log(result);
// console.log(result("Black tea"));