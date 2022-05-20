class Pessoa{
    constructor (pNome, pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }
    get Nome() { return this.nome};
    set Nome(pNome) { this.nome = pNome};
    get Endereco() { return this.pEndereco};
    set Endereco(pEndereco) { this.endereco = pEndereco};

    toString(){
        return `Nome: ${this.nome} \nEndereço: ${this.endereco}`;
        }
    }

class PessoaFisica extends Pessoa{
     constructor(pNome, pEndereco, pCpf, pDataNasc){
        super(pNome, pEndereco);
         this.Cpf = pCpf;
         this.DataNasc = pDataNasc;
    }
     get Cpf() { return this.cpf};
     set Cpf(pCpf){ this.cpf = pCpf};
     get DataNasc() { return this.dataNasc};
     set DataNasc(pDataNasc){ this.dataNasc = pDataNasc};

     toString(){
         let retorno = super.toString();
         retorno = retorno + `\nCpf: ${this.cpf} \nNascimento: ${this.dataNasc}`;
         return retorno;   
    }
}
   class PessoaJuridica extends Pessoa{
        constructor(pNome, pEndereco, pCnpj, pRazao){
            super(pNome, pEndereco);
            this.Cnpj = pCnpj;
            this.Razao = pRazao;
        }
        get Cnpj() { return this.cnpj};
        set Cnpj(pCnpj){ this.cnpj = pCnpj};
        get Razao() { return this.razao};
        set Razao(pRazao){ this.razao = pRazao};
    
        toString(){
            let retorno = super.toString();
            retorno = retorno + `\nCnpj: ${this.cnpj} \nRazao Social: ${this.razao}`;
            return retorno;   
        }
 }

//var pessoa = new Pessoa ("Antonio", "Alameda dos Anjos");
//console.log (pessoa.toString());

//var pessoaFisica = new PessoaFisica("Tony Stark", "Avenida Vingadores", "31331331300", "10/10/1980");
//console.log(pessoaFisica.toString());

let pessoaJuridica = new PessoaJuridica("Mega Informatica","Avenida Hum","01001100000120","mega soluções em Informatica")
console.log(pessoaJuridica.toString());
