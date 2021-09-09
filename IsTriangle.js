const angleInput = document.querySelectorAll(".angle-input");
const outputBox = document.querySelector("#output-box");
const checkButton = document.querySelector("#check-btn");

checkButton.addEventListener("click", isTriangle);

function isTriangle() {
  a1 = Number(angleInput[0].value);
  a2 = Number(angleInput[1].value);
  a3 = Number(angleInput[2].value);

  const sumOfAngles = calculateSumOfAngles(a1, a2, a3);

  if ((a1 !== 0) & (a2 !== 0) & (a3 !== 0)) {
    if (sumOfAngles === 180) {
      showOutput("Yay, the angles form a triangle!");
    } else {
      showOutput("Oh Oh! The angle doesn't form a triangle");
    }
  } else {
    showOutput("Input all the values");
  }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function showOutput(message) {
  outputBox.innerText = message;
}
