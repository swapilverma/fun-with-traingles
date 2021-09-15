const input = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputResult = document.querySelector("#output");



function isTriangle() {
    const sumOfAngles = calcSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
    // console.log(sumOfAngles)
    if (sumOfAngles === 180) {
        outputResult.innerText = "Yes, the angles form a traingle";
    } else {
        outputResult.innerText = "Oh no!! The angles don't form a traingle";
    }

}

function calcSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;

}

isTriangleBtn.addEventListener("click", isTriangle)