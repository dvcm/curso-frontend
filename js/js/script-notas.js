function calcularMedia( notas ){
  let soma = 0;
  for( c = 0; c < notas.length; c++){
    soma += notas[c];
  }

media = soma / notas.length;
return media;

}

let media; // escopo global

function aprovacao( notas ) {
  let media = calcularMedia( notas ); // escopo da funcao
  let condicao = media >= 8 ? "aprovado no semestre" : "Seu exame não alcançou as notas desejadas."

  return 'Média: ' + media + ' - Resultado: ' + condicao; //

}

// Função Recursivas

function contagemRegressiva(numero){
  console.log(numero);

  let proximoNumero = numero - 1;

  if(proximoNumero > 0)
  contagemRegressiva(proximoNumero);

}

// Contagem regressiva(50);
// Formulario que envia os dados para o calculo da media

const formulario1 = document.getElementById('formulario-01');

if(formulario1)
formulario1.addEventListener('submit', function( evento ){

  evento.preventDefault();
  evento.stopPropagation();

  if( this.getAttribute('class')){
    return false;
  }

  let dados = new FormData(this);

  let notas = [];

  for(let key of dados.keys()) {

    let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; 
    // é um numero?

    if(!isNaN(numero)){  // se nao for numero transformar
      notas.push(numero);  // buscar o valor no campo para gerar a nota
    }
  }

  console.log(notas); // pedir pro console mostrar o resultado

  texto = aprovacao(notas)
  
  document.getElementById('resultado').innerHTML = texto;
  
});


function validaCampo(elemento){
  elemento.addEventListener('focusout', function(event){

    event.preventDefault();

    if(this.value == ""){
      document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho"; // se a caixa seletora estiver vazia gerar a mensagem de erro e mostrar dentro da div
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

  elemento.addEventListener('focusout', function(event){
    event.preventDefault();

    let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; // campo de validação do CEP
    if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
      document.querySelector('.mensagem').innerHTML = '';
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    } else {
      document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho"; // mensagem de alerta chamado
      this.classList.add('erro');
      this.parentNode.classList.add("erro");
      return false;
    }
  });
}

function validaEmail(elemento){

  elemento.addEventListener('focusout', function(event){

    event.preventDefault();

    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i; // neste ponto a regra testa [ letras e numeros do corpo do email] + @ [ testa novamente a regra depois da arroba] \ barra invertida chamada escape /  i = quer dizer ignorar se é fonte maiuscula ou minuscula
    if(this.value.match(emailValido)) {
      document.querySelector('.mensagem').innerHTML = "";
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
    }else{
      document.querySelector('.mensagem').innerHTML = "verifique o preenchimento";
      this.classList.add('erro');
      this.parentNode.classList.add('erro');
      return false;
    }

  });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios){
  validaCampo(emFoco);
}

for( let emFoco of camposNumericos){
  validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail){
  validaEmail(emFoco);
};

