import Servico from "../modelo/servico";
import Deletar from "./deletar";
import Entrada from "../io/entrada";

export default class DeletarServico extends Deletar{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public deletar() {
        let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço a ser deletado: `)
        const index = this.servicos.findIndex(servico => servico.nome === nomeServico);
        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log(`Serviço "${nomeServico}" foi excluído com sucesso.`);
        } else {
            console.log(`Serviço "${nomeServico}" não encontrado.`);
        }
    }
}
