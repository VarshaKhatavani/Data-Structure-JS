/**
 ** Instructions
 ** Write a function called calculator that takes in 2 numbers and an operator and returns the result of the calculation.

 ** Function Signature

 ** Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.

 ** function calculator(num1: number, num2: number, operator: string): number;
 ** Examples
 ** calculator(1, 2, '+') // 3
 ** calculator(10, 5, '-') // 5
 ** calculator(2, 2, '*') // 4
 ** calculator(10, 5, '/') // 2

 *! Constraints
 *! The function must return a number
 *! The function must throw or log an error if an invalid operator is given

 */

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      throw new Error("Invalid Operator");
  }
  return result;
}
module.exports = calculator;
