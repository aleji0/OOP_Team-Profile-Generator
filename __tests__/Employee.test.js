const Employee = require ("../src/Employee")

test("can create employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object");
});

test("can create employee", () => {
    const employee = new Employee(1)
    expect(employee.id).toBe(1);
});

test("can create employee", () => {
    const employee = new Employee(2, "Alex")
    expect(employee.name).toBe("Alex");
});

test("Gets name through getName method.", () => {
    const testName = "Lane";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
});

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("James", testID);
    expect(employeeInstance.getId()).toBe(testID);
});

test("Can test email through getEmail method.", () => {
    const testEmail = "jamesljenks@gmail.com";
    const employeeInstance = new Employee("James", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("James", 2, "jamesljenks@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
});