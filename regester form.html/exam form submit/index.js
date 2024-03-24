
function submitForm(event){
    event.preventDefault();



let Name =document.getElementById("Name").value;
let gender= document.querySelector("input[name='gender']:checked");
let Couress= document.querySelectorAll("input[name='Couress']:checked");

let CouressValue=[];
for(let i=0;i<Couress.length;i++){
    CouressValue.push(Couress[i].value)
}
let Remark =document.getElementById("Remark").value;
let Location=document.getElementById("Location").value;

let outPut = "Name:"+Name+"\n";
 outPut += "gender:"+gender.value+"\n";
 outPut += "Couress:"+CouressValue+"\n";
 outPut += "Remark:"+Remark+"\n";
 outPut += "Location:"+Location+"\n";


let newWindow =window.open("","_blank");
newWindow.document.write("<pre>" +outPut +"</pre>");
}
let myForm=document.getElementById("myForm");
myForm.addEventListener('submit',submitForm);