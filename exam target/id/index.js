function submitForm(event) {
    event.preventDefault();

    let Name = document.getElementById("name").value;
    let Cont = document.getElementById("cont").value;
    let Remark = document.getElementById("remark").value;
    let Gender = document.querySelector("input[name='hi']:checked");
    let out = document.querySelectorAll("input[name='out']:checked");

    let outValue = [];

    for (let index = 0; index < out.length; index++) {

        outValue.push(outValue[index].value);

    }

    let location = document.getElementById("location").value;




    let outPut = "name:" + Name + '\n';
    outPut += "cont:" + Cont + '\n';
    outPut += "remark:" + Remark + '\n';
    outPut += "hi:" + Gender.value + '\n';
    outPut += "hi:" + outValue + '\n';
    outPut += "location:" + location + '\n';










    let newWindow = window.open('', '_blank');
    newWindow.document.write("<pre>" + outPut + "</pre>");
}

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitForm);