const sides = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#hypotenuse-btn");
const outputResult = document.querySelector("#output");

function calcSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    // console.log(sumOfSquares)
    return sumOfSquares
}

function calculateHypo() {
    const sumOfSquares = calcSumOfSquares(Number(sides[0].value), Number(sides[1].value));

    const lengthOfHypo = (Math.sqrt(sumOfSquares)).toFixed(2)

    outputResult.innerText = "The length of Hypotenuse is " + lengthOfHypo

}

hypoBtn.addEventListener("click", calculateHypo);