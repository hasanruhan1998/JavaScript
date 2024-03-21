function submitForm(event) {
    event.preventDefault();





let fName =document.getElementById('name').value;
let email =document.getElementById('email').value;
let Password =document.getElementById('Password').value;





let outPut = 'Name:' + fName + '\n';
 outPut += 'Name:' + email + '\n';
 outPut += 'Name:' + Password + '\n';










let newWindow=window.open('', '_blank');
newWindow.document.write('<pre>' + '</pre>');
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);