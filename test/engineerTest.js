const engineer = require('../lib/engineer');

describe('engineer render script', () => {
    it("retrieves an engineer object", () => {
        const Engineer = new engineer('Lynn', 0510, 'email', 'lynnsmith');
        expect(Engineer.gitHub).toEqual(expect.any(String));
    });
    it("retrieves a GitHub username", () => {
        const Engineer = new engineer('Lynn', 0510, 'email', 'lynnsmith');
        expect(Engineer.getgitHub()).toBe('lynnsmith');
    });
    it('retrieves the role', () => {
        const Engineer = new engineer('Lynn', 0510, 'email', 'lynnsmith');
        expect(Engineer.getRole()).toBe('Engineer');
    });
});          