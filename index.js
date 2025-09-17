const Usuario = require('./class/Usuario')
const Aluno = require('./class/Aluno')
const Professor = require('./class/Professor')
const Coordenador = require('./class/Coordenador')
const Disciplina = require('./class/Disciplina')
const Turma = require('./class/Turma')
const Nota = require('./class/Nota')


const usuario = new Usuario('Ren', 15)
const aluno = new Aluno('Ryo', 16)
const professor = new Professor('Samuel', 23)
const coodernador = new Coordenador('Valdonis', 33)
const poo = new Disciplina('Programação orientada a objetos', 80)
const notaPoo = new Nota(8.5, poo)
const turma = new Turma('2ºB')

aluno.adicionarNota(notaPoo)
turma.adicionarAluno(aluno)
turma.adicionarDisciplina(poo)

usuario.acessoPainel()
console.log(aluno.acessoPainel())
console.log(`
    Nome do aluno: ${aluno.nome}
    Idade do aluno: ${aluno.idade}
    Turma em que o aluno estuda: ${turma.nome}
    Notas do aluno:
    ${aluno.listarNotas()}
`)
    console.log('========================================')

console.log(professor.acessoPainel())
console.log(`
    Nome do Professor: ${professor.nome}
    Idade do Professor: ${professor.idade}
    Turma de Ensino : ${turma.nome}
    `)

console.log('========================================')

console.log(coodernador.acessoPainel())
console.log(`
    Nome do Coordenador: ${coodernador.nome}
    Idade do Coordenador: ${coodernador.idade}
    `)