const calSum = require("./02-get-sum");

test("Returning sum of two numbers", () => {
  const result = calSum(10, 20);
  expect(result).toBe(30);
});
