function submitForm(event) {
    event.preventDefault();


    let rname = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remark = document.getElementById('remark').value;
    let gender = document.querySelector('input[name="gender"]:checked');




    let outPut = "Name: " + rname + "\n";
    outPut += "contact:" + contact + "\n";
    outPut += "remarkt:" + remark + "\n";
    outPut += "gendert:" + gender.value + "\n";






    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + outPut + "<pre>");

}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);