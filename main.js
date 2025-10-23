const numberbtn = document.querySelectorAll(".number");
const displayvalue = document.getElementById("displayvalue");
const operatorbtns = document.querySelectorAll(".operator");
const AC = document.getElementById("AC");
const DE = document.getElementById("DE");
const equals = document.getElementById("equals");
let firstnumber = "";
let secondnumber = "";
let operator = "";
numberbtn.forEach(btn =>{
    displayvalue.textContent = "";
    btn.addEventListener('click',()=>{
        if(operator === "") {
            firstnumber += btn.textContent;
        displayvalue.textContent = firstnumber;
    }else{
        secondnumber += btn.textContent;
        displayvalue.textContent = `${firstnumber} ${operator} ${secondnumber}`;
    }
    })
})

operatorbtns.forEach( btn =>{
    btn.addEventListener('click',()=>{
        if(firstnumber != "") {
            if (secondnumber != 0){
                firstnumber = calculateresult(Number(firstnumber),Number(secondnumber),operator).toString();
                secondnumber = "";
            }
             operator = btn.textContent;
            displayvalue.textContent = firstnumber + " " + operator;
        }
    })
    
})

equals.addEventListener('click',()=>{
    if(firstnumber != "" && secondnumber != "" && operator != ""){
        let result = calculateresult(Number(firstnumber),Number(secondnumber),operator)
        firstnumber = "";
        secondnumber = "";
        operator = "";
        displayvalue.textContent = result;

    }
})
function calculateresult(firstnum, secondnum, optor){
    switch (optor) {
            case "+":
               return firstnum + secondnum;
                break;
            case "-":
               return firstnum - secondnum;
                break;
            case "*":
               return firstnum * secondnum;
                break;
            case "/":
               return (secondnum != 0)? (firstnum / secondnum).toPrecision(9) : "Error" ;
                break;
        
            default:
            displayvalue.textContent = "Error" ;
                break;
        }

}
AC.addEventListener('click',()=>{
    displayvalue.textContent = "";
    firstnumber = "";
        secondnumber = "";
        operator = "";
})
DE.addEventListener('click',()=>{
    let getvalue = displayvalue.textContent;
    let arr = String(getvalue);
    let getarray = Array.from(arr);
    getarray.pop();
    console.log(getarray);
    let finalnumber = Number(getarray.join(""));
    console.log(finalnumber)
    displayvalue.textContent = finalnumber;
})