import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import DeletarCliente from "../negocio/deletarCliente";
import CadastrarProduto from "../negocio/cadastrarProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemClientesPorGenero from "../negocio/listagemClientesPorGenero";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProduto from "../negocio/atualizarProduto";
import AtualizarServico from "../negocio/atualizarServico";
import DeletarProduto from "../negocio/deletarProduto";
import DeletarServico from "../negocio/deletarServico";
import RegistrarVendaProdutos from "../negocio/registrarVendaProduto";
import RegistrarVendaServico from "../negocio/registrarVendaServico";
import ListagemClientesMaisConsumo from "../negocio/listagemClientesMaisConsumo";
import ListagemClientesMenosConsumo from "../negocio/listagemClientesMenosConsumo";
import ListagemClientesMaisGasto from "../negocio/listagemClientesMaisGasto";


 
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
 
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar dados de cliente`);
    console.log(`4 - Deletar cliente`);
    console.log(`5 - Criar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Atualizar produto`);
    console.log(`8 - Deletar produto`);
    console.log(`9 - Criar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Atualizar serviço`);
    console.log(`12 - Deletar serviço`);
    console.log(`13 - Listar clientes por gênero`);
    console.log(`14 - Registrar venda de produto`);
    console.log(`15 - Registrar venda de serviço`);
    console.log(`16 - Listar os dez clientes que mais consumiram produtos ou serviços em quantidade`);
    console.log(`17 - Listar os dez clientes que menos consumiram produtos ou serviços em quantidade`);
    console.log(`18 - Listar os cinco clientes que mais consumiram em valor`);
    console.log(`19 - Listar os produtos mais consumidos.`);
    console.log(`20 - Listar os serviços mais comprados.`);

    console.log(`0 - Sair`);
 
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
 
    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizarcliente = new AtualizarCliente(empresa.getClientes)
            atualizarcliente.atualizar()
            break;
        case 4:
            let deletarcliente = new DeletarCliente(empresa.getClientes)
            deletarcliente.deletar()
            break;
        case 5:
            let cadastroproduto = new CadastrarProduto(empresa.getProdutos)
            cadastroproduto.cadastrar()
            break;
        case 6:
            let listagemproduto = new ListagemProdutos(empresa.getProdutos)
            listagemproduto.listar()
            break;
        case 7:
            let atualizarproduto = new AtualizarProduto(empresa.getProdutos)
            atualizarproduto.atualizar()
            break;
        case 8:
            let deletarproduto = new DeletarProduto(empresa.getProdutos)
            deletarproduto.deletar()
            break;
        case 9:
            let cadastroservico = new CadastroServico(empresa.getServicos)  
            cadastroservico.cadastrar()
            break;
        case 10:
            let listagemservico = new ListagemServicos(empresa.getServicos)
            listagemservico.listar() 
            break;
        case 11:
            let atualizarservico = new AtualizarServico(empresa.getServicos)
            atualizarservico.atualizar()
            break;
        case 12:
            let deletarservico = new DeletarServico(empresa.getServicos)
            deletarservico.deletar()
            break;
        case 13:
            let listagemClientesPorGenero = new ListagemClientesPorGenero(empresa.getClientes)
            listagemClientesPorGenero.listar()
            break;
        case 14:
            let registrarVendaProduto = new RegistrarVendaProdutos(empresa.getClientes, empresa.getProdutos)
            registrarVendaProduto.cadastrar()
            break;
        case 15:
            let registrarVendaServico = new RegistrarVendaServico(empresa.getClientes, empresa.getServicos)
            registrarVendaServico.cadastrar()
            break;
        case 16:
            let listagemClientesMaisConsumo = new ListagemClientesMaisConsumo(empresa.getClientes)
            listagemClientesMaisConsumo.listar()
            break;
        case 17:
            let listagemClientesMenosConsumo = new ListagemClientesMenosConsumo(empresa.getClientes)
            listagemClientesMenosConsumo.listar()
            break;
        case 18:
            let listagemClientesMaisGasto = new ListagemClientesMaisGasto(empresa.getClientes)
            listagemClientesMaisGasto.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}