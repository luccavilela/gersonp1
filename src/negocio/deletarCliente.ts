import Cliente from "../modelo/cliente";
import Deletar from "./deletar";
import Entrada from "../io/entrada";

export default class DeletarCliente extends Deletar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public deletar() {
        let nomeCliente = this.entrada.receberTexto(`Por favor informe o nome do cliente a ser deletado: `)
        const index = this.clientes.findIndex(produto => produto.nome === nomeCliente);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente "${nomeCliente}" foi excluído com sucesso.`);
        } else {
            console.log(`Cliente "${nomeCliente}" não encontrado.`);
        }
    }
}
