const AC = document.getElementById("AC");
const DE = document.getElementById("DE");
const dot = document.getElementById(".");
const divide = document.getElementById("/");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("*");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("+");
const doubleZero = document.getElementById("00");
const zero = document.getElementById("0");
const equal = document.getElementById("=");
const displayvalue = document.getElementById("displayvalue");

displayvalue.textContent = "";
AC.addEventListener('click',()=>{
    displayvalue.textContent = "";
})
one.addEventListener('click',()=>{
    displayvalue.textContent += "1";
})
two.addEventListener('click',()=>{
    displayvalue.textContent += "2";
})
three.addEventListener('click',()=>{
    displayvalue.textContent += "3";
})
four.addEventListener('click',()=>{
    displayvalue.textContent += "4";
})
five.addEventListener('click',()=>{
    displayvalue.textContent += "5";
})
six.addEventListener('click',()=>{
    displayvalue.textContent += "6";
})
seven.addEventListener('click',()=>{
    displayvalue.textContent += "7";
})
eight.addEventListener('click',()=>{
    displayvalue.textContent += "8";
})
nine.addEventListener('click',()=>{
    displayvalue.textContent += "9";
})
zero.addEventListener('click',()=>{
    displayvalue.textContent += "0";
})
doubleZero.addEventListener('click',()=>{
    displayvalue.textContent += "00";
})
dot.addEventListener('click',()=>{
    displayvalue.textContent += ".";
})
plus.addEventListener('click',()=>{
    displayvalue.textContent += "+";
})
minus.addEventListener('click',()=>{
    displayvalue.textContent += "-";
})
multiply.addEventListener('click',()=>{
    displayvalue.textContent += "*";
})
divide.addEventListener('click',()=>{
    displayvalue.textContent += "/";
})
