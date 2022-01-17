const employee = require('./employee');

class intern extends employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = intern;