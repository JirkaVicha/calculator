const operators = ['+', '-', '*', '/', '='];

let num1 = prompt("Num 1: ");
let num2 = prompt("Num 2: ");
let plus = prompt("Operator: ");

for (let i = 0; i < operators.length; i++) {
    console.log(operators[i]);
    if (operators[i] === '+') {
        result = parseInt(num1) + parseInt(num2);
    } else if (operators[i] === '-') {
        result = parseInt(num1) - parseInt(num2);
    } else if (operators[i] === '*') {
        result = parseInt(num1) * parseInt(num2);
    } else if (operators[i] === '/') {
        result = parseInt(num1) * parseInt(num2);
    }
}

console.log(result);