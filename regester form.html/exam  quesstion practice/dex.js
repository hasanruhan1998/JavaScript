
function submitForm(event) {
    event.preventDefault();

    let Name = document.getElementById("Name").value;
    let Contact = document.getElementById("Contact").value;
    let Rema = document.getElementById("Remark").value;
    let Gender = document.querySelector("input[name=Gender]:checked");
    let Couress = document.querySelectorAll("input[name=Couress]:checked");

    let CouressValue=[];
    for(let i=0;i<Couress.length;i++){
        CouressValue.push(Couress[i].value)

    }
    let Location = document.getElementById("Location").value;




    let outPut = "Name:" + Name + "\n";
    outPut += "Contact:" + Contact + "\n";
    outPut += "Remark:" + Rema + "\n";
    outPut += "Gender:" + Gender.value + "\n";
    outPut += "Couress:" + CouressValue + "\n";
    outPut += "Location:" + Location + "\n";


    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + outPut + "</pre>");


}
let newWindow = document.getElementById("myFrom");
myForm.addEventListener("submit", submitForm);