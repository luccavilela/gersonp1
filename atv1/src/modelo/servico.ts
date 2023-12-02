export default class Servico {
    public nome: string
    public valor: number
    private servicosPrestados: number
    private quantidadeVendasMasculino: number
    private quantidadeVendasFeminino: number
    private valorVendas: number
    constructor(nome: string, valor: number, servicosPrestados: number, quantidadeVendasMasculino: number, quantidadeVendasFeminino: number, valorVendas: number) {
        this.nome = nome
        this.valor = valor
        this.servicosPrestados = servicosPrestados
        this.quantidadeVendasMasculino = quantidadeVendasMasculino
        this.quantidadeVendasFeminino = quantidadeVendasFeminino
        this.valorVendas = valorVendas
    }

    public get getservicosPrestados(): number{
        return this.servicosPrestados
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

    public adicionarVenda(): void {
        this.servicosPrestados += 1;
        this.valorVendas = this.valorVendas + this.valor;
    }

    public adicionarVendaMasculino(): void {
        this.quantidadeVendasMasculino += 1;
    }

    public adicionarVendaFeminino(): void {
        this.quantidadeVendasFeminino += 1;
    }


}