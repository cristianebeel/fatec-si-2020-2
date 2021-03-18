const form = document.getElementById("form");
const field = document.getElementById("field");
const view = document.getElementById("view");
const result = document.getElementById("result");
const numbers = [];

form.onsubmit = function (e) {
  e.preventDefault();

  const num = parseInt(field.value, 10);

  if (isNaN(num)) {
    result.innerText = "Por favor, digite um número!";
    field.focus();
    return;
  }
  result.innerHTML = "";

  numbers.push(num);

  field.value = "";
  field.focus();
};

view.onclick = function () {
  if (numbers.length === 0) {
    result.innerText = "O vetor está vazio!";
    field.focus();
  } else {
    numbers.sort(function (a, b) {
      return b - a;
    });

    result.innerHTML = numbers.join(" ");
  }
};
