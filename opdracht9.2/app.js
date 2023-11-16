//  met getEllementById
var openEyes = document.getElementById("openedface");
var closedEyes = document.getElementById("closedface");

openEyes.onclick = function(){
    openEyes.style.display = "none";
    closedEyes.style.display = "block";
}

closedEyes.onclick = function(){
    openEyes.style.display = "block";
    closedEyes.style.display = "none";
}