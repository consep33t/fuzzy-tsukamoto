document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("multiplication-form");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2);

    resultDiv.textContent = `Result: ${result}`;
  });

  function multiply(a, b) {
    return a * b;
  }
});
