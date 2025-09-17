class Nota{
    constructor(valor, disciplina) {
        this.valor = valor,
        this.disciplina = disciplina
    }
    toString() {
        return `Nota: ${this.valor} | ${this.disciplina.toString()}`
    }

}
module.exports = Nota