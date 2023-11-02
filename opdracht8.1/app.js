function add() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + sum;
}

function minus() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    var diff = parseFloat(num1) - parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + diff;
}

function multiply() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    var product = parseFloat(num1) * parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + product;
}

function divide() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    var quotient = parseFloat(num1) / parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + quotient;
    
}
