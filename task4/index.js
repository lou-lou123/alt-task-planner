// task form input validation
const formValidate = document.querySelector(".form-validate");

const name = document.querySelector("#nameinput");
const status = document.querySelector("#yourstatus");
const description = document.querySelector("#yourdescription");
const assignedto = document.querySelector("#assignee");
const duedate = document.querySelector("#duedate");

// event listener for click on submit button
formValidate.addEventListener("submit", (event) => {
    // Prevent default action
    event.preventDefault();

    // AssignedTo -> Not Empty and longer than 8 characters
    if (assignedto.value.length >= 8) {
        assignedto.classList.add("is-valid");
        assignedto.classList.remove("is-invalid");
        // store input value into variable - Assignee -> String
        completedForm.assignedto = assignedto.value;
        // error message for incorrect input
    } else {
        assignedto.classList.add("is-invalid");
        assignedto.classList.remove("is-valid");
    }

    // Description -> Not Empty and longer than 15 characters
    if (description.value.length >= 15) {
        description.classList.add("is-valid");
        description.classList.remove("is-invalid");
        // store input value into variable - Description -> String
        completedForm.description = description.value;
        // error message for incorrect input
    } else {
        description.classList.add("is-invalid");
        description.classList.remove("is-valid");
    }

    // Name -> Not Empty and longer than 8 characters
    if (name.value.length >= 8) {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
        // store input value into variable - Name -> String
        completedForm.name = name.value;
        // error message for incorrect input
      } else {
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
      }

});

// set min date as today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.querySelector("#duedate").setAttribute("min", today);
