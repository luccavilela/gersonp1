export default class Produto {
    public nome: string
    public valor: number
    private quantidadeVendas: number
    private quantidadeVendasMasculino: number
    private quantidadeVendasFeminino: number
    private valorVendas: number
    constructor(nome: string, valor: number, quantidadeVendas: number, quantidadeVendasMasculino: number, quantidadeVendasFeminino: number, valorVendas: number) {
        this.nome = nome
        this.valor = valor
        this.quantidadeVendas = quantidadeVendas
        this.quantidadeVendasMasculino = quantidadeVendasMasculino
        this.quantidadeVendasFeminino = quantidadeVendasFeminino
        this.valorVendas = valorVendas
    }

    public get getquantidadeVendas(): number {
        return this.quantidadeVendas
    }

    public get getquantidadeVendasMasculino(): number{
        return this.quantidadeVendasMasculino
    }

    public get getquantidadeVendasFeminino(): number{
        return this.quantidadeVendasFeminino
    }

    public get getvalorVendas(): number {
        return this.valorVendas
    }
    
    public adicionarVenda(quantidade: number): void {
        this.quantidadeVendas += quantidade;
        this.valorVendas = this.valorVendas + quantidade * this.valor;
    }

    public adicionarVendaMasculino(quantidade: number): void {
        this.quantidadeVendasMasculino += quantidade;
    }

    public adicionarVendaFeminino(quantidade: number): void {
        this.quantidadeVendasFeminino += quantidade;
    }
    
}


