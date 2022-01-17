const employee = require('../lib/employee');

describe('employee render script', () => {
    it('Creates an object for each employee', () => {
        const Employee = new employee('Lynn', 0510, 'email');
        expect(Employee.name).toEqual(expect.any(String));
        expect(Employee.id).toEqual(expect.any(Number));
        expect(Employee.email).toEqual(expect.any(String));
    });
    it('retrieves a name', () => {
        const Employee = new employee('Lynn', 0510, 'email');
        expect(Employee.getName()).toEqual('Lynn');
    });
    it('retrieves an ID', () => {
        const Employee = new employee('Lynn', 0510, 'email');
        expect(Employee.getId()).toEqual(0510);
    });
    it('retrieves an email', () => {
        const Employee = new employee('Lynn', 0510, 'email');
        expect(Employee.getEmail()).toEqual('email');
    });
    it("retrieves employee's role", () => {
        const Employee = new employee('Lynn', 0510, 'email');
        expect(Employee.getRole()).toEqual('Employee');
    });
});