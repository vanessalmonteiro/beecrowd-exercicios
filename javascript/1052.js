var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let mes =  parseInt(lines.shift());

function imprimeMes(mes) {
    switch (true) {
        case mes === 1:
            console.log('January');
            break;
        case mes === 2:
            console.log('February');
            break;
        case mes === 3:
            console.log('March');
            break;
        case mes === 4:
            console.log('April');
            break;
        case mes === 5:
            console.log('May');
            break;
        case mes === 6:
            console.log('June');
            break;
        case mes === 7:
            console.log('July');
            break;
        case mes === 8:
            console.log('August');
            break;
        case mes === 9:
            console.log('September');
            break;
        case mes === 10:
            console.log('October');
            break;
        case mes === 11:
            console.log('November');
            break;
        case mes === 12:
            console.log('December');
            break;
        default:        
    }
}

imprimeMes(mes);






