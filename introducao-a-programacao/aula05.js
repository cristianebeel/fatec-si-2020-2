const form = document.getElementById("form");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const message = document.getElementById("message");

n1.focus();

form.onsubmit = function (event) {
  event.preventDefault();

  //Média Final = (soma das notas) / qtd de notas
  const a = n1.value;
  const b = n2.value;
  const mf = (parseFloat(a) + parseFloat(b)) / 2;

  if (isNaN(mf)) {
    message.innerText = `Não deu para calcular isso aí não.`;
    message.className = "error";
  } else {
    message.innerHTML = `Sua média final é: <b>${mf}</b>`;
    message.className = "";

    if (mf < 6) {
      message.innerHTML += `<br>Eita, você foi <b>não passou(a)</b>!`;
    } else if (mf > 6) {
      message.innerHTML += `<br>Viva, você <b>passou</b>!`;
    } else {
      message.innerHTML += `<br>Nossa, você conseguiu <b>raspando</b>!`;
    }
  }

  n1.value = n2.value = "";
  n1.focus();
};
