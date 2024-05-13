/**
 * * Instructions
 * * Write a function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.
 
* * Function Signature
* * Returns the largest number in an array.
*   @param {number[]} arr - The array of numbers.
*   @returns {number} - The largest number in the array.

* * function findMaxNumber(arr: number[]): number;
* * Examples
* * findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
* * findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
* * findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10
 * 
 *  return Math.max(...arr);
 */

function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
module.exports = findMaxNumber;
