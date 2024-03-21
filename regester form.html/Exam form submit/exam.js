

function submitForm(event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value;
    let contact = document.getElementById("contact").value;
    let remark = document.getElementById("remark").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let courses = document.querySelectorAll("input[name='courses']:checked");


    let coursesValue = [];
    for (let i = 0; i < courses.length; i++) {
        coursesValue.push(courses[i].value);

    }
    let location = document.getElementById("location").value;


    let outPut = "fname:" + fname + "\n";
    outPut += "fname:" + contact + "\n";
    outPut += "remark:" + remark + "\n";
    outPut += "gender:" + gender.value + "\n";
    outPut += "courses:" + coursesValue + "\n";
    outPut += "location:" + location + "\n";





    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + outPut + "</pre>")
}
let myForm = document.getElementById("myForm");
myForm.addEventListener('submit', submitForm);