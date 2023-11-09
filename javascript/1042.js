var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const linesArray = lines[0].split(' ');

let n1 = parseFloat(linesArray[0]);
let n2 = parseFloat(linesArray[1]);
let n3 = parseFloat(linesArray[2]);

const numeros = [n1, n2, n3];

let numCrescente = numeros.sort(function(a, b) {
        return a - b;
});

console.log(`${numCrescente.join("\n")}\n\n${n1}\n${n2}\n${n3}`);