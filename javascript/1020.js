var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let idade = parseInt(lines.shift());

let idadeEmAnos = idade / 365;
let idadeEmMeses = (idade % 365) / 30;
let idadeEmDias = (idade % 365) % 30;

console.log(`${Math.floor(idadeEmAnos)} ano(s)`);
console.log(`${Math.floor(idadeEmMeses)} mes(es)`);
console.log(`${Math.floor(idadeEmDias)} dia(s)`);