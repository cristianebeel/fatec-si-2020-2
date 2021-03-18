import Person from './aula13-Person.js'
console.clear()

//Funções impuras -> mexem com dados externos
/*let a = 1,
  b = 2

function increment(quantity) {
  a += quantity
  b += quantity
  return [a, b]
}
console.log(increment(5))*/

/*
function multiply(a, b) {
  a.value = a.value * b
  return a
}
//console.log(multiply(2, 3))*/

/*
let x = { value: 10 }
console.log(multiply(x, 3))
console.log('Agora x vale', x)
//o valor de dentro da funçõa passa pro objeto verdadeiro
*/

/* 1. Baseadas em números aleatórios ou imprevisíveis
function randomNumber() {
  return Math.random()
}
console.log(randomNumber())
*/

/* 2. Baseadas em dados não fixos (como datas)
function numberDaysInCurrentMonth() {
  const today = new Date() //recupera a data do pc
  if (today.getMonth() === 1) {
    return 28
  } else {
    switch (today.getMonth()) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        return 31
      default:
        return 30
    }
  }
}
console.log(numberDaysInCurrentMonth())
//essa função é impura porque se tiver em outra data, o resultado pode ser diferente
*/

//Funções puras
/* Function clássica JS
function add(a, b) {
  return a + b
}*/

//Moderna com ES2015
//Utiliza arrow function e não necessita de chaves quando tem um retorno só
/*const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b*/

//console.log(add(2, 3))
//console.log(add(10, 20))
//console.log(subtract(5, 4))

/* É possível inclusive receber funções como parâmetro
 * A função mais genérica é pura a ponto de não saber que as outras existem */
/*const calculate = (fn, a, b) => fn(a, b)
console.log(calculate(add, 2, 3))
console.log(calculate(subtract, 5, 4))/*

/*Podemos fazer "curring" de funções
 * resumindo seus parâmetros */
/*const add2And3 = () => add(2, 3)
const multiply5And8 = () => multiply(5, 8)*/

//Podemos passar um número ilimitado de argumentos usando
//const showConsole = (fn, ...args) => console.log(fn(args))

//Podemos chamar funções passando outras funções como parâmetros
/*setTimeout(showConsole, 1000, add2And3)
setTimeout(showConsole, 1500, multiply5And8)*/

//Este seria um código semi-imperativo equivalente
/*setTimeout(() => {
  const r = add(2, 3)
  console.log(r)
}, 2000)*/

//Exemplo de programação funcional com métodos nativos das Strings
/*const title = 'Tênis Premium Super Conforto Marca XYZ Tamanho 37'
//Programação Funcional curte "function chaining" (encadeamento de funções)
const slug = title
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-') //isso é uma regex
  .replace(/[àáâ]+/g, 'a')
  .replace(/[éê]+/g, 'e')
  .replace(/[í]+/g, 'i')
  .replace(/[óõô]+/g, 'o')
  .replace(/[úü]+/g, 'u')
  .replace(/[ç]+/g, 'c')
console.log(title, slug)*/

/* o /g olha para a string inteira
 * ele significa global
 * sem ele, o replace só funciona na primeira ocorrência */

//Jeito imperativo de resolver: cria um slug da string title
/*
let slug = title.toLowerCase() //não altera a string title, ele RETORNA o resultado
slug = slug.trim() //remove os espaços no início e fim da string
slug = slug.replace(/\s+/g, '-')
console.log(title, slug)
//São puros e não geram efeitos colaterais
*/

const numbers = [5, 8, 1, -3, 0, 20, -35]

/*const sortTwoNumbers = (a, b) => {
  if (a > b) return 1
  else return -1
}
Pode ser substituído por*/

/* Criar uma função que usa operador ternário (?:)
 * para retornar condicionalmente alguma coisa
 * em uma única linha (sem if else) */
/*const orderTwoNumbers = (a, b) => (a > b ? 1 : -1)
console.log(numbers.sort())
console.log(numbers.sort(orderTwoNumbers))*/

/* O sort é um ex típico de prog funcional
 * Infelizmente é uma função mutável. Deveria ser imutável
 * ele muda o array original */

/*const sortedNumbers = numbers.sort(orderTwoNumbers)
console.log(numbers, sortedNumbers)*/

// COMO FAZER SORT DE ARRAY DE FORMA IMUTÁVEL NO JS?

/* Existem outros métodos de array que são mutáveis
 * O método push é um exemplo de efeito colateral */
numbers.push(100)

//Pode filtrar conjuntos de dados facilmente com Programação Funcional
/*const isOdd = (n) => n % 2 !== 0
const isEven = (n) => n % 2 === 0
//O método filter é um exemplo de função imutável dos arrays
const oddNumbers = numbers.filter(isOdd)
const evenNumbers = numbers.filter(isEven)*/
/*
console.log(numbers)
console.log(oddNumbers)
console.log(evenNumbers)*/
//O filter modifica sem perder os dados originais

const students = [
  { ra: 123, name: 'Raquel' },
  { ra: 345, name: 'Marcos' },
  { ra: 567, name: 'Isabelle' },
  { ra: 789, name: 'José Igor' }
]

const onlyNames = (student) => student.name
//recebe um único estudante
const containsE = (name) => name.toLowerCase().indexOf('e') > -1
//o indexOf vai procurar a letra no nome todo
const namesWithE = students.map(onlyNames).filter(containsE)
//o map faz um mapeamento do array, tbm é imutável
console.log(students, namesWithE)

const studentWithEAtName = (student) =>
  student.name.toLowerCase().indexOf('e') > -1
const studentsWithE = students.filter(studentWithEAtName)
console.log(students, studentsWithE)
