import Produto from "../modelo/produto";
import Cadastro from "./cadastro";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class RegistrarVendaProdutos extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        let valorCpfCliente = this.entrada.receberTexto(`Por favor informe o CPF do cliente que realizou a compra: `);
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === valorCpfCliente);

        if (cliente) {
            let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto vendido: `);
            const produto = this.produtos.find(produto => produto.nome === nomeProduto);

            if (produto) {
                let quantidadeVendida = 0
                while (quantidadeVendida <= 0) {
                    quantidadeVendida = this.entrada.receberNumero(`Por favor informe a quantidade vendida do produto : `);
                }
                console.log(cliente.genero)
                cliente.registrarVendaProduto(produto, quantidadeVendida);
                if (cliente.genero === 'Masculino') {
                    produto.adicionarVendaMasculino(quantidadeVendida)
                }else{
                    produto.adicionarVendaFeminino(quantidadeVendida)
                }
                

                console.log(`Venda registrada com sucesso para o cliente "${cliente.nome}".`);
            } else {
                console.log(`Produto "${nomeProduto}" não encontrado.`);
            }
        } else {
            console.log(`Cliente com CPF "${valorCpfCliente}" não encontrado.`);
        }
    }




}