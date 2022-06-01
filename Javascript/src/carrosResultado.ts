//import months from './';
import carros from './carros';

const filteredCarros = carros.filter( (carros) => {
  return carros.id == 1;
});
console.log(filteredCarros);

//let toPrint = '';

// Lista meses
//filteredCarros.forEach(carros => {
//    toPrint += carros.carros + ' , ';
//});


//let meses = [30,30,30]; // array comum

// Reduce - função com todos os itens do array e devolve um valor único
/*
//let sumCarros = filteredCarros.reduce( (prev, next) => 
 // {
    return {ano: prev.ano + prev.ano};
  });


console.log(sumCarros);

// Map - funções em arrays de retorno individual (cada valor array)
//let cachorros = [10, 15, 7, 8, 9];

let CheckCombustivel = ['gasolina','etanol'];

let anos = CheckCombustivel.map( (CheckCombustivel => {
  return combustivel * 2;
}));



//let years = monthis.map( (month => {
//    return {days: month.days * 10}
//}))
console.log (carros + sumCarros + '<br> Multiplicando por 7 a idade humana dos cachorros: ' + years +  ' dias <br>');


// type script 
if("" == 0) console.log('verdadeiro');

function calc( a, b){
    return a + b;
}
console.log( calc (20,40));
//document.getElementById('main').innerHTML = 
  //  toPrint + '<br> Soma dos dias dos meses selecionados: ' 
  //  + sumMonthDays.days + '<br> idade humana dos cachorros: '  
  //  + years + ' dias '
*/