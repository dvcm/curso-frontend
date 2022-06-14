// @ts-nocheck
import carros from './carros.js';

// estudando o método JavaScript filter() forEach() Reduce() e Map()

//utilizando filter

function retornaCarros (value){
  if (value.cambio == "automatico")
  return value;
}
var retornaCambio = carros.filter(retornaCarros);
retornaCambio.forEach(cambioIdeal => {
  console.log(cambioIdeal);
});

// utilizando filter
// a mesma função escrita com arrowFunction

var retornaGas = carros.filter(tipo => tipo.combustivel == "gasolina");
retornaGas.forEach(tipo => {
  console.log(tipo);
});

const filteredCarros = carros.filter( (carros) => {
  return carros.id == 1;
});
console.log(filteredCarros);


const filteredeCarros = carros.filter( (carros) => {
  return carros.ano != 2020;
});
console.log(filteredeCarros);

//utilizando Map
// aplicar um cálculo nos elementos de um array. 
var listaPrecoDesconto = carros.map(aplicarDEsconto);
function aplicarDEsconto(elemento){
  return{
    modelo: elemento.modelo,
    preco: (elemento.preco - (elemento.preco * 0.1))
  };
} 
listaPrecoDesconto.forEach(elemento => {
  console.log("O Preco do carro " + elemento.modelo + " com desconto é " + elemento.preco );
});

// MAP O JavaScript map faz parte do conjunto de métodos disponíveis na linguagem para a manipulação de objetos do tipo array. Ele funciona como uma estrutura de repetição, pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.

// Por isso, sua utilização reduz a necessidade de uso das estruturas de repetição tradicionais como while, for ou do.while. Isso significa executar ações com menos linhas de código, o que contribui para o desenvolvimento uma aplicação mais fácil de entender e de fazer manutenções

// O método map() pertence ao conjunto de funções disponíveis no objeto array para facilitar a sua manipulação. Basicamente, ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array.

//Além disso, caso existam objetos não definidos no conteúdo original, eles serão ignorados durante o loop de processamento. Ele funciona de forma semelhante ao método forEach(), que também percorre um array para executar uma função callback.

//arrayOriginal: corresponde ao objeto do tipo array que contém os elementos originais;
//funcao_callback:
//elementoAtual: representa o elemento corrente durante o loop de execução do método;
//índice: valor opcional e corresponde à posição do elementoAtual no array;
//arrayOriginal: conteúdo opcional, que representa o array de origem;
//thisArgumento: valor opcional, que corresponde ao this utilizado pela função callback.



//

const sorteioMarca = ["fiat", "ford", "audi"];
sorteioMarca.sort();
sorteioMarca.reverse();
console.log (sorteioMarca);

// Max and Min

const anoVeiculo = [2020, 2019, 1998];
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(anoVeiculo);
//

const anVeiculo = [2020, 2019, 1998];
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(anVeiculo);

//
const cars = [
  {type:"audi", year:2022},
  {type:"ford", year:2019},
  {type:"fiat", year:1998}
];

cars.sort(function(a, b){return a.year - b.year;});


// concat

const marcas = ["audi", "ford","fiat"];
const modelos = ["a5", 'mustang', "palio pe de boi"];

const mm = marcas.concat(modelos);
console.log(mm);



// exemplo 1 busca por numeros pares

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function searchNumber (value) {
  if (value % 2 == 0)
  return value;
}
var numbersP = numbers.filter(searchNumber);
console.log(numbersP);

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var retorno = numeros.filter(pares => (pares %2)== 0);
console.log(retorno);

var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
function retornaEstado (value){
    if (value.charAt(0) == "S") 
    return value;
}
var resultado = estados.filter(retornaEstado);
console.log(resultado);

var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
var resultado = estados.filter( estadosComS  => (estadosComS.charAt(0) == "R"));
console.log(resultado);

//
/*
let x;
x = (0 == "");   // true
//x = (1 == "1");  // true
//x = (1 == true);   // true
//x = (0 === "");  // false
//x = (1 === "1");   // false
//x = (1 === true);  // false
console.log(x);  */