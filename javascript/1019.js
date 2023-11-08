var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let seg = parseInt(lines.shift());

const horas = seg / 3600;
const minutos = (seg % 3600) / 60;
const segundos = (seg % 60) % 60;
    
console.log(`${Math.floor(horas)}:${Math.floor(minutos)}:${Math.floor(segundos)}`);





