import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutosMaisVendidos extends Listagem {
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
    }

    public listar(): void {

        const produtosOrdenados = this.produtos.sort((a, b) => b.getquantidadeVendas - a.getquantidadeVendas);

        console.log(`\nTop 5 produtos mais vendidos:`);

        for (let i = 0; i < Math.min(5, produtosOrdenados.length); i++) {
            const produto = produtosOrdenados[i];
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: R$ ${produto.valor.toFixed(2)}`);
            console.log(`Quantidades vendidas: ` + produto.getquantidadeVendas);
            console.log(`Vendas por público Masculino: ` + produto.getquantidadeVendasMasculino);
            console.log(`Vendas por público Feminino: ` + produto.getquantidadeVendasFeminino);
            console.log(`Valor total de vendas do produto:  R$ ${produto.getvalorVendas.toFixed(2)}`);
            console.log(`--------------------------------------`);
        }
    }
}
