let prompt = require('prompt-sync')();
const ingressoVip = 80;
const standard = 40;
const pipoca= 30;
let cadeira = prompt('Digite 1 para cadeira VIP e 2 para cadeira standard: ' );
let valorCadeira;
let valorPipoca;
if (cadeira == 1)
    valorCadeira= ingressoVip
else valorCadeira= standard

let perguntaPipoca = prompt('Digite 1 para adquirir o combo e 2 para não: ')
if (perguntaPipoca == 1)
    valorPipoca = pipoca
else valorPipoca = 0
console.log(`O preço ficou ${valorCadeira+valorPipoca}R$`)