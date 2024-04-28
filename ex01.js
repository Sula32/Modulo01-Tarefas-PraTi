//1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
//valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

let celcius = prompt("Digite a temperatura em celsius:");

let Fahrenheit = (celcius * 1.8) + 32;

console.log("Fahrenheit  = " + Fahrenheit);