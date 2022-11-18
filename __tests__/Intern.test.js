const Intern = require("../src/Intern");

test("can set school", () => {
  const Intern = "CU";
  expect(Intern.school).toBe(Intern);
});

test("getRole() returns \"Intern\"", () => {
  const Intern = "Intern";
  expect(Intern.getRole()).toBe(Intern);
});

test("can get school()", () => {
  const Intern = "CU";
  expect(Intern.getSchool()).toBe(Intern);
});
