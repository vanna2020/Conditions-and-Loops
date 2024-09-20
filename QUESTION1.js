// Q1 => What are conditional statements? Explain conditional statements with syntax and examples.

// Ans => In JavaScript, conditional statements are used to perform different actions based on different conditions.
// They allow the execution of a certain block of code only if a specified condition evaluates to true.
// The most common conditional statements in JavaScript are:

// 1. if Statement =>

// The if statement is used to specify a block of code to be executed if a condition is true.

// Syntax:
// if (condition) {
//     // code to be executed if the condition is true
//   }

// Example:
let isStudent = true;
let age = 17;

if (isStudent) {
  if (age < 18) {
    console.log("You are a minor student.");
  }
}

// 2. if...else Statement =>

// The if...else statement is used to execute one block of code if the condition is true,
// and another block of code if the condition is false.

// Syntax:
// if (condition) {
//   // code to be executed if the condition is true
// } else {
//   // code to be executed if the condition is false
// }

// Example:
let eligibleAge = 16;

if (eligibleAge >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// 3. else if Statement =>

// The else if statement allows you to check multiple conditions. If the first condition is false,
// it checks the next one, and so on.

// Syntax:
// if (condition1) {
//   // code to be executed if condition1 is true
// } else if (condition2) {
//   // code to be executed if condition2 is true
// } else {
//   // code to be executed if all conditions are false
// }

// Example:
let ageParameter = 12;

if (ageParameter >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

// 4. switch Statement =>

// The switch statement evaluates an expression and matches the value to a case label.
// When a match is found, the corresponding block of code is executed.

// Syntax:
// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   default:
//     // code to be executed if no cases match
// }

// Example:
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You selected an apple.");
    break;
  case "banana":
    console.log("You selected a banana.");
    break;
  case "orange":
    console.log("You selected an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

// 5. Ternary Operator (?:) =>

// The ternary operator is a shorthand for the if...else statement. It is written in
// the form of condition ? expression1 : expression2.

// Syntax:
// condition ? expression1 : expression2

// Example:
let number = 7;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);
