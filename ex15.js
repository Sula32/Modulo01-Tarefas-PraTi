/*15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.*/

const prompt = require("prompt-sync")();

let notamedia = 0
let pesomedia = 0

while(true){
    
let numero = Number(prompt("Digite uma nota:"));

    if(numero == 0){
    break
   }


let peso = Number(prompt("Digite o peso desta nota: "))
   notamedia += numero*peso
   pesomedia += peso
}

let media = notamedia/pesomedia;
console.log("O resultado da media ponderada é ", media)