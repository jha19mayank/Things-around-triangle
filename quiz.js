const quizForm = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

const correctAnswers = [
  "90",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100",
  "30",
  "a+b+c",
  "none",
  "45",
];

submitButton.addEventListener("click", calculateScore);

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  showOutput(score);
}

function showOutput(score) {
  outputBox.innerText = `The score is: ${score}`;
}
