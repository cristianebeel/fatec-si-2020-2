import { default as Person } from './aula13-Person.js'

const name = document.getElementById('name')
const email = document.getElementById('email')
const birth = document.getElementById('birth')
const form = document.getElementById('form')
const view = document.getElementById('view')
const result = document.getElementById('result')
const people = []

name.focus()

form.addEventListener('submit', (event) => {
  event.preventDefault()

  //TODO: Validações do formulário ainda não foram feitas
  const person = new Person(name.value, email.value, birth.value)
  people.push(person)

  name.value = email.value = birth.value = ''
  name.focus()

  result.innerHTML = ''
  result.className = ''
})

view.onclick = function () {
  let content = ''

  for (const person of people) {
    content += `
    <tr>
      <td>${person.name}</td>
      <td>${person.email}</td>
      <td>${person.birth}</td>
    </tr>`
  }

  result.className = ''
  result.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Nascimento</th>
      </tr>
    </thead>
    <tbody>
    ${content}
    </tbody>`
}
