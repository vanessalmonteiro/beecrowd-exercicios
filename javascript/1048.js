var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salario =   parseFloat(lines.shift());

function calculoSalario(percentualParaCalcular, percentualPrint, salario) {

    const percentual = parseFloat(percentualParaCalcular);
    const aumento = salario * percentual;
    const novoSalario = salario + aumento;
    const reajuste = novoSalario - salario;

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
    console.log(`Em percentual: ${percentualPrint} %`);

}

function reajusteSalario(salario) {

    if(salario >= 0 && salario <= 400.00) {

        calculoSalario(0.15, 15, salario);

    } else if(salario >= 400.01 && salario <= 800.00) {

        calculoSalario(0.12, 12, salario);

    } else if(salario >= 800.01 && salario <= 1200.00) {

        calculoSalario(0.10, 10, salario);

    } else if(salario >= 1200.01 && salario <= 2000.00) {

        calculoSalario(0.07, 7, salario);

    } else {

        calculoSalario(0.04, 4, salario);

    }

}

reajusteSalario(salario)