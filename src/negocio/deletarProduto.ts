import Produto from "../modelo/produto";
import Deletar from "./deletar";
import Entrada from "../io/entrada";

export default class DeletarProduto extends Deletar{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public deletar() {
        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto a er deletado: `)
        const index = this.produtos.findIndex(produto => produto.nome === nomeProduto);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto "${nomeProduto}" foi excluído com sucesso.`);
        } else {
            console.log(`Produto "${nomeProduto}" não encontrado.`);
        }
    }
}
