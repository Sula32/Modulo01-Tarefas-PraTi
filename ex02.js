/*Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.*/

const prompt = require('prompt-sync')();

let eleitores = prompt("Digite número de eleitores:");
let votosBrancos = prompt("Digite número de votos brancos:"); 
let votosNulos = prompt("Digite número de votos nulos:");
let votosValidos = prompt("Digite número de votos validos:");

console.log("O percentual em  votos brancos são de: " +(votosBrancos/eleitores)*100)
console.log("O percentual votos nulos é de: " +(votosNulos/eleitores)*100)
console.log("O percentual de votos válidos são de: " +(votosValidos/eleitores)*100)
