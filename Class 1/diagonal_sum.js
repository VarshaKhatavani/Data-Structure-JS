/**
 * 
 * Given a square matrix mat, return the sum of the matrix diagonals.

   Only include the sum of all the elements on the primary diagonal and 
   all the elements on the secondary diagonal that are not part of the primary diagonal. 
   
   Input: mat = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]
   Output: 25
   Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
                Notice that element mat[1][1] = 5 is counted only once.

   Example 2:

   Input: mat = [[1,1,1,1],
                 [1,1,1,1],
                 [1,1,1,1],
                 [1,1,1,1]]
   Output: 8   
   
   */

var diagonalSum = function (mat) {
  let row = mat.length;
  let col = mat[0].length;
  let sum = 0;

  for (let i = 0; i < row; i++) {
    let primaryDiagonal = mat[i][i];
    let secondaryDiagonal = mat[i][col - i - 1];
    sum += primaryDiagonal;
    if (i != col - i - 1) {
      sum += secondaryDiagonal;
    }
  }
  return sum;
};

let result = diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result); // 25
