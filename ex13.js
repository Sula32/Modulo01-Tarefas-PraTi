/*13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N*/

const prompt = require("prompt-sync")();

let j = 1;

while(j <= 5){

    let numero = Number(prompt("Digite um numero inteiro:"));
    let i = 1;

    console.log("A tabuada deste numero é: ");

    while (i <= numero) {
        console.log(numero, " * ", i , " = ",(numero*i));
        i++;

    }

    j++
}