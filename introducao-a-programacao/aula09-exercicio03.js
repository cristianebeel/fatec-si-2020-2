const form = document.getElementById('form')
const name = document.getElementById('name')
const field = document.getElementById('age')
const gender = document.getElementById('gender')
const view1 = document.getElementById('view1')
const view2 = document.getElementById('view2')
const result = document.getElementById('result')
const fpode = []
const fdeve = []
const mpode = []
const mdeve = []

form.onsubmit = function (e) {
  e.preventDefault()

  //Validações
  if (!name.value) {
    result.innerText = 'Insira um nome'
    result.className = 'error'
    name.focus()
    return
  }

  if (!field.value) {
    result.innerText = 'Insira a idade'
    result.className = 'error'
    field.focus()
    return
  }

  const age = parseInt(field.value, 10)
  if (isNaN(age)) {
    result.innerText = 'Por favor, digite um número'
    result.className = 'error'
    field.focus()
    return
  }

  if (!gender.value) {
    result.innerText = 'Selecione o sexo'
    result.className = 'error'
    return
  }

  result.innerHTML = ''

  //Sexo Feminino
  if (gender.value === 'f') {
    if (age === 16 || age === 17 || age > 70) {
      fpode.push(name.value)
      name.value = ''
      field.value = ''
      gender.value = ''
    } else if (age >= 18 && age <= 70) {
      fdeve.push(name.value)
      name.value = ''
      field.value = ''
      gender.value = ''
    } else {
      result.innerText = 'Não é permitido votar ainda'
      name.value = ''
      field.value = ''
      gender.value = ''
    }
  }

  //Sexo Masculino
  if (gender.value === 'm') {
    if (age === 16 || age === 17 || age > 70) {
      mpode.push(name.value)
      name.value = ''
      field.value = ''
      gender.value = ''
    } else if (age >= 18 && age <= 70) {
      mdeve.push(name.value)
      name.value = ''
      field.value = ''
      gender.value = ''
    } else {
      result.innerText = 'Não é permitido votar ainda'
      name.value = ''
      field.value = ''
      gender.value = ''
    }
  }
}

//Mostra todas as pessoas que podem votar
view1.onclick = function () {
  result.innerText = ''
  if (fpode.length === 0 && mpode.length === 0)
    result.innerText =
      'Não há pessoas cadastradas que podem voluntariamente votar'

  if (fpode.length)
    result.innerHTML = `<span style="color: blue;">${fpode.join(
      ', '
    )}<span><br>`

  if (mpode.length)
    result.innerHTML += `<span style="color: deeppink;">${mpode.join(
      ', '
    )}<span>`
}

//Mostra todas as pessoas que devem votar
view2.onclick = function () {
  result.innerText = ''
  if (fdeve.length === 0 && mdeve.length === 0)
    result.innerText =
      'Não há pessoas cadastradas que devem obrigatoriamente votar'

  if (fdeve.length)
    result.innerHTML = `<span style="color: blue;">${fdeve.join(
      ', '
    )}<span><br>`

  if (mdeve.length)
    result.innerHTML += `<span style="color: deeppink;">${mdeve.join(
      ', '
    )}<span>`
}
