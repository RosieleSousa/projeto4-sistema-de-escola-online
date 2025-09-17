class Disciplina {
    constructor(nomeDisciplina, cargaHoraria) {
        this.nomeDisciplina = nomeDisciplina
        this.cargaHoraria = cargaHoraria
    }
    toString(){
        return `nome da disciplina: ${this.nomeDisciplina}; Carga horária: ${this.cargaHoraria}.`
    }
}
module.exports = Disciplina