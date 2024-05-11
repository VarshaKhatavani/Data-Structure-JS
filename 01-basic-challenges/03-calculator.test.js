const calculator = require("./03-calculator");

test("Returning Calculator Values", () => {
  const addition = calculator(100000, 16000, "+");
  expect(addition).toBe(1_16_000);

  const multiplication = calculator(116000, 12, "*");
  expect(multiplication).toBe(1392000);

  const subtraction = calculator(126000, 1600, "-");
  expect(subtraction).toBe(124400);

  const division = calculator(1392000, 12, "/");
  expect(division).toBeCloseTo(116000); // use toBeCloseTo : for division

  //Throw Error : Invalid Operator
  expect(() => calculator(10, 20, "%")).toThrow("Invalid Operator");
});
