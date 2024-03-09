
function submitForm(event) {


    event.preventDefault();


    let rname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender=document.querySelector('input[name="gender"]:checked').value;

    let output = "Name:" + rname + "\n";


    output += "Email:" + email + "\n";

    output += "password:" + password + "\n";
    output+= "Gender: " + gender  + "\n";


    let newwindow = window.open("", "_blank");
    newwindow.document.write("<pre>" + output + "</pre>");
}

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitForm);

