var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const linesArray = lines[0].split(' ');

let a =  parseFloat(linesArray[0]);
let b =  parseFloat(linesArray[1]);
let c =  parseFloat(linesArray[2]);

if(a < b + c && b < a + c) {
    let perimetro = a + b + c;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else if (c < a + b) {
    let area = (a + b)* c / 2;
    console.log(`Area = ${area.toFixed(1)}`)
}