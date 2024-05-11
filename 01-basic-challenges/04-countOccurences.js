/**
 * * Write a function called countOccurrences() that takes in a string and a character
 * * and returns the number of occurrences of that character in the string.
 *
 * ! Constraints
 * ! Lowercase and uppercase characters are considered different characters.
 * ! If you want, you can make the function case insensitive
 *
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 *
 * * Examples
 * ? countOccurrences('hello', 'l'); // 2
 * ? countOccurrences('hello', 'z'); // 0
 */

// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

function countOccurrences(str, char) {
  let lowerStr = str.toLowerCase();
  let lowerChar = char.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (str[i] === lowerChar) {
      count++;
    }
  }
  return count;
}

//const countOccurrence = (str, char) => str.split(char).length - 1;
//console.log(countOccurrence("hello", "w"));

module.exports = countOccurrences;
