const prompt = require('prompt-sync')();
//Sanduiche
let escolhaPao= prompt('Digite 1 para pao de mel ou 2 para pao de três queijos: ');
let escolhaCarne= prompt('Digite 1 para Carne defumada ou 2 para carne de frango: ');
let escolhaMolho= prompt('Digite 1 para molho barbecue ou 2 para agridoce: ');
//Bebida
let escolhaBebida= prompt('Digite 1 para Coca-Cola, 2 Para Pepsi ou 3 Para Guaraná: ');
//Probabilidades
let pao
let carne
let molho
//CondicionalPao
if (escolhaPao==1){
pao= 'Pão de mel'}

else if(escolhaPao==2){
    pao= 'Pão três queijos'
}

//Condicional Carne
if(escolhaCarne==1){
    carne= 'Carne defumada'
}
else if(escolhaCarne==2){
    carne= 'carne de frango'
}
//Condicional Molho
if(escolhaMolho==1){
    molho='barbecue'
}
else if(escolhaMolho==2){
molho='agridoce'
}
//Condicional Bebida
if(escolhaBebida==1){
    bebida=('Coca-Cola')
}
else if(escolhaBebida==2){
bebida=('Pepsi')
}
else if(escolhaBebida==3){
    bebida=(('Guaraná Antártica'))
}
//Resultado
    console.log(`Você escolheu ${pao} com ${carne} com molho ${molho}. E para beber ${bebida}.`)