const occurrences = require("./04-countOccurences");

test("Returning no of characters in a string", () => {
  const result = occurrences("hello", "l");
  expect(result).toBe(2);
});
