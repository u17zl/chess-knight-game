import isValidMove from "../movement";

it("position shoule be in board", () => {
  let current_in = [1, 1];
  let current_out = [-1, 1];
  let next_in = [3, 2];
  let next_out = [-1, -1];

  expect(isValidMove(current_in, next_in)).toBe(true);
  expect(isValidMove(current_in, next_out)).toBe(false);
  expect(isValidMove(current_out, next_in)).toBe(false);
  expect(isValidMove(current_out, next_out)).toBe(false);
});
