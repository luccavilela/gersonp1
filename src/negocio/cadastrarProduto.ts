import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastrarProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        let quantidadeVendas = 0;
        let valorVendas = 0;
        let produto = new Produto(nome, valor, quantidadeVendas, valorVendas);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}