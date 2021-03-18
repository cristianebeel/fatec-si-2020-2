import Animal from './Animal.js';
console.clear();

const name = document.getElementById('name')
const result = document.getElementById('result')

name.focus()

form.onsubmit = function(e){
    e.preventDefault()

    if(!name.value){
        result.innerText = 'Insira um nome'
        name.focus()
        return
    }
}