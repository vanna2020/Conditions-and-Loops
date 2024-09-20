// Q3 => What are loops, and what do we need them? Explain different types of loops with their syntax and examples.

// Ans => In programming, loops are used to execute a block of code repeatedly based on a condition. They are essential
//        for tasks that require repetitive actions, such as processing items in an array or executing code
//        until a condition is met. Loops help in reducing code redundancy and improving efficiency.

//        Types of Loops in JavaScript :

//        1. for Loop =>

//         The for loop is used when the number of iterations is known beforehand. It includes initialization, condition, and increment/decrement expressions.

//         Syntax:
//         for (initialization; condition; increment/decrement) {
//         // code to be executed
//         }

//         Example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while Loop =>

// The while loop is used when the number of iterations is not known beforehand.
// It continues to execute as long as the specified condition is true.

// Syntax:
// while (condition) {
// // code to be executed
// }

// Example:
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// 3. do...while Loop =>

// The do...while loop is similar to the while loop, but it guarantees that the block of code will
// be executed at least once before the condition is tested.

// Syntax:
// do {
//   // code to be executed
// } while (condition);

// Example:
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// 4. for...in Loop =>

// The for...in loop is used to iterate over the enumerable properties of an object. It’s not typically used for arrays, but rather for objects and their properties.

// Syntax:
// for (let key in object) {
//     // code to be executed
// }

// Example:
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 5. for...of Loop =>

// The for...of loop is used to iterate over the values of iterable objects like arrays, strings,
// or collections (e.g., Map and Set).

// Syntax:
// for (let value of iterable) {
//   // code to be executed
// }

// Example:
let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number);
}
