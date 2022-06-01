// @ts-nocheck
//import months from './';
import carros from './carros.js';

const filteredCarros = carros.filter( (carros) => {
  return carros.id == 1;
});
console.log(filteredCarros);


const filteredeCarros = carros.filter( (carros) => {
  return carros.ano != 2020;
});
console.log(filteredeCarros);

//



const sorteioMarca = ["fiat", "ford", "audi"];
sorteioMarca.sort();
sorteioMarca.reverse();
console.log (sorteioMarca);

//

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

displayCars();
cars.sort(function(a, b){return a.year - b.year});
displayCars();

function displayCars() {
  cars[0].type + " " + cars[0].year +
  cars[1].type + " " + cars[1].year +
  cars[2].type + " " + cars[2].year;
}
console.log(cars);

//

const marcas = ["audi", "ford","fiat"];
const modelos = ["a5", 'mustang', "palio pe de boi"];

const mm = marcas.concat(modelos);
console.log(mm);


//
let x;
x = (0 == "");   // true
//x = (1 == "1");  // true
//x = (1 == true);   // true
//x = (0 === "");  // false
//x = (1 === "1");   // false
//x = (1 === true);  // false
console.log(x);


//





// Lista meses
//filteredCarros.forEach(carros => {
   //toPrint += carros.id + ' , ';
//});




               // OK, but doesn't do anything different at all
             //   ~~ Error, not enough arguments?

//let meses = [30,30,30]; // array comum

// Reduce - função com todos os itens do array e devolve um valor único
//
//let sumCarros = filteredCarros.reduce( (prev) => 
  //{
  //  return {ano: prev.ano + prev.ano};
  //});

//console.log(sumCarros);

// Map - funções em arrays de retorno individual (cada valor array)
//let cachorros = [10, 15, 7, 8, 9];

//let CheckCombustivel = ['gasolina','etanol'];

//let anos = CheckCombustivel.map( (CheckCombustivel => {
//  return combustivel * 2;
//}));



//let years = monthis.map( (month => {
//    return {days: month.days * 10}
//}))
//console.log (carros + sumCarros + '<br> Multiplicando por 7 a idade humana dos cachorros: ' + years +  ' dias <br>');


// type script 
//if("" == 0) console.log('verdadeiro');

//function calc( a, b ){
//    return a + b;
//}
//console.log( calc (20,40));
//document.getElementById('main').innerHTML = 
  //  toPrint + '<br> Soma dos dias dos meses selecionados: ' 
  //  + sumMonthDays.days + '<br> idade humana dos cachorros: '  
