const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github=github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "engineer"
    }
}

module.exports = Engineer;