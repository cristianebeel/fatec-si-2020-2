//let messageCount = 0;

document.querySelector("form").onsubmit = function (event) {
  //prevenir o comportamento padrão do navegador
  event.preventDefault();

  const name = document.querySelector("input").value;

  //if (name) o JavaScript já entende que não é vazio

  /*  if (!name && messageCount === 0) {
    // cria um novo elemento de p
    const message = document.createElement("p");
    // adiciona texto na string
    message.textContent = "Por favor, digite um nome!";
    // adicionar uma classe de css
    message.className = "error";
    // coloca o elemento dentro do corpo
    document.body.appendChild(message);
    messageCount++;
  }*/

  /*if (!name) {
    let message = document.querySelector("p");

    if (!message) {
      message.document.createElement("p");
    }

    message.textContent = "Digite um nome, por favor!";
    message.className = "error";
    document.body.appendChild(message);
  }*/

  if (!name) {
    // se a esquerda for válida, não precisa olhar a direita
    const message =
      document.querySelector(".result p") || document.createElement("p");
    message.textContent = "Digite um nome!";
    message.className = "error";
    //document.body.appendChild(message);
    document.querySelector(".result").appendChild(message);
  } else {
    if (document.querySelector(".result p")) {
      document.querySelector(".result p").remove();
    }
    //cria um novo elemento pra registrar o nome na página
    const list =
      document.querySelector(".result ul") || document.createElement("ul");
    const item = document.createElement("li");
    item.textContent = name;
    list.appendChild(item);
    //document.body.appendChild(list);
    document.querySelector(".result").appendChild(list);
  }

  document.querySelector("input").value = "";
  document.querySelector("input").focus();
};
