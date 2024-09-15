import { sum } from "../components/sum.js";

test("Calculate sum of two intergers", () => {
  const result = sum(5, 6);

  //Assertion
  expect(result).toBe(11);
});

test("Calculate sum to fail", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
