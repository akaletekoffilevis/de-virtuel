const btn = document.getElementById("btnlancer");
const de1 = document.getElementById("de1");
const de2 = document.getElementById("de2");
const somme = document.getElementById("somme");

btn.addEventListener("click", LancerDe);

// ⚀ ⚁ ⚂ ⚃ ⚄ ⚅
let DE = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function LancerDe() {
    let result1 = Math.floor(Math.random() * 6) + 1;
    let result2 = Math.floor(Math.random() * 6) + 1;

    somme.textContent = " " + result1 + " + " + result2 + " = " + (result1 + result2) + " ";

    for (let index = 1; index < 7; index++) {
        if(result1 == index){
            de1.textContent = DE[index-1];
        }

        if (result2 == index) {
            de2.textContent = DE[index-1];
        } 
    }

    // switch (result1) {
    //     case 1:
    //         de1.textContent = DE[0];
    //         break;
    //     case 2:
    //         de1.textContent = DE[1];
    //         break;
    //     case 3:
    //         de1.textContent = DE[2];
    //         break;
    //     case 4:
    //         de1.textContent = DE[3];
    //         break;
    //     case 5:
    //         de1.textContent = DE[4];
    //         break;
    //     case 6:
    //         de1.textContent = DE[5];
    //         break;

    //     default:
    //         de1.textContent = result1;
    //         break;
    // }

    // switch (result2) {
    //     case 1:
    //         de2.textContent = DE[0];
    //         break;
    //     case 2:
    //         de2.textContent = DE[1];
    //         break;
    //     case 3:
    //         de2.textContent = DE[2];
    //         break;
    //     case 4:
    //         de2.textContent = DE[3];
    //         break;
    //     case 5:
    //         de2.textContent = DE[4];
    //         break;
    //     case 6:
    //         de2.textContent = DE[5];
    //         break;

    //     default:
    //         de2.textContent = result2;
    //         break;
    // }
}
