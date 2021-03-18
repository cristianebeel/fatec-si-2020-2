const name = document.getElementById('name')
const email = document.getElementById('email')
const opinion = document.getElementById('opinion')
const form = document.getElementById('form')
const view = document.getElementById('view')
const result = document.getElementById('result')

class AvaliaçãoDoCurso {
  constructor(nomeCompleto, email, opinião) {
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.opinião = opinião
  }
}

function validarCampo(campo) {
  if (!campo.value) {
    result.innerHTML = 'Campo obrigatório não preenchido!'
    result.className = 'error'
    campo.focus()
    return false
  } else {
    return true
  }
}

const registros = []

name.focus()

form.onsubmit = function (e) {
  e.preventDefault()

  if (!validarCampo(name) || !validarCampo(email) || !validarCampo(opinion))
    return

  /* o nome oficial pra esses identificadores
  é propriedades ou atributos /
  const dados = {
    nomeCompleto: name.value,
    email: email.value,
    opiniao: opinion.value
  }

  registros.push(dados)
*/

  //Acrescentar usano instância da classe
  registros.push(new AvaliaçãoDoCurso(name.value, email.value, opinion.value))

  name.value = email.value = opinion.value = ''
  result.innerHTML = ''
  name.focus()
}

view.onclick = function () {
  result.innerHTML = ''
  result.className = ''

  for (const dados of registros) {
    result.innerHTML += `
      <tr>
        <td>${dados.nomeCompleto}</td>
        <td>${dados.email}</td>
        <td>${dados.opinião}</td>
      </tr>
    `
  }
}
