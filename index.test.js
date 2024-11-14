const func = require("./index");

test("Search by name returns value", () => {
  expect(func.searchByFName("Yoav").length).toBe(1);
});

test("Search by name returns the right value", () => {
  expect(func.searchByFName("Rivka")[0].firstName).toBe("Rivka");
});

test("Search by name doesnt return value", () => {
  expect(func.searchByFName("Dorr").length).toBe(0);
});

test("Search by gender returns value", () => {
  expect(func.searchByGender("male").length).toBe(4);
});

test("Search by age returns value", () => {
  expect(func.searchByAgeBT(39).length).toBe(1);
});
