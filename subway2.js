const prompt = require('prompt-sync')();
//Sanduiche
let escolhaPao= prompt('Digite 1 para pao de mel ou 2 para pao de três queijos');
let escolhaCarne= prompt('Digite 1 para Carne defumada ou 2 para carne de frango');
let escolhaMolho= prompt('Digite 1 para molho barbecue ou 2 para agridoce');
//Bebida
let escolhaBebida= prompt('Digite 1 para Coca-Cola, 2 Para Pepsi ou 3 Para Guaraná');
//Probabilidades
let paoMel=0;
let pao3queijos=0;
let defumada=0;
let frango=0;
let barbecue=0;
let agridoce=0;
let bebida
//CondicionalPao
if (escolhaPao==1){
paoMel++}

else{
    pao3queijos++
}

//Condicional Carne
if(escolhaCarne==1){
    defumada++
}
else{
    frango++
}
//Condicional Molho
if(escolhaMolho==1){
    barbecue++
}
else{
    agridoce++
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
if(paoMel==1 & defumada==1 & barbecue==1){
console.log(`Você escolheu  Pão de mel com carne defumada e molho barbecue.E para beber ${bebida}.`)
} 
else if(paoMel==1 & defumada==1 & agridoce==1){
    console.log(`Você escolheu Pão de mel com carne defumada e molho agridoce. E para beber ${bebida}.`)
}
else if(paoMel==1 & frango==1 & barbecue==1){
    console.log(`Você escolheu Pão de mel com carne de frango e molho barbecue. E para beber ${bebida}.`)
}
else if(paoMel==1 & frango==1 & agridoce==1){
console.log(`Você escolheu Pão de mel com carne de frango e molho agridoce. E para beber ${bebida}.`)
}
else if (pao3queijos==1 & defumada==1 & barbecue==1){
    console.log(`Você escolheu pão três queijos com carne defumada e molho barbecue. E para beber ${bebida}.`)
}
else if (pao3queijos==1 & defumada==1 & agridoce==1){
    console.log(`Você escolheu pão três queijos com carne defumada e molho agridoce. E para beber ${bebida}.`)
}
else if(pao3queijos==1 & frango==1 & barbecue==1){
    console.log(`Você escolheu pão três queijos com carne de frango e molho barbecue. E para beber ${bebida}.`)
}
else if (pao3queijos==1 & frango==1 & agridoce==1){
console.log(`Você escolheu pão três queijos com carne de frango e molho agridoce. E para beber ${bebida}`)
}
