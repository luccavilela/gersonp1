import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        let valor: string;
        do {
            valor = this.entrada.receberTexto(`Por favor informe o número do cpf (11 dígitos): `);
        } while (!this.validarCPF(valor));

        let data: string;
        do {
            data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        } while (!this.validarData(data));

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)

        let cpf = new CPF(valor, dataEmissao);

        let genero: 'Masculino' | 'Feminino';
        do {
            genero = this.entrada.receberTexto(`Por favor informe o gênero (Masculino/Feminino): `) as 'Masculino' | 'Feminino';
        } while (!this.validarGenero(genero));

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)`);
    }

    private validarCPF(cpf: string): boolean {
        const regex = /^[0-9]{11}$/;
        return regex.test(cpf);
    }

    private validarGenero(genero: string): boolean {
        return genero === 'Masculino' || genero === 'Feminino';
    }

    private validarData(data: string): boolean {
   
        const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    
        if (!regex.test(data)) {
            console.log('Formato de data inválido. Utilize o padrão dd/mm/yyyy.');
            return false;
        }
    
     
        let partesData = data.split('/');
        let dia = parseInt(partesData[0], 10);
        let mes = parseInt(partesData[1], 10);
        let ano = parseInt(partesData[2], 10);
    
        if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
            console.log('Data inválida. Certifique-se de inserir números válidos para dia, mês e ano.');
            return false;
        }
    
        
        if (mes < 1 || mes > 12) {
            console.log('Mês inválido. Insira um valor entre 1 e 12.');
            return false;
        }
    
        
        const diasNoMes = new Date(ano, mes, 0).getDate();
        if (dia < 1 || dia > diasNoMes) {
            console.log(`Dia inválido para o mês selecionado. Insira um valor entre 1 e ${diasNoMes}.`);
            return false;
        }
    
        return true;
    }
}
