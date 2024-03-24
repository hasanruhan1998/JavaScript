let limit=parseInt(prompt('enter not of serise'));
let n=3;
let n1=0; 
let n2=1;
let sum=0;

document.write(n1+'<br>');
document.write(n2+'<br>');

do{
    sum=n1=n2;
    document.write(sum+'<br>');

    n1=n2;
    n2=sum;
    n++;


}
while(n<=limit);