const intern = require('../lib/intern');

describe('intern render script', () => {
    it("retrieves an intern object", () => {
        const Intern = new intern('Lynn', 0510, 'email', 'Georgia Tech');
        expect(Intern.school).toEqual(expect.any(String));
    });
    it("retrieves intern's school", () => {
        const Intern = new intern('Lynn', 0510, 'email', 'Georgia Tech');
        expect(Intern.getSchool).toBe('Georgia Tech');
    });
    it('retrieves the role', () => {
        const Intern = new intern('Lynn', 0510, 'email', 'Georgia Tech');
        expect(Intern.getRole()).toBe('Intern');
    });
});