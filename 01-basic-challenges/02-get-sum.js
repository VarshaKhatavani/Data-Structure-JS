/** 
  * * Instructions
  * * Write a function called getSum that takes in two numbers and returns the sum of those two numbers.

  * * Function Signature 
  * * Returns the sum of two numbers.
  @param {number} a - The first number.
  @param {number} b - The second number.
  @returns {number} - The sum of the two numbers.

  * * function getSum(a: number, b: number): number;
  Examples
  getSum(1, 2) // 3
  getSum(10, 5) // 15
  getSum(2, 2) // 4
  getSum(10, 5) // 15
   
  * ! Constraints
  * ! The function must return a number
*/

function getSum(a, b) {
  // console.log("a...", a);
  // console.log("b...", b);
  return a + b;
}
module.exports = getSum;
