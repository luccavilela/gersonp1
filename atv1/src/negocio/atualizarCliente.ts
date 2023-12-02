import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";
import Entrada from "../io/entrada";
import Telefone from "../modelo/telefone";


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
                

            let adicionarTelefone: boolean = this.entrada.receberTexto(`Deseja adicionar um novo telefone? (S/N): `).toUpperCase() === 'S';

            if (adicionarTelefone) {
                const telefones: Telefone[] = [];
                const telefonesDigitados: string[] = [];
                let cadastrarTelefone: boolean;
                do {
                    let ddd: string;
                    let numero: string;
                    do {
                        ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone: `);
                        numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
                        const telefoneString = ddd + numero;
                        if (telefonesDigitados.includes(telefoneString) || this.telefoneExistente(numero)) {
                            console.log(`Erro: Este telefone já foi cadastrado. Informe um telefone diferente.`);
                        } else if (!this.validarTelefone(ddd, numero)) {
                            console.log(`Erro: O telefone deve conter apenas números.`);
                        }
                    } while (telefonesDigitados.includes(ddd + numero) || !this.validarTelefone(ddd, numero) || this.telefoneExistente(numero));
                
                    telefonesDigitados.push(ddd + numero);
                
                    const telefone = new Telefone(ddd, numero);
                    telefones.push(telefone);
                
                    cadastrarTelefone = this.entrada.receberTexto(`Deseja cadastrar outro telefone? (S/N): `).toUpperCase() === 'S';
                } while (cadastrarTelefone);


                this.clientes[index].adicionarTelefones(telefones);
            }



            let excluirTelefone: boolean;

            do {
                excluirTelefone = this.entrada.receberTexto(`Deseja excluir um telefone? (S/N): `).toUpperCase() === 'S';
            
                if (excluirTelefone && this.clientes[index].getTelefones.length > 0) {
                    console.log(`Telefones do cliente:`);
                    this.clientes[index].getTelefones.forEach((telefone, idx) => {
                        console.log(`${idx + 1}. ${telefone.getDdd} ${telefone.getNumero}`);
                    });
            
                    let telefoneParaExcluir: Telefone | undefined;
                    let dddTelefoneExcluir: string;
                    let numeroTelefoneExcluir: string;
            
                    do {
                        dddTelefoneExcluir = this.entrada.receberTexto(`Informe o DDD do telefone a ser excluído: `);
                        numeroTelefoneExcluir = this.entrada.receberTexto(`Informe o número do telefone a ser excluído: `);
            
                        telefoneParaExcluir = this.clientes[index].getTelefones.find(
                            telefone => telefone.getDdd === dddTelefoneExcluir && telefone.getNumero === numeroTelefoneExcluir
                        );
            
                        if (!this.validarTelefone(dddTelefoneExcluir, numeroTelefoneExcluir) || !telefoneParaExcluir) {
                            console.log(`Erro: O número do telefone deve conter apenas números ou não está cadastrado para o cliente.`);
                        }
                    } while (!this.validarTelefone(dddTelefoneExcluir, numeroTelefoneExcluir) || !telefoneParaExcluir);
            
                    // Agora, excluímos o telefone do array apenas se ele pertencer ao cliente
                    const indexTelefoneExcluir = this.clientes[index].getTelefones.indexOf(telefoneParaExcluir);
                    this.clientes[index].getTelefones.splice(indexTelefoneExcluir, 1);
                    console.log(`Telefone excluído com sucesso.`);
                }
            
            } while (excluirTelefone);
            

            console.log(`Cliente "${novoNomeCliente}" foi atualizado com sucesso.`);
                     
        } else {
            console.log(`Cliente com cpf "${valorCpfCliente}" não encontrado.`);
        }
    }


    private validarGenero(genero: string): boolean {
        return genero === 'Masculino' || genero === 'Feminino';
    }

    private validarTelefone(ddd: string, numero: string): boolean {
        const regex = /^\d+$/;
        return regex.test(ddd) && regex.test(numero);
    }
    
    private telefoneExistente(numero: string): boolean {
        return this.clientes.some(cliente => cliente.getTelefones.some(clienteTelefone => clienteTelefone.getNumero === numero));
    }
    
}
