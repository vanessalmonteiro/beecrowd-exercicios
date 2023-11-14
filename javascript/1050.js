var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ddd = parseInt(lines.shift());

function verificarDdd(ddd) {
    switch (true) {
        case ddd === 61:
            console.log('Brasilia');
            break;
        case ddd === 71:
            console.log('Salvador');
            break;
        case ddd === 11:
            console.log('Sao Paulo');
            break;
        case ddd === 21:
            console.log('Rio de Janeiro');
            break;
        case ddd === 32:
            console.log('Juiz de Fora');
            break;
        case ddd === 19:
            console.log('Campinas');
            break;
        case ddd === 27:
            console.log('Vitoria');
            break;
        case ddd === 31:
            console.log('Belo Horizonte');
            break;
        default:
            console.log('DDD nao cadastrado');
    }
}

verificarDdd(ddd);






