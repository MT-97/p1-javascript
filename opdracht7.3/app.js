let getal = 0;
let getalp = document.getElementById("Getal");

function Getaloptellen() {
    if (getal >= 10) {
        getal = 0;
    }
    else {
        getal++;
    }
    getalp.innerHTML = getal.toString();
}