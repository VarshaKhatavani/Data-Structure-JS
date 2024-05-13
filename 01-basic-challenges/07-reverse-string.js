/**
 * Write a function called reverseString that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

   Function Signature

 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.

  * * function reverseString(str: string): string;
  * * Examples
  * * reverseString('hello') // 'olleh'
  * * reverseString('world') // 'dlrow'
  * * reverseString('') // ''
  * ! Constraints
  * ! The input string will only contain lowercase letters and spaces
 */

function reverseString(str) {
  let start = 0;
  let end = str.length - 1;
  let strArray = str.split("");

  while (start < end) {
    let temp = strArray[start];
    strArray[start] = strArray[end];
    strArray[end] = temp;

    // Move the pointers towards the center
    start++;
    end--;
  }
  return strArray.join("");
}

// solution

function reverseString1(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// solution 2

function reverseString2(str) {
  return str.split("").reverse().join("");
}

module.exports = {
  reverseString: reverseString,
  reverseString1: reverseString1,
  reverseString2: reverseString2,
};
