/*14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const prompt = require("prompt-sync")();

let soma = 0
let quantidade = 0

while(true){
    
let numero = Number(prompt("Digite um numero:"));
   
    if(numero == 0){
    break
   }

   soma += numero
   quantidade++
}

let media = soma/quantidade
console.log("A media de todos estes valores é: ", media)