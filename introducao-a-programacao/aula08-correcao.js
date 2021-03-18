/* Adicionando as devidas correções ao meu próprio código */

const form = document.getElementById('form')
const field = document.getElementById('field')
const view = document.getElementById('view')
const result = document.getElementById('result')
const numbers = []

form.onsubmit = function (e) {
  e.preventDefault()

  /* Verifica se o campo é vazio
     Pra mim não faz sentido já que a próxima validação faz isso
     Mas ok */
  if (!field.value) {
    result.innerText = 'Campo obrigatório!'
    field.focus()
    return
  }

  const num = parseInt(field.value, 10)

  if (isNaN(num)) {
    result.innerText = 'Por favor, digite um número!'
    field.focus()
    return
  }
  result.innerHTML = ''

  numbers.push(num)

  field.value = ''
  field.focus()
}

view.onclick = function () {
  if (numbers.length === 0) {
    result.innerText = 'O vetor está vazio!'
    field.focus()
  } else {
    /*numbers.sort(function (a, b) {
      return b - a
      essa subtração dá certo porque a função sort verifica
      se o resultado é posiitvo ou negativo
    })

    (a, b) => b - a
    Arrow function
    Não precisa das chaves se for só uma linha
    Não precisa tbm do return*/

    numbers.sort((a, b) => b - a)
    //numbers.sort((a,b)=>a-b).reverse()

    result.innerHTML = numbers.join(', ')
  }
}

/* programar basedo em eventos:
toda vez que o código dá erro,  */
