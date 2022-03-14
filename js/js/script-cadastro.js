let estados = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];
  var vetSiglas = new Array("ac", "al", "am", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "ro", "rs", "rr", "sc", "se", "sp", "to");

function calcularMedia( notas ) {
  let soma = 0;
  for( c = 0; c < notas.length; c++) {
      soma += notas[c];
  }
  media = soma / notas.length;
  return media;
}

let media; // escopo global
function aprovacao( notas ) {
  let media = calcularMedia( notas ); // escopo da função
  let condicao = media >= 8 ? "aprovado" : "reprovado";
  return 'Média: ' + media + ' - Resultado: ' + condicao;
}

// Função Recursivas
function contagemRegressiva(numero){
  console.log(numero);  
  let proximoNumero = numero - 1;
  if(proximoNumero > 0)
      contagemRegressiva(proximoNumero);
}

// contagemRegressiva(50);

/* 
* Formulário envio de dados para cálculo da média 
*/
const formulario1 = document.getElementById('formulario-02');

if(formulario1) //se existir o formulario 1
  formulario1.addEventListener('submit', function( evento ){

      evento.preventDefault();
      evento.stopPropagation();

      if( this.getAttribute('class') ) {
          return false;
      }
      
      let dados = new FormData(this);

      let notas = [];
     

      for(let key of dados.keys()) {

          let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número
          if(!isNaN(numero)) {
              notas.push(numero);
          }
      }
      texto = aprovacao(notas)
      document.getElementById('resultado').innerHTML = texto;
  });


  function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaUF(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const ufValido = /^[a-z]+(\.[a-z]+)?/i;
      if(this.value.match(ufValido)) {
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
      } else {
          document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
      }

  });

}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numerico');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.uf');


for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposUF) {
  validaUF(emFoco);
}