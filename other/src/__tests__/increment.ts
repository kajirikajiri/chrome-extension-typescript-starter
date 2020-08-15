import { increment } from "../increment";

test("1 + 1 = 2", () => {
  expect(increment(1)).toBe(2);
});

test("2 + 1 != 2", () => {
  expect(increment(2)).not.toBe(2);
});
