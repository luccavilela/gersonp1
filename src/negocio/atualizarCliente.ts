import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";
import Entrada from "../io/entrada";


export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar() {
        let valorCpfCliente = this.entrada.receberTexto(`Por favor informe o cpf do cliente a ser atualizado: `);
        const index = this.clientes.findIndex(cliente => cliente.getCpf.getValor === valorCpfCliente);
        if (index !== -1) {
            let novoNomeCliente = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `);
          
            let novoNomeSocialCliente = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `);
           
            let genero: 'Masculino' | 'Feminino';
            do {
                genero = this.entrada.receberTexto(`Por favor informe o gênero (Masculino/Feminino): `) as 'Masculino' | 'Feminino';
            } while (!this.validarGenero(genero));

            this.clientes[index].nome = novoNomeCliente;
            this.clientes[index].nomeSocial = novoNomeSocialCliente;
            this.clientes[index].genero = genero;
                
            console.log(`Cliente "${novoNomeCliente}" foi atualizado com sucesso.`);
                     
        } else {
            console.log(`Cliente com cpf "${valorCpfCliente}" não encontrado.`);
        }
    }


    private validarGenero(genero: string): boolean {
        return genero === 'Masculino' || genero === 'Feminino';
    }
    
}
