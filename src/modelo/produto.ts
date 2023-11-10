export default class Produto {
    public nome: string
    public valor: number
    private quantidadeVendas: number
    private valorVendas: number
    constructor(nome: string, valor: number, quantidadeVendas: number, valorVendas: number) {
        this.nome = nome
        this.valor = valor
        this.quantidadeVendas = quantidadeVendas
        this.valorVendas = valorVendas
    }

    public get getquantidadeVendas(): number {
        return this.quantidadeVendas
    }

    public get getvalorVendas(): number {
        return this.valorVendas
    }
    
    public adicionarVenda(quantidade: number): void {
        this.quantidadeVendas += quantidade;
        this.valorVendas = this.valorVendas + quantidade * this.valor;
    }
    
}


