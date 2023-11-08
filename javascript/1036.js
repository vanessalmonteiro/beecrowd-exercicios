var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [a, b, c] = input.split(' ').map(item => parseFloat(item));

let delta = (b * b) - 4 * a * c;

const r1 = (-b + Math.sqrt(delta)) / (2 * a);
const r2 = (-b - Math.sqrt(delta)) / (2 * a);

if(delta > 0 && a > 0){
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
} else {
    console.log('Impossivel calcular');
}