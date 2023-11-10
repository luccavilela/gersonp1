export default class Servico {
    public nome: string
    public valor: number
    private servicosPrestados: number
    constructor(nome: string, valor: number, servicosPrestados: number) {
        this.nome = nome
        this.valor = valor
        this.servicosPrestados = servicosPrestados
    }

    public get getservicosPrestados(): number{
        return this.servicosPrestados
    }
}