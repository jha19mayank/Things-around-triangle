const sides = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitButton.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const hypotenuse = Math.sqrt(sumOfSquares);
  outputBox.innerText = `The length of hypotenuse is ${hypotenuse.toFixed(2)}`;
}

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
