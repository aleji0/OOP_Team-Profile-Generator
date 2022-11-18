const Manager = require("../src/Manager");
const Employee = require ("../src/Employee")

test("can create employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object");
})

test("can create employee", () => {
    const employee = new Employee(1)
    expect(employee.id).toBe(1);
})

test("can create employee", () => {
    const employee = new Employee(2, "Alex")
    expect(employee.name).toBe("Alex");
})