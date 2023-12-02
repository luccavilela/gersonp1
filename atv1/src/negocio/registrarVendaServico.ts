import Servico from "../modelo/servico";
import Cadastro from "./cadastro";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class RegistrarVendaServico extends Cadastro {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        let valorCpfCliente = this.entrada.receberTexto(`Por favor informe o CPF do cliente que realizou a compra: `);
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === valorCpfCliente);

        if(cliente) {
            let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço vendido: `);
            const servico = this.servicos.find(servico => servico.nome === nomeServico);

            if (servico){
                cliente.registrarVendaServico(servico)
                if (cliente.genero === 'Masculino') {
                    servico.adicionarVendaMasculino()
                }else{
                    servico.adicionarVendaFeminino()
                }

                console.log(`Venda registrada com sucesso para o cliente "${cliente.nome}".`);
            } else {
                console.log(`Serviço "${nomeServico}" não encontrado. `)
            }
        } else {
            console.log(`Cliente com CPF "${valorCpfCliente}" não encontrado.`);
        }
    }
}






