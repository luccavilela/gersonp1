import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: 'Masculino' | 'Feminino';
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private quantidadeConsumidos: number
    private valorConsumidos: number
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: 'Masculino' | 'Feminino', quantidadeConsumidos: number, valorConsumidos: number) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.quantidadeConsumidos = quantidadeConsumidos
        this.valorConsumidos = valorConsumidos
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): string[] {
        return this.produtosConsumidos.map(produto => produto.nome);
    }
    public get getServicosConsumidos(): string[] {
        return this.servicosConsumidos.map(servico => servico.nome)
    }
    public get getQuantidadeConsumidos(): number {
        return this.quantidadeConsumidos
    }
    public get getValorConsumidos(): number {
        return this.valorConsumidos
    }


    public registrarVendaProduto(produto: Produto, quantidadeVendida: number): void {
        if (!this.produtosConsumidos.includes(produto)) {
            this.produtosConsumidos.push(produto);
        }
        
        this.quantidadeConsumidos = this.quantidadeConsumidos + quantidadeVendida
        this.valorConsumidos = this.valorConsumidos + produto.valor * quantidadeVendida 
        produto.adicionarVenda(quantidadeVendida);
    }

    public registrarVendaServico(servico: Servico): void{
        if(!this.servicosConsumidos.includes(servico)) {
            this.servicosConsumidos.push(servico);
        }

        this.quantidadeConsumidos = this.quantidadeConsumidos + 1
        this.valorConsumidos = this.valorConsumidos + servico.valor

        servico.adicionarVenda();
    }


    public adicionarRgs(rgs: RG[]): void {
        rgs.forEach((rg) => {
            this.rgs.push(rg);
        });
    }
    
    
}