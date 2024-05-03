const helloWorld = require("./01-hello-world");

test(`Returning 'Hello world', as a string`, () => {
  const result = helloWorld();
  expect(result).toBe("Hello World!");
});
