const sides = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitButton.addEventListener("click", outputArea);

function outputArea() {
  const a = Number(sides[0].value);
  const b = Number(sides[1].value);
  const c = Number(sides[2].value);
  const s = calculateSemiPerimeter(a, b, c);
  const area = calculateAreaOfTriangle(s, a, b, c);
  outputBox.innerText = `Area of a triangle using heron's formula is ${area.toFixed(
    2
  )} units²`;
}

function calculateSemiPerimeter(a, b, c) {
  const semiPerimeter = (a + b + c) / 2;
  return semiPerimeter;
}

function calculateAreaOfTriangle(s, a, b, c) {
  const triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return triangleArea;
}
