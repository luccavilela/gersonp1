import Produto from "../modelo/produto";
import Atualizar from "./atualizar";
import Entrada from "../io/entrada";


export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public atualizar() {
        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto a ser atualizado: `);
        const index = this.produtos.findIndex(produto => produto.nome === nomeProduto);
        if (index !== -1) {
            let novoNomeProduto = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `);
            this.produtos[index].nome = novoNomeProduto;
            let novoValorProduto = this.entrada.receberNumero(`Por favor informe o novo valor do produto: `);
            this.produtos[index].valor = novoValorProduto
            console.log(`Produto "${nomeProduto}" foi atualizado com sucesso.`);
        } else {
            console.log(`Produto "${nomeProduto}" não encontrado.`);
        }
    }
    
}
