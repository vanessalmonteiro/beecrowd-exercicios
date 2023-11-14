var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const linesArray = lines[0].split(' ');

let n1 = parseInt(linesArray[0]);
let n2 = parseInt(linesArray[1]);

if(n1 % n2 === 0 || n2 % n1 === 0) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}
