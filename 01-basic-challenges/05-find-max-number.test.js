const maxNumber = require("./05-find-max-number");

test("Return max number", () => {
  const result = maxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  expect(result).toBe(10);

  const result2 = maxNumber([1, 9, 8, 7, 6, 5, 4, 3, 2, 10]);
  expect(result2).toBe(10);
});
