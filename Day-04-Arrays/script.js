////////////////////////////// Arrays ///////////////////////////////////

// Using forEach, print numbers greater than 5 from:
let arr = [2, 4, 6, 8, 3, 10];

arr.forEach(function (num) {
  if (num > 5) {
    console.log(num);
  }
});

// Using map, square each number in:
let num = [2, 3, 4];
let square = num.map(function (num) {
  return num * num;
});
console.log(square);

// Using filter, keep numbers greater than 5 from:

let num_2 = [2, 4, 6, 8, 3, 10];
let greater = num_2.filter(function (num_2) {
  return num_2 > 5;
});
console.log(greater);

// Using reduce, find the sum of:
let num_3 = [2, 4, 6, 8];
let sum = num_3.reduce(function (total, num_3) {
  return total + num_3;
}, 0);
console.log(sum);

// Mixed (filter + map)
//From the array:

let nums = [2, 5, 8, 11, 14];

let result = nums.filter((nums) => nums % 2 === 0).map((nums) => nums * nums);
console.log(result);

// Mixed (filter + map)
//From the array:
let num_4 = [1, 4, 7, 10, 13, 16];
let result_4 = num_4.filter((num_4) => num_4 > 5).map((num_4) => num_4 * 2);
console.log(result_4);

// Problem 2 (Mixed: map + reduce)
//Given the array:

let num_5 = [2, 3, 4];
let result_5 = num_5
  .map((num_5) => num_5 * num_5)
  .reduce((total, num_5) => total + num_5, 0);
console.log(result_5);

// Create a new array where each number is increased by 5
let nums_6 = [10, 20, 30];
let result_6 = nums_6.map(function (nums_6) {
  return nums_6 + 5;
});
console.log(result_6);

// From the array, keep only odd numbers.
let num_7 = [4, 7, 10, 13, 16];
let result_7 = num_7.filter(function (num_7) {
  return num_7 % 2 !== 0;
});
console.log(result_7);

// Find the product (multiplication) of all numbers
let num8 = [2, 3, 4];
let result8 = num8.reduce(function (total, num8) {
  return total * num8;
}, 1);
console.log(result8);

// Mixed (filter + reduce)
//From the array:
let num9 = [5, 12, 3, 20, 7];
let result9 = num9
  .filter((num9) => num9 > 5)
  .reduce((total, num9) => total + num9, 0);
console.log(result9);

// Mixed (map + filter)
//From the array:
let num10 = [1, 2, 3, 4, 5];
let result10 = num10
  .map((num10) => num10 * num10)
  .filter((num10) => num10 > 10);
console.log(result10);

let num11 = [2, 6, 8, 3, 10];
let result11 = num11.reduce(function (total, num11) {
  return total > 5;
}, 0);
console.log(result11);
