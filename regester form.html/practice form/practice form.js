

function submitForm(event) {
    event.preventDefault();

    let rName = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;
    let cellnumber = document.getElementById("cellnumber").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let hobby = document.querySelectorAll("input[name='hobby']:checked");

    let hobbyValue = [];
for(let i=0; i<hobby.length; i++){
    hobbyValue.push(hobby[i].value);

}
let address = document.getElementById("address").value;
let select  = document.getElementById("select").value;
let date  = document.getElementById("date").value;



    let outPut = "Name:" + rName + '\n';
    outPut += "email:" + email + '\n';
    outPut += "password:" + password + '\n';
    outPut += "cellnumber:" + cellnumber + '\n';
    outPut += "gender:" + gender + '\n';
    outPut += "hobby:" + hobbyValue + '\n';
    outPut += "address:" +address + '\n';
    outPut += "date:" +date  + '\n';





    let newWindow = window.open("", '_blank');
    newWindow.document.write('<pre>' + outPut + '<pre>');
}
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitForm);            





