//Loop
/*let x = 0

//Enquanto
while (x <= 10) {
  document.write(`${x}<br>`)
  x++
}

/*
while (prompt('Diga tchau para sair') !== 'tchau') {
  document.write('Oi<br>')
}*/

//Para
/*for (let i = 0; i < 10; i++) {
  console.log(i)
}*/

/* let names = []
console.log(Array.isArray(names))
Verifica se é um array

// Const garante que vai ser sempre um array
const weekDays = [
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábadão',
  'sabadinho'
]

for (let index = 0; i < weekDays.length; i++) {
  const element = weekDays[i]
  // O [i] acessa uma posição específica dentro do array
  console.log(element)
}*/

const form = document.getElementById('form')
const field1 = document.getElementById('field1')
const field2 = document.getElementById('field2')
const result = document.getElementById('result')

form.onsubmit = function (event) {
  event.preventDefault()

  const n1 = parseInt(field1.value, 10)
  const n2 = parseInt(field2.value, 10)

  if (isNaN(n1)) {
    result.innerText = 'Valor inicial não preenchido!'
    result.className = 'error'
    field1.focus()
    return
    //"para" a execução antes de ir pra próxima, aí a mensagem não sobreescreve
  }

  if (isNaN(n2)) {
    result.innerText = 'Valor final não preenchido!'
    result.className = 'error'
    field2.focus()
    return
  }

  if (n1 > n2) {
    result.innerText = 'Valor inicial deve ser menos que final'
    result.className = 'error'
    field1.focus()
    return
  }

  result.innerHTML = ''
  result.innerHTML = ''

  for (let i = n1; i <= n2 && i <= 400; i++) {
    if (i === n2 || i === 400) {
      result.innerHTML += i
    } else {
      result.innerHTML += `${i}, `
    }
  }

  // Podemos resolver com while tbm, mas só se tiver tempo sobrando
  /*let i = n1
  while (i <= n2 && i <= 400) {
    if (i === n2 || i === 400) {
      result.innerHTML += i
    } else {
      result.innerHTML += `${i}, `
    }
  }*/

  field1.value = field2.value = ''
  field1.focus()
}
