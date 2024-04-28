/*9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:*/

const prompt = require("prompt-sync")();

let codigo = Number(prompt("Informe o codigo de origem:"));

if(codigo === 1){ 
    console.log("O codigo se refere a um produto do Sul")
}
else if(codigo === 2){ 
    console.log("O codigo se refere a um produto do Norte")
}
else if(codigo === 3){ 
    console.log("O codigo se refere a um produto do Leste")
}
else if(codigo === 4){ 
    console.log("O codigo se refere a um produto do Oeste")
}
else if(codigo >= 5 && codigo <= 6){ 
    console.log("O codigo se refere a um produto do Nordeste")
}
else if(codigo >= 7 && codigo <= 9){ 
    console.log("O codigo se refere a um produto do Sudeste")
}
else if(codigo >= 10 && codigo <= 20){ 
    console.log("O codigo se refere a um produto do Centro Oeste")
}
else if(codigo >= 25 && codigo <= 50){ 
    console.log("O codigo se refere a um produto do Nordeste")
}
else{
    console.log("Produto Importado")
}

