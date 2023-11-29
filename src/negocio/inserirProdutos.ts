import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class InserirProdutos extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        let nome = 'Shampoo Hidratante';
        let valor = 29.99;
        let produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
      
        nome = 'Condicionador Reparador';
        valor = 24.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
    
        nome = 'Máscara Capilar Nutritiva';
        valor = 39.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
       
        nome = 'Óleo para Tratamento Capilar';
        valor = 49.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
       
        nome = 'Kit Manicure e Pedicure';
        valor = 59.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);

       
        nome = 'Escova de Cabelo Profissional';
        valor = 19.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
    
        nome = 'Secador de Cabelo Ionizador';
        valor = 129.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
        
        nome = 'Prancha Alisadora Cerâmica';
        valor = 89.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
       
        nome = 'Perfume Suave para Cabelos';
        valor = 34.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
      
        nome = 'Gel Modelador para Cabelos';
        valor = 14.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        

        nome = 'Creme Hidratante para Mãos e Unhas';
        valor = 12.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
      
        nome = 'Esfoliante Facial Suave';
        valor = 16.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
      
        nome = 'Kit de Maquiagem Profissional';
        valor = 69.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
    
        nome = 'Alicate para Cutículas';
        valor = 8.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
        
        nome = 'Creme Antienvelhecimento Facial';
        valor = 49.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
   
        nome = 'Pente de Madeira Antiestático';
        valor = 9.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
       
        nome = 'Máscara Facial de Hidratação';
        valor = 14.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
     
        nome = 'Acessório de Cabelo Elegante';
        valor = 7.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
        
        nome = 'Kit Relaxante para Pés';
        valor = 24.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
        
        nome = 'Perfume Suave para Ambiente';
        valor = 19.99;
        produto = new Produto(nome, valor, 0, 0, 0, 0);
        this.produtos.push(produto);
        
    }
}