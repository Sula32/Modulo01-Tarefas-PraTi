/*3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.*/

const prompt = require("prompt-sync")();

let numero01 = Number(prompt("Digite o primeiro numero:"));
let numero02 = Number(prompt("Digite o segundo numero:")); 
let numero03 = Number(prompt("Digite o terceiro numero:"));

let numero04 = numero01 + numero02 + numero03;

numero01 += 25;

numero02 *= 3;

numero03 *= 0.12;

console.log(numero01, numero02 , numero03,  numero04)