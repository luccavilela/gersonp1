export default class Servico {
    public nome: string
    public valor: number
    private servicosPrestados: number
    private valorVendas: number
    constructor(nome: string, valor: number, servicosPrestados: number, valorVendas: number) {
        this.nome = nome
        this.valor = valor
        this.servicosPrestados = servicosPrestados
        this.valorVendas = valorVendas
    }

    public get getservicosPrestados(): number{
        return this.servicosPrestados
    }

    public get getvalorVendas(): number {
        return this.valorVendas
    }

    public adicionarVenda(): void {
        this.servicosPrestados += 1;
        this.valorVendas = this.valorVendas + this.valor;
    }


}