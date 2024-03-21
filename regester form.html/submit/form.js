function submitForm(event) {

    event.preventDefault();

    let rName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');
    let course = document.getElementById("course").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;

    let hoobyValue = [];

    for (let index = 0; index < hobby.length; index++) {

        hoobyValue.push(hobby[index].value);

    }





    // Start Validation

    if (rName == '') {
        alert('name can not be less than.');
        return;

    }
    else if (rName.length <= 3) {
        alert('name must kkkkksd');
        return;

    }


    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEx.test(email)) {

    }
    else {
        alert('not are email');
        return;
    }


    if (password.length <= 4 || password.length >= 10) {
        alert('password 4 or more 10 than');
        return;

    }
    if (gender==null) {
        alert('pls must be selected');
        return;
    }

    if(hobby.length==0){
        alert('any one hobby');
        return;

    
    }
    if(course=='Choose...'){
        alert('select any one course');
        return;

    }
    if(dob==''){
        alert('must date');
        return;

    }
    if(address==''){
        alert('your address mustbe');
        returnl;

    }





    // End Validation

    let output = "Name: " + rName + "\n";
    output += "Email: " + email + "\n";
    output += "Password: " + password + "\n";
    output += "Gender: " + gender.value + "\n";
    output += "Hobby: " + hoobyValue + "\n";
    output += "Course: " + course + "\n";
    output += "DoB: " + dob + "\n";
    output += "Address: " + address + "\n";


    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");


}


let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);