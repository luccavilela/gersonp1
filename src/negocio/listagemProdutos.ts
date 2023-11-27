import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: R$ ${produto.valor.toFixed(2)}`);
            console.log(`Quantidades vendidas: ` + produto.getquantidadeVendas);
            console.log(`Vendas por público Masculino: ` + produto.getquantidadeVendasMasculino)
            console.log(`Vendas por público Feminino: ` + produto.getquantidadeVendasFeminino)
            console.log(`Valor total de vendas do produto:  R$ ${produto.getvalorVendas.toFixed(2)}`)
            console.log(`--------------------------------------`);
        });
    }
}

