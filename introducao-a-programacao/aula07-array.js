const form = document.getElementById('form')
const field = document.getElementById('field')
const view = document.getElementById('view')
const result = document.getElementById('result')
const names = []

form.onsubmit = function (event) {
  event.preventDefault()

  if (!field.value) {
    result.innerText = 'Campo obrigatório'
    result.className = 'error'
    field.focus()
    return
  }

  result.innerText = ''
  result.className = ''

  names.push(field.value)

  field.value = ''
  field.focus()
}

view.onclick = function () {
  // Ordem alfabética
  names.sort()

  /* Percorre pelo índice das posições
  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      result.innerHTML += names[i]
    } else {
      result.innerHTML += `${names[i]}, `
    }
  }*/

  /* for "in" facilita percorrer índice por índice
  for (const i in names) {
    if (i === names.length - 1) {
      result.innerHTML += names[i]
    } else {
      result.innerHTML += `${names[i]}, `
    }
  }*/

  /* for "of" é mais fácil ainda, percorre cada item do vetor. Não tem índice
  for (const item of names) {
    result.innerHTML += `${item}, `
  }*/

  result.innerHTML = names.join(', ')

  for (const item of names) {
    if (item === 'Nick') {
      result.innerHTML += '<br>Este é o nome do meu bb!'
      break //interrompe o loop
    }
  }
}

/*const weekDays = [
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábado'
]

for (let i = 0; i < weekDays.length; i++) {
  const element = weekDays[i]
  console.log(element)
}

const names = []

let name = prompt('Digite um nome:')
while (name) {
  names.push(name) //adiciona
  name = prompt('Digite um nome:')
}

console.log(names)
*/
