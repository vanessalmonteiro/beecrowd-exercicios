var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const linesArray = lines[0].split(' ');

let N1 = parseFloat(linesArray[0]);
let N2 = parseFloat(linesArray[1]);
let N3 = parseFloat(linesArray[2]);
let N4 = parseFloat(linesArray[3]);
let N5 = parseFloat(lines[1]);

let media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if(media >= 7.0) {

    console.log('Aluno aprovado.');

} else if(media < 5.0) {

    console.log('Aluno reprovado.');

} else {

        console.log('Aluno em exame.');

        console.log(`Nota do exame: ${N5.toFixed(1)}`);

        let mediaExame = (media + N5) / 2;

        if(mediaExame >= 5.0) {
            console.log('Aluno aprovado.');
        } else {
            console.log('Aluno reprovado.');
        }

        console.log(`Media final: ${mediaExame.toFixed(1)}`);
}

