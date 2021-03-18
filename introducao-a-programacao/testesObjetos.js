/*Função construtora de definição do objeto
function Aluno(nome, sexo, curso) {
  //O this aponta pra instância correta
  this.nome = nome
  this.sexo = sexo
  this.curso = curso
}

//Declaração de objeto através de classes
class Aluno {
  constructor(nome, sexo, curso) {
    this.nome = nome
    this.sexo = sexo
    this.curso = curso
  }

  dizerSeuNome() {
    return `Meu nome é ${this.nome}`
  }

  dizerTchau() {
    return `${this.nome} falou tchau`
  }

  meninoOumenina() {
    if (this.sexo === 'f') return 'É menina menino'
    else if (this.sexo === 'm') return 'É menino menina'
    else return 'É menino menina menino'
  }

  mudançaDeSexo() {
    if (this.sexo === 'f') this.sexo = 'm'
    else this.sexo = 'f'
  }
}
/*
// Criando uma nova instância de um objeto
const aluno1 = new Aluno('Isabelle', 'f', 'Sistemas para Internet')
const aluno2 = new Aluno('Raquel', 'f', 'Sistemas para Internet')

/*
//Objetos literais se torna repetitivos quando usados muitas vezes
const aluno3 = {
  nome: 'Marcos',
  sexo: 'm',
  curso: 'Sistemas para Internet',

  dizerSeuNome() {
    return `Meu nome é ${this.nome}`
  }
}

const aluno4 = {
  nome: 'José Igor',
  sexo: 'm',
  curso: 'Sistemas para Internet',

  dizerSeuNome() {
    return `Meu nome é ${this.nome}`
  }
}

const aluno5 = {
  nome: 'Marcio',
  sexo: 'm',
  curso: 'Sistemas para Internet',

  dizerSeuNome() {
    return `Meu nome é ${this.nome}`
  }
}
*/

//const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5]
//console.log(alunos)
/*
const aluno3 = new Aluno('Marcos', 'm', 'Sistemas para Internet')
const aluno4 = new Aluno('José Igor', 'm', 'Sistemas para Internet')
const aluno5 = new Aluno('Marcio', 'm', 'Sistemas para Internet')

console.clear()

/* o método não funciona dentro de uma função construtora
   Precisa estar dentro da class /
console.log(aluno1.dizerSeuNome())
console.log(aluno1.meninoOumenina())
console.log(aluno2.dizerSeuNome())
console.log(aluno2.meninoOumenina())
console.log(aluno3.dizerSeuNome())
console.log(aluno3.meninoOumenina())
console.log(aluno4.dizerSeuNome())
console.log(aluno4.meninoOumenina())
console.log(aluno5.dizerSeuNome())
console.log(aluno5.meninoOumenina())
console.log(aluno1.dizerTchau())
console.log(aluno2.dizerTchau())

aluno3.mudançaDeSexo()
console.log(aluno3.dizerSeuNome())
console.log(aluno3.meninoOumenina())

/*

//Podemos usar classes para reaproveitar métodos
class Mensagens {
  mostrarAlerta(msg) {
    alert(msg)
  }

  mostrarConfirmação(msg) {
    return window.confirm(msg)
  }
}

const mensagens = new Mensagens()
mensagens.mostrarAlerta('Olá')
mensagens.mostrarConfirmação('Deseja prosseguir?')
*/

/*
class AlunoSI {
  constructor(nome, sexo) {
    this.nome = nome
    this.sexo = sexo
    this.curso = 'Sistemas para Internet'
  }

  dizerSeuNome() {
    return `Meu nome é ${this.nome}`
  }

  dizerTchau() {
    return `${this.nome} falou tchau`
  }

  meninoOumenina() {
    if (this.sexo === 'f') return 'É menina menino'
    else if (this.sexo === 'm') return 'É menino menina'
    else return 'É menino menina menino'
  }

  mudançaDeSexo() {
    if (this.sexo === 'f') this.sexo = 'm'
    else this.sexo = 'f'
  }
}

class AlunoADS {
  constructor(nome, sexo) {
    this.nome = nome
    this.sexo = sexo
    this.curso = 'Análise e Desenvolvimento de Sistema'
  }

  dizerSeuNome() {
    return `Meu nome é ${this.nome}`
  }

  dizerTchau() {
    return `${this.nome} falou tchau`
  }

  meninoOumenina() {
    if (this.sexo === 'f') return 'É menina'
    else if (this.sexo === 'm') return 'É menino'
    else return 'Outro sexo'
  }

  mudançaDeSexo() {
    if (this.sexo === 'f') this.sexo = 'm'
    else this.sexo = 'f'
  }
}*/

//Declaração de objeto através de classe
class Pessoa {
  //Classe genérica
  constructor(nome, sexo) {
    this.nome = nome
    this.sexo = sexo
  }

  dizerSeuNome() {
    return `Meu nome é ${this.nome}`
  }

  dizerTchau() {
    return `${this.nome} falou tchau`
  }

  meninoOumenina() {
    if (this.sexo === 'f') return `${this.nome} é menina`
    else if (this.sexo === 'm') return `${this.nome} é menino`
    else return `${this.nome} não se enquadra nos paradigmas da sociedade`
  }

  mudançaDeSexo() {
    if (this.sexo === 'f') this.sexo = 'm'
    else this.sexo = 'f'
  }
}

//Utilizando HERANÇA de classes
class Aluno extends Pessoa {
  //Classe específica
  constructor(nome, sexo, curso) {
    super(nome, sexo)
    this.curso = curso
  }

  dizerSeuCurso() {
    return `${this.nome} está cursando ${this.curso}`
  }
}

class AlunoSI extends Aluno {
  //É uma "herança múltipla" porque herda de Aluno e de Pessoa
  constructor(nome, sexo) {
    super(nome, sexo, 'Sistemas para Internet')
  }
}

class AlunoADS extends Aluno {
  constructor(nome, sexo) {
    super(nome, sexo, 'Análise e Desenvolvimento de Sistemas')
  }
}

class Professor extends Pessoa {
  reprovarAlunos() {
    return 'Pronto, todo mundo reprovou!'
  }
}

const aluno1 = new AlunoSI('Isabelle', 'f')
const aluno2 = new AlunoSI('Raquel', 'f')
const aluno3 = new AlunoSI('Marcos', 'm')
const aluno4 = new AlunoSI('Jose Igor', 'm')
const aluno5 = new AlunoSI('Marcio', 'm')
const aluno6 = new AlunoADS('Rafael', 'm')

const prof = new Professor('Erick', 'm')

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6]

console.clear()

console.log(aluno1.dizerSeuNome())
console.log(aluno2.dizerSeuCurso())
console.log(aluno3.dizerSeuNome())
console.log(aluno4.dizerSeuNome())
console.log(aluno5.dizerSeuNome())
console.log(aluno6.dizerSeuNome())

prof.sexo = 'x'
console.log(prof.dizerSeuNome())
console.log(prof.meninoOumenina())

aluno3.mudançaDeSexo()
console.log(aluno3.meninoOumenina)

console.log(alunos)

console.log(prof.reprovarAlunos)
