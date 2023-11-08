var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [codigoItem, qtdItem] = input.split(' ').map(item => parseInt(item));

let valor1 = 4.00;
let valor2 = 4.50;
let valor3 = 5.00;
let valor4 = 2.00;
let valor5 = 1.50;

if(codigoItem === 1) {
    let total = parseFloat(valor1 * qtdItem);
    console.log(`Total: R$ ${total.toFixed(2)}`);
} else if (codigoItem === 2) {
    let total = parseFloat(valor2 * qtdItem);
    console.log(`Total: R$ ${total.toFixed(2)}`);
} else if (codigoItem === 3) {
    let total = parseFloat(valor3 * qtdItem);
    console.log(`Total: R$ ${total.toFixed(2)}`);
} else if (codigoItem === 4) {
    let total = parseFloat(valor4 * qtdItem);
    console.log(`Total: R$ ${total.toFixed(2)}`);
} else {
    let total = parseFloat(valor5 * qtdItem);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}

