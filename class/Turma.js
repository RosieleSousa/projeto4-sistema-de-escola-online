class Turma {
    constructor(nome) {
        this.nome = nome
        this.alunos = []
        this.disciplinas = []
    }
    adicionarAluno(aluno){
        this.alunos.push(aluno)
    }
    adicionarDisciplina(disciplina){
        this.disciplinas.push(disciplina)
    }
    toString() {
        return `Turma: ${this.nome}, Alunos: ${this.alunos.length}, Disciplinas: ${this.disciplinas.length}`
    }
}
module.exports = Turma