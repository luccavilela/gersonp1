import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: R$ ${servico.valor.toFixed(2)}`);
            console.log(`Quantidade de vezes em que o serviço foi prestado: ` + servico.getservicosPrestados);
            console.log(`--------------------------------------`);
        });
    }
}
