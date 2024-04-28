/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/


const prompt = require('prompt-sync')();

let lado01 = Number(prompt("Digite o primeiro lado:"));
let lado02 = Number(prompt("Digite o segundo lado:"));
let lado03 = Number(prompt("Digite o terceiro lado:"));

if(lado01 < (lado02 +lado03) && lado02 < (lado03 +lado01) && lado03 < (lado02 +lado01) ){
    console.log("Os lados selecionados equivalem a um triangulo identificado como:")
    if(lado01 === lado02 || lado01 === lado03 || lado02 === lado03){
        console.log("Triângulo isósceles:")
    }
    if(lado01 != lado02 && lado02 != lado03){
        console.log("Triângulo escaleno")
    }
    if(lado01 === lado02 && lado02 === lado03){
        console.log("Triângulo  equilatero")
    }

}