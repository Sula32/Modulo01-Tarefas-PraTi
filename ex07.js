/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require("prompt-sync")();

let macas = Number(prompt("Informre a quantidade de macas:"));

if ( macas > 0 && macas < 12) {
   soma = 0.30 * macas;
   console.log('valor a ser pago:', soma);
}
else{
 soma = macas * 0.25;
 console.log ('O valor a ser pago é:', soma);
}




