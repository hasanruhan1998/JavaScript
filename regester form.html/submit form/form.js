function submitForm(event) {
    event.preventDefault();


    let fName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let   Hobby =document.querySelectorAll('input[name"Hobby"]checked');


    // logic start
    if (fName == '') {
        alert('j  jg fdkfdkl.');
        return;

    }
    else if (fName.length <= 3) {
        alert('fjdskdndvblk');
        return;
    }

    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEx.) {

    }

    // validation
    if(password.length<6 || password.length {

    }





    let outPut = 'Name:' + fName + " \n";
    outPut += 'email:' + email + " \n";
    outPut += 'password:' + password + " \n";








    let newWindow = window.open('', '_blank');
    newWindow.document.write('<pre>' + outPut + '</pre>');
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);