import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

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
        valor = this.entrada.receberTexto(`Por favor informe o número do cpf (11 dígitos): `);

        
        while (!this.validarCPF(valor) || this.cpfExistente(valor)) {
            if (this.cpfExistente(valor)) {
                console.log(`Erro: CPF já cadastrado. Informe um CPF diferente.`);
            } else {
                console.log(`Erro: CPF inválido. Informe um CPF com 11 dígitos numéricos.`);
            }
            valor = this.entrada.receberTexto(`Por favor informe o número do cpf (11 dígitos): `);
        }
    


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


       
        const rgs: RG[] = [];
        const rgsDigitados: string[] = [];
        let cadastrarRG: boolean;
        do {
            let valorRG: string;
            do {
                valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
            
                if (this.rgExistente(valorRG) || rgsDigitados.includes(valorRG)) {
                    console.log(`Erro: RG já cadastrado. Informe um RG diferente.`);
                } else if (!this.validarRG(valorRG)) {
                    console.log(`Erro: O valor do RG deve conter apenas números.`);
                }
            } while (this.rgExistente(valorRG) || rgsDigitados.includes(valorRG) || !this.validarRG(valorRG));
            

            rgsDigitados.push(valorRG);

    
            let dataEmissaoRG: string;
            do {
                dataEmissaoRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
            } while (!this.validarData(dataEmissaoRG));
    
            let partesDataRG = dataEmissaoRG.split('/');
            let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
            let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
            let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
            let dataEmissaoRGObj = new Date(anoRG, mesRG, diaRG);
            
            let rg = new RG(valorRG, dataEmissaoRGObj);
            rgs.push(rg);
    
           
            cadastrarRG = this.entrada.receberTexto(`Deseja cadastrar outro RG? (S/N): `).toUpperCase() === 'S';
        } while (cadastrarRG);



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
                    console.log(`Erro: Este telefone já foi cadastrado ou está associado a outro cliente. Informe um telefone diferente.`);
                } else if (!this.validarTelefone(ddd, numero)) {
                    console.log(`Erro: O telefone deve conter apenas números.`);
                }
            } while (telefonesDigitados.includes(ddd + numero) || !this.validarTelefone(ddd, numero) || this.telefoneExistente(numero));
            
            telefonesDigitados.push(ddd + numero);
            
            const telefone = new Telefone(ddd, numero);
            telefones.push(telefone);
            
            cadastrarTelefone = this.entrada.receberTexto(`Deseja cadastrar outro telefone? (S/N): `).toUpperCase() === 'S';
        } while (cadastrarTelefone);

        
        let genero: 'Masculino' | 'Feminino';
        do {
            genero = this.entrada.receberTexto(`Por favor informe o gênero (Masculino/Feminino): `) as 'Masculino' | 'Feminino';
        } while (!this.validarGenero(genero));

        let quantidadeConsumidos = 0
        let valorConsumidos = 0

        let cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)`);
    }

    private validarCPF(cpf: string): boolean {
        const regex = /^[0-9]{11}$/;
        return regex.test(cpf) && !this.cpfExistente(cpf);
    }

    private cpfExistente(cpf: string): boolean {
        return this.clientes.some(cliente => cliente.getCpf.getValor === cpf);
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

    private validarRG(rg: string): boolean {
        const regex = /^\d+$/;
        return regex.test(rg) && !this.rgExistente(rg);
    }

    private rgExistente(rg: string): boolean {
        return this.clientes.some(cliente => cliente.getRgs.some(clienteRg => clienteRg.getValor === rg));
    }


    private validarTelefone(ddd: string, numero: string): boolean {
        const regex = /^\d+$/;
        return regex.test(ddd) && regex.test(numero);
    }
    
    private telefoneExistente(numero: string): boolean {
        return this.clientes.some(cliente => cliente.getTelefones.some(clienteTelefone => clienteTelefone.getNumero === numero));
    }
    

}


//asidopfhadsogfhd8aufoiasdgfuiafa