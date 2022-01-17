// Require files, initialize variables
const inquirer = require('inquirer');
const fs = require('fs');
const templateHelper = require('./src/templateHelper');

const intern = require('./lib/intern');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');

// Empty team array object
teamArr = {
    Manager: "",
    Engineer: [],
    Intern: []
};

// Have user form team by prompt user questions
var promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter team manager's name:",
                validate: nameInput => {
                    if (nameInput) { // Checks for empty input
                        return true;
                    }else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter manager ID:',
                validate: IDInput => { // Checks inputs
                    if (isNaN(IDInput)) {
                        console.log('\nPlease enter a valid manager ID');
                        return false
                    }else {
                        console.log(IDInput);
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter manager email address:',
                validate: emailInput => {
                    const input = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(emailInput.match(input)) {
                        return true;
                    }else {
                        console.log('\nPlease enter valid email address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter office number:",
                validate: numInput => {
                    if(isNaN(numInput)) {
                        console.log('\nPlease enter a valid office number');
                        return false;
                    }else {
                        return true;
                    }
                }
            },
            {
                type: 'list',
                name: 'employeeType',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', "I don't want to add any team members"]
            }
            
        ])
        // Creates manager profile based on user inputs then runs chooseEmployee function to add additional employees
        .then((answers) => {
            module.exports = answers;
            var primeManager = new manager (answers.name, answers.id, answers.email, answers.officeNumber);
            teamArr.Manager = primeManager;
            return chooseEmployee(answers.employeeType)
        })
        .catch((err) => {
            err? console.err(err) : console.info(`Error updating employees`)
        })
};


const addEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter engineer's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter engineerd's email:",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter engineer's gitHub:",
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any team members"]
        }
    ])
    // Adds new engineer to arrary object
    .then((answers) => {
        var newEngineer = new engineer(answers.name, answers.id, answers.email, answers.gitHub)
        teamArr.Engineer.push(newEngineer)
        return chooseEmployee(answers.employeeType)
    })
    .catch((err) => {
        err? console.err(err) : console.info(`Error updating employees`)
    })
};

const addIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter intern's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter intern's email:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school:",
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any team members"]
        }
    ])
    // Adds new intern to array object
    .then((answers) => {
        var newIntern = new intern(answers.name, answers.id, answers.email, answers.school)
        teamArr.Intern.push(newIntern)
        return chooseEmployee(answers.employeeType)
    })
    .catch((err) => {
        err? console.err(err) : console.info(`Error updating employees`)
    })
};

// Choose employee function based on manager selections
var chooseEmployee = (employeeType) => {
    if(employeeType == 'Engineer') {
        addEngineer();
        return
    }else if (employeeType == 'Intern') {
        addIntern();
        return;
    } else {
        renderTeam();
        return;
    }
}

// Uses html helper function to write html file that will appear on webpage
function renderTeam() {
    fs.writeFileSync('./dist/index.html', templateHelper(teamArr), 'utf-8');
    copyFile();
}

// Creates a copy css file that will style webpage
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }else {
                resolve({
                    ok: true,
                    message: 'Copy created.'
                });
            };
        });
    });
};

// Initializes prompt user questions
var init = () => {
    promptUser();
}

init();