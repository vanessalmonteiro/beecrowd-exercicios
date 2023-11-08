var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(input);

console.log('NOTAS:');

let nota100 = valor / 100;
console.log(`${Math.floor(nota100)} nota(s) de R$ 100.00`);
valor = valor % 100;

let nota50 = valor / 50;
console.log(`${Math.floor(nota50)} nota(s) de R$ 50.00`);
valor = valor % 50;

let nota20 = valor / 20;
console.log(`${Math.floor(nota20)} nota(s) de R$ 20.00`);
valor = valor % 20;

let nota10 = valor / 10;
console.log(`${Math.floor(nota10)} nota(s) de R$ 10.00`);
valor = valor % 10;

let nota5 = valor / 5;
console.log(`${Math.floor(nota5)} nota(s) de R$ 5.00`);
valor = valor % 5;

let nota2 = valor / 2;
console.log(`${Math.floor(nota2)} nota(s) de R$ 2.00`);
valor = valor % 2;

console.log('MOEDAS:')

let moedas1 = valor / 1;
console.log(`${Math.floor(moedas1)} moeda(s) de R$ 1.00`);
valor = valor % 1;

let moedas050 = valor / 0.50;
console.log(`${Math.floor(moedas050)} moeda(s) de R$ 0.50`);
valor = valor % 0.50;

let moedas025 = valor / 0.25;
console.log(`${Math.floor(moedas025)} moeda(s) de R$ 0.25`);
valor = valor % 0.25;

let moedas010 = valor / 0.10;
console.log(`${Math.floor(moedas010)} moeda(s) de R$ 0.10`);
valor = valor % 0.10;

let moedas005 = valor / 0.05;
console.log(`${Math.floor(moedas005)} moeda(s) de R$ 0.05`);
valor = valor % 0.05;

let moedas001 = valor / 0.01;
console.log(`${moedas001.toFixed(0)} moeda(s) de R$ 0.01`);
valor = valor % 0.01;