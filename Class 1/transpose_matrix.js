/**
 * Given a 2D integer array matrix, return the transpose of matrix.
   The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

   Example 1:
   Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
   Output: [[1,4,7],[2,5,8],[3,6,9]]

   Example 2:
   Input: matrix = [[1,2,3],[4,5,6]]
   Output: [[1,4],[2,5],[3,6]]
 */

// ****** solution 1 ******
var transpose = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let transposeMatrix = [];

  for (let i = 0; i < col; i++) {
    transposeMatrix[i] = [];
    console.log(transposeMatrix[i]);
    for (let j = 0; j < row; j++) {
      transposeMatrix[i][j] = matrix[j][i];
    }
  }
  return transposeMatrix;
};

let res = transpose([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(res);

// ****** Solution 2  ******
function transMatrix(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let res = Array.from({ length: col }, () => Array(row).fill(0));
  console.log(res);

  for (let i = 0; i < col; ++i) {
    for (let j = 0; j < row; ++j) {
      res[i][j] = matrix[j][i];
    }
  }
  return res;
}

let ans = transMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(ans);

// syntax used
console.log(Array.from([1, 2, 3], (x) => x + x));
