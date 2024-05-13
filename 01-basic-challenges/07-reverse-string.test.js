const {
  reverseString,
  reverseString1,
  reverseString2,
} = require("./07-reverse-string");

test("Return Reverse of String", () => {
  const res = reverseString("Natural");
  expect(res).toBe("larutaN");

  const res1 = reverseString1("Natural");
  expect(res1).toBe("larutaN");

  const res2 = reverseString2("Natural");
  expect(res2).toBe("larutaN");
});
