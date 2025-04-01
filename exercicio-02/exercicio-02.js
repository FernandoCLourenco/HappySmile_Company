let num1 = prompt("Informe o primeiro numero")

let num2 = prompt("Informe o segundo numero")

let operador = ("Informe um operador matemático : + - / *0")

if (operador == "+") {
    let resultado = parseFloat(num1) + parseFloat(num2)
    alert(resultado)
} else if (operador == "-") {
    let resultado = parseFloat(num1) - parseFloat(num2)
    alert(resultado)
} else if (operador == "*") {
    let resultado = num1 * num2
    alert(resultado)
} else if (operador == "/") {
    let resultado = num1 / num2
    alert(resultado)
}