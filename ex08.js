/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require("prompt-sync")();

let valor1 = Number(prompt("Digite o valor 1:"));
let valor2 = Number(prompt("Digite o valor 2:"));

if(valor1 < valor2) {
    console.log("Primeiro valor em ordem crescente: ", valor1);
    console.log("Segundo valor em ordem crescente: ", valor2);
}
else{
    console.log("Primeiro valor em ordem crescente: ", valor2);
    console.log("Segundo valor em ordem crescente: ", valor1);
}