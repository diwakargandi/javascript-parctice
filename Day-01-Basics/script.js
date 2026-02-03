// Add two numbers
let a = 10;
let b = 20;
let result = a + b;
console.log(result);

// Swaping of two numbers
console.log(`Before swap : a = ${a}, b = ${b} `);

a = a + b; // 10 + 20 = 30 (a = 30)
b = a - b; // 30 - 20 = 10 (b = 10)
a = a - b; // 30 - 10 = 20 (a = 20)

console.log(`After swap : a = ${a}, b = ${b} `);

// Convert string into numbers

let firstName = "Diwakar";
console.log(typeof Number(firstName));

// practice problems from chatgpt

// 1 Declare and print

let name = "Diwakar";
let age = 28;
console.log(`My name is ${name}, and I'm ${age} years old.`);

// 2 Declare a variable

let score = 10;
score = 25;
console.log(score);

// 3 swap two numbers

let x = 5;
let y = 10;
console.log(`Before swapping: x = ${x}, y = ${y}`);
x = x + y; // 5 + 10 = 15
y = x - y; // 15 - 10 = 5
x = x - y; // 15 - 5 = 10
console.log(`Afer swapping: x = ${x}, y = ${y}`);

// Constant check

const PI = 3.14;
console.log(PI); // Connot reassing a const value, because it is fixed value!

// 5

let string = "JavaScript";
let number = 100;
let boolean = true;
let time = null;
let status;
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof time);
console.log(typeof status);

// 6 string + number

let d = "10";
let e = 5;
console.log(d + e); // concatenation
console.log(Number(d) + e);

// 7 Bolean logic

let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);

// 8 Null vs Undefined

let u;
let v = null;
console.log(typeof u);
console.log(typeof v);

// 9 Type conversion

let num1 = "50";
let isnum1 = true;
console.log(typeof Number(num1));
console.log(typeof isnum1);

// 10 real life example

let productName = "Basketball";
let price = 15.99;
let inStock = true;
console.log(
  "The product" +
    " " +
    productName +
    " " +
    "costs $" +
    price +
    " " +
    "and is in stock:" +
    inStock,
);

// template literals ( mordern way )

console.log(
  `The product ${productName} is costs $${price} and it is in stock: ${inStock}`,
);
