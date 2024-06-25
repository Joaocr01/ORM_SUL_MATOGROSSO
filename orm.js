class ORM_SUL_MATOGROSSO {
    #_lista
    #_id
    constructor() {
        if(this.constructor === ORM) {
            throw new Error("Classe ORM não pode ser instanciada")
        }
        this.#_lista = []
        this.#_id = 1
    }

    cadastrar(novosDados) {
        const dados = {id: this.#_id, ...novosDados}
        this.#_lista.push(dados)
        this.#_id = this.#_id + 1
    }

    atualizar(id, dados) {
        const index = this.#_lista.findIndex(a => a.id === id)
        if (index === -1) {
            throw new Error("Não existe dado com esse id")
        } else {
            const novosDados = {id: id, ...dados}
            this.#_lista[index] = novosDados
        }
    }

    deletar(id) {
        const index = this.#_lista.findIndex(a => a.id === id)
        if (index === -1) {
            throw new Error("Não existe dado com esse id")
        } else {
            this.#_lista.splice(index, 1)
        }
    }

    #percorrerLista() {
        return this.#_lista.map(item => {return item})
    }


    get consultar() {
        return this.#percorrerLista()
    }
}
