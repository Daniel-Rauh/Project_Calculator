let x = ""
function output() {
    document.getElementById("display").innerHTML = x
}
function reset() {
    x = ""
    document.getElementById("display").innerHTML = "<span>.....</span>"
    document.getElementById("last").innerHTML = ""
}
function zero() {
    x += "0"
}
function one() {
    x += "1"
}
function two() {
    x += "2"
}
function three() {
    x += "3"
}
function four() {
    x += "4"
}
function five() {
    x += "5"
}
function six() {
    x += "6"
}
function seven() {
    x += "7"
}
function eight() {
    x += "8"
}
function nine() {
    x += "9"
}
function dot() {
    x += "."
}
function multiply() {
    x += " * "
}
function divide() {
    x += " / "
}
function add() {
    x += " + "
}
function subtract() {
    x += " - "
}
function bracketOne() {
    x += "("
}
function bracketTwo() {
    x += ")"
}
function calculate() {
    document.getElementById("last").innerHTML = x + "="
    x = eval(x).toFixed(2)
}