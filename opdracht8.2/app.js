function add() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    
    if (num1 <= 0 || num2 <= 0) {
        alert("Het getal is te laag");
        return;
    }
    
    var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + sum;
}

function minus() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    
    if (num1 <= 0 || num2 <= 0) {
        alert("Het getal is te laag");
        return;
    }
    
    var diff = parseFloat(num1) - parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + diff;
}

function multiply() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    
    if (num1 <= 0 || num2 <= 0) {
        alert("Het getal is te laag");
        return;
    }
    
    var product = parseFloat(num1) * parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + product;
}

function divide() {
    var num1 = document.getElementById('Getal1').value;
    var num2 = document.getElementById('Getal2').value;
    
    if (num1 <= 0 || num2 <= 0) {
        alert("Het getal is te laag");
        return;
    }
    var quotient = parseFloat(num1) / parseFloat(num2);
    document.getElementById('result').innerHTML = "het antwoord is: " + quotient;
    

    }