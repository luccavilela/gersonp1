import Servico from "../modelo/servico";
import Atualizar from "./atualizar";
import Entrada from "../io/entrada";


export default class AtualizarServico extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public atualizar() {
        let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço a ser atualizado: `);
        const index = this.servicos.findIndex(servico => servico.nome === nomeServico);
        if (index !== -1) {
            let novoNomeServico = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `);
            this.servicos[index].nome = novoNomeServico;
            let novoValorServico = this.entrada.receberNumero(`Por favor informe o novo valor do serviço: `);
            this.servicos[index].valor = novoValorServico;
            console.log(`Produto "${nomeServico}" foi atualizado com sucesso.`);
        } else {
            console.log(`Produto "${nomeServico}" não encontrado.`);
        }
    }
    
}