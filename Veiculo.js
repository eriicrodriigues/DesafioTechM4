export class Veiculo {
    #cor;

    constructor(modelo, cor, velocidadeMaxima, velocidade, quantidadeDeRodas) {
        this.modelo = modelo,
        this.#cor = cor,
        this.velocidadeMaxima = velocidadeMaxima,
        this.velocidade = 0,
        this.quantidadeDeRodas = 4
    }

    acelerar() {
        this.velocidade += 5
        if (this.velocidade > this.velocidadeMaxima){
            this.velocidade = this.velocidadeMaxima
            console.log(`Você atingiu a velocidade máxima do(a) ${this.modelo} que é de ${this.velocidadeMaxima} KM/H!`)
        } else {
            console.log(`A velocidade do(a) ${this.modelo} é de: ${this.velocidade} KM/H`)
        }
    }

    frear() {
        this.velocidade -= 13
        if (frear <= this.velocidade) {
            this.velocidade = 0
            console.log(`O ${this.modelo} está parado.`)
        }
    }

    pintar(novaCor) {
        this.#cor = novaCor
        console.log(`A nova cor do(a) ${this.modelo} é: ${novaCor}`)
    }

    get cor() {
        return this.#cor
    }

    set cor(novaCor) {
        this.#cor = novaCor
    }
}