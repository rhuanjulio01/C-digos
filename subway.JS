const prompt = require('prompt-sync')();
//Sanduiche
let escolhaPao= prompt('Digite 1 para pao de mel ou 2 para pao de priquito');
let escolhaCarne= prompt('Digite 1 para Carne defumada ou 2 para carne de xoxota');
let escolhaMolho= prompt('Digite 1 para molho barbecue ou 2 para vaginose');
//Bebida
let escolhaBebida= prompt('Digite 1 para Coca-Cola, 2 Para Pepsi ou 3 Para Guaraná');
//Probabilidades
let paoMel=0;
let priquito=0;
let defumada=0;
let xoxota=0;
let barbecue=0;
let vaginose=0;
let bebida
//CondicionalPao
if (escolhaPao==1){
paoMel++}

else{
    priquito++
}

//Condicional Carne
if(escolhaCarne==1){
    defumada++
}
else{
    xoxota++
}
//Condicional Molho
if(escolhaMolho==1){
    barbecue++
}
else{
    vaginose++
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
//Probabilidades
if(paoMel==1 & )

