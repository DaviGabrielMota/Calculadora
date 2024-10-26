var caracter = "";
var calc = "";
var display = document.getElementById("display");

function add(caracter) {
    calc += caracter; 
    display.innerHTML = calc; 
}

function clearDisplay() {
    calc = ""; 
    display.innerHTML = ""; 
}

function calcular() {
    calc = eval(calc)
    display.innerHTML = calc;
}

function clearLastNum() {
    calc = calc.slice(0, -1);
    display.innerHTML = calc;
}