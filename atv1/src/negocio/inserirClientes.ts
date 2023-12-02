import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

export default class InserirClientes extends Cadastro {
    private clientes: Array<Cliente>


    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes

    }

    public cadastrar(): void {
        let nome = 'João Silva';
        let nomeSocial = 'João';
        let valor = '11111111111';
        let data = '31/01/1990';
        let cpf = new CPF(valor, new Date(1990, 0, 31));
        let rgs: RG[] = [];
        let rg = new RG('123456789', new Date(2010, 0, 15));
        rgs.push(rg);
        let telefone = new Telefone('11', '987654321');
        let genero: 'Masculino' | 'Feminino' = 'Masculino';
        let quantidadeConsumidos = 0;
        let valorConsumidos = 0;
        let telefones: Telefone[] = [];
        telefones.push(telefone);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

      
        nome = 'Maria Oliveira';
        nomeSocial = 'Maria';
        valor = '22222222222';
        data = '28/05/1985';
        cpf = new CPF(valor, new Date(1985, 4, 28));
        rgs = [];
        rg = new RG('234567890', new Date(2015, 1, 20));
        rgs.push(rg);
        telefone = new Telefone('22', '876547710');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

       
        nome = 'Carlos Santos';
        nomeSocial = 'Carlos';
        valor = '33333333333';
        data = '03/03/1985';
        cpf = new CPF(valor, new Date(1985, 2, 3));
        rgs = [];
        rg = new RG('345678901', new Date(2005, 2, 5));
        rgs.push(rg);
        telefone = new Telefone('33', '76732109');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

       
        nome = 'Ana Silva';
        nomeSocial = 'Ana';
        valor = '44444444444';
        data = '15/07/1992';
        cpf = new CPF(valor, new Date(1992, 6, 15));
        rgs = [];
        rg = new RG('456789012', new Date(2012, 4, 10));
        rgs.push(rg);
        telefone = new Telefone('44', '651311058');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

      
        nome = 'Pedro Almeida';
        nomeSocial = 'Pedro';
        valor = '55555555555';
        data = '20/11/1980';
        cpf = new CPF(valor, new Date(1980, 10, 20));
        rgs = [];
        rg = new RG('567890123', new Date(2000, 8, 25));
        rgs.push(rg);
        telefone = new Telefone('55', '987622321');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

        
        nome = 'Mariana Oliveira';
        nomeSocial = 'Mariana';
        valor = '66666666666';
        data = '12/04/1998';
        cpf = new CPF(valor, new Date(1998, 3, 12));
        rgs = [];
        rg = new RG('678901234', new Date(2018, 7, 22));
        rgs.push(rg);
        telefone = new Telefone('66', '816243210');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
       
        nome = 'José Silva';
        nomeSocial = 'José';
        valor = '77777777777';
        data = '05/09/1987';
        cpf = new CPF(valor, new Date(1987, 8, 5));
        rgs = [];
        rg = new RG('789012345', new Date(2007, 11, 18));
        rgs.push(rg);
        telefone = new Telefone('77', '765282109');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
       
        nome = 'Larissa Santos';
        nomeSocial = 'Larissa';
        valor = '88888888888';
        data = '18/11/1995';
        cpf = new CPF(valor, new Date(1995, 10, 18));
        rgs = [];
        rg = new RG('890123456', new Date(2015, 3, 8));
        rgs.push(rg);
        telefone = new Telefone('88', '654389098');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
       
        nome = 'Fernando Alves';
        nomeSocial = 'Fernando';
        valor = '99999999999';
        data = '22/06/1983';
        cpf = new CPF(valor, new Date(1983, 5, 22));
        rgs = [];
        rg = new RG('901234567', new Date(2003, 2, 15));
        rgs.push(rg);
        telefone = new Telefone('99', '987654881');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
        
        nome = 'Amanda Rocha';
        nomeSocial = 'Amanda';
        valor = '12345678909';
        data = '14/03/1996';
        cpf = new CPF(valor, new Date(1996, 2, 14));
        rgs = [];
        rg = new RG('3456789012', new Date(2016, 7, 10));
        rgs.push(rg);
        telefone = new Telefone('10', '876943210');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

       
        nome = 'Lucas Oliveira';
        nomeSocial = 'Lucas';
        valor = '23456789012';
        data = '08/09/1991';
        cpf = new CPF(valor, new Date(1991, 8, 8));
        rgs = [];
        rg = new RG('4567890123', new Date(2011, 4, 12));
        rgs.push(rg);
        telefone = new Telefone('11', '765482109');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
     
        nome = 'Bianca Silva';
        nomeSocial = 'Bianca';
        valor = '34567890123';
        data = '25/12/1988';
        cpf = new CPF(valor, new Date(1988, 11, 25));
        rgs = [];
        rg = new RG('5678901234', new Date(2008, 3, 15));
        rgs.push(rg);
        telefone = new Telefone('12', '654621098');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
       
        nome = 'Ricardo Santos';
        nomeSocial = 'Ricardo';
        valor = '45678901234';
        data = '14/08/1982';
        cpf = new CPF(valor, new Date(1982, 7, 14));
        rgs = [];
        rg = new RG('6789012345', new Date(2002, 1, 20));
        rgs.push(rg);
        telefone = new Telefone('13', '917654321');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
       
        nome = 'Gabriela Almeida';
        nomeSocial = 'Gabriela';
        valor = '56789012345';
        data = '30/03/1997';
        cpf = new CPF(valor, new Date(1997, 2, 30));
        rgs = [];
        rg = new RG('7890123456', new Date(2017, 5, 8));
        rgs.push(rg);
        telefone = new Telefone('14', '876523210');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
      
        nome = 'Renato Rocha';
        nomeSocial = 'Renato';
        valor = '67890123456';
        data = '22/11/1984';
        cpf = new CPF(valor, new Date(1984, 10, 22));
        rgs = [];
        rg = new RG('9012345678', new Date(2004, 7, 5));
        rgs.push(rg);
        telefone = new Telefone('15', '987554321');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();


        
        nome = 'Fernanda Lima';
        nomeSocial = 'Fernanda';
        valor = '78901234567';
        data = '18/07/1989';
        cpf = new CPF(valor, new Date(1989, 6, 18));
        rgs = [];
        rg = new RG('0123456789', new Date(2009, 8, 10));
        rgs.push(rg);
        telefone = new Telefone('16', '876543215');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
   
        nome = 'Rodrigo Oliveira';
        nomeSocial = 'Rodrigo';
        valor = '89012345678';
        data = '04/04/1987';
        cpf = new CPF(valor, new Date(1987, 3, 4));
        rgs = [];
        rg = new RG('1234567890', new Date(2007, 10, 25));
        rgs.push(rg);
        telefone = new Telefone('17', '987654326');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        

        nome = 'Camila Pereira';
        nomeSocial = 'Camila';
        valor = '90123456789';
        data = '22/09/1993';
        cpf = new CPF(valor, new Date(1993, 8, 22));
        rgs = [];
        rg = new RG('2345678901', new Date(2013, 6, 12));
        rgs.push(rg);
        telefone = new Telefone('18', '876543217');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        

        nome = 'Gustavo Silva';
        nomeSocial = 'Gustavo';
        valor = '01234567890';
        data = '15/12/1986';
        cpf = new CPF(valor, new Date(1986, 11, 15));
        rgs = [];
        rg = new RG('3456789012', new Date(2006, 7, 8));
        rgs.push(rg);
        telefone = new Telefone('19', '987654328');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        

        nome = 'Juliana Santos';
        nomeSocial = 'Juliana';
        valor = '12345678901';
        data = '10/06/1995';
        cpf = new CPF(valor, new Date(1995, 5, 10));
        rgs = [];
        rg = new RG('4567890123', new Date(2015, 2, 15));
        rgs.push(rg);
        telefone = new Telefone('20', '876543210');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
             

       
        nome = 'Rafaela Lima';
        nomeSocial = 'Rafaela';
        valor = '23456789012';
        data = '14/03/1984';
        cpf = new CPF(valor, new Date(1984, 2, 14));
        rgs = [];
        rg = new RG('5678901234', new Date(2004, 5, 20));
        rgs.push(rg);
        telefone = new Telefone('21', '9878954321');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
        
        nome = 'Lucas Oliveira';
        nomeSocial = 'Lucas';
        valor = '34567890123';
        data = '08/08/1996';
        cpf = new CPF(valor, new Date(1996, 7, 8));
        rgs = [];
        rg = new RG('6789012345', new Date(2016, 9, 25));
        rgs.push(rg);
        telefone = new Telefone('22', '872243210');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
    
        nome = 'Isabela Santos';
        nomeSocial = 'Isabela';
        valor = '45678901234';
        data = '25/11/1982';
        cpf = new CPF(valor, new Date(1982, 10, 25));
        rgs = [];
        rg = new RG('7890123456', new Date(2002, 4, 15));
        rgs.push(rg);
        telefone = new Telefone('23', '982114321');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
      
        nome = 'Miguel Silva';
        nomeSocial = 'Miguel';
        valor = '56789012345';
        data = '03/02/1998';
        cpf = new CPF(valor, new Date(1998, 1, 3));
        rgs = [];
        rg = new RG('8901234567', new Date(2018, 7, 10));
        rgs.push(rg);
        telefone = new Telefone('24', '811543210');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
      
        nome = 'Larissa Oliveira';
        nomeSocial = 'Larissa';
        valor = '67890123456';
        data = '19/09/1987';
        cpf = new CPF(valor, new Date(1987, 8, 19));
        rgs = [];
        rg = new RG('9012345678', new Date(2007, 3, 25));
        rgs.push(rg);
        telefone = new Telefone('25', '987651121');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
        
       
        nome = 'Gabriel Santos';
        nomeSocial = 'Gabriel';
        valor = '78901234567';
        data = '12/07/1995';
        cpf = new CPF(valor, new Date(1995, 6, 12));
        rgs = [];
        rg = new RG('0123456789', new Date(2015, 3, 18));
        rgs.push(rg);
        telefone = new Telefone('26', '996543210');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
       
        nome = 'Sophia Lima';
        nomeSocial = 'Sophia';
        valor = '89012345678';
        data = '05/04/1993';
        cpf = new CPF(valor, new Date(1993, 3, 5));
        rgs = [];
        rg = new RG('1234567890', new Date(2013, 7, 22));
        rgs.push(rg);
        telefone = new Telefone('27', '987644421');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
       
        nome = 'Enzo Oliveira';
        nomeSocial = 'Enzo';
        valor = '90123456789';
        data = '20/09/1986';
        cpf = new CPF(valor, new Date(1986, 8, 20));
        rgs = [];
        rg = new RG('2345678901', new Date(2006, 11, 8));
        rgs.push(rg);
        telefone = new Telefone('28', '816512210');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
   
        nome = 'Alice Silva';
        nomeSocial = 'Alice';
        valor = '12345678901';
        data = '15/11/1981';
        cpf = new CPF(valor, new Date(1981, 10, 15));
        rgs = [];
        rg = new RG('3456789012', new Date(2001, 2, 10));
        rgs.push(rg);
        telefone = new Telefone('29', '982644321');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
   
        nome = 'Henry Santos';
        nomeSocial = 'Henry';
        valor = '23456789012';
        data = '10/02/1988';
        cpf = new CPF(valor, new Date(1988, 1, 10));
        rgs = [];
        rg = new RG('4567890123', new Date(2008, 6, 5));
        rgs.push(rg);
        telefone = new Telefone('30', '836573210');
        genero = 'Masculino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        cliente.adicionarRgs(rgs);
        cliente.adicionarTelefones(telefones);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
        
    }

   
    

}
