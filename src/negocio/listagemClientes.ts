import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            const rgs = cliente.getRgs;
            if (rgs.length > 0) {
                console.log(`RGs: `);
                rgs.forEach(rg => {
                    console.log(`RG "${rg.getValor}" `);
                });
            }
            console.log(`Gênero: ` + cliente.genero);
            console.log(`Produtos comprados: ` + cliente.getProdutosConsumidos)
            console.log(`Serviços comprados: ` + cliente.getServicosConsumidos)
            console.log(`Quantidade de serviços ou produtos consumidos: ` + cliente.getQuantidadeConsumidos)
            console.log(`Valor gasto: R$ ` + cliente.getValorConsumidos.toFixed(2))
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}