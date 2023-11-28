import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutosMaisConsumidosPorGenero extends Listagem {
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
    }

    public listar(): void {

        let maisVendidoMasculino: Produto | undefined;
        let maisVendidoFeminino: Produto | undefined;
        let quantidadeVendasMasculino: number = 0;
        let quantidadeVendasFeminino: number = 0;

        this.produtos.forEach((produto) => {
            if (produto.getquantidadeVendasMasculino > quantidadeVendasMasculino) {
                quantidadeVendasMasculino = produto.getquantidadeVendasMasculino;
                maisVendidoMasculino = produto;
            }

            if (produto.getquantidadeVendasFeminino > quantidadeVendasFeminino) {
                quantidadeVendasFeminino = produto.getquantidadeVendasFeminino;
                maisVendidoFeminino = produto;
            }
        });

        console.log(`\nProduto mais vendido por gênero:`);
        console.log(`Masculino: ${maisVendidoMasculino ? maisVendidoMasculino.nome : 'Nenhum produto vendido ainda para este gênero'}`);
        console.log(`Feminino: ${maisVendidoFeminino ? maisVendidoFeminino.nome : 'Nenhum produto vendido ainda para este gênero'}`);
    }
}
