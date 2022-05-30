class Movimentacao {

  constructor(banco = 'padrao', nome = '', saldo = 0){
    this.banco = banco,  // criando um objeto
    this.nome = nome,
    this.saldo = saldo
  }
}

class Registro{  // classe que vai guardar o registro da data
  constructor(dia, mes, ano){
    this.dia = dia,
    this.mes = mes,
    this.ano = ano,
    this.movimentacoes = []  // [ array ] O tipo array é uma matriz de valores, tudo do mesmo tipo, portanto seria como se tivéssemos vários elementos dentro de uma variável, que pode ser apenas de um tipo. O array é sempre declarado pelo programador, escolhendo seu tipo e o número máximo de elementos que podem caber dentro de um array.
  
  }
  novaMovimentacao(... movimentacoes){ // ... passar diversos atributos das funções de uma vez 
    movimentacoes.forEach(   // forEach  looping da função
      lancamento => this.movimentacoes.push(lancamento)  //  push
    ) 
    }
      resumo(){  // exibindo um resumo atualizado
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('x' , 'gi' ) // Criando uma Regex para buscar por x dentro de uma String e nao esta procurando por maiuscula ou minuscula.  const regex = variavel   ('x', 'g = global')

        // utilzando a regex fica mais facil controlar, processar de tudo que passa pelos metodos escritos.


        this.movimentacoes.forEach(lancamento => {
          lancamento.banco = lancamento.banco.replace(regex, 'Y')
          //lancamento.banco = lancamento.banco.replace(/x$/i, 'Y')
          
          if(!lancamento.banco.match(regex)){   

             // Caso de pesquisa 1  ou tratamento de dados
            //if(lancamento.banco.match(/x/i)){ 
           // o resultado desta consulta resgataria os registros do banco X = salario | comissao | imposto | contas | imposto | 15000
            
            
            // Ao utilizar (/x/i) o regex /i/ faz a busca tanto por caixa alta como por caixa baixa
            // /i/ ignore case da font

          
            // Caso de pesquisa 2 ou tratamento de dados
            //if(!lancamento.nome.match(/imposto/)){ 
            // o resultado desta consulta seria O saldo do seu banco esta em: salario | comissao | contas | -6000

             // Caso de pesquisa 3 ou tratamento de dados
            //if(lancamento.banco.match(/x$/i)){  passando o sinal de cifrao so pegaremos o x no final da string

            // Caso de pesquisa 4 ou tratamento de dados
            //if(!lancamento.nome.match(/\D/)){  passando a letra D maiuscula teremos a busca o que nao for numero

            valorAtualizado += lancamento.saldo
            tipo += lancamento.nome + ' | '

          }
        })
        return tipo + valorAtualizado
      }
  }

  // movimentação bancaria 

  const m01 = new Movimentacao('00000', 'salario', 20000)  // primieiro objeto de movimentacao com valores , 
  const m02 = new Movimentacao('Bank Z', 'comissao', 2000)
  const m03 = new Movimentacao('Bank X', 'imposto', -5000)
  const m04 = new Movimentacao('Bank Y', 'contas', -1000)
  const m05 = new Movimentacao('Bank X', 'imposto', -1000)

  const registro01 = new Registro(22,10,2021) // nao entendi porque preencher a data, como buscar automaticamente do relogio do computador?
  registro01.novaMovimentacao(m01, m02, m03, m04, m05) // buscando os registros da movimentacao
  console.log('O saldo dos registros  ' + registro01.resumo())  // resumo impresso no terminal

  const movimentacoesGerais = [m01, m02, m03, m04, m05]

  movimentacoesGerais.map( elemento => 
    console.log(elemento)
  )

  //Abaixo o resultado do exercicio proposto
 //* O saldo dos registros  salario | comissao | imposto | contas | imposto | 15000
// Movimentacao { banco: '00000', nome: 'salario', saldo: 20000 }
// Movimentacao { banco: 'Bank Z', nome: 'comissao', saldo: 2000 }
// Movimentacao { banco: 'Bank Y', nome: 'imposto', saldo: -5000 }
// Movimentacao { banco: 'Bank Y', nome: 'contas', saldo: -1000 }
// Movimentacao { banco: 'Bank Y', nome: 'imposto', saldo: -1000 }