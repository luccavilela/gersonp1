import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Listagem from "./listagem";

export default class ListagemClientesPorGenero extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.entrada = new Entrada()
        this.clientes = clientes
    }
    public listar(): void {
        let genero: 'Masculino' | 'Feminino';
        do {
            genero = this.entrada.receberTexto(`Por favor informe o gênero (Masculino/Feminino): `) as 'Masculino' | 'Feminino';
        } while (!this.validarGenero(genero));
        
        const listaClientesPorGenero = this.clientes.filter(cliente => cliente.genero === genero);
    
        if (listaClientesPorGenero.length === 0) {
            console.log(`Nenhum cliente do gênero encontrado.`);
        } else {
            console.log(`\nLista de clientes por gênero:`);
            listaClientesPorGenero.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Gênero: ` + cliente.genero);
                console.log(`Produtos comprados: ` + cliente.getProdutosConsumidos)
                console.log(`--------------------------------------`);
            });
        }
 
        console.log(`\n`);
    }
    
    private validarGenero(genero: string): boolean {
        return genero === 'Masculino' || genero === 'Feminino';
    }
    
}