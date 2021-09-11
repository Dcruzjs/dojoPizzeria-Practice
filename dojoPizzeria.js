const crustType = ["deep dish", "hand tossed"];
const sauceType = ["traditional", "marinara"];
const chesses = ["mozarella", "feta"];
const toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];

function pizzaOven(crustType, sauceType, chesses, toppings) {
  return {
    crustType: crustType,
    sauceType: sauceType,
    chesses: chesses,
    toppings: toppings,
  };
}

function randomPizza() {
  return {
    crustType: crustType[Math.floor(Math.random() * crustType.length)],
    sauceType: sauceType[Math.floor(Math.random() * sauceType.length)],
    chesses: chesses[Math.floor(Math.random() * chesses.length)],
    toppings: [
      toppings[Math.floor(Math.random() * toppings.length)],
      toppings[Math.floor(Math.random() * toppings.length)],
      toppings[Math.floor(Math.random() * toppings.length)],
    ],
  };
}

let pizza1 = pizzaOven("deep dish", "traditional", "mozarella", [
  "pepperoni",
  "sausage",
]);

let pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

let luckyPizza = randomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(luckyPizza);
