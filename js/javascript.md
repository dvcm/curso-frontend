function obterMedia(){

  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  var media = (a + b + c) / 3;
document.getElementById("resultado").innerHTML = "Resultado: " + media;
console.log(a + b + c);
}

## calculo de diversos alunos

var alunos = [
  [6, 7, 8, 6],
  [8, 5, 6, 8],
  [10, 6, 8, 7],
]
var nota = 0
for (var i = 0; i < alunos.length; i++){
  
nota = 0
aluno = alunos[i]
console.log("Aluno: aluno[i]);

for( c = 0; c < aluno[i]; c++){
  nota += aluno[c]
}

  media = nota / 4;

  if(media >= 7){
    resultado = "aprovado";
  }else{
    resultado = "reprovado";
  }

  console.log("Media: " + media + " - " + resultado)
}

var nota1 = 10;
var nota2 = 9;
var nota3 = 8;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if( media > 8 ){
  console.log("Aluno aprovado!")
} else {
  console.log("aluno reprovado, refazer prova!")
}

## lacos de repeticao

var km;

for ( condição ){
  executar
}
// fazer umarevisao no carro ao passar de 10km e avisar que preicsa de revisao
// 
 
var km;
var revisao = 10;

for (km = 0; km < revisao; km++ ){
  console.log("pode rodar")
}

var km;
var revisao = 10;
for (km = 0; km < revisao; km++ ){
  console.log("apenas " + km + "kms então pode rodar")
}

siginificado do for
for ([expressaoInicial]; [condicao]; [incremento])

while (  [ condicao ]  ){
    [ execução ]
}

var contador = 0;
while ( contador < 10) {
  contador++
}

var hora = 23;
## enquanto a hora for maior > que 0, execute a hora-- tipo uma contagem regressiva
while (hora > 0){
  hora--;
  console.log(hora);
}

do while

## funções evitar a repetição de codigos, REalizar chamadas dinamicas de algoritimos

function calcularMedia( notas ){
    
    var soma = 0;
    for( c = 0; c < notas.length; c++){
      soma += notas[c];
    }
    media = soma / notas.length;
    
    return media;   
}

let media; // escopo global

    function aprovacao ( media){
    
    let condicao = media >= 7 ? "aprovado" : "reprovado"
    
		return condicao;
}   
console.log("Media: " + calcularMedia([8, 1]));
console.log( aprovacao ( calcularMedia([8, 1])))

console.log("Media: " + calcularMedia([8, 8, 10]));
console.log( aprovacao ( calcularMedia([8, 8, 10])))

console.log("Media: " + calcularMedia([9, 6]));
console.log( aprovacao ( calcularMedia([9, 6])))

console.log("Media: " + calcularMedia([7, 6]));
console.log( aprovacao ( calcularMedia([7, 6])))


////

function calcularMedia( notas ){
    
    let soma = 0;
    for( c = 0; c < notas.length; c++){
      soma += notas[c];
    }
    media = soma / notas.length;
    
    return media;   
}

function aprovacao ( notas ){
    
let media = calcularMedia( notas );
let condicao = media >= 8 ? "aprovado" : "reprovado";
    
return "Media: " + media + " - Resultado: " + condicao;
}   

console.log( aprovacao([8, 8, 7]) );
