const manager = require('../lib/manager');

describe('manager render script', () => {
    it("retrieves a manager object", () => {
        const Manager = new manager('Lynn', 0510, 'email', '0000');
        expect(Manager.officeNumber).toEqual(expect.any(Number));
    });
    it("retrieves a GitHub username", () => {
        const Manager = new manager('Lynn', 0510, 'email', '0000');
        expect(Manager.getofficeNum()).toBe(0000);
    });
    it('retrieves the role', () => {
        const Manager = new manager('Lynn', 0510, 'email', 'lynnsmith');
        expect(Manager.getRole()).toBe('Manager');
    });
});