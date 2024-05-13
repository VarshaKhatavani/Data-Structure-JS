/**
 * * Instructions
 * * Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

 * * Function Signature
 * * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.

 * * function titleCase(str: string): string;
 * * Examples
 * * titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
 * * titleCase('sHoRt AnD sToUt'); // Short And Stout
 * * titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout

* ! Constraints
* ! You may assume that each word consists of only letters and spaces
*/

function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  ["sHoRt", "AnD", "sToUt"];
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

module.exports = titleCase;
