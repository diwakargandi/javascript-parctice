// Conditional Statements ( if, if else)

// if statement only

let age = 20;
if (age > 18) console.log("You are an Adult!");

// if else

let age1 = 18;
if (age1 >= 18) {
  console.log("Eligible for Driving Lisence.");
} else {
  console.log("Apply for Driving Lisence.");
}

// else if

let mode = "pink";
if (mode === "dark") {
  console.log("black");
} else if (mode === "blue") {
  console.log("blue");
} else if (mode === "pink") {
  console.log("pink");
} else {
  console.log("white");
}

// ternary operator

let age2 = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// problems on if else statements

// even & odd

let number = 7;
if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// 2 positive, negative and zero

let number1 = 10;
if (number1 > 0) {
  console.log("Positive Numbers");
} else if (number1 < 0) {
  console.log("Negative NUmbers");
} else {
  console.log("Zero");
}

// 3 check voting eligibility

let age3 = 20;
if (age3 >= 18) {
  console.log("You are eligible for voting.");
} else {
  console.log("Not eligible for voting.");
}

// 4 compare two numbers

let number4 = 10;
let number5 = 5;
if (number4 > number5) {
  console.log(`${number4} is the grestest number than ${number5}`);
} else {
  console.log(`${number5} is the greatest number than ${number4}`);
}

// 5 grade calculator

let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 6 largest of three numbers

let num1 = 10;
let num2 = 55;
let num3 = 30;
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number");
} else {
  console.log(num3 + " is the largest number");
}

// 7 leap year

let year = 2026;
if (year % 400 === 0) {
  console.log("Leap Year");
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// 8 simple calculator

let number_1 = 10;
let number_2 = 20;
let operator = "+";

if (operator === "+") {
  console.log(number_1 + number_2);
} else if (operator === "-") {
  console.log(number_1 - number_2);
} else if (operator === "*") {
  console.log(number_1 * number_2);
} else if (operator === "/") {
  console.log(number_1 / number_2);
} else {
  console.log("Invalid Operator");
}

// 9 login validtion

let userName = "admin";
let password = "1234";

if (userName === "admin" && password === "1234") {
  console.log("Succesfully Logged In");
} else {
  console.log("Invalid Credentials");
}

// 10 electricity bill convertor

let units = 150;
let bill = 0;

if (units <= 100) {
  bill = units * 5;
} else if (units <= 200) {
  bill = units * 7;
} else {
  bill = units * 10;
}

console.log("Total Bill Amount: " + bill);

// 11 movie ticket price

let ageOfPerson = 25;
let ticketPrice;

if (ageOfPerson <= 12) {
  ticketPrice = 100;
} else if (ageOfPerson <= 60) {
  ticketPrice = 200;
} else {
  ticketPrice = 150;
}

console.log("The Total Amount is: " + ticketPrice);

// 12 Internet data usage

let data = 10;
let charge;

if (data <= 5) {
  charge = 50;
} else if (data <= 15) {
  charge = 100;
} else {
  charge = 200;
}

console.log("Your Amount is: " + charge);

// // hacker rank practice problem

// let units1 = 180;
// let bill1; // undefined

// if (units <= 100) {
//   bill1 = units * 5;
// } else if (units <= 200) {
//   bill1 = units * 7;
// } else {
//   bill1 = units * 10;
// }
// console.log(`The Electricity bill :  ${bill1}`);

// let units_1 = 220;
// let bill_1;

// if (units_1 <= 50) {
//   bill_1 = units_1 * 3;
// } else if (units_1 <= 150) {
//   bill_1 = units_1 * 5;
// } else if (units_1 <= 300) {
//   bill_1 = units_1 * 7;
// } else {
//   bill_1 = units_1 * 10;
// }
// console.log(`The electricity bill is: ${bill_1}`);

let units_1 = 90;
let bill_1;

if (units_1 <= 75) {
  bill_1 = units_1 * 4;
} else if (units_1 <= 175) {
  bill_1 = units_1 * 6;
} else if (units_1 <= 250) {
  bill_1 = units_1 * 8;
} else {
  bill_1 = units_1 * 12;
}
console.log(`Total bill is: ${bill_1}`);

// discount calculator problem

// let amount = 3200;
// let discount;
// let finalAmount;

// if (amount <= 500) {
//   discount = 0;
// } else if (amount <= 1999) {
//   discount = amount * 0.05;
// } else if (amount <= 4999) {
//   discount = amount * 0.1;
// } else {
//   discount = amount * 0.2;
// }
// finalAmount = amount - discount;
// console.log(finalAmount);

// let amount = 4500;
// let discount;
// let finalAmount;

// if (amount < 1000) {
//   discount = 0;
// } else if (amount < 3000) {
//   discount = amount * 0.08;
// } else if (amount < 7000) {
//   discount = amount * 0.15;
// } else {
//   discount = amount * 0.25;
// }

// finalAmount = amount - discount;
// console.log(finalAmount);

let amount = 5800;
let discount;
let finalAmount;

if (amount < 2000) {
  discount = 0;
} else if (amount < 4000) {
  discount = amount * 0.05;
} else if (amount < 6000) {
  discount = amount * 0.12;
} else {
  discount = amount * 0.18;
}
finalAmount = amount - discount;
console.log(finalAmount);

// weird / not weird problem

// let n = 22;

// if (n % 2 !== 0) {
//   console.log("weird");
// } else if (n >= 2 && n <= 5) {
//   console.log("Not Weird");
// } else if (n >= 6 && n <= 20) {
//   console.log("Weird");
// } else {
//   console.log("Not Weird");
// }

// largest of number

let a = 12;
let b = 45;
let c = 30;

if (a >= b && a >= c) {
  console.log(`${a} is the largest number`);
} else if (b >= a && b >= c) {
  console.log(`${b} is the largest number`);
} else {
  console.log(`${c} is the largest number`);
}
