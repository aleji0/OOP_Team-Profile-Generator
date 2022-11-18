const Employee = require("../src/Employee");

test("can create employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("can set name", () => {
  const testValue = ("Lane");
  const e = new Employee(testValue);
  expect(e.name).toBe(testValue);
});

test("can set id", () => {
  const testValue = 100;
  const e = new Employee(100, testValue);
  expect(e.id).toBe(testValue);
});

test("can set email", () => {
  const testValue = "woohootesters@dead.com";
  const e = new Employee("Egg Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Lane";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = "Egg Foo";
  const e = new Employee("Egg Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "woohootesters@dead.com";
  const e = new Employee("Egg Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "employee";
  const e = new Employee("Lane", 1, "woohootesters@dead.com");
  expect(e.getRole()).toBe(testValue);
});
