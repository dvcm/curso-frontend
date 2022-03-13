function obterMedia(){

  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  var media = (a + b + c) / 3;

document.getElementById("resultado").innerHTML = "Resultado: " + media;

console.log(a + b + c);

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

