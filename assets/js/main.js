let x = ""
function output() {
    if (x.indexOf("0") == 0) {
        document.getElementById("display").innerHTML = "Please don't start with a 0"
    } else {
        document.getElementById("display").innerHTML = x
    }
}
function reset() {
    x = ""
    document.getElementById("display").innerHTML = "<span>.....</span>"
    document.getElementById("last").innerHTML = ""
    document.getElementById("calc").style.backgroundColor = "#39811D"
    document.getElementById("calc").style.pointerEvents = "auto"
}
function zero() {
    x += "0"
    if (x.indexOf("0") == 0) {
        document.getElementById("calc").style.backgroundColor = "#333"
        document.getElementById("calc").style.pointerEvents = "none"
    }
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
    document.getElementById("last").innerHTML = x + " ="
    x = Number(eval(x).toFixed(2))
    document.getElementById("display").innerHTML = x
    console.log(x)
    console.log (eval(x).toFixed(2))
}