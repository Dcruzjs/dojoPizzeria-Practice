const crustType = [
  "deep dish",
  "hand tossed",
  "Cheese-Stuffed",
  "Flatbread",
  "Thin Crust",
  "Neapolitan",
];
const sauceType = [
  "traditional",
  "marinara",
  "Spicy Red Sauce",
  "Sweet Sauce",
  "BBQ Sauce",
  "Pesto Sauce",
];
const chesses = ["mozarella", "feta", "Cheddar", "Gouda", "Swiss", "Parmesan"];
const toppings = [
  "pepperoni",
  "sausage",
  "mushrooms",
  "olives",
  "onions",
  "Ham",
];

const pizzaOven = (crustType, sauceType, chesses, toppings) => ({
  crustType: crustType,
  sauceType: sauceType,
  chesses: chesses,
  toppings: toppings,
});

const randomPizza = (_) => ({
  crustType: crustType[Math.floor(Math.random() * crustType.length)],
  sauceType: sauceType[Math.floor(Math.random() * sauceType.length)],
  chesses: chesses[Math.floor(Math.random() * chesses.length)],
  toppings: [
    toppings[Math.floor(Math.random() * toppings.length)],
    toppings[Math.floor(Math.random() * toppings.length)],
    toppings[Math.floor(Math.random() * toppings.length)],
  ],
});

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

let pizza3 = pizzaOven("Neapolitan", "sweet sauce", "swiss", [
  "pepperoni",
  "olives",
  "mushrooms",
]);

let pizza4 = pizzaOven("deep dish", "sweet sauce", "cheddar", [
  "onions",
  "sausage",
  "ham",
]);

let luckyPizza = randomPizza();

console.log(`You ordered: `, pizza1);
console.log(`You ordered: `, pizza2);
console.log(`You ordered: `, pizza3);
console.log(`You ordered: `, pizza4);
console.log(`Your lucky pizza is: `, luckyPizza);
