var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());

console.log(valor);
let notasDeCem = valor / 100;
console.log(`${Math.floor(notasDeCem)} nota(s) de R$ 100,00`);

let restoNotasDeCem = valor % 100;
let notasDeCiquenta = restoNotasDeCem / 50;
let restoNotasDeCiquenta = restoNotasDeCem % 50;
console.log(`${Math.floor(notasDeCiquenta)} nota(s) de R$ 50,00`);

let notasDeVinte = restoNotasDeCiquenta / 20;
let restoNotasDeVinte = restoNotasDeCiquenta % 20;
console.log(`${Math.floor(notasDeVinte)} nota(s) de R$ 20,00`);

let notasDeDez = restoNotasDeVinte / 10;
let restoNotasDeDez = restoNotasDeVinte % 10;
console.log(`${Math.floor(notasDeDez)} nota(s) de R$ 10,00`);

let notasDeCinco = restoNotasDeDez / 5;
let restoNotasDeCinco = restoNotasDeDez % 5;
console.log(`${Math.floor(notasDeCinco)} nota(s) de R$ 5,00`);

let notasDeDois = restoNotasDeCinco / 2;
let restoNotasDeDois = restoNotasDeCinco % 2;
console.log(`${Math.floor(notasDeDois)} nota(s) de R$ 2,00`)

let notasDeUm = restoNotasDeDois / 1;
console.log(`${Math.floor(notasDeUm)} nota(s) de R$ 1,00`);