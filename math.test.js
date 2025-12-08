import { expect, test } from "vitest";
import { add, sub } from "/math.js";

// 1.
test("add 3 + 2 to equal 5", () => {
  expect(add(3, 2)).toBe(5);
});

//  2.
test("subtract 0 - 1 to equal -1", () => {
  expect(sub(0, 1)).toBe(-1);
});
