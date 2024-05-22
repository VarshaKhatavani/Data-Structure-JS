/**
 *  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

    Example 1:

    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].

    Example 2:

    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
 * 
 * @param {number[]} nums
 * @return {number[]}
 */

// solution 1
var sortedSquares = function (nums) {
  let squareArr = [];
  for (let i = 0; i < nums.length; i++) {
    squareArr[i] = nums[i] * nums[i];
  }
  squareArr.sort((a, b) => a - b);
  return squareArr;
};

let res = sortedSquares([-7, -3, 2, 3, 11]);
console.log(res);

// solution 2 : two pointer
var sortedSquareArr = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let squareArr = [];
  let index = nums.length - 1;
  while (l <= r) {
    if (nums[r] * nums[r] > nums[l] * nums[l]) {
      squareArr[index] = nums[r] * nums[r];
      r--;
    } else {
      squareArr[index] = nums[l] * nums[l];
      l++;
    }
    index--;
  }
  return squareArr;
};

let result = sortedSquareArr([-7, -3, 2, 3, 11]);
console.log(result);
