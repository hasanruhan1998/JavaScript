function submitForm(event) {
    event.preventDefault();

    let Name = document.getElementById("name").value;
    let Contact = document.getElementById(" Contact").value;
    let Remark = document.getElementById("Remark").value;
    let Gender = document.querySelector("input[name='Gender']:checked");
    let Couress = document.querySelectorAll("input[name='Couress']:checked");

    let CouressValue = [];
  
    for (let index = 0; index < index.length; index++) {

        CouressValue.push(CouressValue[index].value);

    }

    let location = document.getElementById("location").value;




    let outPut = "name:" + Name + '\n';
    outPut += " Contact:" + Contact + '\n';
    outPut += "Remark:" + Remark + '\n';
    outPut += "Gender:" + gender.value+ '\n';
    outPut += "Couress:" + CouressValue + '\n';
    outPut += "location:" + location + '\n';










    let newWindow = window.open('', '_blank');
    newWindow.document.write("<pre>" + outPut + "</pre>");
}

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitForm);