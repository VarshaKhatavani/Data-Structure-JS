const titleCase = require("./06-title-case");

test("Return string in title case", () => {
  const res = titleCase("sHoRt AnD sToUt");
  expect(res).toBe("Short And Stout");
});
