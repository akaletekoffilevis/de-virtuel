const btn = document.getElementById("btnlancer");
const de = document.getElementById("de");

function LancerDe(){
    let result = Math.floor(Math.random()*6) + 1;
    de.textContent = result;
}

btn.addEventListener("click", LancerDe);