// @ts-nocheck
import months from './months.js';

// Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31;
});

console.log(filteredMonths);

let toPrint = '';

// Lista meses
filteredMonths.forEach(month => {
   toPrint += month.month + ', ';
});

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let meses = [30,30,30]; // array comum

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days};
});

console.log(sumMonthDays);

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9];

let years = cachorros.map( (cachorro => {
    return cachorro * 7;
}));

const count = 5;
console.log('count: %d', count);

//let years = monthis.map( (month => {
//    return {days: month.days * 10}
//}))
console.log (cachorros + sumMonthDays + '<br> Multiplicando por 7 a idade humana dos cachorros: ' + years +  ' dias <br>');


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
