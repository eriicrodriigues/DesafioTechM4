import { Veiculo } from "./Veiculo.js"

export class Carro extends Veiculo {
    constructor(modelo, cor, velocidadeMaxima, velocidade, quantidadeDeRodas = 4) {
        super(modelo, cor, velocidadeMaxima, velocidade, quantidadeDeRodas)
    }

    acelerar() {
        this.velocidade += 7
        if (this.velocidade > this.velocidadeMaxima){
            console.log(`Você atingiu a velocidade máxima do(a) ${this.modelo} que é de ${this.velocidadeMaxima} KM/H!`)
        } else {
            console.log(`A velocidade do(a) ${this.modelo} é de: ${this.velocidade} KM/H`)
        }
    }

    limparParabrisa() {
        console.log(`Limpando o parabrisa do ${this.modelo}!`)
    }

}