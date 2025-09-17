const Usuario = require('./Usuario')

class Aluno extends Usuario {
    constructor(nome, idade){
        super(nome, idade)
        this.notas = []

    }
    adicionarNota(nota) {
        this.notas.push(nota)
    }
    listarNotas() {
        return this.notas.length > 0 
            ? this.notas.map(n => n.toString()).join('\n')
            : "Nenhuma nota cadastrada"
    }
    acessoPainel() {
        return 'Painel do Aluno: consultar notas e disciplinas'
    }
}

module.exports = Aluno