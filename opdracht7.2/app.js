let product = 100;
let budget = prompt ("hoeveel geld heb je?" , 0);

let Resultaat = document.getElementById("Resultaat");
if (product >= budget){
    Resultaat.innerHTML = "Helaas te weinig geld";
    Resultaat.style.color = "red";
}
else {
    Resultaat.innerHTML = "U heeft genoeg geld";
    Resultaat.style.color = "green";
}