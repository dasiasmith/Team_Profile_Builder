// Creates Manager card
const renderManager = teamArr => {
    if (!teamArr) {
        return '';
    }

    return `
    <div class="col-md-4">
    <div class ="card m-4" style="width: 18rem;">
    <div class="card-header" style="background-color: rgb(160, 128, 97); color: white">
    <h3>${teamArr.Manager.name}</h3>
    <p class="card-text">
    <h4><i class="fas fa-mug-hot"> Manager</i></h4>
    </p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamArr.Manager.id}</li>
        <li class="list-group-item"><i class= "fas fa-envelope-square"></i><a href="mailto:" + ${teamArr.Manager.email}> ${teamArr.Manager.email}</a></li>
        <li class="list-group-item">Office Number: ${teamArr.Manager.officeNumber}</li>
    </ul>
    </div>
    </div>`;
};

// Creates Engineer card
const renderEngineer = teamArr => {
    if (!teamArr.Engineer) {
        return '';
    }else {
        let html = '';
        for (let i = 0; i < teamArr.Engineer.length; i++) {
            html += `
            <div class="col-md-4">
            <div class ="card m-4" style="width: 18rem;">
            <div class="card-header" style="background-color: rgb(160, 128, 97); color: white">
            <h3>${teamArr.Engineer[i].name}<h3>
            <p class= "card-text">
            <h4><i class="fas fa-glasses"></i> Engineer</h4>
            </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${teamArr.Engineer[i].id}</li>
                <li class="list-group-item"><i class= "fas fa-envelope-square"></i><a href="mailto:" + ${teamArr.Engineer[i].email}> ${teamArr.Engineer[i].email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${teamArr.Engineer[i].gitHub}" target="_blank"> ${teamArr.Engineer[i].gitHub}</a></li>
            </ul>
            </div>
            </div>`
        }
        return html;
    }
};

// Creates Intern card
const renderIntern = teamArr => {
    if (!teamArr.Intern) {
        return '';
    }else {
        let html = '';
        for (let i = 0; i < teamArr.Intern.length; i++) {
            html += `
            <div class="col-md-4">
            <div class ="card m-4" style="width: 18rem;">
            <div class="card-header" style="background-color: rgb(160, 128, 97); color: white">
            <h3>${teamArr.Intern[i].name}<h3>
            <p class = "card-text">
            <h4><i class="fas fa-user-graduate"> Intern</h4>
            </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${teamArr.Intern[i].id}</li>
                <li class="list-group-item"><i class= "fas fa-envelope-square"></i><a href="mailto:" + ${teamArr.Intern[i].email}> ${teamArr.Intern[i].email}</a></li>
                <li class="list-group-item">School: ${teamArr.Intern[i].school}</li>
            </ul>
            </div>
            </div>`
        }
        return html;
    }
};

// Export array from index.js, formats index.html that will be shown on site
module.exports = (teamArr) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css"/>
        
    <title>My Team</title>
    </head>
    <body>
    <header>
    <nav class="navbar  justify-content-center" style="background-color: rgb(160, 128, 97);">
        <h1 class="navbar-text text-body" style= "color: white;">My Team</h1>
   </nav>
   </header>
   <main class="container ">  
   <div class="row mb-2 justify-content-center"> 
      ${renderManager(teamArr)}  
   </div>     
   <div class="row mb-2 justify-content-center">    
      ${renderEngineer(teamArr)} 
  </div>   
  <div class="row mb-2 justify-content-center">    
      ${renderIntern(teamArr)}   
  </div>                     
    </main>         
     
    </body>
    </html>
    `
};