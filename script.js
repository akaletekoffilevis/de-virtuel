const btn = document.getElementById("btnlancer");
const de = document.getElementById("de");

btn.addEventListener("click", LancerDe);

// ⚀ ⚁ ⚂ ⚃ ⚄ ⚅
let DE = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function LancerDe() {
    let result = Math.floor(Math.random() * 6) + 1;

    switch (result) {
        case 1:
            de.textContent = DE[0];
            break;
        case 2:
            de.textContent = DE[1];
            break;
        case 3:
            de.textContent = DE[2];
            break;
        case 4:
            de.textContent = DE[3];
            break;
        case 5:
            de.textContent = DE[4];
            break;
        case 6:
            de.textContent = DE[5];
            break;

        default:
            de.textContent = result;
            break;
    }
}
