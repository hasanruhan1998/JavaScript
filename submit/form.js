


function submitForm(event) {
    event.preventDefault();



    let rName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let DoB = document.getElementById('DoB').value;












    let outPut = 'Name:' + rName + "\n";
    outPut += 'email :' + email + "\n";
    outPut += 'password:' + password + "\n";
    outPut += 'Gender:' + gender + "\n";






    let newWindow = window.open('', "_blank");
    newWindow.document.write("<pre>" + outPut + '</pre>');

}
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);