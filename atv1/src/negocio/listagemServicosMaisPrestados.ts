import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicosMaisPrestados extends Listagem {
    private servicos: Array<Servico>;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
    }

    public listar(): void {
        const servicosOrdenados = this.servicos.sort((a, b) => b.getservicosPrestados - a.getservicosPrestados);

        console.log(`\nTop 5 serviços mais prestados:`);

        for (let i = 0; i < Math.min(5, servicosOrdenados.length); i++) {
            const servico = servicosOrdenados[i];
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: R$ ${servico.valor.toFixed(2)}`);
            console.log(`Quantidade de vezes em que o serviço foi prestado: ` + servico.getservicosPrestados);
            console.log(`Vendas por público Masculino: ` + servico.getquantidadeVendasMasculino);
            console.log(`Vendas por público Feminino: ` + servico.getquantidadeVendasFeminino);
            console.log(`Valor total de vendas do serviço: R$ ${servico.getvalorVendas.toFixed(2)}`);
            console.log(`--------------------------------------`);
        }
    }
}
