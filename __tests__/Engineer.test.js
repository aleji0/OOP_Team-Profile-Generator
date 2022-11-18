const Engineer = require ("../src/Engineer")

test("can create engineer", () => {
    const engineer = new Engineer()
    expect(typeof(engineer)).toBe("object");
})

test("creates engineer id", () => {
    const engineer = new Engineer(1)
    expect(engineer.id).toBe(1);
})

test("creates engineer name", () => {
    const engineer = new Engineer(2, "Alex")
    expect(engineer.name).toBe("Alex");
})