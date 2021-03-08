let inputWhile = document.querySelector("#input_while");
let inputFor = document.querySelector("#input_for");
input_while.addEventListener("input", changeValueWhile);
input_for.addEventListener("input", changeValueFor);

function changeValueWhile() {
  const result = document.querySelector("#p_while");
  var number = inputWhile.value;
  var sum = 0;
  while (number != 0) {
    sum = sum + (number % 10);
    number = parseInt(number / 10);
  }
  result.textContent = `Výsledek: ${sum}`;
  return false;
}

function changeValueFor() {
  const result = document.querySelector("#p_for");
  var number = inputFor.value;
  let sum = 0;
  let digits = Math.floor(number).toString();
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  result.textContent = `Výsledek: ${sum}`;
  return false;
}
