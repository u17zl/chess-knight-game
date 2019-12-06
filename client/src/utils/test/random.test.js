import generateRandomPosition from "../random";

it("generate different positions", () => {
  const [a, b] = generateRandomPosition();

  expect(a.length).toBe(2);
  expect(b.length).toBe(2);
  expect(a[0] !== b[0] || a[1] !== b[1]).toBe(true);
});
