const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-ans-btn");
const outputResult = document.querySelector("#output");

const correctAnswer = ["90", "right angled", "equilateral","a+b+c"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswer[index]) {
            score += 1;
        }
        index += 1;
    }
    outputResult.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);