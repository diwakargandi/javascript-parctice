// SET-A

// Write a function that prints numbers from 1 to n
function numbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
numbers(10);

// Write a function that prints numbers from n to 1
function numbers1(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
numbers1(10);

// Write a function that prints the square of a number
function square(num) {
  return num * num;
}
let result = square(5);
console.log(result);

// Write a function that checks if a number is even or odd and prints the result
function check(num1) {
  if (num1 % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
check(5);

// SET-B

// Write a function that prints all odd numbers from 1 to n
function oddNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
oddNumbers(10);

// Write a function that prints the multiplication table of a number (1 to 10)
function evenNumbers(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}
evenNumbers(10);

// Write a function that prints the sum of numbers from 1 to n
function add(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
add(10);

// SET-C

// Write a function that takes two numbers and prints the smaller one
function numbers3(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
let result3 = numbers3(5, 10);
console.log(result3);

// Write a function that prints "Hello" n times
function greet(n) {
  for (let i = 1; i <= n; i++) {
    console.log("Hello");
  }
}
greet(10);

// Write a function that prints all numbers divisible by 5 up to n
function numbers4(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
numbers4(25);

// Write a function that takes a number n and counts how many even numbers are between 1 and n.
function numbers5(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  console.log(count);
}
numbers5(20);

// Write a function that takes a number n and prints a right-angled star pattern.
function numbers6(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line = line + "*";
    }
    console.log(line);
  }
}
numbers6(4);

// Write a function that takes two numbers and prints their sum only if both are even.
function numbers7(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    console.log(a + b);
  } else {
    console.log("Both must be even");
  }
}
numbers7(4, 4);
numbers7(3, 8);

/////////////////////////////////////////////////////////////////////////
//////////////////////  Functions + Arrys  /////////////////////////////

// print all numbers

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([2, 4, 6, 8]);

// print even numbers only

function printArray1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
printArray1([5, 10, 15, 20, 25, 30]);

function printArray2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
printArray2([1, 2, 3, 4, 5, 6]);

// sum

function sumArray(arr) {
  let sum4 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum4 = sum4 + arr[i]; // sum4 += arr[i];
  }
  console.log(sum4); // return sum;
}
sumArray([1, 2, 3]);

// >10

function countGreater(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      count++;
    }
  }
  console.log(count);
}
countGreater([5, 12, 8, 20]);

// largest number?

function findMax(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
findMax([3, 7, 2, 9]);

// Write a function that prints all elements of an array.
function numbers_1(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
numbers_1([1, 2, 3, 4, 5]);

// Write a function that prints only odd numbers from an array.
function oddNumbers_2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}
oddNumbers_2([2, 5, 4, 8, 7, 9]);

// Write a function that returns the sum of all elements in an array.
function sumNumbers(arr) {
  let sum_3 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum_3 += arr[i];
  }
  console.log(sum_3);
}
sumNumbers([2, 4, 6, 8, 10]);

// Write a function that counts how many elements are greater than 5.
function countNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      count++;
    }
  }
  console.log(count);
}
countNumbers([2, 4, 6, 8, 10]);

// Write a function that finds the smallest number in an array.
function smallerNumber(arr) {
  let smallest_1 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest_1) {
      smallest_1 = arr[i];
    }
  }
  console.log(smallest_1);
}
smallerNumber([5, 9, 1, 6, 10]);

// Write a function that counts even numbers in an array.
function evenNumbers_1(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  console.log(count);
}
evenNumbers_1([5, 6, 8, 10, 3, 9]);

// Write a function that prints all numbers divisible by 3 in an array.
function numbers8(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      console.log(arr[i]);
    }
  }
}
numbers8([2, 4, 6, 8, 5, 15, 3, 9, 18]);

// Write a function that checks whether an array contains the number 10.
function checkNumber(arr) {
  let number_10 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
      number_10 = arr[i];
      break;
    }
  }
  console.log(number_10);
}
checkNumber([2, 4, 8, 10, 15, 20]);

// function checkNumber(arr) {
//   let found = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 10) {
//       found = true;
//       break;
//     }
//   }

//   console.log(found);
// }

// Write a function that reverses an array using a loop.
function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse = reverse + arr[i]; // reverse.push(arr[i]); ( correct way )
  }
  console.log(reverse);
}
reverseArray([2, 4, 6, 8, 10]);

// Write a function that prints the maximum number
function findMax_1(arr) {
  let largest_1 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest_1) {
      largest_1 = arr[i];
    }
  }
  console.log(largest_1);
}
findMax_1([2, 4, 6, 8, 10]);

// Write a function that counts negative numbers in an array.
function negativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
}
negativeNumbers([2, 4, -1, -8, 5]);

// Write a function that prints "Yes" if all numbers are positive, else "No".

function numbers_9(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log("Yes, they are positive");
    } else {
      console.log("No");
    }
  }
}
numbers_9([2, 4, 6, 8, 10]);

// function numbers_9(arr) {
//   let allPositive = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       allPositive = false;
//       break;
//     }
//   }

//   console.log(allPositive ? "Yes" : "No");
// }

/////////////////////// Rectifying Mistakes /////////////////////////////

// Count how many numbers are greater than 10 in an array
function findMax_2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      count++;
    }
  }
  console.log(count);
}
findMax_2([5, 12, 20, 3]);

// Print all numbers divisible by 4 from an array
function divisibleNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 === 0) {
      console.log(arr[i]);
    }
  }
}
divisibleNumbers([4, 6, 8, 10, 12]);

// Check if all numbers are positive
function allPositive(arr) {
  let allPositive = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      allPositive = true;
      break;
    }
  }
  console.log(allPositive ? "Yes" : "No");
}
allPositive([2, 4, 6]);

// Find the smallest number in an array
function smallestNumber_2(arr) {
  let smallest_2 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest_2) {
      smallest_2 = arr[i];
    }
  }
  console.log(smallest_2);
}
smallestNumber_2([9, 3, 7, 1]);

// Print the reverse of an array
function reverseArray_1(arr) {
  let reverse_1 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse_1.push(arr[i]);
  }
  console.log(reverse_1);
}
reverseArray_1([1, 2, 3]);
